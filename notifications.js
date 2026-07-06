/* ================================================================
   Smart Banker — Notifications Module
   ================================================================ */

const Notifications = {
  items: [],
  unreadCount: 0,

  templates: [
    { icon: '🚨', type: 'warning', title: 'Fraud Alert!', msg: 'RBI warns about new UPI QR code scam. Never scan unknown QR codes to receive money.', tag: 'fraud' },
    { icon: '🏦', type: 'info', title: 'RBI Policy Update', msg: 'RBI has kept repo rate unchanged at 6.5%. Home loan EMIs remain stable.', tag: 'news' },
    { icon: '📊', type: 'info', title: 'FD Rate Update', msg: 'SBI raises FD interest rate to 7.1% for 1-3 years. Lock in before rates change!', tag: 'investment' },
    { icon: '🏛️', type: 'success', title: 'New Scheme Alert', msg: 'PM Mudra Loan limit increased to ₹20 lakh. Apply now at your nearest bank.', tag: 'scheme' },
    { icon: '💡', type: 'info', title: 'Banking Tip', msg: 'Did you know? You can check your bank balance for free via missed call. No internet needed!', tag: 'tip' },
    { icon: '🎓', type: 'info', title: 'Scholarship Deadline', msg: 'National Scholarship Portal deadline approaching. Apply at scholarships.gov.in before October 31.', tag: 'education' },
    { icon: '🛡️', type: 'warning', title: 'Security Update', msg: 'Change your UPI PIN and net banking password every 90 days for better security.', tag: 'security' },
    { icon: '🌾', type: 'success', title: 'PM Kisan Update', msg: '16th installment of PM Kisan Samman Nidhi credited. Check your linked account.', tag: 'scheme' },
    { icon: '📱', type: 'info', title: 'New Feature Available', msg: 'BHIM UPI now supports international payments. Use UPI abroad in 13 countries.', tag: 'news' },
    { icon: '💳', type: 'warning', title: 'Card Security', msg: 'Your debit card PIN is due for change. Update at nearest ATM or banking app.', tag: 'security' },
    { icon: '📈', type: 'info', title: 'Investment Tip', msg: 'Start SIP with just ₹500/month. ₹500 monthly SIP for 20 years = ₹50 lakh at 12% returns!', tag: 'investment' },
    { icon: '🏠', type: 'info', title: 'PMAY Update', msg: 'PM Awas Yojana extended. First-time home buyers can still claim interest subsidy.', tag: 'scheme' },
  ],

  init() {
    // Load saved notifications or create fresh ones
    const saved = localStorage.getItem('sb_notifications');
    if (saved) {
      try { this.items = JSON.parse(saved); }
      catch(e) { this.createDefaultNotifications(); }
    } else {
      this.createDefaultNotifications();
    }
    this.updateBadge();
  },

  createDefaultNotifications() {
    this.items = this.templates.map((t, i) => ({
      id: 'n_' + i,
      ...t,
      unread: i < 3,
      time: this.getRelativeTime(i),
      timestamp: Date.now() - i * 3600000,
    }));
    this.saveNotifications();
  },

  getRelativeTime(hoursAgo) {
    if (hoursAgo === 0) return 'Just now';
    if (hoursAgo < 2) return '1 hour ago';
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;
    return `${Math.floor(hoursAgo/24)} days ago`;
  },

  add(notification) {
    const n = {
      id: 'n_' + Date.now(),
      unread: true,
      timestamp: Date.now(),
      time: 'Just now',
      ...notification,
    };
    this.items.unshift(n);
    this.saveNotifications();
    this.updateBadge();
    Toast.show(n.msg, n.type || 'info', n.title);
  },

  markRead(id) {
    const item = this.items.find(n => n.id === id);
    if (item) { item.unread = false; this.saveNotifications(); this.updateBadge(); }
  },

  markAllRead() {
    this.items.forEach(n => n.unread = false);
    this.saveNotifications();
    this.updateBadge();
  },

  saveNotifications() {
    localStorage.setItem('sb_notifications', JSON.stringify(this.items));
  },

  updateBadge() {
    this.unreadCount = this.items.filter(n => n.unread).length;
    const badge = document.querySelector('.notif-badge-count');
    if (badge) {
      badge.textContent = this.unreadCount;
      badge.style.display = this.unreadCount > 0 ? 'flex' : 'none';
    }
  },

  renderPanel() {
    const list = document.getElementById('notif-list');
    if (!list) return;
    if (this.items.length === 0) {
      list.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-muted)">No notifications</div>';
      return;
    }
    list.innerHTML = this.items.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="Notifications.markRead('${n.id}');this.classList.remove('unread')">
        <span class="notif-icon">${n.icon}</span>
        <div class="notif-body">
          <div class="notif-title">${n.title}</div>
          <div class="notif-msg">${n.msg}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>`).join('');
  },

  startAutoNotifications() {
    // Randomly show a notification every 5–10 minutes
    const schedule = () => {
      const delay = 5 * 60 * 1000 + Math.random() * 5 * 60 * 1000;
      setTimeout(() => {
        const template = this.templates[Math.floor(Math.random() * this.templates.length)];
        this.add({ ...template });
        schedule();
      }, delay);
    };
    schedule();
  }
};

window.Notifications = Notifications;
