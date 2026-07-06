/* ================================================================
   Smart Banker — Main Application Logic
   Router, Home, Chat, Modules, Profile, Emergency, Search
   ================================================================ */

// ── Router ────────────────────────────────────────────────────────
const AppRouter = {
  currentView: null,
  history: [],

  navigate(view, data = {}) {
    // Persist state
    this.history.push(this.currentView);
    this.currentView = view;

    // Show/hide pages
    if (view === 'auth') {
      document.getElementById('app-page').classList.remove('active');
      document.getElementById('auth-page').classList.add('active');
      return;
    }
    document.getElementById('auth-page').classList.remove('active');
    document.getElementById('app-page').classList.add('active');

    // Switch bottom nav views
    const viewMap = {
      home: 'view-home', chat: 'view-chat', modules: 'view-modules',
      profile: 'view-profile', emergency: 'view-emergency', search: 'view-search',
      'module-detail': 'view-module-detail', 'article': 'view-article',
      calculator: 'view-calculator', settings: 'view-settings',
    };

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const targetView = viewMap[view] || 'view-home';
    const el = document.getElementById(targetView);
    if (el) el.classList.add('active');

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navMap = { home: 'nav-home', chat: 'nav-chat', modules: 'nav-modules', profile: 'nav-profile', calculator: 'nav-calculator' };
    const activeNav = document.getElementById(navMap[view]);
    if (activeNav) activeNav.classList.add('active');

    // Handle view-specific initialization
    switch(view) {
      case 'home': App.initHome(); break;
      case 'chat': App.focusChatInput(); break;
      case 'modules': App.renderModules(); break;
      case 'profile': App.renderProfile(); break;
      case 'emergency': break;
      case 'search': App.initSearch(); break;
      case 'module-detail': App.renderModuleDetail(data.moduleId); break;
      case 'article': App.renderArticle(data.moduleId, data.topicId); break;
      case 'calculator': setTimeout(() => { Calculator.init(); Calculator.updateEMI(); }, 100); break;
      case 'settings': Settings.renderSettings(); break;
    }

    window.scrollTo(0, 0);
  },

  back() {
    const prev = this.history.pop();
    if (prev) this.navigate(prev);
    else this.navigate('home');
  }
};

window.AppRouter = AppRouter;

