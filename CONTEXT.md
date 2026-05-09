# May 10th Project — Session Context

## Project Identity
**Name:** Palestine: The Human Cost
**Type:** Data study / Evidence file
**Focus:** Mothers & children killed in Gaza (2023-2026)
**Design Philosophy:** Forensic Architecture methodology — every pixel serves the evidence
**Live:** https://b-pingarron.github.io/may_10th_project/

## Tech Stack
- **Data:** TechForPalestine API (60,199 individual records)
- **Visualization:** Chart.js (8 interactive charts)
- **Design:** HTML/CSS/JS, Fira Sans + Fira Code
- **Hosting:** GitHub Pages (master branch / root)

## Design System (Forensic Investigation)
- **Background:** #0A0A0A (near-black)
- **Surface:** #1A1A1A (dark gray cards)
- **Text:** #FAFAFA (white), #A0A0A0 (gray secondary)
- **Red:** #DC2626 (death/violence only)
- **Green:** #16A34A (Palestinian flag)
- **Typography:** Fira Sans (body), Fira Code (data numbers)
- **Principle:** No decorative colors. Every pixel serves evidence.

## Data Sources (Downloaded)
| File | Size | Records |
|------|------|---------|
| `killed-in-gaza.csv` | 5.9MB | 60,199 individual records |
| `killed-in-gaza.min.json` | 6.6MB | 60,199 (JSON) |
| `casualties_daily.json` | 530KB | Daily toll over time |
| `infrastructure-damaged.json` | 206KB | Damage reports |
| `press-killed.json` | 63KB | Journalist casualties |

**API:** `https://data.techforpalestine.org/api/v3/killed-in-gaza.csv`

## Key Data Points
- **Total killed:** 60,199 (identified names)
- **Children (<18):** 18,457 (30.7%)
- **Babies (<1):** 968 (M: 518 / F: 450)
- **Women (all ages):** 19,209 (31.9%)
- **Hospitals:** 36 pre-war → 10 functional
- **Healthcare workers killed:** 1,722
- **Lancet estimate:** 75,200+ violent deaths (34.7% higher than MoH)

## Installed Tools
- **UI UX Pro Max:** `.opencode/skills/ui-ux-pro-max/` (70K stars, design intelligence)
- **designlang:** `data/design-extract-output/` (Index of Repression extraction)

## Git History (17 commits)
```
7529351 feat: forensic investigation design with evidence-first aesthetic
d745fd5 style: apply UI UX Pro Max design system - pink/red gradient theme
d851a94 feat: rebuild report as Palestine-focused with granular victim data
49021a0 style: restyle report with Index of Repression design language
abc1849 feat: add index.html for GitHub Pages
a659c47 Create static_report_MAIN.html
a2c0440 Create gaza_2023_2026_detailed.json
701cc66 feat: redesign HTML report with cream/green/burgundy/gold theme
32f654d feat: add project README and methodology documentation
f3ed264 feat: create static HTML report with interactive charts
6ea6c95 feat: add Mother's Day analysis files
5c66208 feat: add comprehensive source documentation files
38340d6 feat: add Ukraine-Russia war data
c9f3129 feat: add Sudan civil war data
6fb3ef3 feat: add Lebanon conflict data
81195cd feat: add Gaza and West Bank conflict data
c433b99 feat: add conflict and source data schemas
```

## Session History
**Date:** May 8-9, 2026
**Started:** Multi-conflict Mother's Day study
**Evolved:** Palestine-only forensic evidence file

### Key Decisions
1. Started as multi-conflict (Gaza, Lebanon, Sudan, Ukraine)
2. Pivoted to Palestine-only for depth
3. Used TechForPalestine API for granular data (60,199 records)
4. Installed UI UX Pro Max for design guidance
5. Adopted Forensic Architecture methodology (Akasha persona)
6. Final design: black/white/red forensic investigation aesthetic

## Contact
**Repo:** https://github.com/B-Pingarron/may_10th_project
