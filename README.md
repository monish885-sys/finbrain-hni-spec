# FinBrain HNI — Product Bible

Investor-facing **product specification** for FinBrain (CAPSTONE): an AI wealth command layer for Indian HNIs.

The living app is in [`finbrain-hni`](https://github.com/monish885-sys/finbrain-hni). This repo is the narrative + architecture pack.

## Contents

| File | Purpose |
|------|---------|
| `CAPSTONE-Project-Bible.md` | Source of truth (flows, personas, metrics) |
| `CAPSTONE-Project-Bible.html` / `.pdf` | Shareable exports |
| `generate-pdf.js` | Rebuild PDF from markdown |

## Themes covered

- Owner / Family / CA / RM / Successor portals
- Daily Glance, tax firewall, action cards, Fin (ARCHITECT) chat
- Account Aggregator / Setu-style onboarding direction
- Demo family (Kapoor) narrative for investor reviews

## Rebuild PDF

```bash
npm install
node generate-pdf.js
```