// ── Main App ──────────────────────────────────────────────────────
const App = {
  newsIndex: 0,
  tipIndex: 0,
  chatHistory: [],
  currentModuleId: null,
  newsData: [
    { title: 'RBI keeps repo rate unchanged at 6.5%', body: 'The Reserve Bank of India has maintained its benchmark interest rate, providing relief to home loan borrowers.', date: 'July 5, 2026', source: 'RBI Bulletin' },
    { title: 'SBI raises FD rates to 7.1%', body: 'State Bank of India increases fixed deposit interest rates for all tenures, effective immediately.', date: 'July 4, 2026', source: 'SBI Update' },
    { title: 'UPI transactions hit record ₹20 lakh crore in June', body: 'NPCI reports record UPI transaction volume, with over 1,400 crore transactions in June 2026.', date: 'July 3, 2026', source: 'NPCI' },
    { title: 'PM Mudra loan limit increased to ₹20 lakh', body: 'Government announces 100% increase in PM MUDRA loan ceiling to boost small business financing.', date: 'July 2, 2026', source: 'Finance Ministry' },
    { title: 'New cyber fraud rule: Banks to refund within 10 days', body: 'RBI mandates banks to resolve unauthorized transaction complaints and refund within 10 working days.', date: 'July 1, 2026', source: 'RBI Circular' },
  ],

  tipsData: [
    { icon: '💡', title: 'Keep Your PIN Secret', body: 'Never share your ATM PIN, UPI PIN, or OTP with anyone — including people claiming to be from the bank.' },
    { icon: '📱', title: 'Link Aadhaar to Bank', body: 'Link your Aadhaar to your bank account to receive government scheme benefits directly (DBT).' },
    { icon: '🎯', title: 'Save Before You Spend', body: 'Set up an auto-debit for savings on salary day. Treat savings as a fixed expense, not optional.' },
    { icon: '📊', title: 'Check CIBIL Regularly', body: 'Check your credit score once a year free at cibil.com. A score above 750 gets you best loan rates.' },
    { icon: '🛡️', title: 'Enable SMS Alerts', body: 'Always keep SMS alerts active for all transactions. Report any unauthorized transaction within 24 hours.' },
    { icon: '📅', title: 'Never Miss EMI', body: 'Missing even one EMI reduces CIBIL score by 50–100 points. Set up auto-payment to never miss.' },
    { icon: '💰', title: 'Emergency Fund First', body: 'Before investing, build 6 months of expenses as emergency fund in a high-yield savings or liquid fund.' },
  ],

  schemesData: [
    { icon: '🏦', name: 'PM Jan Dhan Yojana', desc: 'Free zero-balance bank account for all', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(245,158,11,0.3)' },
    { icon: '💼', name: 'PM Mudra Loan', desc: 'Loans up to ₹20L for small businesses', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(16,185,129,0.3)' },
    { icon: '🌾', name: 'PM Kisan Yojana', desc: '₹6,000/year direct to farmer accounts', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(59,130,246,0.3)' },
    { icon: '🏡', name: 'PM Awas Yojana', desc: 'Home loan subsidy up to ₹2.67 lakh', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(139,92,246,0.3)' },
    { icon: '👧', name: 'Sukanya Samriddhi', desc: '8.2% interest scheme for girl child', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(244,63,94,0.3)' },
    { icon: '🎓', name: 'PM Vidyalakshmi', desc: 'Education loans for all students', color: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', border: 'rgba(245,158,11,0.3)' },
  ],

  topicCards: [
    { icon: '🏧', title: 'ATM Usage', desc: 'Safe ATM tips', color: 'rgba(59,130,246,0.08)', accent: '#3B82F6', query: 'how to use ATM safely' },
    { icon: '📱', title: 'UPI Payments', desc: 'Send money instantly', color: 'rgba(16,185,129,0.08)', accent: '#10B981', query: 'how to use UPI' },
    { icon: '🏠', title: 'Home Loan', desc: 'Buy your dream home', color: 'rgba(245,158,11,0.08)', accent: '#F59E0B', query: 'how to get home loan' },
    { icon: '🛡️', title: 'Avoid Fraud', desc: 'Stay safe online', color: 'rgba(244,63,94,0.08)', accent: '#F43F5E', query: 'how to avoid banking fraud' },
    { icon: '📈', title: 'Investments', desc: 'Grow your money', color: 'rgba(139,92,246,0.08)', accent: '#8B5CF6', query: 'how to invest money' },
    { icon: '🏦', title: 'Jan Dhan', desc: 'Free bank account', color: 'rgba(16,185,129,0.08)', accent: '#10B981', query: 'what is Jan Dhan Yojana' },
    { icon: '🎓', title: 'Education Loan', desc: 'Fund your studies', color: 'rgba(59,130,246,0.08)', accent: '#3B82F6', query: 'how to get education loan' },
    { icon: '🌾', title: 'Farmer Loans', desc: 'KCC and crop loans', color: 'rgba(245,158,11,0.08)', accent: '#F59E0B', query: 'how to get kisan credit card' },
  ],

  // ── Home ──────────────────────────────────────────────────────
  initHome() {
    this.renderGreeting();
    this.renderStats();
    this.renderTopicCards();
    this.renderNews();
    this.renderSchemes();
    this.renderTips();
    this.startNewsRotation();
  },

  renderGreeting() {
    const user = Auth.getUser();
    const hour = new Date().getHours();
    let greeting = I18N.t('goodMorning');
    if (hour >= 12 && hour < 17) greeting = I18N.t('goodAfternoon');
    else if (hour >= 17 && hour < 21) greeting = I18N.t('goodEvening');
    else if (hour >= 21) greeting = I18N.t('goodNight') || 'Good Night';

    const salEl = document.getElementById('greeting-salutation');
    const nameEl = document.getElementById('greeting-name');
    const avatarEl = document.getElementById('greeting-avatar');

    if (salEl) salEl.textContent = greeting + ',';
    if (nameEl) nameEl.textContent = user ? user.name.split(' ')[0] : 'Friend';
    if (avatarEl) avatarEl.textContent = user ? (user.name[0] + (user.name.split(' ')[1]?.[0] || '')).toUpperCase() : '👤';
  },

  renderStats() {
    const stats = [
      { value: '14', label: 'Modules', color: 'var(--gold)' },
      { value: '100+', label: 'Topics', color: 'var(--emerald)' },
      { value: '16', label: 'Languages', color: 'var(--blue)' },
    ];
    const container = document.getElementById('stats-row');
    if (!container) return;
    container.innerHTML = stats.map((s, i) => `
      <div class="stat-card glass ${['gold','emerald','blue'][i]}" style="border:1px solid ${s.color}22">
        <div class="stat-value" style="color:${s.color}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
  },

  renderTopicCards() {
    const container = document.getElementById('topics-grid');
    if (!container) return;
    container.innerHTML = this.topicCards.map(t => `
      <div class="topic-card glass glass-hover" onclick="App.askAI('${t.query}')"
           style="background:${t.color}; border-color:${t.accent}22;">
        <div class="topic-icon" style="background:${t.accent}22; border-radius:12px;">${t.icon}</div>
        <div class="topic-info">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </div>
      </div>`).join('');
  },

  renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = this.newsData.map((n, i) => `
      <div class="news-item ${i === 0 ? 'active' : ''}" id="news-${i}">
        <h4>${n.title}</h4>
        <p>${n.body}</p>
        <div class="news-meta">
          <span class="news-date">📅 ${n.date}</span>
          <span class="news-source">${n.source}</span>
        </div>
      </div>`).join('');

    const dots = document.getElementById('news-dots');
    if (dots) {
      dots.innerHTML = this.newsData.map((_, i) => `
        <div class="news-dot ${i === 0 ? 'active' : ''}" onclick="App.showNews(${i})"></div>`).join('');
    }
  },

  showNews(index) {
    document.querySelectorAll('.news-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.news-dot').forEach(el => el.classList.remove('active'));
    const item = document.getElementById(`news-${index}`);
    const dot = document.querySelectorAll('.news-dot')[index];
    if (item) item.classList.add('active');
    if (dot) dot.classList.add('active');
    this.newsIndex = index;
  },

  startNewsRotation() {
    clearInterval(this._newsInterval);
    this._newsInterval = setInterval(() => {
      this.newsIndex = (this.newsIndex + 1) % this.newsData.length;
      this.showNews(this.newsIndex);
    }, 5000);
  },

  renderSchemes() {
    const container = document.getElementById('schemes-container');
    if (!container) return;
    container.innerHTML = this.schemesData.map(s => `
      <div class="scheme-card glass glass-hover" style="background:${s.color}; border:1px solid ${s.border}; min-width:200px"
           onclick="App.askAI('Tell me about ${s.name}')">
        <span class="scheme-card-icon">${s.icon}</span>
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
      </div>`).join('');
  },

  renderTips() {
    this.showTip(0);
  },

  showTip(index) {
    const tip = this.tipsData[index];
    const container = document.getElementById('tips-card');
    if (!container || !tip) return;
    container.innerHTML = `
      <span class="tip-icon">${tip.icon}</span>
      <div class="tip-title">${tip.title}</div>
      <p class="tip-body">${tip.body}</p>
      <div class="tips-nav">
        <button class="tip-btn" onclick="App.prevTip()">‹</button>
        <span class="tip-count">${index + 1} / ${this.tipsData.length}</span>
        <button class="tip-btn" onclick="App.nextTip()">›</button>
      </div>`;
    this.tipIndex = index;
  },

  nextTip() { this.showTip((this.tipIndex + 1) % this.tipsData.length); },
  prevTip() { this.showTip((this.tipIndex - 1 + this.tipsData.length) % this.tipsData.length); },

  // ── AI Chat ───────────────────────────────────────────────────
  async askAI(question) {
    AppRouter.navigate('chat');
    await new Promise(r => setTimeout(r, 150));
    const input = document.getElementById('chat-input');
    if (input) {
      input.value = question;
      input.style.height = 'auto';
    }
    this.sendMessage(question);
  },

  focusChatInput() {
    setTimeout(() => {
      const input = document.getElementById('chat-input');
      if (input) input.focus();
      this.renderSuggestions();
      if (this.chatHistory.length === 0) this.addWelcomeMessage();
    }, 200);
  },

  renderSuggestions() {
    const container = document.getElementById('chat-suggestions');
    if (!container) return;
    const suggestions = AIEngine.getRandomSuggestions(6);
    container.innerHTML = suggestions.map(s => `
      <div class="suggestion-chip" onclick="App.askAI('${s}')">${s}</div>`).join('');
  },

  addWelcomeMessage() {
    const welcome = `**Namaste! 🙏 I'm your Smart Banker AI Assistant!**\n\nI can help you with all banking questions in your language. Try asking:\n\n• *"How to open a bank account?"*\n• *"How to protect from UPI fraud?"*\n• *"What is PM Jan Dhan Yojana?"*\n• *"How to get a home loan?"*\n\nYou can type or use the 🎤 microphone button!`;
    this.appendMessage('ai', welcome);
  },

  appendMessage(role, content, animate = true) {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const user = Auth.getUser();
    const userInitials = user ? (user.name[0] + (user.name.split(' ')[1]?.[0] || '')).toUpperCase() : 'U';
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const msgId = 'msg_' + Date.now();

    const html = role === 'ai' ? `
      <div class="msg-row ai-msg" id="${msgId}">
        <div class="msg-avatar ai-avatar-sm">🤖</div>
        <div class="msg-content">
          <div class="ai-bubble msg-bubble">${this.renderMarkdown(content)}</div>
          <div class="msg-actions">
            <button class="msg-action" onclick="VoiceEngine.speak(\`${content.replace(/`/g, "'").substring(0, 500)}\`)">🔊 Listen</button>
            <button class="msg-action" onclick="App.copyMessage('${msgId}')">📋 Copy</button>
          </div>
          <div class="msg-time">${time}</div>
        </div>
      </div>` : `
      <div class="msg-row user-msg" id="${msgId}">
        <div class="msg-avatar user-avatar-sm">${userInitials}</div>
        <div class="msg-content">
          <div class="user-bubble msg-bubble">${this.escapeHTML(content)}</div>
          <div class="msg-time">${time}</div>
        </div>
      </div>`;

    container.insertAdjacentHTML('beforeend', html);
    this.chatHistory.push({ role, content });
    this.scrollToBottom(container);
  },

  renderMarkdown(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      // Restore intentional HTML
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gm, '<h4>$1</h4>')
      .replace(/^## (.*$)/gm, '<h4>$1</h4>')
      .replace(/^# (.*$)/gm, '<h4>$1</h4>')
      .replace(/^> (.*$)/gm, '<blockquote style="border-left:3px solid var(--gold);padding-left:0.75rem;margin:0.5rem 0;color:var(--text-primary)">$1</blockquote>')
      .replace(/^\| (.+) \|$/gm, (match) => {
        const cells = match.replace(/^\||\|$/g, '').split('|');
        return '<tr>' + cells.map(c => `<td style="padding:4px 8px;border:1px solid rgba(255,255,255,0.1)">${c.trim()}</td>`).join('') + '</tr>';
      })
      .replace(/(<tr>.*<\/tr>\n?)+/gs, (t) => `<table style="width:100%;border-collapse:collapse;margin:0.5rem 0;font-size:0.85rem">${t}</table>`)
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>\n?)+/gs, (items) => `<ul style="padding-left:1.2rem;margin:0.35rem 0">${items}</ul>`)
      .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px;font-family:monospace">$1</code>')
      .replace(/\n\n/g, '</p><p style="margin:0.5rem 0">')
      .replace(/\n/g, '<br>');
  },

  escapeHTML(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  showTyping() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const typing = document.createElement('div');
    typing.id = 'typing-indicator';
    typing.className = 'typing-indicator';
    typing.innerHTML = `
      <div class="msg-avatar ai-avatar-sm">🤖</div>
      <div class="typing-bubble">
        <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
      </div>`;
    container.appendChild(typing);
    this.scrollToBottom(container);
  },

  hideTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  },

  async sendMessage(text) {
    const trimmed = (text || '').trim();
    if (!trimmed) return;

    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    if (input) { input.value = ''; input.style.height = 'auto'; }
    if (sendBtn) sendBtn.disabled = true;

    this.appendMessage('user', trimmed);
    this.showTyping();

    try {
      const response = await AIEngine.getResponse(trimmed);
      this.hideTyping();
      this.appendMessage('ai', response);
    } catch(e) {
      this.hideTyping();
      this.appendMessage('ai', 'I apologize, I encountered an error. Please try again.');
    }

    if (sendBtn) sendBtn.disabled = false;
    if (input) input.focus();
  },

  scrollToBottom(container) {
    setTimeout(() => { container.scrollTop = container.scrollHeight; }, 100);
  },

  copyMessage(msgId) {
    const el = document.getElementById(msgId);
    if (!el) return;
    const text = el.textContent;
    navigator.clipboard?.writeText(text).then(() => Toast.show('Copied to clipboard', 'success')).catch(() => {});
  },

  clearChat() {
    const container = document.getElementById('chat-messages');
    if (container) { container.innerHTML = ''; this.chatHistory = []; AIEngine.clearHistory(); }
    this.addWelcomeMessage();
  },

  // ── Modules ───────────────────────────────────────────────────
  renderModules() {
    const container = document.getElementById('modules-grid');
    if (!container) return;
    container.innerHTML = BankingModules.modules.map(m => {
      const progress = BankingModules.getProgress(m.id);
      return `
        <div class="module-card glass glass-hover" onclick="AppRouter.navigate('module-detail', {moduleId: ${m.id}})"
             style="background:${m.color}; border-color:${m.accent}22;">
          <span class="module-num">0${m.id <= 9 ? m.id : m.id}</span>
          <div class="module-icon-wrap" style="background:${m.iconBg}">${m.icon}</div>
          <div>
            <div class="module-title">${m.title}</div>
            <div class="module-sub">${m.subtitle}</div>
          </div>
          <div class="module-progress-row">
            <div class="progress" style="flex:1">
              <div class="progress-bar" style="width:${progress}%;background:${m.accent}"></div>
            </div>
            <span class="module-progress-text">${progress}%</span>
          </div>
        </div>`;
    }).join('');
  },

  renderModuleDetail(moduleId) {
    this.currentModuleId = moduleId;
    const module = BankingModules.getModule(moduleId);
    if (!module) return;

    const header = document.getElementById('module-detail-header');
    if (header) {
      header.innerHTML = `
        <button class="back-btn" onclick="AppRouter.navigate('modules')">← Back</button>
        <div class="module-detail-icon" style="background:${module.iconBg}">${module.icon}</div>
        <div class="module-detail-info">
          <h2>${module.title}</h2>
          <p>${module.subtitle}</p>
        </div>`;
    }

    const topicsList = document.getElementById('topics-list');
    if (topicsList) {
      topicsList.innerHTML = module.topics.map(t => {
        const done = BankingModules.isComplete(moduleId, t.id);
        return `
          <div class="topic-item ${done ? 'completed' : ''}" onclick="AppRouter.navigate('article', {moduleId: ${moduleId}, topicId: '${t.id}'})">
            <div class="topic-item-icon">${t.icon}</div>
            <div class="topic-item-text">
              <h4>${t.title}</h4>
              <p>📖 ${t.readTime} read</p>
            </div>
            <span class="topic-item-arrow">${done ? '✅' : '›'}</span>
          </div>`;
      }).join('');
    }
  },

  renderArticle(moduleId, topicId) {
    const module = BankingModules.getModule(moduleId);
    const topic = BankingModules.getTopic(moduleId, topicId);
    if (!module || !topic) return;

    const header = document.getElementById('article-header');
    if (header) {
      header.innerHTML = `
        <button class="back-btn" onclick="AppRouter.navigate('module-detail', {moduleId: ${moduleId}})">← ${module.title}</button>
        <div class="article-meta">
          <span class="article-badge badge badge-gold">${module.title}</span>
          <span class="article-read-time">📖 ${topic.readTime} read</span>
        </div>
        <h1 class="article-title">${topic.icon} ${topic.title}</h1>
        <div class="article-actions">
          <button class="article-action" id="tts-btn" onclick="App.toggleArticleAudio('${topicId}', \`${topic.body.replace(/`/g, "'").replace(/\n/g, ' ').substring(0, 400)}\`)">
            🔊 Listen
          </button>
          <button class="article-action" onclick="App.askAI('Tell me more about ${topic.title}')">
            🤖 Ask AI
          </button>
        </div>`;
    }

    const content = document.getElementById('article-content');
    if (content) content.innerHTML = topic.body;

    BankingModules.markComplete(moduleId, topicId);
  },

  toggleArticleAudio(topicId, text) {
    const btn = document.getElementById('tts-btn');
    if (VoiceEngine.isSpeaking) {
      VoiceEngine.stopSpeaking();
      if (btn) { btn.textContent = '🔊 Listen'; btn.classList.remove('playing'); }
    } else {
      VoiceEngine.speak(text, {
        onStart: () => { if (btn) { btn.textContent = '⏹ Stop'; btn.classList.add('playing'); } },
        onEnd: () => { if (btn) { btn.textContent = '🔊 Listen'; btn.classList.remove('playing'); } },
      });
    }
  },

  // ── Profile ───────────────────────────────────────────────────
  renderProfile() {
    const user = Auth.getUser();
    if (!user) return;

    const nameEl = document.getElementById('profile-name');
    const emailEl = document.getElementById('profile-email');
    const avatarEl = document.getElementById('profile-avatar-large');
    const langEl = document.getElementById('profile-lang');

    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.email || user.mobile || '';
    if (avatarEl) avatarEl.textContent = (user.name[0] + (user.name.split(' ')[1]?.[0] || '')).toUpperCase();
    if (langEl) langEl.textContent = I18N.getCurrentLangNative();

    // Fill form fields
    ['name', 'email', 'mobile', 'age', 'state', 'district'].forEach(field => {
      const el = document.getElementById(`edit-${field}`);
      if (el) el.value = user[field] || '';
    });
    const genderEl = document.getElementById('edit-gender');
    if (genderEl && user.gender) genderEl.value = user.gender;
    const occEl = document.getElementById('edit-occupation');
    if (occEl && user.occupation) occEl.value = user.occupation;
    const langSelect = document.getElementById('edit-lang');
    if (langSelect && user.lang) langSelect.value = user.lang;
  },

  saveProfile() {
    const data = {
      name: document.getElementById('edit-name')?.value.trim() || Auth.getUser()?.name,
      email: document.getElementById('edit-email')?.value.trim(),
      mobile: document.getElementById('edit-mobile')?.value.trim(),
      age: document.getElementById('edit-age')?.value,
      state: document.getElementById('edit-state')?.value,
      district: document.getElementById('edit-district')?.value,
      gender: document.getElementById('edit-gender')?.value,
      occupation: document.getElementById('edit-occupation')?.value,
      lang: document.getElementById('edit-lang')?.value,
    };
    Auth.updateProfile(data);
    if (data.lang) I18N.setLanguage(data.lang);
    this.renderProfile();
  },

  // ── Search ────────────────────────────────────────────────────
  initSearch() {
    const input = document.getElementById('search-input-large');
    if (input) { input.value = ''; setTimeout(() => input.focus(), 200); }
    this.renderRecentSearches();
  },

  handleSearch(query) {
    const q = query.toLowerCase();
    const container = document.getElementById('search-results');
    if (!container) return;

    if (!q) { this.renderRecentSearches(); return; }

    // Save to recent
    const recent = JSON.parse(localStorage.getItem('sb_recent_search') || '[]');
    if (!recent.includes(query)) { recent.unshift(query); localStorage.setItem('sb_recent_search', JSON.stringify(recent.slice(0, 10))); }

    // Search through modules
    const results = [];
    BankingModules.modules.forEach(m => {
      m.topics.forEach(t => {
        if (t.title.toLowerCase().includes(q) || m.title.toLowerCase().includes(q) || t.body?.toLowerCase().includes(q)) {
          results.push({ moduleId: m.id, topic: t, module: m });
        }
      });
    });

    // Also add AI suggestion
    if (results.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:2rem">
          <div style="font-size:2rem;margin-bottom:1rem">🔍</div>
          <p style="color:var(--text-muted);margin-bottom:1rem">No direct results found</p>
          <button class="btn btn-primary btn-sm" onclick="App.askAI('${query}')">Ask AI about this</button>
        </div>`;
      return;
    }

    container.innerHTML = results.slice(0, 15).map(r => `
      <div class="search-result-item" onclick="AppRouter.navigate('article', {moduleId: ${r.moduleId}, topicId: '${r.topic.id}'})">
        <span class="sri-icon">${r.topic.icon}</span>
        <div class="sri-text">
          <h4>${r.topic.title}</h4>
          <p>${r.module.title} • ${r.topic.readTime} read</p>
        </div>
      </div>`).join('');
  },

  renderRecentSearches() {
    const container = document.getElementById('search-results');
    if (!container) return;
    const recent = JSON.parse(localStorage.getItem('sb_recent_search') || '[]');
    const popular = ['How to open bank account', 'UPI fraud prevention', 'EMI calculation', 'Credit score', 'PM Jan Dhan'];

    container.innerHTML = `
      ${recent.length > 0 ? `
        <div class="section-header"><span class="section-title">🕐 Recent Searches</span></div>
        ${recent.slice(0,5).map(q => `
          <div class="search-result-item" onclick="document.getElementById('search-input-large').value='${q}'; App.handleSearch('${q}')">
            <span class="sri-icon">🕐</span>
            <div class="sri-text"><h4>${q}</h4></div>
          </div>`).join('')}
        <hr style="border:none;border-top:1px solid var(--divider);margin:1rem 0">` : ''}
      <div class="section-header"><span class="section-title">🔥 Popular Questions</span></div>
      ${popular.map(q => `
        <div class="search-result-item" onclick="App.askAI('${q}')">
          <span class="sri-icon">🔥</span>
          <div class="sri-text"><h4>${q}</h4><p>Ask AI</p></div>
        </div>`).join('')}`;
  },

  // ── Voice Input ───────────────────────────────────────────────
  startVoiceInput() {
    const micBtns = document.querySelectorAll('.chat-voice-btn, .ai-mic-btn, #topbar-mic');
    const setActive = (active) => micBtns.forEach(b => b.classList.toggle('active', active));

    if (VoiceEngine.isListening) {
      VoiceEngine.stopListening();
      setActive(false);
      return;
    }

    VoiceEngine.startListening({
      onStart: () => setActive(true),
      onInterim: (text) => {
        const input = document.getElementById('chat-input');
        if (input) input.value = text;
      },
      onFinal: (text) => {
        setActive(false);
        this.sendMessage(text);
      },
      onEnd: () => setActive(false),
      onError: (msg) => { setActive(false); Toast.show(msg, 'error'); },
    });
  },

  // ── Notification Panel ────────────────────────────────────────
  toggleNotifications() {
    const panel = document.getElementById('notif-panel');
    if (!panel) return;
    const open = panel.classList.toggle('open');
    if (open) {
      Notifications.renderPanel();
      Notifications.markAllRead();
    }
  },

  // ── Utility ───────────────────────────────────────────────────
  init() {
    I18N.init();
    VoiceEngine.init();
    Toast.init();
    Notifications.init();
    Auth.init();

    if (Auth.isLoggedIn()) {
      document.getElementById('splash-screen').classList.add('hidden');
      AppRouter.navigate('home');
    } else {
      this.showSplash();
    }

    this.setupEventListeners();
    Notifications.startAutoNotifications();
  },

  showSplash() {
    const bar = document.querySelector('.splash-progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 8;
      if (bar) bar.style.width = Math.min(progress, 95) + '%';
      if (progress >= 95) {
        clearInterval(interval);
        if (bar) bar.style.width = '100%';
        setTimeout(() => {
          document.getElementById('splash-screen').classList.add('hidden');
          document.getElementById('auth-page').classList.add('active');
        }, 400);
      }
    }, 150);
  },

  setupEventListeners() {
    // Chat input auto-resize
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
      chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
        const sendBtn = document.getElementById('send-btn');
        if (sendBtn) sendBtn.disabled = !chatInput.value.trim();
      });
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage(chatInput.value);
        }
      });
    }

    // Topbar search
    const topSearch = document.getElementById('topbar-search-input');
    if (topSearch) {
      topSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          AppRouter.navigate('search');
          setTimeout(() => {
            const si = document.getElementById('search-input-large');
            if (si) { si.value = topSearch.value; this.handleSearch(topSearch.value); }
          }, 200);
        }
      });
    }

    // Search input
    const searchInput = document.getElementById('search-input-large');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    // Close notif panel on outside click
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('notif-panel');
      const notifBtn = document.getElementById('notif-btn');
      if (panel && panel.classList.contains('open') && !panel.contains(e.target) && e.target !== notifBtn) {
        panel.classList.remove('open');
      }
    });

    // Language change handler
    window.addEventListener('langChange', () => {
      if (AppRouter.currentView === 'home') this.initHome();
    });

    // OTP inputs
    document.querySelectorAll('.otp-input').forEach((input, index) => {
      input.addEventListener('input', (e) => Auth.handleOTPInput(e, index));
      input.addEventListener('keydown', (e) => Auth.handleOTPKeydown(e, index));
    });
    const firstOtp = document.querySelector('.otp-input');
    if (firstOtp) firstOtp.addEventListener('paste', (e) => Auth.handleOTPPaste(e));
  }
};

// Boot on DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
window.App = App;
