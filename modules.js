/* ================================================================
   Smart Banker — Banking Knowledge Modules
   14 Modules, 100+ Topics with rich educational content
   ================================================================ */

const BankingModules = {
  modules: [
    {
      id: 1,
      icon: '🏦',
      title: 'How Banks Work',
      subtitle: '6 topics · Beginner',
      color: 'rgba(59,130,246,0.12)',
      iconBg: 'rgba(59,130,246,0.2)',
      accent: '#3B82F6',
      topics: [
        { id: 't1_1', icon: '❓', title: 'What is a Bank?', readTime: '3 min', body: `
<h3>What is a Bank?</h3>
<p>A bank is a financial institution that accepts deposits from the public, offers loans, and provides various financial services. Banks act as a bridge between people who have money (savers) and people who need money (borrowers).</p>

<div class="highlight-box">
<strong>💡 Simple Explanation:</strong> Think of a bank as a safe house for your money. You keep money there, it earns interest, and you can take it back anytime. Meanwhile, the bank uses that money to give loans to others and charges them interest.
</div>

<h4>Key Functions of Banks</h4>
<ul>
<li>Accept deposits and keep your money safe</li>
<li>Provide loans for homes, education, businesses</li>
<li>Facilitate payments — NEFT, RTGS, UPI</li>
<li>Issue debit cards, credit cards, cheque books</li>
<li>Foreign exchange services</li>
<li>Lockers for valuables</li>
</ul>

<h4>Why Use a Bank?</h4>
<ul>
<li><strong>Safety:</strong> Your money is insured up to ₹5 lakh by DICGC</li>
<li><strong>Interest:</strong> Earn 3-7% interest on savings</li>
<li><strong>Convenience:</strong> 24×7 ATM, mobile banking, UPI</li>
<li><strong>Credit:</strong> Build credit score for future loans</li>
<li><strong>Government Benefits:</strong> Receive subsidies, pensions directly</li>
</ul>

<div class="tip-box">
<strong>✅ Good to Know:</strong> All banks in India are regulated by the Reserve Bank of India (RBI). Your deposits up to ₹5,00,000 are insured even if the bank fails.
</div>` },

        { id: 't1_2', icon: '🏛️', title: 'Types of Banks in India', readTime: '5 min', body: `
<h3>Types of Banks in India</h3>
<p>India has several types of banks, each serving a specific purpose and population segment.</p>

<h4>1. Reserve Bank of India (RBI)</h4>
<p>The central bank of India — it controls all other banks. RBI sets interest rates, prints currency, and ensures financial stability. It is not a public bank but the banker's bank.</p>

<h4>2. Public Sector Banks (Government Banks)</h4>
<p>These are government-owned banks. Most reliable and widely accessible.</p>
<ul>
<li>State Bank of India (SBI)</li>
<li>Bank of Baroda (BOB)</li>
<li>Punjab National Bank (PNB)</li>
<li>Canara Bank</li>
<li>Union Bank of India</li>
</ul>

<h4>3. Private Sector Banks</h4>
<p>Owned by private shareholders. Often have better technology and service.</p>
<ul>
<li>HDFC Bank</li>
<li>ICICI Bank</li>
<li>Axis Bank</li>
<li>Kotak Mahindra Bank</li>
<li>Yes Bank</li>
</ul>

<h4>4. Regional Rural Banks (RRBs)</h4>
<p>Specially created to serve rural areas. Sponsored by major banks and state governments.</p>

<h4>5. Cooperative Banks</h4>
<p>Owned by member customers. Popular in Maharashtra, Gujarat. Examples: Saraswat Bank, Cosmos Bank.</p>

<h4>6. Small Finance Banks</h4>
<p>Serve small borrowers, microfinance needs. Examples: AU Small Finance Bank, Jana Bank.</p>

<h4>7. Payments Banks</h4>
<p>Accept deposits up to ₹2 lakh but cannot give loans. Examples: Airtel Payments Bank, India Post Payments Bank, Jio Payments Bank.</p>

<div class="highlight-box">
<strong>🎯 For Rural Users:</strong> India Post Payments Bank (IPPB) operates through post offices — available in almost every village. Regional Rural Banks also specifically serve farmers and rural communities.
</div>` },

        { id: 't1_3', icon: '🏛️', title: 'Role of RBI', readTime: '4 min', body: `
<h3>Reserve Bank of India (RBI)</h3>
<p>The Reserve Bank of India is the central bank of India, established on 1 April 1935. It is the backbone of India's financial system.</p>

<h4>What RBI Does</h4>
<ul>
<li>Issues currency notes (except ₹1 coin/note)</li>
<li>Controls money supply and inflation</li>
<li>Sets repo rate (affects home loan & EMI rates)</li>
<li>Regulates all banks and NBFCs</li>
<li>Manages India's foreign exchange reserves</li>
<li>Acts as banker to the government</li>
</ul>

<h4>RBI Protects You</h4>
<ul>
<li>Deposit Insurance: ₹5 lakh per bank per depositor</li>
<li>Banking Ombudsman for resolving complaints</li>
<li>RBI Lokpal — free complaint resolution</li>
</ul>

<div class="tip-box">
<strong>📞 RBI Complaint:</strong> Call 14448 (toll-free) or visit cms.rbi.org.in to file a banking complaint.
</div>` },

        { id: 't1_4', icon: '💻', title: 'Digital Banks & Neo Banks', readTime: '3 min', body: `
<h3>Digital Banks</h3>
<p>Digital banks operate entirely online with no physical branches. They offer banking services through apps and websites.</p>

<h4>Popular Digital Banking Services in India</h4>
<ul>
<li>Jupiter Bank (licensed by Federal Bank)</li>
<li>Fi Money (licensed by Federal Bank)</li>
<li>RazorpayX (business banking)</li>
</ul>

<h4>Benefits</h4>
<ul>
<li>Zero minimum balance</li>
<li>Instant account opening</li>
<li>Higher interest rates on savings</li>
<li>No paperwork</li>
</ul>

<div class="warning-box">
<strong>⚠️ Note:</strong> Always verify that the digital bank is licensed by RBI before opening an account.
</div>` },

        { id: 't1_5', icon: '🤝', title: 'Cooperative Banks', readTime: '3 min', body: `
<h3>Cooperative Banks</h3>
<p>Cooperative banks are owned and managed by their members (customers). They are not-for-profit institutions focused on serving their members.</p>

<h4>Types</h4>
<ul>
<li><strong>Urban Cooperative Banks</strong> — serve urban middle class</li>
<li><strong>District Central Cooperative Banks</strong> — serve rural districts</li>
<li><strong>State Cooperative Banks</strong> — apex cooperative bank per state</li>
</ul>

<h4>Famous Cooperative Banks</h4>
<ul>
<li>Saraswat Cooperative Bank</li>
<li>Cosmos Cooperative Bank</li>
<li>Apna Sahakari Bank</li>
</ul>

<div class="warning-box">
<strong>⚠️ Caution:</strong> Cooperative banks are slightly riskier than public sector banks. Check their RBI license before depositing large amounts.
</div>` },

        { id: 't1_6', icon: '🌾', title: 'Banks for Farmers', readTime: '4 min', body: `
<h3>Banking for Farmers</h3>
<p>India has special banking institutions and schemes designed for farmers and agricultural communities.</p>

<h4>NABARD</h4>
<p>National Bank for Agriculture and Rural Development — provides refinancing to banks that lend to farmers.</p>

<h4>Kisan Credit Card (KCC)</h4>
<ul>
<li>Credit up to ₹3 lakh at 4% interest rate</li>
<li>For seeds, fertilizers, farming expenses</li>
<li>Available at all public sector banks</li>
</ul>

<h4>PM Kisan Scheme</h4>
<p>₹6,000 per year direct transfer to farmers' bank accounts.</p>

<div class="tip-box">
<strong>✅ Apply at:</strong> Your nearest SBI, Bank of Baroda, or Regional Rural Bank for Kisan Credit Card. Documents needed: Aadhaar, land records, passbook photo.
</div>` },
      ]
    },

    {
      id: 2,
      icon: '📂',
      title: 'Opening Bank Accounts',
      subtitle: '7 topics · Beginner',
      color: 'rgba(16,185,129,0.12)',
      iconBg: 'rgba(16,185,129,0.2)',
      accent: '#10B981',
      topics: [
        { id: 't2_1', icon: '💰', title: 'Savings Account', readTime: '4 min', body: `
<h3>Savings Account</h3>
<p>A savings account is the most basic type of bank account. It is designed for everyday banking and saving money.</p>

<h4>Features</h4>
<ul>
<li>Interest rate: 3% to 7% per year</li>
<li>Minimum balance: ₹0 to ₹5,000 depending on bank</li>
<li>Free debit card and cheque book</li>
<li>UPI and internet banking access</li>
<li>Maximum 6 withdrawals per month (in some banks)</li>
</ul>

<h4>Documents Required</h4>
<ul>
<li>Aadhaar Card (mandatory)</li>
<li>PAN Card</li>
<li>Passport-size photograph (2 copies)</li>
<li>Address proof (Aadhaar/Voter ID/Utility bill)</li>
</ul>

<div class="highlight-box">
<strong>🏦 Zero Balance Account:</strong> Open a Basic Savings Bank Deposit Account (BSBDA) at any public bank with ₹0 minimum balance using only Aadhaar card.
</div>

<h4>How to Open Online</h4>
<ol>
<li>Visit the bank's website or app</li>
<li>Click on "Open Savings Account"</li>
<li>Enter Aadhaar and PAN details</li>
<li>Complete video KYC</li>
<li>Account activated instantly!</li>
</ol>` },

        { id: 't2_2', icon: '🏢', title: 'Current Account', readTime: '3 min', body: `
<h3>Current Account</h3>
<p>Current accounts are designed for businesses with high transaction volumes. Unlike savings accounts, there is no limit on the number of transactions.</p>

<h4>Key Features</h4>
<ul>
<li>No limit on transactions per day</li>
<li>Overdraft facility available</li>
<li>Higher minimum balance required (₹5,000–₹50,000)</li>
<li>No interest earned on balance</li>
<li>Free NEFT/RTGS transfers</li>
</ul>

<h4>Who Should Open?</h4>
<ul>
<li>Shop owners, traders</li>
<li>Companies and firms</li>
<li>NGOs and trusts</li>
<li>Professionals with heavy cash flow</li>
</ul>` },

        { id: 't2_3', icon: '👨‍👩‍👧', title: 'Joint Account', readTime: '3 min', body: `
<h3>Joint Account</h3>
<p>A joint account is shared between two or more people. Common for couples, business partners, and family members.</p>

<h4>Operating Modes</h4>
<ul>
<li><strong>Either or Survivor (E or S):</strong> Any one person can operate independently. Most common for couples.</li>
<li><strong>Jointly:</strong> All account holders must sign together for every transaction.</li>
<li><strong>Former or Survivor:</strong> First person operates; second only in case of death.</li>
</ul>

<div class="tip-box">
<strong>💡 Best for Rural Women:</strong> Women in Self Help Groups can open joint accounts to receive government subsidies and loan disbursements together.
</div>` },

        { id: 't2_4', icon: '👶', title: 'Minor Account', readTime: '3 min', body: `
<h3>Minor Account (Children's Account)</h3>
<p>A minor account is for children below 18 years. Parents or guardians operate it until the child turns 18.</p>

<h4>Benefits</h4>
<ul>
<li>Teaches children about money management</li>
<li>No minimum balance at many banks</li>
<li>Scholarship money can be directly credited</li>
<li>Child gets a debit card (limited spending)</li>
</ul>

<h4>Popular Children's Accounts</h4>
<ul>
<li>SBI Pehli Udaan</li>
<li>HDFC Kids Advantage Account</li>
<li>Axis Bank Future Stars</li>
</ul>` },

        { id: 't2_5', icon: '🆓', title: 'Zero Balance Account (Jan Dhan)', readTime: '4 min', body: `
<h3>Zero Balance Account — PM Jan Dhan Yojana</h3>
<p>Under the Pradhan Mantri Jan Dhan Yojana (PMJDY), any Indian citizen can open a zero-balance account with just their Aadhaar card.</p>

<h4>Benefits of Jan Dhan Account</h4>
<ul>
<li>Zero minimum balance — no penalty ever</li>
<li>Free RuPay debit card</li>
<li>₹2 lakh accidental insurance</li>
<li>₹30,000 life insurance</li>
<li>Overdraft up to ₹10,000</li>
<li>Direct Benefit Transfer from government</li>
</ul>

<h4>How to Open</h4>
<ol>
<li>Visit any nearby bank or Business Correspondent</li>
<li>Bring Aadhaar card only</li>
<li>Fill the PMJDY account opening form</li>
<li>Account opens same day!</li>
</ol>

<div class="highlight-box">
<strong>📢 Free at all Banks:</strong> SBI, Bank of Baroda, PNB, and all public sector banks must open Jan Dhan accounts free of charge for all Indians.
</div>` },

        { id: 't2_6', icon: '📄', title: 'Documents Required', readTime: '3 min', body: `
<h3>Documents for Account Opening</h3>

<h4>Identity Proof (any one)</h4>
<ul>
<li>Aadhaar Card ✅ (most preferred)</li>
<li>PAN Card</li>
<li>Passport</li>
<li>Voter ID Card</li>
<li>Driving Licence</li>
</ul>

<h4>Address Proof (any one)</h4>
<ul>
<li>Aadhaar Card (if address matches)</li>
<li>Utility Bill (electricity/water/gas — not older than 3 months)</li>
<li>Rent Agreement</li>
<li>Bank Passbook</li>
</ul>

<h4>For Rural/Small Villages</h4>
<div class="highlight-box">
<strong>📜 No documents? No problem!</strong> Under "Small Account" provision, you can open an account with just your photograph and self-declaration. Balance limited to ₹50,000 per year.
</div>` },

        { id: 't2_7', icon: '🔒', title: 'How to Close an Account', readTime: '3 min', body: `
<h3>How to Close a Bank Account</h3>

<h4>Steps to Close</h4>
<ol>
<li>Visit the branch where your account was opened</li>
<li>Ask for the "Account Closure Form"</li>
<li>Fill the form with your name, account number, reason</li>
<li>Submit debit card, cheque book (if any)</li>
<li>The bank will process closure in 3-7 days</li>
<li>Balance transferred to another account or given in cash</li>
</ol>

<h4>Important Points</h4>
<ul>
<li>Close within 14 days — free of charge</li>
<li>Close after 14 days but within 1 year — ₹500 charge (varies by bank)</li>
<li>Update all linked services (UPI, auto-debit) before closing</li>
<li>File ITR using old account details if needed</li>
</ul>

<div class="warning-box">
<strong>⚠️ Before Closing:</strong> Transfer all auto-debits (EMIs, subscriptions), update your account in government portals (EPFO, income tax), and withdraw all funds.
</div>` },
      ]
    },

    {
      id: 3,
      icon: '💳',
      title: 'Deposits',
      subtitle: '8 topics · Beginner',
      color: 'rgba(245,158,11,0.12)',
      iconBg: 'rgba(245,158,11,0.2)',
      accent: '#F59E0B',
      topics: [
        { id: 't3_1', icon: '💵', title: 'Savings Deposit', readTime: '3 min', body: `<h3>Savings Deposit</h3><p>Simply depositing money into your savings account. Can be done at branch, ATM, or online transfer.</p><h4>Methods</h4><ul><li>Cash deposit at counter</li><li>ATM cash deposit machine</li><li>NEFT/RTGS from another account</li><li>UPI transfer</li><li>Cheque deposit</li></ul><div class="tip-box"><strong>✅ Tip:</strong> Always collect a deposit receipt and verify the amount in your passbook or app immediately.</div>` },
        { id: 't3_2', icon: '📅', title: 'Fixed Deposit (FD)', readTime: '5 min', body: `<h3>Fixed Deposit (FD)</h3><p>A Fixed Deposit is a financial instrument where you deposit a lump sum for a fixed tenure and earn guaranteed interest.</p><h4>Key Features</h4><ul><li>Tenure: 7 days to 10 years</li><li>Interest rate: 5% to 8% per year</li><li>Higher rate for senior citizens (+0.5%)</li><li>Can be broken early (with penalty)</li><li>Loan available against FD</li></ul><h4>FD Interest Calculation</h4><p>For ₹1,00,000 at 7% for 1 year: <strong>₹7,000 interest earned</strong></p><div class="highlight-box"><strong>💡 Tax Saving FD:</strong> 5-year tax saving FD under Section 80C saves up to ₹46,800 in tax.</div>` },
        { id: 't3_3', icon: '🔄', title: 'Recurring Deposit (RD)', readTime: '4 min', body: `<h3>Recurring Deposit (RD)</h3><p>An RD allows you to save a fixed amount every month and earn interest like an FD.</p><h4>How RD Works</h4><ul><li>Deposit ₹500–₹50,000 every month</li><li>For 6 months to 10 years</li><li>Interest rate: 5% to 7.5% per year</li><li>Great for salaried employees to build savings</li></ul><h4>Example</h4><p>₹2,000/month × 12 months × 7% = <strong>₹24,000 + ₹924 interest</strong></p><div class="tip-box"><strong>📱 Auto Debit:</strong> Set up auto-debit from your savings account so your RD never misses a month.</div>` },
        { id: 't3_4', icon: '🏦', title: 'How to Deposit Cash', readTime: '3 min', body: `<h3>How to Deposit Cash at Bank</h3><h4>At Branch Counter</h4><ol><li>Take a Deposit Slip from the counter</li><li>Fill: Account Number, Account Holder Name, Amount, Date</li><li>Submit cash + slip to cashier</li><li>Collect stamped receipt</li></ol><h4>At ATM (Cash Deposit Machine)</h4><ol><li>Insert debit card or select "Cardless"</li><li>Choose "Cash Deposit"</li><li>Enter account number</li><li>Insert cash (₹100, ₹200, ₹500, ₹2000 notes)</li><li>Confirm and collect receipt</li></ol>` },
        { id: 't3_5', icon: '📝', title: 'Cheque Deposit', readTime: '3 min', body: `<h3>How to Deposit a Cheque</h3><h4>Steps</h4><ol><li>Write your account number on the back of the cheque</li><li>Sign on the back (endorsement)</li><li>Fill Cheque Deposit Slip with details</li><li>Submit at the Drop Box or Cash Counter</li><li>Cheque cleared in 1-2 working days</li></ol><div class="warning-box"><strong>⚠️ Check Before Depositing:</strong> Verify the cheque has correct date (not expired), proper signature, and amount in words matches figures.</div>` },
        { id: 't3_6', icon: '📱', title: 'Online Deposit', readTime: '3 min', body: `<h3>Online Deposit Methods</h3><ul><li><strong>UPI:</strong> Instant — no charges</li><li><strong>NEFT:</strong> Same day, batch processing, no charges</li><li><strong>RTGS:</strong> Real-time for amounts above ₹2 lakh</li><li><strong>IMPS:</strong> 24×7 instant transfer</li></ul><div class="tip-box"><strong>💡 Zero Charges:</strong> NEFT and RTGS are free from April 2019 as per RBI guidelines.</div>` },
        { id: 't3_7', icon: '🧮', title: 'Interest Calculation', readTime: '4 min', body: `<h3>How Bank Interest is Calculated</h3><h4>Simple Interest (SI)</h4><p>SI = Principal × Rate × Time / 100</p><p>Example: ₹10,000 × 7% × 1 year = ₹700</p><h4>Compound Interest (CI)</h4><p>CI = P × (1 + r/n)^(n×t) − P</p><p>Most FDs use quarterly compounding. ₹10,000 at 7% compounded quarterly for 1 year = ₹718</p><div class="highlight-box"><strong>✅ Compound Interest grows your money faster!</strong> Always prefer banks that offer quarterly or monthly compounding.</div>` },
        { id: 't3_8', icon: '🏛️', title: 'Post Office Deposits', readTime: '3 min', body: `<h3>Post Office Savings Schemes</h3><p>India Post offers many savings schemes — especially good for rural areas where post offices are more accessible than banks.</p><ul><li><strong>Post Office Savings Account:</strong> 4% interest</li><li><strong>NSC (National Savings Certificate):</strong> 7.7% — 5 years</li><li><strong>Sukanya Samriddhi:</strong> 8.2% — for girl child</li><li><strong>PPF:</strong> 7.1% — 15 years tax-free</li><li><strong>Senior Citizens Savings Scheme:</strong> 8.2%</li></ul>` },
      ]
    },

    {
      id: 4,
      icon: '💸',
      title: 'Withdrawals & Payments',
      subtitle: '7 topics · Beginner',
      color: 'rgba(139,92,246,0.12)',
      iconBg: 'rgba(139,92,246,0.2)',
      accent: '#8B5CF6',
      topics: [
        { id: 't4_1', icon: '🏧', title: 'ATM Withdrawal', readTime: '4 min', body: `<h3>How to Use ATM</h3><ol><li>Insert debit card (chip side up/in)</li><li>Select your language</li><li>Enter 4-digit PIN (cover keypad)</li><li>Choose "Withdrawal"</li><li>Select account type (Savings/Current)</li><li>Enter amount (multiples of ₹100)</li><li>Collect cash and receipt</li><li>Take back your card</li></ol><div class="warning-box"><strong>⚠️ ATM Safety:</strong> Never share PIN. Cover keypad when entering PIN. If someone is watching, cancel and leave. Free ATM withdrawals: 5 per month at own bank ATM, 3 at other banks.</div>` },
        { id: 't4_2', icon: '📱', title: 'UPI Payments', readTime: '5 min', body: `<h3>Unified Payments Interface (UPI)</h3><p>UPI is India's revolutionary real-time payment system. Transfer money instantly 24×7 using just a mobile number or UPI ID.</p><h4>How to Use UPI</h4><ol><li>Download PhonePe, Google Pay, Paytm, or your bank's app</li><li>Link your bank account</li><li>Set 6-digit UPI PIN</li><li>Send money using mobile number, UPI ID, or QR code</li></ol><h4>Key Limits</h4><ul><li>Per transaction limit: ₹1 lakh (₹2 lakh for verified UPI)</li><li>Daily limit: ₹1–5 lakh depending on app</li><li>Free for all transactions</li></ul><div class="warning-box"><strong>🚨 UPI Fraud Alert:</strong> NEVER share UPI PIN, OTP, or scan unknown QR codes. A legitimate UPI request NEVER asks you to enter PIN to receive money.</div>` },
        { id: 't4_3', icon: '🌐', title: 'Internet Banking', readTime: '4 min', body: `<h3>Internet Banking</h3><p>Also called Net Banking or Online Banking — allows full banking from your computer browser.</p><h4>What You Can Do</h4><ul><li>Check balance and statements</li><li>Transfer money (NEFT, RTGS, IMPS)</li><li>Pay bills and credit card bills</li><li>Open FD/RD</li><li>Request cheque book, debit card</li><li>Download TDS certificates</li></ul><div class="tip-box"><strong>🔐 Security Tips:</strong> Always type bank URL directly — never click email links. Log out after every session. Never use public WiFi for banking.</div>` },
        { id: 't4_4', icon: '📲', title: 'Mobile Banking', readTime: '3 min', body: `<h3>Mobile Banking App</h3><p>Bank apps let you do everything from your smartphone. Most Indian banks have excellent mobile apps.</p><h4>Popular Bank Apps</h4><ul><li>YONO (SBI)</li><li>iMobile Pay (ICICI)</li><li>Kotak Mobile Banking</li><li>HDFC Mobile Banking</li><li>BOB World</li></ul><h4>Safety Features</h4><ul><li>Biometric login (fingerprint/face)</li><li>MPIN</li><li>Automatic session timeout</li></ul>` },
        { id: 't4_5', icon: '💵', title: 'Cash Withdrawal Slip', readTime: '3 min', body: `<h3>Bank Withdrawal Slip</h3><h4>How to Fill Withdrawal Slip</h4><ol><li><strong>Date:</strong> Today's date</li><li><strong>Account Number:</strong> Your full account number</li><li><strong>Account Holder Name:</strong> Exactly as on passbook</li><li><strong>Amount in Words:</strong> e.g. "Rupees Two Thousand Only"</li><li><strong>Amount in Figures:</strong> e.g. 2000</li><li><strong>Signature:</strong> Must match bank records</li></ol><div class="warning-box"><strong>⚠️ Important:</strong> Do not overwrite or cancel on the slip. If any mistake, take a new slip. Banks can reject slips with corrections.</div>` },
        { id: 't4_6', icon: '📤', title: 'NEFT, RTGS, IMPS', readTime: '5 min', body: `<h3>Bank Transfer Methods</h3><h4>NEFT — National Electronic Funds Transfer</h4><ul><li>Batch processing — 30 minute cycles</li><li>Any amount from ₹1</li><li>Available 24×7, 365 days</li><li>Free of charge (as per RBI)</li></ul><h4>RTGS — Real Time Gross Settlement</h4><ul><li>Instant transfer — real time</li><li>Minimum ₹2 lakh required</li><li>Available 24×7</li></ul><h4>IMPS — Immediate Payment Service</h4><ul><li>Instant 24×7 transfer</li><li>Up to ₹5 lakh per transaction</li><li>Small charge: ₹5–₹15</li></ul><div class="highlight-box"><strong>💡 Choosing the right method:</strong> Small amounts → NEFT or UPI (free). Large amounts → RTGS. Emergency 24×7 → IMPS or UPI.</div>` },
        { id: 't4_7', icon: '🔄', title: 'NACH / Auto Debit', readTime: '3 min', body: `<h3>Auto Debit & NACH</h3><p>NACH (National Automated Clearing House) allows automatic recurring payments from your account — for EMIs, SIPs, insurance premiums.</p><h4>How to Set Up</h4><ol><li>Sign NACH mandate form provided by the institution</li><li>Submit along with cancelled cheque</li><li>Once approved, payments auto-deduct on due date</li></ol><div class="tip-box"><strong>✅ Benefit:</strong> Never miss an EMI or SIP — avoid late fees and credit score damage.</div>` },
      ]
    },

    {
      id: 5,
      icon: '🏠',
      title: 'Loan Education',
      subtitle: '14 topics · Intermediate',
      color: 'rgba(244,63,94,0.12)',
      iconBg: 'rgba(244,63,94,0.2)',
      accent: '#F43F5E',
      topics: [
        { id: 't5_1', icon: '💼', title: 'Personal Loan', readTime: '5 min', body: `<h3>Personal Loan</h3><p>A personal loan is an unsecured loan (no collateral needed) given for any personal purpose — medical emergency, wedding, travel, home renovation.</p><h4>Key Details</h4><ul><li>Amount: ₹50,000 to ₹40 lakh</li><li>Interest: 10.5% to 24% per year</li><li>Tenure: 1 to 5 years</li><li>Approval: 24–72 hours</li><li>No collateral required</li></ul><h4>Eligibility</h4><ul><li>Minimum age: 21 years</li><li>Minimum salary: ₹15,000–₹25,000/month</li><li>Credit score: 700+ preferred</li><li>Employment: Minimum 1–2 years stable</li></ul><div class="warning-box"><strong>⚠️ Beware Fake Loan Apps:</strong> Real banks NEVER ask for processing fees upfront. Avoid apps promising instant loans without documents — these are scams.</div>` },
        { id: 't5_2', icon: '🏡', title: 'Home Loan', readTime: '6 min', body: `<h3>Home Loan</h3><p>A home loan helps you buy or construct a house by borrowing from a bank, repaid over 15–30 years in EMIs.</p><h4>Details</h4><ul><li>Amount: Up to ₹10 crore</li><li>Interest: 8.5% to 9.5% (varies)</li><li>Tenure: 5 to 30 years</li><li>Tax benefit: Section 80C (principal), Section 24 (interest)</li></ul><h4>Pradhan Mantri Awas Yojana (PMAY)</h4><p>Government subsidy for first-time home buyers:</p><ul><li>EWS/LIG: Up to ₹2.67 lakh subsidy</li><li>MIG I: ₹2.35 lakh subsidy</li><li>Apply at any bank or pmaygramin.nic.in</li></ul>` },
        { id: 't5_3', icon: '📚', title: 'Education Loan', readTime: '5 min', body: `<h3>Education Loan</h3><p>Education loans cover tuition, accommodation, books, and other study expenses — for study in India or abroad.</p><h4>Features</h4><ul><li>Amount: Up to ₹20 lakh (India), ₹1.5 crore (abroad)</li><li>Moratorium: Repayment starts after course + 1 year</li><li>Tax benefit: Section 80E — interest is fully deductible</li><li>No collateral up to ₹7.5 lakh</li></ul><h4>PM Vidyalakshmi Scheme</h4><p>Government-backed education loan portal for meritorious students. Apply at vidyalakshmi.co.in</p>` },
        { id: 't5_4', icon: '🌾', title: 'Crop / Agricultural Loan', readTime: '5 min', body: `<h3>Agricultural / Crop Loan</h3><h4>Kisan Credit Card (KCC)</h4><ul><li>Credit limit: Up to ₹3 lakh</li><li>Interest: 4% per year (with subsidy)</li><li>For: Seeds, fertilizers, equipment, post-harvest</li></ul><h4>Documents for Farmers</h4><ul><li>Aadhaar Card</li><li>Land ownership documents (Khasra, Khatauni)</li><li>Bank passbook</li><li>Passport-size photo</li></ul><div class="tip-box"><strong>✅ Apply at:</strong> Any nationalized bank branch or NABARD-partner bank. Approval within 1–2 weeks for existing customers.</div>` },
        { id: 't5_5', icon: '💯', title: 'Credit Score', readTime: '5 min', body: `<h3>Credit Score (CIBIL Score)</h3><p>Credit score is a number from 300 to 900 that shows how trustworthy you are as a borrower.</p><h4>Score Ranges</h4><ul><li>750–900: Excellent — best loan rates</li><li>650–749: Good — loans available</li><li>550–649: Fair — higher interest rates</li><li>Below 550: Poor — loan rejection likely</li></ul><h4>How to Improve CIBIL</h4><ol><li>Pay all EMIs on time</li><li>Don't use more than 30% of credit card limit</li><li>Don't apply for multiple loans simultaneously</li><li>Maintain older credit accounts</li></ol><div class="tip-box"><strong>📊 Free Credit Report:</strong> Check your CIBIL score free once a year at cibil.com or via bank apps.</div>` },
        { id: 't5_6', icon: '🧮', title: 'EMI Calculator', readTime: '4 min', body: `<h3>Understanding EMI</h3><p>EMI (Equated Monthly Installment) = the fixed monthly payment for your loan.</p><h4>EMI Formula</h4><p>EMI = P × r × (1+r)^n / [(1+r)^n - 1]</p><p>Where: P = Principal, r = Monthly rate, n = Months</p><h4>Example</h4><p>₹5,00,000 loan at 10% for 5 years:</p><p>Monthly EMI ≈ <strong>₹10,624</strong></p><p>Total paid = ₹6,37,440 (Interest = ₹1,37,440)</p><div class="highlight-box"><strong>💡 Golden Rule:</strong> Keep total EMIs below 40% of monthly take-home salary to maintain financial health.</div>` },
        { id: 't5_7', icon: '⚠️', title: 'Loan Default & Consequences', readTime: '4 min', body: `<h3>What Happens if You Default on a Loan</h3><h4>Stages of Default</h4><ol><li><strong>30 days overdue:</strong> Reminder calls and messages</li><li><strong>60 days overdue:</strong> Credit score penalty, late fees</li><li><strong>90 days overdue:</strong> Account marked as NPA (Non-Performing Asset)</li><li><strong>180+ days:</strong> Legal action, asset recovery (for secured loans)</li></ol><div class="warning-box"><strong>⚠️ Never Ignore:</strong> Contact your bank IMMEDIATELY if you cannot pay EMI. Banks can restructure your loan, offer moratorium, or reduce EMI amount. Ask for SARFAESI protection if needed.</div>` },
      ]
    },

    {
      id: 6,
      icon: '📈',
      title: 'Investments',
      subtitle: '12 topics · Intermediate',
      color: 'rgba(16,185,129,0.12)',
      iconBg: 'rgba(16,185,129,0.2)',
      accent: '#10B981',
      topics: [
        { id: 't6_1', icon: '💡', title: 'What is Investment?', readTime: '4 min', body: `<h3>What is Investment?</h3><p>Investment means putting your money to work so it grows over time. Instead of keeping all money in a savings account, you invest it in instruments that give higher returns.</p><h4>Why Invest?</h4><ul><li>Beat inflation (prices rise ~6% per year)</li><li>Build wealth for retirement</li><li>Create passive income</li><li>Achieve financial goals (house, education)</li></ul><h4>Risk vs Return</h4><ul><li>Low risk = Low return (FD, PPF)</li><li>Medium risk = Medium return (Mutual Funds)</li><li>High risk = High potential return (Stocks)</li></ul>` },
        { id: 't6_2', icon: '📊', title: 'Mutual Funds', readTime: '5 min', body: `<h3>Mutual Funds</h3><p>A mutual fund collects money from many investors and invests it in stocks, bonds, or other securities managed by professional fund managers.</p><h4>Types</h4><ul><li><strong>Equity Funds:</strong> Invest in stocks. High risk, high return (12–18% historical)</li><li><strong>Debt Funds:</strong> Bonds and fixed income. Lower risk (6–9%)</li><li><strong>Hybrid Funds:</strong> Mix of both. Balanced risk</li><li><strong>Index Funds:</strong> Track Nifty/Sensex. Low cost, passive</li></ul><h4>Starting with SIP</h4><p>Start with just ₹500/month via SIP (Systematic Investment Plan).</p><div class="tip-box"><strong>📱 Where to Start:</strong> Download Groww, Zerodha Coin, or HDFC Securities app. Complete KYC with Aadhaar and start investing in 10 minutes.</div>` },
        { id: 't6_3', icon: '🏛️', title: 'PPF (Public Provident Fund)', readTime: '4 min', body: `<h3>Public Provident Fund (PPF)</h3><p>PPF is one of India's safest and most tax-efficient investments — backed by the government.</p><h4>Key Features</h4><ul><li>Interest: 7.1% per year (tax-free)</li><li>Tenure: 15 years (extendable)</li><li>Investment: ₹500 to ₹1.5 lakh per year</li><li>Tax benefit: Section 80C deduction + interest tax-free</li><li>Loan against PPF after 3 years</li></ul><div class="highlight-box"><strong>💎 Triple Tax Benefit:</strong> Contribution deductible + Interest tax-free + Maturity tax-free (EEE status). PPF is the best tax-saving investment for most Indians.</div>` },
        { id: 't6_4', icon: '📑', title: 'SIP (Systematic Investment Plan)', readTime: '4 min', body: `<h3>SIP — Systematic Investment Plan</h3><p>SIP is a disciplined way to invest in mutual funds. You invest a fixed amount every month automatically.</p><h4>Power of SIP</h4><p>₹5,000/month for 15 years at 12% CAGR:</p><ul><li>Total invested: ₹9 lakh</li><li>Returns: ₹15.5 lakh</li><li>Total corpus: ₹24.5 lakh!</li></ul><div class="highlight-box"><strong>💡 SIP Benefits:</strong> Rupee cost averaging — you buy more units when markets fall, fewer when they rise. Reduces timing risk.</div>` },
      ]
    },

    {
      id: 7,
      icon: '🎓',
      title: 'Scholarships & Education',
      subtitle: '5 topics · All Levels',
      color: 'rgba(59,130,246,0.12)',
      iconBg: 'rgba(59,130,246,0.2)',
      accent: '#3B82F6',
      topics: [
        { id: 't7_1', icon: '🏆', title: 'Government Scholarships', readTime: '5 min', body: `<h3>Government Scholarships</h3><h4>National Scholarship Portal (NSP)</h4><p>Apply for 50+ central and state scholarships at scholarships.gov.in</p><h4>Major Scholarships</h4><ul><li><strong>NSP Pre-Matric:</strong> For SC/ST/OBC students (class 1-10)</li><li><strong>Post-Matric:</strong> Class 11+ students from weaker sections</li><li><strong>PM Scholarship:</strong> For wards of ex-servicemen</li><li><strong>AICTE Scholarship:</strong> For technical education students</li><li><strong>Inspire Scholarship:</strong> For science students — ₹80,000/year</li></ul><div class="tip-box"><strong>📅 Apply every August-September</strong> on NSP portal. Documents: Aadhaar, income certificate, caste certificate, mark sheets.</div>` },
        { id: 't7_2', icon: '📚', title: 'Education Loans', readTime: '4 min', body: `<h3>Education Loans</h3><p>For students who cannot afford college fees, education loans are available from all major banks.</p><h4>Vidya Lakshmi Portal</h4><p>Apply for education loans from 35+ banks through single portal: vidyalakshmi.co.in</p><h4>Key Benefits</h4><ul><li>Tax deduction on interest (Section 80E)</li><li>No collateral up to ₹7.5 lakh</li><li>Moratorium during study + 1 year</li></ul>` },
        { id: 't7_3', icon: '👩‍💼', title: 'Women Scholarship Schemes', readTime: '3 min', body: `<h3>Special Scholarships for Women</h3><ul><li><strong>Begum Hazrat Mahal:</strong> For minority girls — ₹5,000 to ₹6,000</li><li><strong>Swami Vivekananda Merit:</strong> Top women students</li><li><strong>Pragati:</strong> AICTE scheme for girl students in technical education</li><li><strong>Saksham:</strong> For disabled girl students</li></ul>` },
      ]
    },

    {
      id: 8,
      icon: '💳',
      title: 'Banking Services',
      subtitle: '12 topics · All Levels',
      color: 'rgba(139,92,246,0.12)',
      iconBg: 'rgba(139,92,246,0.2)',
      accent: '#8B5CF6',
      topics: [
        { id: 't8_1', icon: '💳', title: 'Debit Card vs Credit Card', readTime: '5 min', body: `<h3>Debit Card vs Credit Card</h3><h4>Debit Card</h4><ul><li>Uses your own money from savings account</li><li>Cannot overspend</li><li>No interest charges</li><li>Best for everyday use</li></ul><h4>Credit Card</h4><ul><li>Borrows money from bank (up to credit limit)</li><li>Pay later — up to 45 days interest free</li><li>Rewards, cashback, travel points</li><li>Builds credit history</li><li>25–45% annual interest if not paid fully</li></ul><div class="warning-box"><strong>⚠️ Credit Card Rule:</strong> Always pay the FULL outstanding amount before due date. Minimum payment will accumulate heavy interest.</div>` },
        { id: 't8_2', icon: '🔒', title: 'Locker Facility', readTime: '3 min', body: `<h3>Bank Locker</h3><p>Banks offer safe deposit lockers to store valuables — gold, documents, jewellery.</p><h4>Key Points</h4><ul><li>Annual rent: ₹1,000–₹10,000 depending on size and bank</li><li>RBI new guidelines (2023): Bank liable for up to 100x annual rent if locker contents are damaged due to bank negligence</li><li>Two keys needed — bank key + your key</li></ul><div class="tip-box"><strong>📋 Tip:</strong> Always keep an updated list of locker contents at home for insurance purposes.</div>` },
      ]
    },

    {
      id: 9,
      icon: '📋',
      title: 'Banking Forms',
      subtitle: '7 topics · Beginner',
      color: 'rgba(245,158,11,0.12)',
      iconBg: 'rgba(245,158,11,0.2)',
      accent: '#F59E0B',
      topics: [
        { id: 't9_1', icon: '📝', title: 'How to Fill Deposit Slip', readTime: '4 min', body: `<h3>Filling a Deposit Slip</h3><h4>Fields to Fill</h4><ol><li><strong>Branch Name:</strong> Name of bank branch</li><li><strong>Date:</strong> Today's date (DD/MM/YYYY)</li><li><strong>Account Number:</strong> Full 11–18 digit account number</li><li><strong>Account Type:</strong> SB (Savings) or CA (Current)</li><li><strong>Name:</strong> Account holder's full name</li><li><strong>Amount in Words:</strong> Write full amount — "Rupees Five Thousand Only"</li><li><strong>Amount in Figures:</strong> 5000/-</li><li><strong>Denomination:</strong> Count and fill how many notes of each type</li><li><strong>Signature:</strong> Depositor's signature</li></ol><div class="warning-box"><strong>⚠️ Important:</strong> Write "ONLY" after the amount in words. Do not use corrections or whitener. Any error — take a fresh slip.</div>` },
        { id: 't9_2', icon: '✍️', title: 'How to Fill a Cheque', readTime: '5 min', body: `<h3>Filling a Cheque Correctly</h3><h4>Steps</h4><ol><li><strong>Date:</strong> Write current date or future date. Do not post-date beyond 3 months.</li><li><strong>Pay to:</strong> Write the payee's full name. Add "& Co." for businesses.</li><li><strong>Amount in words:</strong> Write in full — "Rupees Ten Thousand Five Hundred Only"</li><li><strong>Amount in figures:</strong> ₹10,500/- (add /- after amount)</li><li><strong>Signature:</strong> Sign exactly as registered with bank</li><li><strong>Cross the cheque:</strong> Draw two parallel lines on top-left for "Account Payee Only" — more secure</li></ol><div class="warning-box"><strong>🚨 Never:</strong> Sign blank cheques. Never overwrite the amount. Do not leave the payee name blank.</div>` },
        { id: 't9_3', icon: '📋', title: 'KYC Form Guide', readTime: '3 min', body: `<h3>KYC (Know Your Customer) Form</h3><p>KYC is mandatory for all bank accounts, loans, and investments. It verifies your identity.</p><h4>Documents for KYC</h4><ul><li>Officially Valid Document (OVD): Aadhaar, Passport, Voter ID, Driving Licence</li><li>Address proof if different from identity</li><li>PAN Card (mandatory for amounts above ₹50,000)</li></ul><h4>Types of KYC</h4><ul><li><strong>Full KYC:</strong> In-person or Video KYC — unlimited account</li><li><strong>Minimum KYC:</strong> Aadhaar OTP — limited to ₹10,000 wallet</li></ul>` },
      ]
    },

    {
      id: 10,
      icon: '🛡️',
      title: 'Fraud Awareness',
      subtitle: '10 topics · Important',
      color: 'rgba(244,63,94,0.12)',
      iconBg: 'rgba(244,63,94,0.2)',
      accent: '#F43F5E',
      topics: [
        { id: 't10_1', icon: '🎣', title: 'Phishing Attacks', readTime: '5 min', body: `<h3>Phishing — How Fraudsters Steal Your Data</h3><p>Phishing is when fraudsters create fake websites, emails, or SMS messages that look like your bank's official communication to steal your login credentials.</p><h4>Examples of Phishing</h4><ul><li>Email: "Your account will be blocked. Click here to verify." (fake link)</li><li>SMS: "Win ₹50,000! Click this link." (malicious)</li><li>WhatsApp: Fake bank KYC update forms</li></ul><h4>How to Protect Yourself</h4><ul><li>Always check the URL — official bank URLs end in .com/.in not .xyz/.net</li><li>Banks NEVER ask for OTP, PIN, or password via SMS/call/email</li><li>Enable SMS alerts for all transactions</li><li>Report phishing to report.phishing@cert-in.org.in</li></ul><div class="warning-box"><strong>🚨 Real Incident:</strong> In 2023, ₹8,000 crore was lost to cyber fraud in India. 90% of cases involved sharing OTP voluntarily.</div>` },
        { id: 't10_2', icon: '📞', title: 'Fake Banking Calls (Vishing)', readTime: '5 min', body: `<h3>Vishing — Voice Phishing Calls</h3><p>Scammers call pretending to be bank officials, RBI employees, or police officers to trick you into sharing account details.</p><h4>Common Scenarios</h4><ul><li>"Your account will be blocked in 2 hours — share OTP to verify."</li><li>"You won ₹1 lakh lottery — pay ₹5,000 processing fee to claim."</li><li>"I'm from RBI investigating your account — share card number."</li><li>"Your UPI has suspicious activity — install this app."</li></ul><h4>Remember</h4><ul><li>RBI NEVER calls individuals</li><li>Banks NEVER ask for OTP or PIN on calls</li><li>No prize requires advance payment</li></ul><div class="warning-box"><strong>📞 If you get suspicious calls:</strong> Hang up immediately. Call your bank's official number (on back of card). Report to 1930 (Cyber Crime Helpline).</div>` },
        { id: 't10_3', icon: '📱', title: 'UPI & QR Code Scam', readTime: '5 min', body: `<h3>UPI Fraud & QR Code Scam</h3><h4>The "Collect Request" Scam</h4><p>Fraudsters send a UPI "collect request" (payment request TO them). Victims think they are receiving money but actually sending it.</p><div class="warning-box"><strong>🚨 RULE:</strong> Entering PIN = SENDING money. You NEVER need to enter PIN to RECEIVE money. If someone asks you to enter PIN to receive money — IT IS A SCAM.</div><h4>QR Code Scam</h4><p>Fraudsters generate QR codes that DEBIT your account when you scan. Never scan QR codes from unknown sources to "receive" money.</p>` },
        { id: 't10_4', icon: '🔄', title: 'SIM Swap Fraud', readTime: '4 min', body: `<h3>SIM Swap Fraud</h3><p>Fraudsters convince your mobile operator to issue a duplicate SIM card. With the new SIM, they receive all your OTPs and take over your bank accounts.</p><h4>Warning Signs</h4><ul><li>Your mobile suddenly shows "No Network" or "Emergency Calls Only"</li><li>You stop receiving calls and SMS</li><li>Unusual banking activity notifications</li></ul><h4>What to Do</h4><ol><li>Immediately call your telecom operator from another phone</li><li>Call your bank's helpline and freeze your account</li><li>File police complaint and report on cybercrime.gov.in</li></ol>` },
        { id: 't10_5', icon: '🏦', title: 'Fake Loan Apps', readTime: '4 min', body: `<h3>Fake Loan App Scams</h3><p>Hundreds of fraudulent lending apps promise instant loans without documents but charge illegal fees, access your contacts, and threaten victims.</p><h4>How to Identify Fake Loan Apps</h4><ul><li>Not registered with RBI (check rbi.org.in for approved lenders)</li><li>Ask for processing fee before disbursing loan</li><li>Request access to all contacts, photos</li><li>Disburse small amount then extort for huge "interest"</li></ul><div class="warning-box"><strong>🚨 Report at:</strong> sachet.rbi.org.in (RBI's portal for reporting illegal lending).</div>` },
      ]
    },

    {
      id: 11,
      icon: '💰',
      title: 'Money Recovery',
      subtitle: '7 topics · Important',
      color: 'rgba(245,158,11,0.12)',
      iconBg: 'rgba(245,158,11,0.2)',
      accent: '#F59E0B',
      topics: [
        { id: 't11_1', icon: '❌', title: 'Wrong UPI Transfer', readTime: '5 min', body: `<h3>Wrong UPI / Bank Transfer — How to Recover</h3><h4>Immediate Steps (within 24 hours)</h4><ol><li>Note the transaction ID, date, amount, and recipient UPI ID</li><li>Contact your bank's customer care immediately</li><li>Request a "chargeback" or "recall" for the wrong transfer</li><li>File complaint on NPCI portal: npci.org.in</li></ol><h4>If Receiver Refuses to Return</h4><ol><li>File complaint at cybercrime.gov.in or call 1930</li><li>File complaint at your local police station</li><li>Approach Banking Ombudsman</li></ol><div class="tip-box"><strong>⏱️ Act Fast:</strong> The faster you report, the higher the chance of recovery. NPCI can freeze the recipient's UPI if fraud is proven.</div>` },
        { id: 't11_2', icon: '⚖️', title: 'Banking Ombudsman', readTime: '4 min', body: `<h3>Banking Ombudsman</h3><p>The Banking Ombudsman is a free government service to resolve banking complaints within 30 days.</p><h4>When to Approach</h4><ul><li>Bank doesn't respond in 30 days</li><li>Unauthorized debit from account</li>
<li>ATM cash not dispensed but amount deducted</li><li>Bank doesn't process fraud complaint</li></ul><h4>How to File</h4><ol><li>Visit cms.rbi.org.in</li><li>Or call RBI Helpline: 14448</li><li>Complaint is free — no lawyer needed</li></ol>` },
        { id: 't11_3', icon: '🚔', title: 'Cyber Crime Complaint', readTime: '4 min', body: `<h3>Filing a Cyber Crime Complaint</h3><h4>National Cyber Crime Portal</h4><p>Website: cybercrime.gov.in</p><p>Helpline: <strong>1930</strong> (24×7, free)</p><h4>Steps</h4><ol><li>Call 1930 immediately — they can freeze suspect accounts</li><li>Visit cybercrime.gov.in</li><li>Click "File a Complaint"</li><li>Fill details: fraud amount, transaction ID, bank account details</li><li>Attach screenshots and evidence</li></ol><div class="highlight-box"><strong>🕐 Golden Window:</strong> If you report within 30 minutes of fraud, there is a 70%+ chance of full recovery. Don't delay!</div>` },
      ]
    },

    {
      id: 12,
      icon: '🔐',
      title: 'Cyber Safety',
      subtitle: '8 topics · Important',
      color: 'rgba(59,130,246,0.12)',
      iconBg: 'rgba(59,130,246,0.2)',
      accent: '#3B82F6',
      topics: [
        { id: 't12_1', icon: '🔑', title: 'Strong Passwords', readTime: '4 min', body: `<h3>Creating Strong Passwords</h3><h4>Rules for Strong Password</h4><ul><li>Minimum 12 characters</li><li>Mix of UPPERCASE, lowercase, numbers, special characters</li><li>Never use name, birthday, phone number</li><li>Different password for each account</li><li>Change every 3–6 months</li></ul><h4>Good Password Examples</h4><ul><li>❌ Bad: sbi1234, myname123</li><li>✅ Good: Tr@vel!ng#2024India</li></ul><div class="tip-box"><strong>🛡️ Use Password Manager:</strong> Google Password Manager or Bitwarden stores and auto-fills strong unique passwords safely.</div>` },
        { id: 't12_2', icon: '📱', title: 'Safe Mobile Banking', readTime: '4 min', body: `<h3>Safe Mobile Banking Practices</h3><ul><li>Only download bank apps from official Play Store/App Store</li><li>Enable fingerprint/face lock on banking apps</li><li>Never install apps from unknown links</li><li>Enable transaction SMS alerts</li><li>Don't use banking apps on public WiFi</li><li>Lock phone immediately after banking</li><li>Enable "Find My Device" to remotely wipe if stolen</li></ul><div class="warning-box"><strong>🚨 Danger:</strong> Screen sharing apps like AnyDesk and TeamViewer used by scammers to view your screen. NEVER install these when asked by unknown callers.</div>` },
        { id: 't12_3', icon: '🏧', title: 'Safe ATM Usage', readTime: '3 min', body: `<h3>Safe ATM Usage</h3><ul><li>Always cover the keypad with your hand when entering PIN</li><li>Look for hidden cameras or card skimmers (check card slot)</li><li>Don't accept help from strangers at ATM</li><li>Use ATMs inside banks or secure locations</li><li>Don't count cash at ATM — count inside</li><li>If card gets stuck, call bank immediately — don't leave</li><li>Check your account balance after every ATM visit</li></ul>` },
      ]
    },

    {
      id: 13,
      icon: '⚖️',
      title: 'Legal Rights',
      subtitle: '7 topics · Advanced',
      color: 'rgba(139,92,246,0.12)',
      iconBg: 'rgba(139,92,246,0.2)',
      accent: '#8B5CF6',
      topics: [
        { id: 't13_1', icon: '📜', title: 'Customer Rights', readTime: '5 min', body: `<h3>Your Banking Rights</h3><p>As a bank customer in India, RBI guarantees you these rights:</p><h4>Key Rights</h4><ul><li><strong>Right to Fair Treatment:</strong> No discrimination based on gender, caste, religion</li><li><strong>Right to Information:</strong> Full disclosure of all charges before applying</li><li><strong>Right to Redressal:</strong> Free complaint resolution through Ombudsman</li><li><strong>Right to Privacy:</strong> Bank cannot share your data without consent</li><li><strong>Right to Education:</strong> Financial literacy materials in regional language</li></ul><h4>Deposit Insurance</h4><p>DICGC insures your deposits up to ₹5 lakh per bank — even if the bank fails.</p>` },
        { id: 't13_2', icon: '🏛️', title: 'Consumer Court', readTime: '4 min', body: `<h3>Consumer Court for Banking Disputes</h3><p>If the Banking Ombudsman doesn't resolve your complaint, you can approach the Consumer Court.</p><h4>Levels</h4><ul><li><strong>District Consumer Forum:</strong> Claims up to ₹1 crore</li><li><strong>State Consumer Commission:</strong> ₹1 crore to ₹10 crore</li><li><strong>National Consumer Commission:</strong> Above ₹10 crore</li></ul><h4>Filing Online</h4><p>Visit consumerhelpline.gov.in or call 1800-11-4000 (toll-free).</p>` },
      ]
    },

    {
      id: 14,
      icon: '🏛️',
      title: 'Government Schemes',
      subtitle: '10 topics · All Levels',
      color: 'rgba(245,158,11,0.12)',
      iconBg: 'rgba(245,158,11,0.2)',
      accent: '#F59E0B',
      topics: [
        { id: 't14_1', icon: '🏦', title: 'PM Jan Dhan Yojana', readTime: '4 min', body: `<h3>Pradhan Mantri Jan Dhan Yojana (PMJDY)</h3><p>Launched in August 2014, PMJDY is the world's largest financial inclusion program.</p><h4>Benefits</h4><ul><li>Zero balance savings account</li><li>Free RuPay debit card</li><li>₹2 lakh accident insurance</li><li>₹30,000 life insurance (for accounts before Jan 2015)</li><li>Overdraft up to ₹10,000 after 6 months</li><li>Direct Benefit Transfer (DBT) enabled</li></ul><h4>How to Open</h4><p>Visit any bank or Business Correspondent with Aadhaar. Account opens same day.</p>` },
        { id: 't14_2', icon: '💼', title: 'PM Mudra Loan', readTime: '5 min', body: `<h3>Pradhan Mantri MUDRA Yojana</h3><p>MUDRA loans are for small business owners and entrepreneurs — no collateral required.</p><h4>Three Categories</h4><ul><li><strong>Shishu:</strong> Up to ₹50,000 (starting businesses)</li><li><strong>Kishor:</strong> ₹50,000 to ₹5 lakh (growing businesses)</li><li><strong>Tarun:</strong> ₹5 lakh to ₹10 lakh (established businesses)</li></ul><h4>Apply At</h4><p>Any bank, MFI, or online at mudra.org.in</p><div class="tip-box"><strong>✅ No Collateral:</strong> MUDRA loans don't require property or gold as security. Good for first-time entrepreneurs.</div>` },
        { id: 't14_3', icon: '🌾', title: 'PM Kisan Samman Nidhi', readTime: '4 min', body: `<h3>PM Kisan Samman Nidhi</h3><p>₹6,000 per year (₹2,000 every 4 months) directly to farmer's bank account.</p><h4>Eligibility</h4><ul><li>All farmers who own cultivable land</li><li>Land ownership must be documented</li><li>Aadhaar linked to bank account</li></ul><h4>Apply at</h4><p>Your village Patwari/Agriculture officer or pmkisan.gov.in</p>` },
        { id: 't14_4', icon: '📊', title: 'Stand Up India Scheme', readTime: '3 min', body: `<h3>Stand Up India Scheme</h3><p>Provides loans to SC/ST and women entrepreneurs for greenfield enterprises.</p><h4>Loan Amount</h4><ul><li>₹10 lakh to ₹1 crore per enterprise</li><li>For manufacturing, services, or trading</li><li>7-year repayment period</li></ul><h4>Apply At</h4><p>Any scheduled commercial bank or standupmitra.in</p>` },
        { id: 't14_5', icon: '👩', title: 'Women Empowerment Schemes', readTime: '4 min', body: `<h3>Banking Schemes for Women</h3><h4>Sukanya Samriddhi Yojana</h4><ul><li>For girl child below 10 years</li><li>Interest: 8.2% (highest government scheme)</li><li>₹250 minimum deposit per year</li><li>Account matures at girl's age 21</li></ul><h4>Mahila Shakti Kendra</h4><p>Government centers that help rural women access banking, government schemes, and financial literacy.</p><h4>Self Help Groups (SHG)</h4><p>Government provides loans at 4-7% interest to SHGs. Women can form groups of 10-20 and get collective loans.</p>` },
        { id: 't14_6', icon: '🏭', title: 'MSME Schemes', readTime: '4 min', body: `<h3>MSME Banking Schemes</h3><h4>Emergency Credit Line Guarantee Scheme (ECLGS)</h4><p>Up to 40% of outstanding loans as additional credit — no collateral. For businesses affected by COVID or seasonal downturns.</p><h4>Credit Guarantee Fund Trust (CGTMSE)</h4><p>Loans up to ₹2 crore without collateral for MSMEs. Government bears the risk.</p><h4>Udyam Registration</h4><p>Register your business as MSME at udyamregistration.gov.in to access all government schemes and loans.</p>` },
      ]
    }
  ],

  getModule(id) {
    return this.modules.find(m => m.id === id);
  },

  getTopic(moduleId, topicId) {
    const module = this.getModule(moduleId);
    return module ? module.topics.find(t => t.id === topicId) : null;
  },

  getProgress(moduleId) {
    const key = `sb_mod_${moduleId}`;
    const done = JSON.parse(localStorage.getItem(key) || '[]');
    const module = this.getModule(moduleId);
    return module ? Math.round((done.length / module.topics.length) * 100) : 0;
  },

  markComplete(moduleId, topicId) {
    const key = `sb_mod_${moduleId}`;
    const done = JSON.parse(localStorage.getItem(key) || '[]');
    if (!done.includes(topicId)) {
      done.push(topicId);
      localStorage.setItem(key, JSON.stringify(done));
    }
  },

  isComplete(moduleId, topicId) {
    const key = `sb_mod_${moduleId}`;
    const done = JSON.parse(localStorage.getItem(key) || '[]');
    return done.includes(topicId);
  }
};

window.BankingModules = BankingModules;
