# CAPSTONE
## Project Bible — Complete Product & Technical Reference

**Version:** 1.0  
**Date:** June 30, 2026  
**Status:** Final Draft — Source of Truth  
**Audience:** Founders, developers, investors, product reviewers, future team members  

---

> **CAPSTONE** = **C**ontinuous **A**sset **P**ortfolio & **T**ax **O**rchestration **N**eural **E**ngine  
>  
> *Your bank sees their book. Your CA sees last year. CAPSTONE sees everything — and tells you what to do today.*

---

## Table of Contents

0. [Anti-Goals Constitution](#0-anti-goals-constitution)
1. [What Is CAPSTONE?](#1-what-is-capstone)
2. [Who Is This For?](#2-who-is-this-for)
3. [The Problem We Solve](#3-the-problem-we-solve)
4. [What Already Exists (And Why It's Not Enough)](#4-what-already-exists-and-why-its-not-enough)
5. [The Six Core Features (Plain English)](#5-the-six-core-features-plain-english)
6. [Full Product Modules](#6-full-product-modules)
7. [How the App Feels to Use](#7-how-the-app-feels-to-use)
8. [System Architecture (For Developers)](#8-system-architecture-for-developers)
9. [Data Sources & Integrations](#9-data-sources--integrations)
10. [Entity & Data Model](#10-entity--data-model)
11. [AI Layer — ARCHITECT](#11-ai-layer--architect)
12. [Security, Privacy & Compliance](#12-security-privacy--compliance)
13. [Business Model](#13-business-model)
14. [Go-to-Market & Roadmap](#14-go-to-market--roadmap)
15. [MVP Build Plan (90 Days)](#15-mvp-build-plan-90-days)
16. [Success Metrics](#16-success-metrics)
17. [Risks & How We Handle Them](#17-risks--how-we-handle-them)
18. [Glossary](#18-glossary)
19. [Appendix: Competitive Landscape](#19-appendix-competitive-landscape)

---

## 0. Anti-Goals Constitution

> **This section is law.** Every feature, integration, AI prompt, and partnership must pass the Anti-Goals Gate before it ships. Full detail: [`docs/anti-goals.md`](anti-goals.md).

CAPSTONE wins by **not** becoming what broke traditional wealth management. Seven rule families:

| # | Rule family | One-line mandate |
|---|-------------|------------------|
| 1 | **Hands-Off** | Observation and orchestration only — never hold money, execute trades, or lend |
| 2 | **Neutral Copilot** | Fee-only; no commission products; cite tax law or refuse; complement CAs and lawyers |
| 3 | **Zero-Trust** | Consent-first sharing; encrypted secrets; no engineer access to raw PII; India residency |
| 4 | **Stay in Lane** | Not ITR filing, not mass-market, not MF distributor or bank app |
| 5 | **Legal boundary** | RIA path for advice; no evasion; no unlicensed NBFC/broker behavior |
| 6 | **Dignity & consent** | No family surveillance; no shame; no dark patterns; succession triggers for vault |
| 7 | **Build what we claim** | Demo and prod both reinforce Action Cards as instructions, never execution |

**The 12 Cardinal Nevers** (abbreviated — see anti-goals doc for full tables):

1. Never hold customer money · 2. Never execute trades · 3. Never lend · 4. Never sell for commission · 5. Never invent tax rules · 6. Never share without consent · 7. Never plain-text credentials · 8. Never offshore data · 9. Never ITR e-filing · 10. Never mass-market simple savers · 11. Never binding legal advice · 12. Never family surveillance without consent

Code constants: `packages/types/src/anti-goals.ts` · Agent gate: `AGENTS.md`

---

## 1. What Is CAPSTONE?

CAPSTONE is an **AI-powered wealth command layer** for High Net-worth Individuals (HNIs) in India.

It is **not**:
- A bank app
- A mutual fund distributor
- An ITR filing website
- A net worth tracker for regular savers

It **is**:
- A single screen that shows **all family wealth** across all accounts, entities, and asset types
- A **24/7 tax radar** that catches problems before the Income Tax Department sends a notice
- An **automated tax-saving engine** that finds legal ways to reduce your tax bill
- An **honesty check** on your wealth managers, who only see their own slice of your money
- A **time machine** that simulates big financial decisions before you make them
- A **survival vault** that tells your family exactly what you own and how to access it if something happens to you

CAPSTONE sits **above** your banks, brokers, PMS managers, and CA. It does not hold your money. It does not sell you products. It gives you **clarity, control, and action**.

---

## 2. Who Is This For?

### Primary user (the "Principal")

| Attribute | Detail |
|-----------|--------|
| **Wealth** | ₹5 Crore to ₹100 Crore investable assets |
| **Profile** | Business owners, tech founders, senior executives, inheritors, promoters |
| **Pain** | Money spread across 10–30 accounts, 2–5 wealth managers, multiple legal entities |
| **Behaviour** | Checks portfolio often, hates tax surprises, wants control without doing everything manually |

### Secondary users (via permissioned access)

| Role | What they need |
|------|----------------|
| **Spouse** | Family net worth view, emergency access |
| **CA / Tax advisor** | Tax ledger, AIS mismatches, harvest recommendations |
| **RM (Relationship Manager)** | Only their bank's slice — never full picture |
| **Family office CIO** | Investment view across entities |
| **Successor** | Emergency playbook only — triggered by event |

### Who this is NOT for

- Salaried employees with one bank account and one demat (use FOLO, CRED, etc.)
- UHNIs (₹500Cr+) who already pay ₹50L+/year for a full family office (may white-label CAPSTONE later)
- People who want someone else to manage everything with zero involvement

### Market size (India, 2026)

- ~390,000 HNWIs, ~$1.65 trillion in wealth (Capgemini World Wealth Report 2026)
- Most HNIs use **multiple wealth managers** — no single firm sees the full picture
- Large share of wealth still managed via Excel, WhatsApp, and informal CA relationships
- India leads globally in AI adoption for finance (86% of affluent investors use AI — HSBC-Ipsos 2026)

---

## 3. The Problem We Solve

### Problem 1: Wealth is invisible and scattered

Your money lives in:
- Personal savings account (HDFC)
- Joint account with spouse (ICICI)
- Hindu Undivided Family (HUF) demat
- Private family trust
- Zerodha for stocks
- Groww for mutual funds
- Two PMS accounts
- One AIF (Alternative Investment Fund)
- Real estate in Jaipur and Mumbai
- Gold, insurance, EPF, NPS

**No one** — not your CA, not your HDFC RM, not your spouse — sees the full picture in real time. Everyone works off outdated PDFs and Excel sheets updated once a quarter.

### Problem 2: Tax notices come from data mismatches, not fraud

The Income Tax Department now knows almost everything you do through:
- **AIS** (Annual Information Statement) — all income reported by banks, brokers, employers
- **26AS** — all TDS deducted
- **TIS** (Taxpayer Information Summary) — summary of what's on file

Your CA files your return based on documents you give them. If a bank reported ₹50 lakh FD interest to the government but your CA missed it in the return — **you get a notice**. This happens to HNIs who pay every rupee of tax correctly. The system is about **reconciliation**, not evasion.

### Problem 3: You overpay tax because no one optimizes across accounts

Tax-loss harvesting means: sell investments that are in a **loss** to offset profits elsewhere, legally reducing tax. Your HDFC wealth manager cannot see your Zerodha losses. Your Zerodha broker cannot see your Groww gains. **Nobody optimizes across all accounts.** HNIs with surcharge pay up to 26% on short-term gains — every unharvested loss costs real money.

### Problem 4: Wealth managers have conflicts of interest

Your HDFC RM earns commission on products they sell you. They only see HDFC holdings. They may recommend a large-cap fund you **already own** in Zerodha — you pay double fees for the same exposure. PMS managers charge 2% + 20% performance fee — but is anyone tracking if they're actually beating the market?

### Problem 5: Big decisions are made on phone calls, not models

"I want to route ₹2 Cr through my HUF to buy commercial property" — your CA gives a verbal answer. No one models the tax saved vs money locked up vs compliance timeline. ₹5 crore decisions deserve more than a 15-minute call.

### Problem 6: Your family is unprepared for emergencies

If something happens to you tomorrow:
- Does your spouse know about all 20+ accounts?
- Are nominees updated everywhere?
- Who has the locker key? The property papers? The unlisted share certificates?

₹2.4 lakh crore lies **unclaimed** in India because families didn't know money existed (industry estimates).

---

## 4. What Already Exists (And Why It's Not Enough)

| Existing Solution | What It Does | Why It Fails for HNIs |
|-------------------|--------------|----------------------|
| **FOLO, Vault, WealthNest** | Net worth app via Account Aggregator | Individual PAN only; no entity graph; no tax engine |
| **NetWorthOS, Famli, BYLD** | AI family wealth (early stage) | No AIS firewall; no cross-broker harvesting; incomplete held-away |
| **HDFC/ICICI Private Banking** | RM + premium card | Only sees own AUM; 3–5 legacy systems internally |
| **Equirus, 360 ONE** | Wealth-tech for their clients | Captive — won't optimize tax on competitor-held assets |
| **EZTax, VittSphere, Saltman** | ITR filing, tax Q&A | Seasonal (March); not continuous; no live portfolio link |
| **Asset Vantage, MProfit** | Family office B2B software | ₹50L+ enterprise; not consumer AI-native |
| **Addepar (global)** | UHNW reporting | No India tax engine; enterprise-only; no AIS integration |

**CAPSTONE's white space:** Unified family wealth + continuous tax simulation + held-away completeness + AI action cards — **institution-neutral**, owned by the HNI.

---

## 5. The Six Core Features (Plain English)

These six features are the heart of CAPSTONE. Everything else in this document supports them.

---

### Feature 1: The "God Mode" Family Dashboard

**The problem in one sentence:**  
Your wealth is a mess of PDFs and CA Excel sheets spread across you, your spouse, an HUF, and a private trust — and nobody sees it all at once.

**What CAPSTONE does:**  
Puts **everything on one screen**. Automatically connects to banks, Zerodha, PMS, real estate records, and more. You open the app and instantly see:

> *"The family is worth ₹42 Crores. ₹18 Cr is in the HUF. ₹12 Cr is yours personally. ₹4 Cr is tied up in real estate."*

No waiting for your CA to manually update a spreadsheet.

**How it works (simple):**

```
YOU open app
    ↓
CAPSTONE pulls data from:
    • Banks (via Account Aggregator)
    • Brokers — Zerodha, Groww, Upstox (via AA + CAS statements)
    • PMS / AIF (via email/CAS parser + manual upload)
    • Real estate (deed upload + valuation)
    • Insurance, EPF, NPS (via AA)
    ↓
CAPSTONE maps everything to the right person/entity:
    • You (individual)
    • Spouse (individual / joint)
    • HUF
    • Family Trust
    • Private Ltd (if applicable)
    ↓
One screen shows family total + breakdown by entity + breakdown by asset type
```

**What the user sees on screen:**

| Section | Example |
|---------|---------|
| Family net worth | ₹800 Cr ▲ ₹1.55 Cr this month |
| By entity | Vikram ₹180 Cr · HUF ₹220 Cr · Trust ₹150 Cr · Ananya ₹65 Cr · Pvt Ltd ₹65 Cr · RE ₹50 Cr · Ramesh ₹45 Cr · Arjun ₹25 Cr |
| By asset class | Equity 32% · Debt 18% · RE 22% · Alts 20% · Cash 8% |
| Held-away alert | 55% of wealth is outside your primary bank |
| Last updated | 4 hours ago (auto-sync) |

**Developer notes:**
- Module name: `EntityWealthGraph`
- Requires: AA integration + off-AA ingestion pipeline + entity ownership mapping
- Key challenge: AA does not support HUF/trust/company accounts natively — need document upload + CA feed for these
- See Section 10 for data model

---

### Feature 2: The Tax-Notice Firewall

**The problem in one sentence:**  
Most tax notices happen because your CA missed a transaction that the government **already knows about** via AIS.

**What CAPSTONE does:**  
Connects to government tax data and runs a **24/7 scan**. If a bank reported ₹50 lakh FD interest to the government but it's missing from your tax file, CAPSTONE flashes a **red warning** and helps fix the mismatch **before** the taxman sends a notice.

**How it works (simple):**

```
CAPSTONE has YOUR data (from banks, brokers, AA)
    +
CAPSTONE has GOVERNMENT data (AIS, 26AS, TIS — with your consent)
    ↓
Every night (and on-demand), CAPSTONE compares:
    "What did the government receive?"  vs  "What does your tax file show?"
    ↓
MISMATCH found?
    → Red alert: "₹50L FD interest from SBI reported in AIS — not in your ledger"
    → Suggested fix: "Add to income under 'Other Sources' — advance tax may apply"
    → One-click export to CA with full reconciliation memo
    ↓
NO mismatch?
    → Green: "AIS clean — last checked 6 hours ago"
```

**Types of mismatches CAPSTONE catches:**

| Mismatch Type | Example | Consequence if missed |
|---------------|---------|----------------------|
| Missing income | FD interest in AIS, not in return | Notice + interest |
| Wrong classification | Foreign stock gain filed as domestic | Scrutiny |
| TDS not claimed | TDS in 26AS, not in return | Lost refund / notice |
| Duplicate reporting | Same gain in AIS twice | Overpayment / notice |
| Schedule FA gap | US brokerage in AIS, not in foreign asset schedule | Black Money Act risk |
| Schedule AL gap | Assets not disclosed (income > ₹1 Cr) | Penalty |

**What the user sees:**

```
┌─────────────────────────────────────────┐
│  TAX-NOTICE FIREWALL          🟢 CLEAN  │
│  Last scan: Today, 3:42 AM              │
├─────────────────────────────────────────┤
│  AIS entries checked:        847         │
│  Matched:                    841         │
│  ⚠️  Needs attention:          6         │
├─────────────────────────────────────────┤
│  🔴 SBI FD interest ₹50L — not in ledger │
│  🟡 Zerodha STCG ₹3.2L — class mismatch  │
│  [View all] [Export to CA] [Fix now]     │
└─────────────────────────────────────────┘
```

**Developer notes:**
- Module name: `TaxNoticeFirewall` / `AISReconciliationEngine`
- Requires: Income Tax portal integration (AIS/26AS/TIS fetch with user consent), broker/bank ledger, diff engine
- Output: Reconciliation report (PDF), CA export, pre-filled ITR draft fields (not filing — preparation)
- Legal: User must authenticate via IT portal credentials or e-Filing API; store encrypted, consent-bound

---

### Feature 3: The "Free Money" Button (Automated Tax Harvesting)

**The problem in one sentence:**  
You pay heavy taxes and surcharges on profits, but no one scans **all your brokers** to find legal loss offsets.

**What CAPSTONE does:**  
Scans every stock and mutual fund you own across **all brokers and entities**. Finds investments currently in a **loss**. Pairs them against your **profits** elsewhere. Gives you an Action Card:

> *"Sell these 400 shares of Tata Steel in your Groww account today. It will offset the profits in your HDFC account and legally save you ₹3.2 Lakhs in taxes this year."*

You review, confirm, and execute (CAPSTONE does not trade — it tells you exactly what to do).

**How it works (simple):**

```
CAPSTONE scans ALL portfolios (lot-level):
    Zerodha: INFY +₹8L (profit), TATASTEEL -₹3.8L (loss)
    HDFC demat: RELIANCE +₹4L (profit)
    Groww MF: Large cap fund -₹1.2L (loss)
    HUF demat: ITC +₹2.5L (profit)
    ↓
Tax engine calculates best pairings:
    "Pair TATASTEEL loss (Groww) against RELIANCE gain (HDFC)"
    "Pair MF loss against INFY gain"
    ↓
Ranks by ₹ saved per ₹ transaction cost
    ↓
Action Card generated:
    WHAT to sell, WHERE, HOW MANY, SAVE how much
    ↓
User: [Export to broker] [Share with CA] [Mark as done]
```

**Action Card example:**

```
┌──────────────────────────────────────────────────┐
│  💰 FREE MONEY — Tax Harvest Opportunity          │
│  Save ₹3,20,000 · Execute by March 12, 2026       │
├──────────────────────────────────────────────────┤
│  SELL: 400 shares TATASTEEL (Groww, Lot #892)     │
│  LOSS: ₹3,80,000 (short-term)                    │
│                                                   │
│  OFFSETS: RELIANCE gain (HDFC demat) ₹4,00,000    │
│                                                   │
│  Without action: Tax ₹1,00,000                    │
│  With action:    Tax ₹22,500                      │
│  YOU SAVE:       ₹77,500 (+ surcharge savings)    │
│                                                   │
│  [Simulate alternatives] [Export] [Done ✓]        │
└──────────────────────────────────────────────────┘
```

**Rules the engine must know (India-specific):**
- STCG on equity: 20% (post July 2024)
- LTCG on equity: 12.5% above ₹1.25L exemption
- Surcharge slabs: up to 37% on income > ₹5 Cr
- No wash-sale rule in India (but CAPSTONE still models repurchase timing)
- Loss carry-forward: 8 years (must file ITR on time)
- Harvest window: typically Jan–March, but opportunities exist year-round

**Developer notes:**
- Module name: `TaxHarvestOrchestrator`
- Requires: Lot-level cost basis across all demats, real-time or EOD prices, tax rule engine
- Does NOT execute trades — generates instructions only
- Must handle: PMS, AIF pass-through gains separately

---

### Feature 4: The Wealth Manager "Honesty Check"

**The problem in one sentence:**  
Your HDFC manager only sees HDFC. Your ICICI guy only sees ICICI. They sell you the same things, double-charge fees, and you never know who's actually performing.

**What CAPSTONE does:**  
Sits **above all of them** (neutral — not tied to any bank). Alerts you when:
- Your HDFC manager recommends a fund you **already own** in Zerodha
- Two PMS managers have **overlapping holdings** (paying double fees for same stocks)
- A PMS manager is **underperforming** the benchmark after fees
- An RM recommends a product with **high commission** when a cheaper direct alternative exists

**How it works (simple):**

```
CAPSTONE knows ALL holdings across ALL institutions
    ↓
When RM sends recommendation (email parse / manual entry / API):
    CAPSTONE checks: "Do you already own this?"
    ↓
YES → Alert: "You already hold this via Zerodha — 68% overlap"
    ↓
CAPSTONE ranks managers quarterly:
    PMS A: +14.2% gross, -2.1% vs Nifty, 2% fee → net underperformer
    PMS B: +11.8% gross, +1.4% vs Nifty, 1.5% fee → net outperformer
    HDFC RM portfolio: 0.8% fee drag on duplicate funds
```

**What the user sees:**

```
┌──────────────────────────────────────────────────┐
│  HONESTY CHECK — Manager Scorecard                │
├──────────────────────────────────────────────────┤
│  ⚠️  ALERT: HDFC RM recommended "ABC Large Cap"   │
│      You already own 68% overlap via Zerodha      │
│      Duplicate fee cost: ~₹42,000/year            │
├──────────────────────────────────────────────────┤
│  PMS RANKING (after fees, 12 months)              │
│  1. Marcellus PMS     +3.2% vs benchmark  ✅       │
│  2. Ambit PMS         +0.8% vs benchmark  ✅       │
│  3. XYZ PMS           -2.1% vs benchmark  🔴       │
├──────────────────────────────────────────────────┤
│  Wallet share: HDFC 24% · Zerodha 31% · ICICI 18% │
│  Held-away from primary RM: 61%                   │
└──────────────────────────────────────────────────┘
```

**Developer notes:**
- Module name: `ManagerHonestyCheck` / `HeldAwayCommandCenter`
- Requires: Full holdings map, benchmark data, fee schedule per product (manual config + AMFI/SEBI data)
- Sensitive: Frame as factual ("overlap detected") not accusatory ("RM is cheating") — legal safety
- RM recommendations: email parser, WhatsApp forward, manual entry in v1

---

### Feature 5: The "Time Machine" Simulator

**The problem in one sentence:**  
You make ₹5 crore decisions based on a 15-minute phone call with your CA — with no model, no timeline, no comparison.

**What CAPSTONE does:**  
You tell the AI what you want to do. It instantly runs the math, compares tax saved vs money locked up, and generates a **12-month compliance calendar** — which forms to file, which accounts to open, when to move money.

**Example user query:**
> *"I want to route ₹2 Cr through my HUF to buy commercial real estate in Pune."*

**What CAPSTONE returns:**

```
┌──────────────────────────────────────────────────┐
│  TIME MACHINE — Scenario Analysis                 │
│  Query: Route ₹2Cr via HUF for Pune commercial RE │
├──────────────────────────────────────────────────┤
│  TAX COMPARISON                                   │
│  Route via personal:  Estimated tax ₹28.4L        │
│  Route via HUF:       Estimated tax ₹18.2L        │
│  SAVINGS:             ₹10.2L                      │
│                                                   │
│  TRADE-OFFS                                       │
│  • HUF money harder to withdraw (partition risk)  │
│  • Stamp duty: ₹12L (Maharashtra, 6%)             │
│  • Rental yield: ~6.5% → ₹13L/year gross          │
│  • Lock-in: Illiquid — 5+ year hold recommended   │
├──────────────────────────────────────────────────┤
│  12-MONTH COMPLIANCE CALENDAR                     │
│  Month 1:  Open HUF current account (SBI)         │
│  Month 1:  Board resolution for property purchase │
│  Month 2:  Transfer ₹2Cr to HUF (gift tax check)  │
│  Month 3:  Execute sale deed — TDS 1% apply        │
│  Month 4:  Register property in HUF name            │
│  Month 5:  Update Schedule AL in HUF ITR            │
│  ...                                              │
│  [Download PDF] [Share with CA] [Save scenario]     │
└──────────────────────────────────────────────────┘
```

**Other scenarios the Time Machine handles:**
- ESOP exercise timing (this FY vs next FY)
- Relocation to Singapore/Dubai (NRI transition)
- Gifting ₹50L to spouse vs HUF vs trust
- Selling property with Section 54 / 54F exemption planning
- LRS remittance for US stock purchase
- AIF commitment timing vs surcharge slab

**Developer notes:**
- Module name: `TimeMachineSimulator` / `ScenarioEngine`
- Requires: Tax rule engine, entity graph, ARCHITECT AI for natural language input
- Output: Structured scenario JSON + human-readable report + calendar (iCal export)
- Every number must cite source rule (IT Act section, state stamp duty schedule)

---

### Feature 6: The "If I'm Gone" Vault

**The problem in one sentence:**  
If something happens to you tomorrow, your family doesn't know where 20+ accounts, unlisted shares, and locker keys are.

**What CAPSTONE does:**
1. **Checks nominees** across every account — flags where nominee is missing or outdated
2. **Creates a secure playbook** — step-by-step guide for spouse/kids
3. **Stores critical documents** — wills, property papers, insurance, locker inventory
4. **Emergency trigger** — if you're unreachable for X days, designated person gets access

**What the playbook contains:**

```
┌──────────────────────────────────────────────────┐
│  IF I'M GONE — Emergency Playbook                 │
│  Prepared for: Priya (spouse)                     │
│  Last updated: June 15, 2026                      │
├──────────────────────────────────────────────────┤
│  STEP 1: Call these people (in order)             │
│    1. Rajesh CA — +91-98xxx — has all tax records │
│    2. HDFC RM Vikram — +91-99xxx — bank accounts  │
│    3. Lawyer Mehta — +91-97xxx — will & trust       │
│                                                   │
│  STEP 2: Access these accounts                    │
│    • HDFC Savings ***4521 — nominee: Priya ✅      │
│    • Zerodha — nominee: MISSING ⚠️ FIX NOW        │
│    • HUF demat — Karta succession: see trust deed │
│                                                   │
│  STEP 3: Physical assets                            │
│    • Locker #442, SBI Bandra — key in home safe     │
│    • Property papers — digital copy in vault        │
│    • Unlisted shares — certificates in locker       │
│                                                   │
│  STEP 4: Total wealth summary                     │
│    Family net worth: ₹800 Cr (as of June 2026)     │
│    [Full breakdown attached — offline PDF]          │
└──────────────────────────────────────────────────┘
```

**Nominee audit example:**

| Account | Institution | Nominee | Status |
|---------|-------------|---------|--------|
| Savings | HDFC | Spouse | ✅ Valid |
| Demat | Zerodha | None | 🔴 Missing |
| MF Folio | ICICI | Father (deceased) | 🔴 Outdated |
| PMS | Marcellus | Spouse | ✅ Valid |
| Insurance | LIC | Spouse | ✅ Valid |

**Developer notes:**
- Module name: `IfImGoneVault` / `SuccessionPlaybook`
- Requires: Nominee data from AA/broker APIs where available; manual entry for rest
- Storage: Encrypted document vault, offline PDF generation, optional dead man's switch (inactivity trigger)
- Legal: Not a will substitute — complementary to legal estate planning
- Access: Role-based; successor role activated only by configured trigger (inactivity / manual / legal event)

---

## 6. Full Product Modules

Beyond the six core features, CAPSTONE includes supporting modules.

### Module A: ARCHITECT (AI Copilot)

- Natural language queries about your wealth
- Every answer cites IT Act / SEBI / RBI source
- Ends in Action Cards, not paragraphs
- Voice + WhatsApp interface for daily use

### Module B: Advance Tax Autopilot

- Quarterly tax liability projection
- Surcharge slab warnings
- 234B/234C interest calculator
- Auto-adjust after harvest events

### Module C: Compliance Radar

- LRS limit tracker (USD 250K/year)
- GIFT City position monitor
- Schedule FA / AL completeness
- Budget impact simulator

### Module D: Advisor Mesh

- Permissioned access for CA, RM, spouse, successor
- Audit trail on every view and export
- Scoped visibility (RM sees only their slice)

### Module E: HNI Intelligence Feed

- Portfolio-specific alerts (not generic market news)
- "Reliance is 8.2% of your wealth — earnings in 4 days"
- "Your PMS underperformed Nifty by 4.1% after fees"

---

## 7. How the App Feels to Use

### Daily glance (30 seconds)

```
┌──────────────────────────────────────────┐
│  FAMILY NET WORTH            ₹800 Cr   │
│  ▲ ₹40L today    Tax saved YTD: ₹1.65 Cr  │
├──────────────────────────────────────────┤
│  🔴 2 Action Cards need attention        │
│  🟡 Advance tax due in 18 days: ₹80L   │
│  🟢 Tax Firewall clean — 6h ago          │
├──────────────────────────────────────────┤
│  Held-away: 55% · Entities: 8          │
│  Nominee gaps: 2 accounts ⚠️              │
└──────────────────────────────────────────┘
```

### Weekly session (10 minutes)

1. Review God Mode dashboard — any drift in allocation?
2. Check Tax Firewall — any new AIS mismatches?
3. Review harvest Action Cards — execute if beneficial
4. Ask ARCHITECT any pending decision

### Monthly session (30 minutes)

1. Manager Honesty Check scorecard
2. Advance tax payment
3. Time Machine for any upcoming big decision
4. Update If I'm Gone vault if anything changed

### Engagement target

| User type | Sessions/week |
|-----------|---------------|
| Normal net worth app | 1–2 |
| **CAPSTONE HNI** | **4–6** |

---

## 8. System Architecture (For Developers)

### High-level architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT APPS                              │
│   iOS · Android · Web · WhatsApp Bot · API (Advisor Mesh)   │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                     API GATEWAY                              │
│   Auth (OAuth2/OIDC) · Rate limit · Audit log               │
└─────────────────────────┬───────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
┌───────▼──────┐  ┌───────▼──────┐  ┌───────▼──────┐
│  WEALTH      │  │  TAX         │  │  AI          │
│  SERVICE     │  │  SERVICE     │  │  SERVICE     │
│              │  │              │  │              │
│ Entity Graph │  │ Firewall     │  │ ARCHITECT    │
│ AA Ingestion │  │ Harvester    │  │ Scenario NLP │
│ Held-Away    │  │ Advance Tax  │  │ Citations    │
│ Real Assets  │  │ AIS Diff     │  │ Action Cards │
└───────┬──────┘  └───────┬──────┘  └───────┬──────┘
        │                 │                 │
┌───────▼─────────────────▼─────────────────▼───────┐
│                   DATA LAYER                       │
│  PostgreSQL (entities, users, permissions)         │
│  TimescaleDB (portfolio snapshots, prices)           │
│  Redis (cache, sessions, job queues)               │
│  S3 (documents, offline PDFs, encrypted vault)       │
│  Vector DB (legal citation graph for ARCHITECT)      │
└───────────────────────┬───────────────────────────┘
                        │
┌───────────────────────▼───────────────────────────┐
│               INTEGRATION LAYER                    │
│  Account Aggregator (TSP) · IT Portal · Brokers   │
│  AMFI/SEBI data · Market data · Email parser       │
└───────────────────────────────────────────────────┘
```

### Recommended tech stack

| Layer | Technology | Why |
|-------|------------|-----|
| Mobile | React Native or Flutter | Single codebase, India-first |
| Web | Next.js | SSR, fast dashboards |
| API | Node.js (NestJS) or Go | Type safety, performance |
| Database | PostgreSQL + TimescaleDB | Relational + time-series for portfolios |
| Cache/Queue | Redis + BullMQ | Job scheduling for nightly AIS scan |
| AI | Claude/GPT + custom RAG | ARCHITECT with citation graph |
| Vector DB | Pinecone or pgvector | Legal knowledge retrieval |
| Infra | AWS Mumbai (ap-south-1) | Data residency in India |
| Secrets | AWS KMS + HashiCorp Vault | Financial data encryption |

### Core services (microservice boundaries)

| Service | Responsibility | Key APIs |
|---------|----------------|----------|
| `wealth-service` | Entity graph, net worth, holdings | `GET /family/networth`, `GET /entities/{id}/holdings` |
| `tax-service` | Firewall, harvester, advance tax | `GET /tax/firewall/status`, `POST /tax/harvest/scan` |
| `ingestion-service` | AA, CAS, email, document parse | `POST /ingest/aa/consent`, `POST /ingest/cas` |
| `ai-service` | ARCHITECT, Time Machine NLP | `POST /ai/ask`, `POST /ai/scenario` |
| `vault-service` | If I'm Gone, documents, nominees | `GET /vault/playbook`, `GET /vault/nominee-audit` |
| `advisor-service` | Permissions, audit, exports | `POST /advisor/invite`, `GET /audit/log` |
| `notification-service` | Push, email, WhatsApp | `POST /notify/action-card` |

### Background jobs (scheduled)

| Job | Frequency | Purpose |
|-----|-----------|---------|
| `aa-sync` | Every 6 hours | Refresh AA data for all consented accounts |
| `ais-reconcile` | Nightly | Tax-Notice Firewall scan |
| `harvest-scan` | Daily (market days) | Tax harvest opportunity detection |
| `price-update` | Every 15 min (market hours) | Mark-to-market for portfolios |
| `nominee-audit` | Weekly | Check nominee status across accounts |
| `advance-tax-reminder` | 7 days before due date | Quarterly advance tax alerts |
| `consent-expiry` | Daily | AA consent renewal reminders |

---

## 9. Data Sources & Integrations

### Tier 1: Account Aggregator (RBI-regulated)

**What it covers:** Bank savings, FD, RD, MF folios, demat equity, ETFs, NPS, insurance policies.

**How to integrate:** Via TSP (Technology Service Provider) — no NBFC licence needed for startup.

**Limitations (critical for developers):**

| Gap | Workaround |
|-----|------------|
| No joint accounts | Manual link + spouse consent |
| No NRE/NRO | Manual statement upload |
| No HUF/trust/company accounts | Document upload + CA feed |
| No PMS/AIF | CAS email parser |
| No real estate | Deed upload |
| Consent expires | Recurring consent UX + reminders |

### Tier 2: Off-AA ingestion

| Source | Method | Data |
|--------|--------|------|
| Zerodha/Groww/Upstox | CAS PDF + API where available | Lot-level holdings, P&L |
| PMS/AIF | Quarterly CAS email + manual | NAV, commitments, distributions |
| Real estate | Sale deed upload + AI extract | Owner, value, location |
| Unlisted/ESOP | Cap table upload | Shares, vesting schedule |
| Global brokers | Statement upload | USD holdings |
| IT Portal | User consent + API/scrape | AIS, 26AS, TIS |

### Tier 3: Market & reference data

| Data | Source |
|------|--------|
| Stock/MF prices | NSE/BSE feed, AMFI |
| Benchmarks | Nifty 50, Nifty 500, custom |
| Tax rules | Internal rules engine (versioned per FY) |
| Legal citations | IT Act, CBDT circulars (vector indexed) |

---

## 10. Entity & Data Model

### Core entities (simplified ER)

```
Family
  └── Person (individual, has PAN)
  └── LegalEntity (HUF, Trust, PvtLtd)
        └── has PAN / registration
        └── has members (Person[])
        └── owns Asset[]

Asset
  └── type: equity | mf | fd | pms | aif | re | gold | insurance | loan | other
  └── custodian: institution name
  └── held_by: Person | LegalEntity
  └── lots: Lot[] (for tax purposes)
  └── nominee: Person | null
  └── source: aa | cas | manual | document_ai

Lot
  └── quantity, buy_date, buy_price, asset_ref
  └── used for: STCG/LTCG calculation, harvest pairing

TaxLedger
  └── fy: 2025-26
  └── realized_gains[], unrealized_gains[]
  └── ais_entries[], mismatches[]
  └── advance_tax_payments[]

ActionCard
  └── type: harvest | firewall_fix | nominee_fix | manager_alert
  └── status: pending | done | dismissed
  └── savings_inr: number
  └── deadline: date
  └── instructions: text

Scenario
  └── query: natural language
  └── assumptions: json
  └── outcomes: [{ path, tax, timeline }]
  └── calendar: [{ month, action }]
```

### Entity graph example (JSON)

```json
{
  "family_id": "fam_kapoor_001",
  "total_net_worth_inr": 80000000000,
  "entities": [
    {
      "id": "person_001",
      "type": "individual",
      "name": "Vikram",
      "pan": "ABCKP1234A",
      "net_worth_inr": 18000000000
    },
    {
      "id": "huf_001",
      "type": "huf",
      "name": "Kapoor HUF",
      "pan": "ABCKP5678H",
      "karta": "person_001",
      "net_worth_inr": 22000000000
    },
    {
      "id": "trust_001",
      "type": "private_trust",
      "name": "Kapoor Family Trust",
      "net_worth_inr": 15000000000
    }
  ],
  "held_away_pct": 55,
  "last_sync": "2026-06-30T04:00:00Z"
}
```

---

## 11. AI Layer — Fin (via ARCHITECT)

> **Naming:** **Fin** is CAPSTONE’s main buddy (brain + operating desk). **ARCHITECT** is the owner-portal chat surface that calls Fin. CA workspace, family/Advisor Mesh, and other agents also call Fin. Full architecture: [`docs/ca-buddy.md`](ca-buddy.md), visual map: [`docs/mastery.md`](mastery.md), training: [`docs/ca-buddy-training.md`](ca-buddy-training.md), build: [`docs/build-plan.md`](build-plan.md) Track B. Code: `packages/ca-buddy`.

### What Fin is

Fin is CAPSTONE’s AI buddy — not a generic ChatGPT wrapper. It is grounded on:
1. **Your** entity graph and portfolio (**brainset**)
2. **India-specific** tax and regulatory rules (citation-backed) — shared **bible**
3. **Your** goals, life events, and family structure

Fin works **on-demand** (chat) and as a **proactive operating desk** (daily Day Plans → CA review → HNI approval; unique FY/Q calendars per brainset). Sub-buddies specialize lanes (tax, firewall, harvest, calendar, FEMA, risk).

### ARCHITECT / Fin rules (non-negotiable)

1. Every tax claim must cite IT Act section or CBDT circular
2. Never recommend a specific product for commission
3. Always end with an Action Card or explicit "consult your CA"
4. Never execute trades or move money; Day Plans need CA then HNI approval
5. Log every conversation and desk run for audit

### RAG architecture

```
Trigger (user / CA / agent / desk wake)
    ↓
Intent classifier (tax / portfolio / scenario / compliance / desk)
    ↓
Retrieve: brainset context + relevant legal corpus
    ↓
Calculators for numbers (LLM never invents tax math)
    ↓
LLM generates answer with inline citations
    ↓
Action Card / Day Plan (if applicable) → CA → HNI when desk path
    ↓
Response to surface
```

### Example prompts Fin handles (via ARCHITECT)

| User says | Fin does |
|-----------|----------|
| "What's my real exposure to IT stocks?" | Sums across all entities and brokers |
| "Can I gift ₹50L to my HUF?" | Checks clubbing rules, gift tax, cites Section 64 |
| "I'm moving to Singapore" | NRI transition checklist for YOUR portfolio |
| "Do I need to pay advance tax this quarter?" | Calculates from realized + projected gains |

---

## 12. Security, Privacy & Compliance

### Data security

| Measure | Implementation |
|---------|----------------|
| Encryption at rest | AES-256 (AWS KMS) |
| Encryption in transit | TLS 1.3 |
| PII isolation | Separate schema per family |
| Document vault | Client-side encryption option for wills |
| Access audit | Every read/write logged with timestamp + actor |
| No human access | Policy: engineers never view raw financial data |

### Regulatory posture

| Requirement | Approach |
|-------------|----------|
| SEBI investment advice | Register as RIA (fee-only) or partner with existing RIA |
| Account Aggregator | FIU via TSP route |
| Income Tax data | User consent; read-only; never store IT portal password in plain text |
| Data residency | All data in India (AWS ap-south-1) |
| No execution | CAPSTONE advises; user executes via own broker/bank |

### What CAPSTONE never does

See **[§0 Anti-Goals Constitution](#0-anti-goals-constitution)** and [`docs/anti-goals.md`](anti-goals.md) for the complete, binding list. Summary:

- Holds customer money or acts as payment intermediary
- Executes trades, moves money, or auto-runs Action Cards
- Facilitates lending or NBFC-style credit
- Sells financial products for commission or kickbacks
- Shares data with banks, RMs, or family without explicit consent
- Stores IT portal or broker credentials in plain text
- Hosts user data outside India
- Files ITR or substitutes for CA on contested positions
- Provides binding legal advice (complements lawyer; does not replace)
- Invent tax rules without IT Act / CBDT citation
- Surveils family members or exposes minors without guardian consent
- Uses portfolio data for model training without opt-in

---

## 13. Business Model

### Pricing

| Plan | Price/year | Includes |
|------|------------|----------|
| **CAPSTONE Individual** | ₹1.5L | 1 person, 1 entity, core 6 features |
| **CAPSTONE Family** | ₹3.5L | Up to 4 members, 3 entities, Advisor Mesh |
| **CAPSTONE Enterprise** | ₹8L+ | Unlimited entities, MFO white-label, API access |

### Revenue principles

- **Fee-only** — no AUM commission, no product distribution
- **Value-aligned** — optional 10% of documented tax saved (performance component)
- **Advisor seats** — ₹25K/seat/year for CA access

### Unit economics (target)

| Metric | Target |
|--------|--------|
| ARPU | ₹3.5L/year |
| CAC | ₹50K (via CA channel) |
| LTV (5 year) | ₹15L+ |
| Gross margin | 75%+ (software, not people-heavy) |
| Payback | Customer saves ₹3L+ tax in year 1 → easy ROI proof |

---

## 14. Go-to-Market & Roadmap

### Phase 1 (Months 0–12): Wedge

**Target:** Tech founders, active traders, ESOP holders with ₹5Cr+

**Ship:**
- God Mode Dashboard (individual + 1 entity)
- Tax-Notice Firewall
- Free Money Button (harvest)
- ARCHITECT v1

**Channel:** CA partnerships, founder communities, Twitter/LinkedIn

### Phase 2 (Months 12–24): Depth

**Ship:**
- Full entity graph (HUF, trust)
- Honesty Check
- Time Machine
- If I'm Gone Vault
- Advisor Mesh

**Channel:** Family office referrals, private bank neutral partnerships

### Phase 3 (Months 24–36): Scale

**Ship:**
- NRI/global Indian support
- MFO white-label
- API for external advisors

**Channel:** B2B2C via CA firms and wealth platforms

---

## 15. MVP Build Plan (90 Days)

### Sprint 1 (Days 1–30): Foundation

- [ ] User auth, family setup, entity creation
- [ ] AA integration via TSP (bank + MF + demat)
- [ ] God Mode Dashboard v1 (single person, AA data only)
- [ ] Basic net worth calculation

### Sprint 2 (Days 31–60): Tax Core

- [ ] CAS import (Zerodha, Groww) for lot-level data
- [ ] Tax ledger (STCG/LTCG calculation)
- [ ] Tax-Notice Firewall v1 (manual AIS upload → diff)
- [ ] Free Money Button v1 (harvest scan, Action Cards)

### Sprint 3 (Days 61–90): AI + Polish

- [ ] ARCHITECT v1 (portfolio-aware Q&A)
- [ ] Advance tax projection
- [ ] Nominee audit (manual entry)
- [ ] Mobile app beta (iOS + Android)
- [ ] 10 pilot families onboarded

### Explicitly NOT in MVP

- Trade execution
- Product distribution / MF buying
- Lending
- Full IT portal API (manual AIS upload OK for v1)
- HUF/trust automation (manual entry OK for v1)

---

## 16. Success Metrics

| Metric | Month 6 | Month 12 | Month 36 |
|--------|---------|----------|----------|
| Families onboarded | 50 | 500 | 8,000 |
| Avg net worth tracked | ₹10 Cr | ₹12 Cr | ₹18 Cr |
| Weekly active rate | 45% | 55% | 70% |
| Tax documented saved (cumulative) | ₹5 Cr | ₹50 Cr | ₹800 Cr |
| Firewall mismatches caught | 200 | 2,000 | 30,000 |
| NPS | 60 | 65 | 75 |
| ARPU | ₹2L | ₹2.5L | ₹4L |

---

## 17. Risks & How We Handle Them

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| AA doesn't cover PMS/HUF | High | High | Document AI + CAS parser from Day 1 |
| SEBI advice regulations | Medium | High | Fee-only RIA registration |
| Banks build similar | Low | Medium | Banks can't show competitor held-away (structural conflict) |
| Data inaccuracy | Medium | High | Confidence scores; human verify for off-AA |
| User trusts AI too much | Medium | High | Always cite sources; "consult CA" for edge cases |
| IT portal API changes | Medium | Medium | Manual AIS upload fallback |
| Competitor copies | Medium | Medium | Entity graph + tax engine depth = 18mo moat |

---

## 18. Glossary

| Term | Meaning |
|------|---------|
| **HNI** | High Net-worth Individual — typically ₹5 Cr+ investable wealth |
| **UHNW** | Ultra High Net-worth — typically ₹50 Cr+ or $30M+ |
| **AA** | Account Aggregator — RBI-regulated data sharing framework |
| **FIP** | Financial Information Provider — bank/broker that shares data |
| **FIU** | Financial Information User — app that receives data (CAPSTONE) |
| **TSP** | Technology Service Provider — integrates AA without own licence |
| **AIS** | Annual Information Statement — government's record of your income |
| **26AS** | Tax credit statement — all TDS deducted on your PAN |
| **TIS** | Taxpayer Information Summary — summary from IT portal |
| **HUF** | Hindu Undivided Family — tax entity for Hindu families |
| **PMS** | Portfolio Management Service — min ₹50L, professional stock management |
| **AIF** | Alternative Investment Fund — min ₹1Cr, PE/VC/credit funds |
| **LRS** | Liberalised Remittance Scheme — $250K/year overseas remittance limit |
| **STCG** | Short Term Capital Gains — held < 12 months (equity) |
| **LTCG** | Long Term Capital Gains — held > 12 months (equity) |
| **Harvesting** | Selling losers to offset gains and reduce tax |
| **Held-away** | Assets not managed by your primary advisor/bank |
| **RIA** | Registered Investment Adviser — SEBI-regulated fee-only advisor |
| **CAS** | Consolidated Account Statement — all MF holdings in one PDF |
| **Schedule FA** | Foreign Assets schedule in ITR |
| **Schedule AL** | Assets & Liabilities schedule (income > ₹1 Cr) |
| **RM** | Relationship Manager — bank wealth advisor |
| **ARCHITECT** | Owner-portal chat surface that calls Fin |
| **Fin** | CAPSTONE’s main buddy — brain + operating desk |

---

## 19. Appendix: Competitive Landscape

| Company | Category | Strength | Gap vs CAPSTONE |
|---------|----------|----------|-----------------|
| FOLO | Net worth app | AA aggregation, 500+ sources | No tax engine, no entities |
| Vault | Net worth app | AI categorization | No firewall, no harvest |
| WealthNest | Family office app | 4I framework (investment, insurance, tax, inheritance) | Tax/inheritance "coming soon" |
| NetWorthOS | HNI platform | Genie AI, If I'm Gone | Early stage; no AIS firewall |
| Famli | Family wealth | SEBI RIA, ISO 27001 | No continuous tax simulation |
| Equirus | Wealth firm tech | Research integration | Captive to Equirus AUM |
| 360 ONE | Private bank tech | RM workbench, held-away | Captive to 360 ONE clients |
| EZTax | Tax filing | HNI ITR, 42 countries | Seasonal; no live portfolio |
| VittSphere | AI personal CFO | Capital gains tracker | Mass affluent; not entity graph |
| Saltman | Tax AI | Citation-backed Q&A | No portfolio integration |
| Asset Vantage | Family office B2B | Entity reporting, GL | Enterprise ₹50L+ ACV |
| Addepar | Global UHNW | Entity look-through, 500+ feeds | No India tax; enterprise only |

---

## Document Control

| Field | Value |
|-------|-------|
| Document title | CAPSTONE Project Bible |
| Version | 1.0 |
| Author | CAPSTONE Founding Team |
| Created | June 30, 2026 |
| Next review | September 30, 2026 |
| Classification | Internal / Confidential |

---

**End of Document**

*This is the single source of truth for the CAPSTONE project. Any feature, technical, or business decision should be traceable to this document. Update version number and changelog when making material changes.*
