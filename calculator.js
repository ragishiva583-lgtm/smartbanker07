/* ================================================================
   Smart Banker — Calculator & Utilities JS
   EMI, FD, SIP, Gold, PPF, Currency converters + Settings + Offline
   ================================================================ */

// ── Calculator Engine ─────────────────────────────────────────────
const Calculator = {
  activeCalc: 'emi',

  // ── EMI ──────────────────────────────────────────────────────
  calcEMI(principal, annualRate, months) {
    if (annualRate === 0) return principal / months;
    const r = annualRate / 12 / 100;
    return principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
  },

  updateEMI() {
    const P = parseFloat(document.getElementById('emi-amount')?.value) || 500000;
    const R = parseFloat(document.getElementById('emi-rate')?.value) || 8.5;
    const N = parseFloat(document.getElementById('emi-tenure')?.value) || 240;

    document.getElementById('emi-amount-val').textContent = '₹' + this.fmt(P);
    document.getElementById('emi-rate-val').textContent = R.toFixed(1) + '% p.a.';
    document.getElementById('emi-tenure-val').textContent = N + ' months (' + (N/12).toFixed(1) + ' yrs)';

    const emi = this.calcEMI(P, R, N);
    const total = emi * N;
    const interest = total - P;
    const principalPct = Math.round((P / total) * 100);
    const interestPct = 100 - principalPct;

    document.getElementById('emi-monthly').textContent = '₹' + this.fmt(Math.round(emi));
    document.getElementById('emi-total').textContent = '₹' + this.fmtL(total);
    document.getElementById('emi-interest').textContent = '₹' + this.fmtL(interest);
    document.getElementById('emi-saving').textContent = this.fmtPct(interest, total);

    // Pie chart
    this.drawPie('emi-pie', principalPct, interestPct);

    // Breakdown bar
    const pBar = document.getElementById('emi-bar-principal');
    const iBar = document.getElementById('emi-bar-interest');
    if (pBar) pBar.style.width = principalPct + '%';
    if (iBar) iBar.style.width = interestPct + '%';

    // Amortization table (first 12 months)
    this.renderAmortization(P, R, N, emi);
  },

  renderAmortization(P, R, N, emi) {
    const tbody = document.getElementById('amort-tbody');
    if (!tbody) return;
    const r = R / 12 / 100;
    let balance = P;
    let rows = '';
    const maxRows = Math.min(N, 12);

    for (let i = 1; i <= maxRows; i++) {
      const interest = balance * r;
      const principal = emi - interest;
      balance -= principal;
      rows += `<tr>
        <td>${i}</td>
        <td class="principal">₹${this.fmt(Math.round(principal))}</td>
        <td class="interest">₹${this.fmt(Math.round(interest))}</td>
        <td>₹${this.fmt(Math.round(Math.max(balance, 0)))}</td>
      </tr>`;
    }
    if (N > 12) rows += `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);font-style:italic">... ${N - 12} more months</td></tr>`;
    tbody.innerHTML = rows;
  },

  // ── FD ───────────────────────────────────────────────────────
  updateFD() {
    const P = parseFloat(document.getElementById('fd-amount')?.value) || 100000;
    const R = parseFloat(document.getElementById('fd-rate')?.value) || 7.1;
    const Y = parseFloat(document.getElementById('fd-tenure')?.value) || 5;
    const comp = document.getElementById('fd-comp')?.value || '4';
    const n = parseFloat(comp);

    document.getElementById('fd-amount-val').textContent = '₹' + this.fmt(P);
    document.getElementById('fd-rate-val').textContent = R.toFixed(1) + '% p.a.';
    document.getElementById('fd-tenure-val').textContent = Y + ' years';

    // Compound interest: A = P(1 + r/n)^(nt)
    const A = P * Math.pow(1 + R / 100 / n, n * Y);
    const interest = A - P;
    const effectiveRate = (Math.pow(1 + R / 100 / n, n) - 1) * 100;

    document.getElementById('fd-maturity').textContent = '₹' + this.fmtL(A);
    document.getElementById('fd-interest-earned').textContent = '₹' + this.fmtL(interest);
    document.getElementById('fd-effective-rate').textContent = effectiveRate.toFixed(2) + '%';
    document.getElementById('fd-returns-pct').textContent = this.fmtPct(interest, P);

    this.drawPie('fd-pie', Math.round((P / A) * 100), Math.round((interest / A) * 100));

    // Year-wise table
    this.renderFDYearly(P, R, n, Y);
  },

  renderFDYearly(P, R, n, Y) {
    const tbody = document.getElementById('fd-tbody');
    if (!tbody) return;
    let rows = '';
    for (let y = 1; y <= Y; y++) {
      const A = P * Math.pow(1 + R / 100 / n, n * y);
      const interest = A - P;
      rows += `<tr>
        <td>Year ${y}</td>
        <td>₹${this.fmt(Math.round(P))}</td>
        <td class="interest">₹${this.fmt(Math.round(interest))}</td>
        <td class="principal">₹${this.fmt(Math.round(A))}</td>
      </tr>`;
    }
    tbody.innerHTML = rows;
  },

  // ── SIP ──────────────────────────────────────────────────────
  updateSIP() {
    const monthly = parseFloat(document.getElementById('sip-monthly')?.value) || 5000;
    const R = parseFloat(document.getElementById('sip-rate')?.value) || 12;
    const Y = parseFloat(document.getElementById('sip-tenure')?.value) || 10;
    const N = Y * 12;
    const r = R / 12 / 100;

    document.getElementById('sip-monthly-val').textContent = '₹' + this.fmt(monthly);
    document.getElementById('sip-rate-val').textContent = R.toFixed(1) + '% p.a.';
    document.getElementById('sip-tenure-val').textContent = Y + ' years';

    // SIP maturity: M = P × [(1+r)^n - 1] / r × (1+r)
    const maturity = monthly * ((Math.pow(1 + r, N) - 1) / r) * (1 + r);
    const invested = monthly * N;
    const returns = maturity - invested;

    document.getElementById('sip-maturity').textContent = '₹' + this.fmtL(maturity);
    document.getElementById('sip-invested').textContent = '₹' + this.fmtL(invested);
    document.getElementById('sip-returns').textContent = '₹' + this.fmtL(returns);
    document.getElementById('sip-xirr').textContent = R.toFixed(1) + '%';

    this.drawPie('sip-pie', Math.round((invested / maturity) * 100), Math.round((returns / maturity) * 100));

    // Milestones
    const milestones = document.getElementById('sip-milestones');
    if (milestones) {
      const years = [1, 3, 5, 10, 15, 20].filter(y => y <= Y + 1);
      milestones.innerHTML = years.map(y => {
        const n = y * 12;
        const val = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        return `<div class="sip-milestone">
          <div class="sip-milestone-year">${y} Year${y > 1 ? 's' : ''}</div>
          <div class="sip-milestone-value">₹${this.fmtL(val)}</div>
        </div>`;
      }).join('');
    }
  },

  // ── PPF ──────────────────────────────────────────────────────
  updatePPF() {
    const annual = parseFloat(document.getElementById('ppf-annual')?.value) || 150000;
    const R = 7.1; // PPF rate fixed

    document.getElementById('ppf-annual-val').textContent = '₹' + this.fmt(annual);

    let balance = 0;
    let totalInvested = 0;
    const rows = [];

    for (let y = 1; y <= 15; y++) {
      totalInvested += annual;
      balance = (balance + annual) * (1 + R / 100);
      rows.push({ y, invested: totalInvested, balance, interest: balance - totalInvested });
    }

    const last = rows[rows.length - 1];
    document.getElementById('ppf-maturity').textContent = '₹' + this.fmtL(last.balance);
    document.getElementById('ppf-invested').textContent = '₹' + this.fmtL(last.invested);
    document.getElementById('ppf-returns').textContent = '₹' + this.fmtL(last.interest);
    document.getElementById('ppf-lock').textContent = '15 Years (Tax-Free)';

    this.drawPie('ppf-pie', Math.round((last.invested / last.balance) * 100), Math.round((last.interest / last.balance) * 100));

    // Table (5, 10, 15 years)
    const tbody = document.getElementById('ppf-tbody');
    if (tbody) {
      tbody.innerHTML = [5, 10, 15].map(y => {
        const r = rows[y - 1];
        return `<tr>
          <td>Year ${r.y}</td>
          <td>₹${this.fmtL(r.invested)}</td>
          <td class="interest">₹${this.fmtL(r.interest)}</td>
          <td class="principal">₹${this.fmtL(r.balance)}</td>
        </tr>`;
      }).join('');
    }
  },

  // ── Currency ──────────────────────────────────────────────────
  updateCurrency() {
    const amount = parseFloat(document.getElementById('curr-amount')?.value) || 1000;
    const from = document.getElementById('curr-from')?.value || 'INR';
    const to = document.getElementById('curr-to')?.value || 'USD';

    // Static indicative rates (offline-first)
    const rates = {
      INR: 1,
      USD: 0.01198,
      EUR: 0.01099,
      GBP: 0.00943,
      JPY: 1.849,
      AED: 0.04399,
      SGD: 0.01611,
      AUD: 0.01853,
      CAD: 0.01642,
      CHF: 0.01059,
    };

    const inINR = amount / (rates[from] || 1);
    const result = inINR * (rates[to] || 1);

    document.getElementById('curr-result').textContent = result.toFixed(4) + ' ' + to;
    document.getElementById('curr-rate-info').textContent = `1 ${from} = ${(rates[to] / rates[from]).toFixed(4)} ${to} (Indicative)`;
  },

  swapCurrency() {
    const from = document.getElementById('curr-from');
    const to = document.getElementById('curr-to');
    [from.value, to.value] = [to.value, from.value];
    this.updateCurrency();
  },

  // ── Pie Chart (canvas) ────────────────────────────────────────
  drawPie(canvasId, pct1, pct2) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = 120;
    const H = canvas.height = 120;
    const cx = W / 2, cy = H / 2, r = 48;
    const start1 = -Math.PI / 2;
    const end1 = start1 + (pct1 / 100) * 2 * Math.PI;

    ctx.clearRect(0, 0, W, H);

    // Slice 1 (principal - emerald)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start1, end1);
    ctx.closePath();
    ctx.fillStyle = '#10B981';
    ctx.fill();

    // Slice 2 (interest - rose)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, end1, start1 + 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#F43F5E';
    ctx.fill();

    // Center hole
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, 2 * Math.PI);
    ctx.fillStyle = '#0a1628';
    ctx.fill();

    // Center text
    ctx.fillStyle = '#F1F5F9';
    ctx.font = 'bold 11px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pct1 + '%', cx, cy);
  },

  // ── Formatters ────────────────────────────────────────────────
  fmt(n) {
    return Math.round(n).toLocaleString('en-IN');
  },

  fmtL(n) {
    if (n >= 10000000) return (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000) return (n / 100000).toFixed(2) + ' L';
    return Math.round(n).toLocaleString('en-IN');
  },

  fmtPct(part, whole) {
    return ((part / whole) * 100).toFixed(1) + '%';
  },

  // ── Tab Switching ─────────────────────────────────────────────
  switchTab(type) {
    this.activeCalc = type;
    document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-calc="${type}"]`)?.classList.add('active');
    document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`calc-${type}`)?.classList.add('active');

    // Trigger initial calculation
    switch(type) {
      case 'emi': this.updateEMI(); break;
      case 'fd': this.updateFD(); break;
      case 'sip': this.updateSIP(); break;
      case 'ppf': this.updatePPF(); break;
      case 'currency': this.updateCurrency(); break;
    }
  },

  init() {
    // All sliders fire update
    document.querySelectorAll('.calc-slider, .calc-select').forEach(el => {
      el.addEventListener('input', () => {
        switch(this.activeCalc) {
          case 'emi': this.updateEMI(); break;
          case 'fd': this.updateFD(); break;
          case 'sip': this.updateSIP(); break;
          case 'ppf': this.updatePPF(); break;
          case 'currency': this.updateCurrency(); break;
        }
      });
    });
    this.updateEMI();
  }
};

window.Calculator = Calculator;

// ── Settings Manager ─────────────────────────────────────────────
const Settings = {
  defaults: {
    textSize: 16,
    voiceEnabled: true,
    notificationsEnabled: true,
    soundEnabled: true,
    autoLanguage: true,
    theme: 'dark',
    highContrast: false,
  },

  current: {},

  init() {
    const saved = localStorage.getItem('sb_settings');
    this.current = saved ? { ...this.defaults, ...JSON.parse(saved) } : { ...this.defaults };
    this.apply();
  },

  save() {
    localStorage.setItem('sb_settings', JSON.stringify(this.current));
  },

  apply() {
    document.documentElement.style.setProperty('--base-font-size', this.current.textSize + 'px');
    document.documentElement.style.fontSize = this.current.textSize + 'px';

    if (this.current.theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  },

  setTextSize(size) {
    this.current.textSize = size;
    this.apply();
    this.save();
    const preview = document.getElementById('text-size-preview');
    if (preview) preview.textContent = size + 'px — ' + (size < 15 ? 'Small' : size < 18 ? 'Normal' : size < 21 ? 'Large' : 'Extra Large');
  },

  toggle(key) {
    this.current[key] = !this.current[key];
    this.save();
    this.apply();
    const btn = document.getElementById(`toggle-${key}`);
    if (btn) btn.classList.toggle('on', this.current[key]);
    Toast.show(this.current[key] ? `${key} enabled` : `${key} disabled`, 'info');
  },

  setTheme(theme) {
    this.current.theme = theme;
    this.save();
    this.apply();
    document.querySelectorAll('.theme-chip').forEach(c => c.classList.toggle('active', c.dataset.theme === theme));
    Toast.show('Theme changed to ' + theme, 'success');
  },

  renderSettings() {
    const s = this.current;
    ['voiceEnabled', 'notificationsEnabled', 'soundEnabled', 'autoLanguage', 'highContrast'].forEach(key => {
      const btn = document.getElementById(`toggle-${key}`);
      if (btn) btn.classList.toggle('on', s[key]);
    });
    const slider = document.getElementById('text-size-slider');
    if (slider) slider.value = s.textSize;
    const preview = document.getElementById('text-size-preview');
    if (preview) preview.textContent = s.textSize + 'px — ' + (s.textSize < 15 ? 'Small' : s.textSize < 18 ? 'Normal' : s.textSize < 21 ? 'Large' : 'Extra Large');
    document.querySelectorAll('.theme-chip').forEach(c => c.classList.toggle('active', c.dataset.theme === s.theme));
  }
};

window.Settings = Settings;

// ── Offline Manager ───────────────────────────────────────────────
const OfflineManager = {
  init() {
    const banner = document.getElementById('offline-banner');
    if (!banner) return;

    const update = () => {
      if (navigator.onLine) {
        banner.classList.remove('visible');
      } else {
        banner.classList.add('visible');
        Toast.show('No internet — using offline mode', 'warning', 'Offline');
      }
    };

    window.addEventListener('online', () => {
      banner.classList.remove('visible');
      Toast.show('Back online! ✅', 'success');
    });
    window.addEventListener('offline', update);
    if (!navigator.onLine) update();
  }
};

// ── Page Progress Bar ─────────────────────────────────────────────
const PageProgress = {
  bar: null,
  init() {
    this.bar = document.getElementById('page-progress');
    const content = document.querySelector('.app-content');
    if (!content || !this.bar) return;
    content.addEventListener('scroll', () => {
      const pct = (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100;
      this.bar.style.width = Math.min(pct, 100) + '%';
    });
  }
};

// ── Scroll to Top ─────────────────────────────────────────────────
const ScrollTop = {
  init() {
    const btn = document.getElementById('scroll-top-btn');
    const content = document.querySelector('.app-content');
    if (!btn || !content) return;
    content.addEventListener('scroll', () => {
      btn.classList.toggle('visible', content.scrollTop > 400);
    });
    btn.addEventListener('click', () => content.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};

// ── Boot extras ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Settings.init();
  OfflineManager.init();
  PageProgress.init();
  ScrollTop.init();
});
