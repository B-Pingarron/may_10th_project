# Palestine: The Human Cost

**Live:** https://b-pingarron.github.io/may_10th_project/

## What This Is

A forensic evidence file documenting 60,199 people killed in Gaza since October 7, 2023. Built with data from TechForPalestine's individual-level victim database — names, ages, genders, dates of birth.

This is not a report. This is evidence.

## Data Sources

| Source | Records | Format |
|--------|---------|--------|
| **TechForPalestine** | 60,199 individual records | CSV, JSON |
| **Lancet Gaza Mortality Survey** | 75,200+ estimated deaths | Peer-reviewed study |
| **WHO Health Cluster** | Healthcare infrastructure data | Verified reports |
| **UN OHCHR** | Maternal health impact | Official UN data |
| **Gaza Ministry of Health** | Daily casualty figures | Primary source |

## Key Numbers

- **60,199** people identified killed
- **18,457** children under 18 (30.7%)
- **968** babies under 1 year old
- **19,209** women and girls
- **10** hospitals still functional (from 36)
- **1,722** healthcare workers killed
- **75,200+** estimated total deaths (Lancet)

## How to Use

```bash
# Download the raw data
curl -o killed-in-gaza.csv https://data.techforpalestine.org/api/v3/killed-in-gaza.csv

# Or use the API
curl https://data.techforpalestine.org/api/v3/killed-in-gaza.min.json
```

## Project Structure

```
may_10th_project/
├── index.html                    # Main evidence file
├── data/
│   └── techforpalestine/         # Raw datasets
│       ├── killed-in-gaza.csv
│       ├── casualties_daily.json
│       ├── infrastructure-damaged.json
│       └── press-killed.json
├── design-extract-output/        # Index of Repression extraction
├── .opencode/skills/ui-ux-pro-max/  # Design intelligence
├── docs/                         # Design specs and plans
└── analysis/                     # Mother's Day focused data
```

## Design Philosophy

Following Forensic Architecture's methodology:
- **Every pixel serves the evidence**
- **No decorative colors** — black = death, white = evidence, red = violence
- **Data creates emotional impact** — not sentiment
- **Interactive exploration** — click, filter, discover

## Credits

- **Data:** TechForPalestine collective
- **Design guidance:** UI UX Pro Max, Index of Repression
- **Methodology:** Forensic Architecture

## License

Data sourced from public APIs. Design and analysis original work.
