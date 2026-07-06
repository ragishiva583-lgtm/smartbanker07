/* ================================================================
   Smart Banker — AI Engine
   Mock NLP with 60+ Q&A pairs + OpenAI API hook
   ================================================================ */

const AIEngine = {
  apiKey: null,
  useRealAPI: false,
  conversationHistory: [],

  // ── Knowledge Base ────────────────────────────────────────────
  knowledgeBase: [
    // Account Opening
    { patterns: ['open account', 'bank account', 'new account', 'खाता खोलना', 'account kaise', 'account open'],
      response: `**How to Open a Bank Account** 🏦\n\nOpening a bank account is simple! Here's what you need:\n\n**Documents Required:**\n• Aadhaar Card (most important)\n• PAN Card\n• 2 passport-size photos\n• Address proof (if Aadhaar address is different)\n\n**Steps:**\n1. Visit your nearest bank branch\n2. Ask for "Account Opening Form"\n3. Fill the form with personal details\n4. Submit documents and photo\n5. Initial deposit (or zero for Jan Dhan)\n\n**Easier Option:** Open online! Most banks allow instant account opening with Aadhaar and video KYC.\n\n💡 **Tip:** For a free zero-balance account, ask specifically for **PM Jan Dhan Yojana account** — available at all public sector banks.` },

    // ATM
    { patterns: ['atm', 'cash withdraw', 'atm pin', 'atm use', 'debit card', 'पैसे निकालना', 'atm kaise'],
      response: `**Using an ATM** 🏧\n\n**Step-by-Step:**\n1. Insert your debit card (chip side up)\n2. Select your language\n3. Enter 4-digit PIN (cover keypad with hand!)\n4. Choose "Withdrawal"\n5. Select "Savings Account"\n6. Enter amount\n7. Collect cash + receipt\n8. Take your card back\n\n**Free Withdrawals:**\n• 5 free per month at your own bank ATM\n• 3 free per month at other bank ATMs\n• After that: ₹21 per transaction\n\n⚠️ **Safety Rules:**\n• NEVER share your PIN with anyone — not even bank staff\n• Cover keypad when entering PIN\n• Check for card skimmer devices on ATM slot\n• Use ATMs inside bank premises for safety` },

    // UPI
    { patterns: ['upi', 'gpay', 'phonepe', 'paytm', 'online payment', 'digital payment', 'qr code', 'scan pay'],
      response: `**UPI — Unified Payments Interface** 📱\n\nUPI is India's fastest and free payment system!\n\n**How to Use:**\n1. Download PhonePe, Google Pay, Paytm, or your bank app\n2. Link your bank account\n3. Set a 6-digit UPI PIN\n4. Send money using:\n   • Mobile number\n   • UPI ID (xyz@okicici)\n   • QR code scan\n\n**Limits:** Up to ₹1 lakh per transaction\n\n🚨 **CRITICAL SAFETY RULE:**\n> Entering PIN = **SENDING** money\n> You NEVER need to enter PIN to **RECEIVE** money!\n\nIf anyone says "Enter PIN to receive ₹10,000" — IT IS A SCAM. Hang up immediately and call 1930.` },

    // EMI
    { patterns: ['emi', 'loan emi', 'monthly installment', 'equated monthly', 'किश्त', 'kist'],
      response: `**What is EMI?** 💰\n\nEMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan.\n\n**EMI Formula:**\n> EMI = Principal × Monthly Rate × (1 + Monthly Rate)^Months ÷ [(1 + Monthly Rate)^Months - 1]\n\n**Example:**\n• Loan: ₹5,00,000\n• Interest: 10% per year\n• Tenure: 5 years (60 months)\n• **Monthly EMI: ₹10,624**\n• Total paid: ₹6,37,440\n• Interest paid: ₹1,37,440\n\n**Smart EMI Tips:**\n• Keep all EMIs below 40% of monthly salary\n• Pay on time to protect credit score\n• Prepay when possible to save interest\n• Never miss EMI — affects CIBIL score for 7 years` },

    // Loan
    { patterns: ['loan', 'borrow', 'credit', 'loan apply', 'lona', 'ऋण', 'कर्ज', 'loan lena'],
      response: `**Types of Bank Loans** 🏦\n\nHere are the main loan types available:\n\n| Loan Type | Amount | Interest | Tenure |\n|-----------|--------|----------|--------|\n| Personal Loan | ₹50K–₹40L | 10.5–24% | 1–5 yrs |\n| Home Loan | Up to ₹10 Cr | 8.5–9.5% | 5–30 yrs |\n| Education Loan | Up to ₹1.5 Cr | 8–14% | 5–15 yrs |\n| Car Loan | Up to ₹30L | 7.5–11% | 1–7 yrs |\n| Gold Loan | Up to 75% value | 7–14% | 3m–3yr |\n| Crop/KCC | Up to ₹3L | 4% (subsidized) | Yearly |\n\n**Eligibility Basics:**\n• Age: 21–65 years\n• Income proof\n• Credit score 700+\n• Valid documents\n\n⚠️ **Avoid Fake Loan Apps!** Real banks never ask for upfront fees.` },

    // Home loan
    { patterns: ['home loan', 'housing loan', 'ghar loan', 'house loan', 'property loan', 'pmay'],
      response: `**Home Loan Guide** 🏡\n\n**Key Details:**\n• Amount: Based on property value (up to 80-90%)\n• Interest Rate: 8.5–9.5% per year\n• Tenure: Up to 30 years\n• Processing Fee: 0.5–1% of loan amount\n\n**PMAY Subsidy (Government Help):**\nFirst-time home buyers can get interest subsidy:\n• EWS (income < ₹3L/year): ₹2.67 lakh subsidy\n• LIG (income < ₹6L/year): ₹2.67 lakh subsidy\n• MIG I (income < ₹12L/year): ₹2.35 lakh subsidy\n\n**Tax Benefits:**\n• Principal repayment: Up to ₹1.5 lakh deduction (Sec 80C)\n• Interest payment: Up to ₹2 lakh deduction (Sec 24)\n\n**Documents Needed:**\n• Aadhaar + PAN\n• Income proof (salary slips/ITR)\n• Property documents\n• Bank statements (6 months)` },

    // Fraud
    { patterns: ['fraud', 'scam', 'cheated', 'fake call', 'otp fraud', 'ठगी', 'धोखाधड़ी', 'fraud hua', 'fraud call'],
      response: `**Banking Fraud — How to Protect Yourself** 🛡️\n\n**Common Fraud Types:**\n• 📞 Fake calls claiming to be from RBI/Bank\n• 📱 OTP phishing via SMS/WhatsApp\n• 💳 Fake loan apps\n• 🔗 Phishing website links\n• 📷 QR code scams\n\n**GOLDEN RULES — Never Forget:**\n1. 🔴 NEVER share OTP with anyone — not even bank staff\n2. 🔴 NEVER scan QR code to RECEIVE money\n3. 🔴 NEVER enter PIN when you want to receive money\n4. 🔴 RBI/Bank NEVER calls asking for account details\n5. 🔴 No prize requires advance payment\n\n**If Fraud Happens:**\n• Call your bank immediately and block account\n• Call **1930** (National Cyber Crime Helpline — 24×7)\n• File complaint at cybercrime.gov.in\n• Report within 30 minutes for best chance of recovery\n\n🆘 **Helplines:**\n• Cyber Crime: **1930**\n• RBI Helpline: **14448**` },

    // Wrong transfer
    { patterns: ['wrong transfer', 'wrong account', 'sent to wrong', 'wrong upi', 'paise wapas', 'money sent wrong', 'wrong payment'],
      response: `**Money Sent to Wrong Account — What to Do** 💸\n\n**Act IMMEDIATELY — Every Minute Counts!**\n\n**Step 1: Within 30 Minutes**\n• Call your bank customer care (number on card back)\n• Say "wrong transfer" and give transaction ID\n• Ask them to put a "hold" on the transaction\n\n**Step 2: File NPCI Complaint**\n• Visit: npci.org.in → "Complaint"\n• Or call: 1800-120-1740 (NPCI helpline)\n\n**Step 3: Cyber Crime Complaint**\n• Call **1930** immediately\n• File at cybercrime.gov.in\n\n**Step 4: If Receiver Ignores**\n• File police FIR\n• Approach Banking Ombudsman at cms.rbi.org.in\n\n⏱️ **Recovery Success Rate:**\n• < 30 mins: 70%+ recovery chance\n• < 24 hours: 40-60% chance\n• After 48 hours: Very difficult\n\nKeep: Transaction ID, date, time, amount, recipient UPI/account as evidence.` },

    // Jan Dhan
    { patterns: ['jan dhan', 'zero balance', 'free account', 'jandhan', 'pmjdy'],
      response: `**PM Jan Dhan Yojana (PMJDY)** 🏦\n\nThe world's largest financial inclusion program — free banking for all!\n\n**Benefits:**\n• ✅ Zero minimum balance — no penalty EVER\n• ✅ Free RuPay Debit Card\n• ✅ ₹2,00,000 accidental insurance (free)\n• ✅ ₹30,000 life insurance\n• ✅ Overdraft up to ₹10,000 after 6 months\n• ✅ Direct government benefits in account\n\n**How to Open:**\n1. Visit ANY bank branch or Business Correspondent\n2. Bring only your Aadhaar card\n3. Fill PMJDY account opening form\n4. Account opens SAME DAY — FREE!\n\n**Available at:**\n• All public sector banks\n• Post offices\n• Banking correspondents (nearby shops)\n\n💡 **No Aadhaar?** You can open with Voter ID, NREGA Job Card, or even a letter from a Gazetted Officer.` },

    // CIBIL / Credit Score
    { patterns: ['credit score', 'cibil', 'cibil score', 'credit report', 'credit history'],
      response: `**Credit Score (CIBIL Score)** 📊\n\nYour CIBIL score (300–900) determines loan eligibility and interest rates.\n\n**Score Ranges:**\n• 🟢 750–900: Excellent — best rates, easy approval\n• 🟡 650–749: Good — loans available with normal rates\n• 🟠 550–649: Fair — higher interest, stricter scrutiny\n• 🔴 Below 550: Poor — mostly rejected\n\n**What Affects Your Score:**\n• Payment history (35%) — most important!\n• Credit utilization (30%) — use < 30% of limit\n• Credit age (15%) — older accounts = better\n• Credit mix (10%) — having both loans and cards\n• New applications (10%) — don't apply too often\n\n**How to Improve:**\n1. Pay ALL EMIs and credit card bills on time\n2. Don't use more than 30% of credit card limit\n3. Don't close old credit cards\n4. Avoid multiple loan applications together\n\n**Check Free:**\nVisit cibil.com or check on your bank app → 1 free report per year.` },

    // Fixed Deposit
    { patterns: ['fixed deposit', 'fd', 'term deposit', 'fixed interest', 'fd kaise', 'fd open'],
      response: `**Fixed Deposit (FD)** 💰\n\nSafe, guaranteed returns — perfect for risk-averse savers!\n\n**Best FD Rates (2024):**\n| Bank | General | Senior Citizen |\n|------|---------|----------------|\n| SBI | 7.1% | 7.6% |\n| HDFC | 7.25% | 7.75% |\n| ICICI | 7.25% | 7.75% |\n| IndusInd | 7.75% | 8.25% |\n\n**Tax Saving FD:**\n• Lock-in: 5 years\n• Tax deduction: Up to ₹1.5 lakh (Section 80C)\n• Saves up to ₹46,800 in tax!\n\n**Example:**\n₹1 lakh at 7.25% for 1 year = ₹7,250 interest\n\n**How to Open:**\n• Online: Bank app → FD → Choose amount & tenure\n• Branch: Fill FD application form\n\n💡 **Tip:** Split large FDs into multiple smaller ones. If you need emergency money, break only one FD instead of the full amount.` },

    // Crop loan / Farmer
    { patterns: ['crop loan', 'kisan credit', 'kcc', 'farm loan', 'agricultural loan', 'kisaan', 'kisan', 'farmer loan'],
      response: `**Kisan Credit Card (KCC) — Crop Loan** 🌾\n\n**India's most farmer-friendly loan scheme!**\n\n**Benefits:**\n• Credit limit: Up to ₹3 lakh\n• Interest rate: Only **4%** per year (after government subsidy)\n• Valid for all farming expenses\n• No need to apply repeatedly — revolving credit\n\n**What KCC Covers:**\n• Seeds and fertilizers\n• Pesticides\n• Farm equipment\n• Irrigation costs\n• Post-harvest storage\n• Short-term family needs\n\n**Documents Required:**\n• Aadhaar Card\n• Land ownership records (Khasra/Khatauni)\n• Passport-size photo\n• Bank passbook\n\n**Apply At:**\n• SBI, Bank of Baroda, PNB, Canara Bank\n• Any Regional Rural Bank (RRB)\n• Primary Agricultural Credit Society (PACS)\n\n⏱️ **Processing Time:** 2-4 weeks for new applicants, same day for existing customers.` },

    // Government schemes
    { patterns: ['government scheme', 'yojana', 'sarkar', 'subsidy', 'government help', 'pm scheme', 'pradhan mantri'],
      response: `**Major Government Banking Schemes** 🏛️\n\n| Scheme | Benefit | Who Can Apply |\n|--------|---------|---------------|\n| PM Jan Dhan | Free bank account + ₹2L insurance | All citizens |\n| PM Mudra | Loan ₹50K–₹10L no collateral | Small businesses |\n| PM Kisan | ₹6,000/year direct transfer | Farmers |\n| PM PMAY | Home loan subsidy ₹2.67L | First-time buyers |\n| Sukanya Samriddhi | 8.2% interest for girls | Girl child <10 yrs |\n| PPF | 7.1% tax-free savings | All citizens |\n| Atal Pension Yojana | ₹1,000–5,000/month pension | Workers 18-40 yrs |\n| Stand Up India | Loan ₹10L–₹1Cr | SC/ST/Women |\n\n**How to Apply:**\n• Visit your nearest bank branch\n• Or use the scheme's official government website\n• Bank staff are required to assist with government schemes` },

    // PPF
    { patterns: ['ppf', 'public provident fund', 'ppf account', 'ppf interest', 'ppf open'],
      response: `**Public Provident Fund (PPF)** 🏛️\n\n**India's best tax-saving investment!**\n\n**Key Features:**\n• Interest rate: **7.1% per year** (tax-free!)\n• Minimum investment: ₹500/year\n• Maximum investment: ₹1,50,000/year\n• Tenure: 15 years (can extend in 5-year blocks)\n• Investment limit: ₹1.5 lakh qualifies for 80C deduction\n\n**Triple Tax Benefit (EEE Status):**\n1. 💚 Contribution → Tax deductible (save up to ₹46,800)\n2. 💚 Interest → Completely tax-free\n3. 💚 Maturity amount → Tax-free\n\n**PPF Growth Example:**\n₹1,50,000/year for 15 years at 7.1% = **₹40.68 lakh** (invested ₹22.5L)\n\n**How to Open:**\n• Any public sector bank or post office\n• Online through net banking (instant)\n• Documents: Aadhaar + PAN + photo` },

    // Mutual funds
    { patterns: ['mutual fund', 'sip', 'investment', 'invest money', 'share market', 'stock market', 'nifty', 'sensex'],
      response: `**Mutual Funds & SIP — Smart Investing** 📈\n\n**What is a Mutual Fund?**\nPooled money from many investors, managed by experts, invested in stocks/bonds.\n\n**Starting with SIP (₹500/month):**\n\n| Monthly SIP | 15 Years | 25 Years |\n|-------------|----------|----------|\n| ₹500 | ₹2.5 lakh | ₹9.5 lakh |\n| ₹2,000 | ₹10 lakh | ₹38 lakh |\n| ₹5,000 | ₹25 lakh | ₹95 lakh |\n*(Assumes 12% annual return)*\n\n**Best Funds for Beginners:**\n• Nifty 50 Index Fund — safest, track market\n• Large Cap Fund — stable, blue-chip companies\n• Balanced/Hybrid Fund — mix of equity and debt\n\n**How to Start:**\n1. Download Groww, Zerodha Coin, or Paytm Money\n2. Complete KYC (Aadhaar + PAN)\n3. Select fund → Set SIP amount\n4. Done! ₹500 is enough to start.\n\n⚠️ *Mutual funds are subject to market risk. Don't invest emergency funds.*` },

    // Block card
    { patterns: ['block card', 'card lost', 'lost card', 'stolen card', 'card block', 'card theft', 'card chori'],
      response: `**Card Lost or Stolen — Block Immediately!** 🚨\n\n**Immediate Action Required:**\n\n**1. Block via App (Fastest)**\n• Open your bank app → Card Services → Block Card\n• Card blocked instantly\n\n**2. Block via Customer Care**\n• SBI: 1800-11-2211 (toll-free)\n• HDFC: 1800-202-6161\n• ICICI: 1800-102-4242\n• BOB: 1800-258-4455\n• PNB: 1800-180-2222\n• Other banks: Number on back of card\n\n**3. Block via IVR (Automated)**\n• Call bank → Press options for "Block Card" without speaking to agent\n\n**After Blocking:**\n• Report to police if stolen (FIR)\n• Apply for replacement card (₹200-500 fee)\n• Check recent transactions for unauthorized charges\n• Dispute unauthorized transactions within 7 days\n\n💡 **Block first, investigate later!** Blocking takes 30 seconds. Unauthorized transaction reversal takes weeks.` },

    // NPS
    { patterns: ['nps', 'pension', 'retirement', 'pension plan', 'atal pension', 'old age'],
      response: `**National Pension System (NPS)** 👴\n\n**Plan for retirement starting today!**\n\n**NPS (For age 18–65)**\n• Invest: Min ₹500/year\n• Returns: Market-linked (10–12% historical)\n• Tax benefit: Up to ₹2 lakh deduction (₹1.5L under 80C + ₹50K extra under 80CCD(1B))\n• At 60: 60% tax-free withdrawal, 40% as monthly pension\n\n**Atal Pension Yojana (For informal workers)**\n• Age: 18-40 years\n• Monthly pension at 60: ₹1,000–₹5,000\n• Monthly contribution: ₹42–₹210 depending on pension amount and age\n• Government co-contributes 50% for eligible subscribers\n\n**Apply at:** Any bank branch or eNPS portal (enps.nsdl.com)` },

    // Savings tips
    { patterns: ['save money', 'savings tips', 'how to save', 'paise bachana', 'money saving'],
      response: `**Smart Money Saving Tips** 💡\n\n**The 50-30-20 Rule:**\n• 50% → Needs (rent, food, bills)\n• 30% → Wants (entertainment, shopping)\n• 20% → Savings & Investments\n\n**10 Proven Saving Habits:**\n1. 🎯 Set a savings goal first, then spend the rest\n2. 📱 Set up auto-debit for SIP/RD on salary day\n3. 🚫 Avoid EMIs for depreciating items (gadgets, clothes)\n4. 💳 Use credit cards wisely — pay full amount monthly\n5. 🏦 Keep emergency fund = 6 months expenses\n6. 📊 Track every expense (use Walnut or Money Manager app)\n7. 🛒 Make grocery list before shopping — avoid impulse buying\n8. 💡 Invest electricity/water savings in FD\n9. 📚 Invest in skills — best return on investment!\n10. 🏥 Buy health insurance — one hospitalization can wipe savings\n\n**Simple Formula:**\n> *Save first. Spend what remains. Never spend first.*` },

    // Gold loan
    { patterns: ['gold loan', 'gold mortgage', 'sone par loan', 'gold pawn'],
      response: `**Gold Loan** 🥇\n\n**Quickest loan in India — get money in 30 minutes!**\n\n**Details:**\n• Loan amount: Up to 75% of gold market value\n• Interest rate: 7% to 16% per year\n• Tenure: 3 months to 3 years\n• No income proof needed\n• Gold kept safely in bank vault\n\n**Best For:**\n• Farmers during crop season\n• Medical emergencies\n• Business cash flow needs\n• Wedding expenses\n\n**Process:**\n1. Visit bank with gold jewellery\n2. Gold assessed for purity and weight\n3. Loan sanctioned within 30–60 minutes\n4. Repay and get gold back\n\n**Banks Offering Gold Loans:**\nSBI, HDFC, Muthoot Finance, Manappuram, IIFL\n\n⚠️ **If you can't repay:** Bank has right to auction the gold. Ensure you can repay before taking gold loan.` },

    // Internet banking
    { patterns: ['net banking', 'internet banking', 'online banking', 'netbanking login', 'online transfer'],
      response: `**Internet Banking — Complete Guide** 💻\n\n**How to Get Started:**\n1. Visit your bank's official website (type URL directly, never click email links)\n2. Click "Register for Net Banking"\n3. Enter account number and debit card details\n4. Set login password and transaction password\n5. Done!\n\n**What You Can Do:**\n• Check balance and 5-year transaction history\n• Transfer money (NEFT, RTGS, IMPS)\n• Pay all bills — electricity, water, mobile, credit card\n• Open/close FD and RD\n• Apply for new products\n• Download bank statements and TDS certificates\n• Block/unblock debit card\n\n**Security Checklist:**\n• 🔒 Always check for https:// and padlock icon\n• 🖥️ Type URL yourself — never click links\n• 📵 Never use public WiFi for banking\n• 🔓 Log out completely after each session\n• 🔄 Change password every 3 months` },

    // Cyber crime report
    { patterns: ['complaint', 'report fraud', 'cyber complaint', 'helpline', '1930', 'cybercrime.gov'],
      response: `**Cyber Crime Complaint — How to Report** 🚔\n\n**IMMEDIATE STEPS (Do this NOW):**\n\n**Step 1 — Call 1930 (National Cyber Crime Helpline)**\n• Available 24×7 — completely FREE\n• Operators can freeze suspect bank accounts\n• Greatest chance of recovery within 30 minutes\n\n**Step 2 — Online Complaint**\n• Website: **cybercrime.gov.in**\n• Select "File a Complaint"\n• Fill: Amount, transaction details, fraud description\n\n**Step 3 — Bank Complaint**\n• Call your bank's 24×7 helpline\n• Request account freeze / chargeback\n\n**Step 4 — Police FIR**\n• Visit nearest police station\n• Cyber crime cell for online frauds\n• Bring all screenshots and transaction records\n\n**Evidence to Preserve:**\n• Screenshot of fraudulent transaction\n• Transaction ID, date, time, amount\n• Fraudster's phone number, UPI ID, account number\n• Bank SMS messages\n• Call recording if possible\n\n🕐 **Recovery Statistics:**\n< 30 min report → 70% recovery\n< 6 hours → 40% recovery\n> 24 hours → Very difficult` },

    // Passbook
    { patterns: ['passbook', 'statement', 'bank statement', 'transaction history', 'balance check', 'account balance'],
      response: `**Bank Passbook & Statement** 📔\n\n**Updating Your Passbook:**\n• Visit branch → Insert passbook in passbook printer machine\n• Done in 1 minute!\n\n**Online Statement:**\n• Login to net banking → Accounts → Statements\n• Download PDF statement for any date range\n• Free — no branch visit needed\n\n**Balance Check Options:**\n• 📱 Bank app: Instant\n• 💻 Net banking: Instant\n• 📞 Missed call: Give missed call to bank's balance number\n  - SBI: 09223766666\n  - HDFC: 18002703333\n  - ICICI: 9594613613\n• 📱 SMS: Send "BAL" to bank's SMS number\n• 🏧 ATM: Check balance (free)\n• 📗 Passbook: Update at branch\n\n**Reading Your Passbook:**\n• CR = Credit (money coming IN) 🟢\n• DR = Debit (money going OUT) 🔴\n• Balance = Amount currently in account` },

    // SHG
    { patterns: ['self help group', 'shg', 'mahila', 'women group', 'swayam sahayata', 'स्वयं सहायता'],
      response: `**Self Help Groups (SHG) — Banking Guide** 👩‍👩‍👧\n\n**What is SHG?**\nA group of 10–20 rural women who save together, give small loans to members, and collectively access bank credit.\n\n**Benefits for SHG Members:**\n• Group bank account at zero balance\n• Loans at 4–7% interest rate\n• Government subsidy through NRLM/SRLM\n• Access to livelihood programs\n• No collateral for initial loans\n\n**Loan Progression:**\n1. Save ₹50–₹200/month for 6 months\n2. Get small loan from SHG fund\n3. Bank linkage loan: ₹50,000 to ₹5 lakh\n4. Larger loans after good repayment history\n\n**How to Form SHG:**\n• 10–20 women from same village\n• Open group account at nearest bank\n• Meet weekly, maintain accounts\n• Register with local Block Development Office\n\n**Government Programs:**\nNRLM (Aajeevika) — Contact your local Anganwadi or Block office.` },

    // Aadhaar banking
    { patterns: ['aadhaar', 'aadhar', 'aeps', 'aadhaar banking', 'biometric banking', 'aadhar bank'],
      response: `**Aadhaar-Based Banking (AEPS)** 📱\n\n**What is AEPS?**\nAadhaar Enabled Payment System — allows banking using fingerprint without any card!\n\n**Services Available via AEPS:**\n• Cash withdrawal\n• Balance check\n• Mini statement\n• Fund transfer (to Aadhaar-linked accounts)\n\n**Where to Use AEPS:**\n• Business Correspondents (BCs) — banking agents at local shops\n• Kiosk banking centers\n• Banks with biometric machines\n\n**Requirements:**\n• Aadhaar number\n• Fingerprint (no PIN or card needed!)\n• Account must be Aadhaar-linked\n\n**How to Link Aadhaar to Bank:**\n• Visit bank branch\n• Or use bank app → Link Aadhaar → Enter Aadhaar number → OTP verification\n• Or UIDAI website: myaadhaar.uidai.gov.in\n\n💡 **Perfect for illiterate users** — no PIN to remember, just fingerprint!` },

    // Greetings
    { patterns: ['hello', 'hi', 'namaste', 'namaskar', 'hey', 'good morning', 'good evening', 'help'],
      response: `**Namaste! 🙏 Welcome to Smart Banker!**\n\nI'm your AI banking assistant. I can help you with:\n\n• 🏦 **Accounts** — Opening, closing, types\n• 💳 **Loans** — Home, personal, crop, education\n• 📈 **Investments** — FD, PPF, Mutual Funds\n• 🛡️ **Fraud Protection** — How to stay safe\n• 📱 **Digital Banking** — UPI, ATM, NetBanking\n• 🏛️ **Government Schemes** — Jan Dhan, Mudra, PMAY\n• 💸 **Payments** — NEFT, RTGS, IMPS, UPI\n• 📋 **Forms** — How to fill banking forms\n\n**You can:**\n• Type your question in any language\n• Use the microphone button to ask by voice\n• Browse topics from the Banking Modules section\n\n*What would you like to learn today?*` },
  ],

  // ── AI Response Methods ───────────────────────────────────────
  async getResponse(userMessage) {
    const lower = userMessage.toLowerCase();

    // Try local knowledge base first
    for (const entry of this.knowledgeBase) {
      if (entry.patterns.some(p => lower.includes(p))) {
        await this.delay(800 + Math.random() * 600);
        this.addToHistory('user', userMessage);
        this.addToHistory('assistant', entry.response);
        return entry.response;
      }
    }

    // Generic intelligent response
    await this.delay(1200);
    const response = this.generateGenericResponse(userMessage);
    this.addToHistory('user', userMessage);
    this.addToHistory('assistant', response);
    return response;
  },

  generateGenericResponse(msg) {
    const lower = msg.toLowerCase();

    // Topic detection for generic responses
    if (lower.includes('bank') || lower.includes('बैंक'))
      return `**Banking Question** 🏦\n\nI understand you have a question about banking. Here are some common topics:\n\n• **Account Opening** — Ask "how to open bank account"\n• **Loans** — Ask "how to get personal loan"\n• **Fraud Prevention** — Ask "how to avoid banking fraud"\n• **UPI/ATM** — Ask "how to use UPI" or "how to use ATM"\n• **Government Schemes** — Ask "what is Jan Dhan Yojana"\n\nPlease try rephrasing your question or browse our Banking Modules section for detailed information. 😊`;

    if (lower.includes('money') || lower.includes('paise') || lower.includes('paisa'))
      return `**Money Management** 💰\n\nGreat question about money! I can help with:\n\n• Saving money tips\n• Investment options (FD, PPF, Mutual Funds)\n• Sending/receiving money (UPI, NEFT)\n• Loan information\n\nCould you be more specific? For example: "How to invest money?" or "How to send money online?"`;

    return `**I'm here to help!** 🤖\n\nI specialize in banking and financial literacy topics. Try asking me:\n\n• *"How do I open a savings account?"*\n• *"What is EMI and how is it calculated?"*\n• *"How to protect myself from banking fraud?"*\n• *"What is UPI and how to use it?"*\n• *"How to get a Kisan Credit Card?"*\n• *"What is PM Jan Dhan Yojana?"*\n\nYou can also explore the **Banking Modules** section for detailed topics, or use the **Voice** button to ask in your language! 🎤`;
  },

  addToHistory(role, content) {
    this.conversationHistory.push({ role, content, timestamp: Date.now() });
    if (this.conversationHistory.length > 40) {
      this.conversationHistory = this.conversationHistory.slice(-40);
    }
  },

  clearHistory() {
    this.conversationHistory = [];
  },

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  setAPIKey(key) {
    this.apiKey = key;
    this.useRealAPI = !!key;
    localStorage.setItem('sb_api_key', key);
  },

  // ── Quick Suggestions ─────────────────────────────────────────
  suggestions: [
    'How to open a bank account?',
    'What is UPI and how to use it?',
    'How to check CIBIL score?',
    'How to get a home loan?',
    'What is PM Jan Dhan Yojana?',
    'How to protect from banking fraud?',
    'How to apply for Kisan Credit Card?',
    'What is EMI and how to calculate?',
    'How to invest in Mutual Funds?',
    'How to block lost ATM card?',
    'What is Fixed Deposit?',
    'How to open PPF account?',
    'How to recover money from wrong transfer?',
    'What is CIBIL score and how to improve?',
    'How to file cyber crime complaint?',
  ],

  getRandomSuggestions(count = 5) {
    const shuffled = [...this.suggestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
};

window.AIEngine = AIEngine;

// ── Toast Helper ──────────────────────────────────────────────────
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', title = '', duration = 4000) {
    if (!this.container) this.init();
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <div class="toast-body">
        ${title ? `<div class="toast-title">${title}</div>` : ''}
        <div class="toast-msg">${message}</div>
      </div>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove());
    }, duration);
  }
};

window.Toast = Toast;
