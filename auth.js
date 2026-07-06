/* ================================================================
   Smart Banker — Auth Module
   Registration, Login, OTP, Profile Management
   ================================================================ */

const Auth = {
  currentUser: null,
  otpTarget: null,
  otpTimer: null,
  otpSeconds: 60,
  pendingAction: null, // 'register' | 'login'

  // ── Tab Switching ─────────────────────────────────────────────
  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`form-${tab}`).classList.add('active');
  },

  switchLoginMethod(method) {
    document.querySelectorAll('.login-method-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-method="${method}"]`).classList.add('active');
    document.getElementById('login-email-section').style.display = method === 'email' ? 'flex' : 'none';
    document.getElementById('login-mobile-section').style.display = method === 'mobile' ? 'flex' : 'none';
  },

  // ── Validators ────────────────────────────────────────────────
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validateMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ''));
  },
  validatePassword(pwd) {
    return pwd.length >= 6;
  },

  showFieldError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = '#F43F5E';
    field.focus();
    Toast.show(msg, 'error');
  },

  clearFieldErrors() {
    document.querySelectorAll('.form-input, .form-select').forEach(f => {
      f.style.borderColor = '';
    });
  },

  // ── Registration ──────────────────────────────────────────────
  async handleRegister() {
    this.clearFieldErrors();
    const data = {
      name: document.getElementById('reg-name')?.value.trim(),
      email: document.getElementById('reg-email')?.value.trim(),
      mobile: document.getElementById('reg-mobile')?.value.trim(),
      password: document.getElementById('reg-password')?.value,
      lang: document.getElementById('reg-lang')?.value || 'en',
      state: document.getElementById('reg-state')?.value || '',
      district: document.getElementById('reg-district')?.value || '',
      gender: document.getElementById('reg-gender')?.value || '',
      age: document.getElementById('reg-age')?.value || '',
      occupation: document.getElementById('reg-occupation')?.value || '',
    };

    if (!data.name || data.name.length < 2) {
      return this.showFieldError('reg-name', 'Please enter your full name');
    }
    if (!data.email && !data.mobile) {
      return Toast.show('Please enter email or mobile number', 'error');
    }
    if (data.email && !this.validateEmail(data.email)) {
      return this.showFieldError('reg-email', 'Please enter a valid email address');
    }
    if (data.mobile && !this.validateMobile(data.mobile)) {
      return this.showFieldError('reg-mobile', 'Please enter a valid 10-digit mobile number');
    }
    if (!data.password || !this.validatePassword(data.password)) {
      return this.showFieldError('reg-password', 'Password must be at least 6 characters');
    }

    this.otpTarget = data.email || ('+91 ' + data.mobile.slice(-10).replace(/(\d{5})(\d{5})/, '$1 $2'));
    this.pendingAction = 'register';
    this.pendingData = data;
    this.showOTPScreen();
    this.startOTPTimer();
    Toast.show(`OTP sent to ${this.otpTarget}`, 'success', 'OTP Sent!');
  },

  // ── Login ─────────────────────────────────────────────────────
  async handleLogin() {
    this.clearFieldErrors();
    const method = document.querySelector('.login-method-btn.active')?.dataset.method || 'email';

    if (method === 'email') {
      const email = document.getElementById('login-email')?.value.trim();
      const password = document.getElementById('login-password')?.value;
      if (!email || !this.validateEmail(email)) {
        return this.showFieldError('login-email', 'Please enter a valid email address');
      }
      if (!password) {
        return this.showFieldError('login-password', 'Please enter your password');
      }
      await this.processLogin({ email, password, method: 'email' });
    } else {
      const mobile = document.getElementById('login-mobile')?.value.trim();
      if (!mobile || !this.validateMobile(mobile)) {
        return this.showFieldError('login-mobile', 'Please enter a valid 10-digit mobile number');
      }
      this.otpTarget = '+91 ' + mobile.slice(-10).replace(/(\d{5})(\d{5})/, '$1 $2');
      this.pendingAction = 'login';
      this.pendingData = { mobile };
      this.showOTPScreen();
      this.startOTPTimer();
      Toast.show(`OTP sent to ${this.otpTarget}`, 'success', 'OTP Sent!');
    }
  },

  async processLogin(data) {
    const users = JSON.parse(localStorage.getItem('sb_users') || '[]');
    const user = users.find(u => u.email === data.email && u.password === data.password);

    if (user || data.method === 'otp' || data.method === 'google') {
      const loggedIn = user || data.user || {
        id: 'usr_' + Date.now(),
        name: data.name || 'Smart User',
        email: data.email || '',
        mobile: data.mobile || '',
        lang: localStorage.getItem('sb_lang') || 'en',
        avatar: '👤',
        joinedDate: new Date().toISOString(),
      };
      this.setUser(loggedIn);
      Toast.show(`Welcome back, ${loggedIn.name.split(' ')[0]}! 🎉`, 'success');
      setTimeout(() => window.AppRouter?.navigate('home'), 300);
    } else {
      Toast.show('Invalid email or password', 'error');
    }
  },

  // ── OTP Flow ──────────────────────────────────────────────────
  showOTPScreen() {
    document.getElementById('auth-tabs-wrap').style.display = 'none';
    document.getElementById('auth-forms-wrap').style.display = 'none';
    const otpScreen = document.getElementById('otp-screen');
    otpScreen.classList.add('active');
    document.getElementById('otp-sent-to').textContent = this.otpTarget;
    // Auto-focus first input
    const firstInput = document.querySelector('.otp-input');
    if (firstInput) setTimeout(() => firstInput.focus(), 200);
  },

  hideOTPScreen() {
    document.getElementById('auth-tabs-wrap').style.display = '';
    document.getElementById('auth-forms-wrap').style.display = '';
    document.getElementById('otp-screen').classList.remove('active');
    this.clearOTPInputs();
    this.stopOTPTimer();
  },

  handleOTPInput(e, index) {
    const inputs = document.querySelectorAll('.otp-input');
    const val = e.target.value.replace(/\D/g, '').slice(-1);
    e.target.value = val;
    if (val) {
      e.target.classList.add('filled');
      if (index < inputs.length - 1) inputs[index + 1].focus();
    } else {
      e.target.classList.remove('filled');
    }
    // Auto-verify when all filled
    const allFilled = [...inputs].every(i => i.value.length === 1);
    if (allFilled) setTimeout(() => this.verifyOTP(), 300);
  },

  handleOTPKeydown(e, index) {
    const inputs = document.querySelectorAll('.otp-input');
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  },

  handleOTPPaste(e) {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
    const inputs = document.querySelectorAll('.otp-input');
    [...paste].forEach((char, i) => {
      if (inputs[i]) { inputs[i].value = char; inputs[i].classList.add('filled'); }
    });
    if (paste.length >= 6) setTimeout(() => this.verifyOTP(), 300);
  },

  getOTPValue() {
    return [...document.querySelectorAll('.otp-input')].map(i => i.value).join('');
  },

  clearOTPInputs() {
    document.querySelectorAll('.otp-input').forEach(i => { i.value = ''; i.classList.remove('filled'); });
  },

  async verifyOTP() {
    const otp = this.getOTPValue();
    if (otp.length < 6) {
      Toast.show('Please enter the complete 6-digit OTP', 'warning');
      return;
    }
    // Simulate OTP verification (accept any 6-digit code)
    await AIEngine.delay(800);
    if (otp.length === 6) {
      this.stopOTPTimer();
      if (this.pendingAction === 'register') {
        this.completeRegistration();
      } else {
        await this.processLogin({ ...this.pendingData, method: 'otp' });
      }
    }
  },

  async completeRegistration() {
    const data = this.pendingData;
    const user = {
      id: 'usr_' + Date.now(),
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      lang: data.lang,
      state: data.state,
      district: data.district,
      gender: data.gender,
      age: data.age,
      occupation: data.occupation,
      avatar: '👤',
      joinedDate: new Date().toISOString(),
    };
    const users = JSON.parse(localStorage.getItem('sb_users') || '[]');
    users.push(user);
    localStorage.setItem('sb_users', JSON.stringify(users));
    this.setUser(user);
    Toast.show(`Welcome to Smart Banker, ${user.name.split(' ')[0]}! 🎉`, 'success', 'Registration Successful!');
    setTimeout(() => window.AppRouter?.navigate('home'), 500);
  },

  handleGoogleLogin() {
    Toast.show('Signing in with Google...', 'info');
    setTimeout(() => {
      const user = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        mobile: '',
        lang: localStorage.getItem('sb_lang') || 'en',
        avatar: '👤',
        joinedDate: new Date().toISOString(),
        provider: 'google',
      };
      this.setUser(user);
      Toast.show('Signed in with Google! 🎉', 'success');
      setTimeout(() => window.AppRouter?.navigate('home'), 300);
    }, 1500);
  },

  // ── OTP Timer ─────────────────────────────────────────────────
  startOTPTimer() {
    this.otpSeconds = 60;
    this.updateTimerDisplay();
    this.otpTimer = setInterval(() => {
      this.otpSeconds--;
      this.updateTimerDisplay();
      if (this.otpSeconds <= 0) {
        this.stopOTPTimer();
        const timerEl = document.getElementById('otp-timer');
        if (timerEl) timerEl.parentElement.innerHTML = '<button class="otp-resend-btn" onclick="Auth.resendOTP()">Resend OTP</button>';
      }
    }, 1000);
  },

  stopOTPTimer() {
    if (this.otpTimer) { clearInterval(this.otpTimer); this.otpTimer = null; }
  },

  updateTimerDisplay() {
    const el = document.getElementById('otp-timer');
    if (el) el.textContent = `${String(Math.floor(this.otpSeconds/60)).padStart(2,'0')}:${String(this.otpSeconds%60).padStart(2,'0')}`;
  },

  async resendOTP() {
    Toast.show(`New OTP sent to ${this.otpTarget}`, 'success', 'OTP Resent!');
    this.clearOTPInputs();
    this.startOTPTimer();
    const timerWrap = document.getElementById('otp-timer-wrap');
    if (timerWrap) timerWrap.innerHTML = `Resend OTP in <span class="otp-timer" id="otp-timer">01:00</span>`;
  },

  // ── User Session ──────────────────────────────────────────────
  setUser(user) {
    this.currentUser = user;
    localStorage.setItem('sb_user', JSON.stringify(user));
    if (user.lang) I18N.setLanguage(user.lang);
  },

  getUser() {
    if (!this.currentUser) {
      const saved = localStorage.getItem('sb_user');
      if (saved) try { this.currentUser = JSON.parse(saved); } catch(e) {}
    }
    return this.currentUser;
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('sb_user');
    AIEngine.clearHistory();
    Toast.show('You have been logged out.', 'info');
    setTimeout(() => window.AppRouter?.navigate('auth'), 300);
  },

  deleteAccount() {
    if (!confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    const user = this.getUser();
    if (user) {
      const users = JSON.parse(localStorage.getItem('sb_users') || '[]');
      const filtered = users.filter(u => u.id !== user.id);
      localStorage.setItem('sb_users', JSON.stringify(filtered));
    }
    localStorage.removeItem('sb_user');
    this.currentUser = null;
    Toast.show('Account deleted successfully', 'info');
    setTimeout(() => window.AppRouter?.navigate('auth'), 300);
  },

  updateProfile(data) {
    const user = this.getUser();
    if (!user) return;
    Object.assign(user, data);
    this.setUser(user);
    const users = JSON.parse(localStorage.getItem('sb_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx > -1) { users[idx] = user; localStorage.setItem('sb_users', JSON.stringify(users)); }
    Toast.show('Profile updated successfully!', 'success');
  },

  // ── Forgot Password ───────────────────────────────────────────
  showForgotPassword() {
    const email = prompt('Enter your registered email address:');
    if (email && this.validateEmail(email)) {
      Toast.show(`Password reset link sent to ${email}`, 'success', 'Email Sent!');
    } else if (email) {
      Toast.show('Please enter a valid email address', 'error');
    }
  },

  // ── Language Selection ────────────────────────────────────────
  showLanguageModal() {
    const modal = document.getElementById('lang-modal');
    if (modal) modal.classList.add('active');
  },

  hideLanguageModal() {
    const modal = document.getElementById('lang-modal');
    if (modal) modal.classList.remove('active');
  },

  selectLanguage(code) {
    I18N.setLanguage(code);
    // Update selection UI
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.lang === code);
    });
    const info = I18N.getLangInfo(code);
    document.querySelectorAll('.current-lang-name').forEach(el => {
      el.textContent = info.native;
    });
    Toast.show(`Language changed to ${info.name}`, 'success');
    setTimeout(() => this.hideLanguageModal(), 500);
  },

  init() {
    // Check for saved session
    if (this.isLoggedIn()) {
      const user = this.getUser();
      if (user.lang) I18N.setLanguage(user.lang);
    }
  }
};

window.Auth = Auth;
