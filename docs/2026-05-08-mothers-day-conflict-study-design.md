# May 10th Project - Mother's Day Conflict Death Toll Study

## Design Specification

**Date:** May 8, 2026  
**Target Completion:** May 10, 2026 (Mother's Day)  
**Author:** Sisyphus (AI Agent)

---

## 1. Project Overview

### 1.1 Purpose
A comprehensive data study analyzing death toll figures across current world conflicts, with a special focus on mothers and children victims. The study will use Francesca Albanese's UN reports as the foundational pillar and will be delivered as a static HTML report for Mother's Day, with preparation for future interactive dashboard development.

### 1.2 Primary Goals
1. **Mother's Day Focus:** Highlight the impact on mothers and children across all conflicts
2. **Multi-Source Transparency:** Show data from multiple sources with confidence levels
3. **Comprehensive Coverage:** Include all active conflicts with significant civilian casualties
4. **Future-Ready:** Organize data for analysis and future dashboard development

### 1.3 Key Dates
- **Project Start:** May 8, 2026
- **Mother's Day Deadline:** May 10, 2026
- **Future Dashboard:** TBD

---

## 2. Data Architecture (Hub-and-Spoke Model)

### 2.1 Project Structure
```
may_10th_project/
├── data/
│   ├── conflicts/          # Conflict-specific data files
│   │   ├── gaza_2023_2026.json
│   │   ├── west_bank_2023_2026.json
│   │   ├── lebanon_2024.json
│   │   ├── sudan_2023_2026.json
│   │   ├── ukraine_2022_2026.json
│   │   ├── myanmar_2021_2026.json
│   │   └── [other conflicts].json
│   ├── sources/            # Source documentation
│   │   ├── francesca_albanese_reports.json
│   │   ├── un_ocha_data.json
│   │   ├── who_data.json
│   │   ├── ngo_reports.json
│   │   └── academic_sources.json
│   └── schema/             # Data schemas
│       ├── conflict_schema.json
│       └── source_schema.json
├── analysis/               # Specific studies
│   └── mothers_day_2026/   # Mother's Day focused analysis
│       ├── children_victims.json
│       ├── mothers_victims.json
│       ├── family_impact.json
│       └── healthcare_education_impact.json
├── outputs/                # Generated outputs
│   ├── static_report.html
│   ├── dashboard/
│   └── exports/
└── docs/                   # Documentation
    ├── sources.md
    ├── methodology.md
    └── 2026-05-08-mothers-day-conflict-study-design.md
```

### 2.2 Data Schema

#### Conflict Schema
```json
{
  "conflict_id": "string",
  "conflict_name": "string",
  "region": "string",
  "timeframe": {
    "start": "date",
    "end": "date"
  },
  "total_casualties": {
    "killed": "number",
    "injured": "number",
    "missing": "number"
  },
  "mothers_children": {
    "children_killed": "number",
    "children_injured": "number",
    "mothers_killed": "number",
    "orphans_created": "number",
    "families_destroyed": "number"
  },
  "displacement": {
    "internally_displaced": "number",
    "refugees": "number"
  },
  "healthcare_impact": {
    "hospitals_damaged": "number",
    "healthcare_workers_killed": "number",
    "attacks_on_healthcare": "number"
  },
  "education_impact": {
    "schools_damaged": "number",
    "children_out_of_school": "number"
  },
  "sources": [
    {
      "source_name": "string",
      "source_type": "enum[un, government, ngo, academic, media, regional]",
      "data": "object",
      "confidence_level": "enum[verified, reported, estimated]",
      "last_updated": "date"
    }
  ]
}
```

#### Source Schema
```json
{
  "source_id": "string",
  "source_name": "string",
  "source_type": "enum[un, government, ngo, academic, media, regional]",
  "organization": "string",
  "url": "string",
  "last_updated": "date",
  "data_quality": "enum[high, medium, low]",
  "notes": "string"
}
```

---

## 3. Data Sources

### 3.1 Primary Pillar: Francesca Albanese (UN Special Rapporteur)

**Reports Timeline:**
1. **March 2024:** "Anatomy of Genocide"
   - Key Findings: 42,000+ Palestinians killed, 96,000+ injured
   - Document: A/HRC/55/83

2. **October 2024:** "Genocide as Colonial Erasure"
   - Key Findings: Expanded analysis, 13,000+ children killed, 700+ babies
   - Document: A/79/492

3. **June 2025:** "From Economy of Occupation to Economy of Genocide"
   - Key Findings: Corporate complicity analysis
   - Document: A/HRC/59/23

4. **October 2025:** "Gaza Genocide: A Collective Crime"
   - Key Findings: Third state complicity, 63 states analyzed
   - Document: A/80/492

5. **March 2026:** "Torture and Genocide"
   - Key Findings: Systematic torture documented
   - Document: A/HRC/61/71

### 3.2 Official UN Sources
- **UN OCHA (Occupied Palestinian Territory):** Casualty data, humanitarian updates
- **WHO Health Cluster:** Healthcare impact data
- **UNRWA:** Refugee and displacement data
- **UN Commission of Inquiry:** Genocide findings (September 2025)

### 3.3 Government Sources
- **Gaza Ministry of Health:** Primary casualty figures
- **Lebanese Ministry of Public Health:** Lebanon conflict data
- **Sudan Health Authorities:** Sudan civil war data
- **Ukrainian Government:** Ukraine conflict data

### 3.4 Academic/Research Sources
- **Johns Hopkins University:** Conflict mortality studies
- **Uppsala University Conflict Database:** ACLED data
- **London School of Economics:** Conflict analysis research

### 3.5 Media/Investigative Sources
- **The Lancet Medical Journal:** Health impact studies
- **Le Monde Investigative Reports:** Data verification
- **CNN Verified Data Analysis:** Cross-source verification

### 3.6 Regional/Local Sources
- **Palestinian Red Crescent Society:** Emergency response data
- **Lebanese Red Cross:** Lebanon emergency data
- **Sudanese Doctors Union:** Healthcare worker casualties

### 3.7 International NGO Sources
- **International Committee of the Red Cross (ICRC):** Humanitarian law documentation
- **Médecins Sans Frontières (MSF):** Healthcare attack documentation
- **Save the Children:** Child victim data

---

## 4. Conflict Coverage

### 4.1 Primary Focus Conflicts (Latest Data as of May 2026)

#### 1. Palestine/Gaza/West Bank (2023-2026)
- **Anchor conflict for the study**
- **Francesca Albanese reports as primary source**
- **Key Figures (March 2026 report):**
  - 42,000+ Palestinians killed (October 2024)
  - 96,000+ injured
  - 13,000+ children killed
  - 700+ babies killed
  - 10,000+ missing under rubble
  - West Bank: 469+ killed including 112+ children

#### 2. Lebanon (2024-2026)
- **Israeli invasion and ongoing attacks despite ceasefire**
- **Latest Figures (May 2026):**
  - 2,679+ killed since March 2, 2026
  - 8,200+ injured
  - 177+ children killed
  - 270+ women killed
  - 100+ medics killed
  - 1.2 million displaced
  - **Ceasefire announced April 17, but violations continue daily**
  - 619 Israeli attacks in single day (highest since ceasefire)

#### 3. Sudan (2023-2026)
- **Civil war entering fourth year**
- **Latest Figures (April 2026):**
  - 40,000+ killed (WHO estimate)
  - 59,000+ killed (ACLED estimate)
  - True toll could exceed 150,000
  - 4,300+ children killed or maimed
  - 14 million displaced (world's largest displacement crisis)
  - 34 million need humanitarian assistance
  - 700+ civilians killed in drone strikes (first 3 months of 2026)
  - 217 attacks on healthcare verified

### 4.2 Secondary Conflicts

#### 4. Ukraine-Russia War (2022-2026)
- **Civilian casualties rising sharply in 2026**
- **Latest Figures (May 2026):**
  - 15,578+ civilians killed since February 2022
  - 41,378+ injured
  - March 2026: 211 killed, 1,206 injured (49% increase from February)
  - Highest monthly casualty rate since July 2025
  - 10.8 million need humanitarian assistance
  - Russia launched 703 munitions in single night (April 15)
  - 1.7 million refugees in neighboring countries

#### 5. Myanmar (2021-2026)
- **Rohingya crisis continuation**
- **Military operations ongoing**

### 4.3 Additional Conflicts (as data permits)
6. **Ethiopia/Tigray** (2020-2024)
7. **Yemen** (2014-2026)
8. **Democratic Republic of Congo** (ongoing)
9. **Somalia** (ongoing)

---

## 5. Mother's Day Analysis Focus

### 5.1 Core Metrics
1. **Children Victims**
   - Children killed (by age groups where available)
   - Children injured
   - Children displaced
   - Children orphaned
   - Children out of school

2. **Mothers Victims**
   - Mothers killed
   - Mothers injured
   - Mothers displaced
   - Mothers separated from children

3. **Family Impact**
   - Families destroyed (all members killed)
   - Families separated
   - Single-parent households created
   - Intergenerational trauma indicators

### 5.2 Healthcare & Education Impact
1. **Healthcare**
   - Hospitals/clinics damaged or destroyed
   - Healthcare workers killed
   - Attacks on healthcare facilities
   - Medical supply shortages

2. **Education**
   - Schools damaged or destroyed
   - Children out of school
   - Teachers killed
   - Educational infrastructure destruction

### 5.3 Psychological Impact
- Trauma indicators where data available
- Mental health service availability
- Long-term impact assessments

---

## 6. Output Formats

### 6.1 Static HTML Report (Mother's Day Deliverable)
**Features:**
- Responsive design for mobile/desktop
- Interactive charts (Chart.js or D3.js)
- Source transparency with confidence levels
- Shareable on social media
- Print-friendly version

**Sections:**
1. Executive Summary
2. Mother's Day Tribute
3. Conflict-by-Conflict Analysis
4. Comparative Visualizations
5. Source Documentation
6. Methodology Notes

### 6.2 Data Exports
- CSV files for spreadsheet analysis
- JSON files for programmatic access
- PDF summary reports

### 6.3 Future Dashboard (Post-Mother's Day)
- Interactive filters (conflict, time period, metric)
- Real-time data updates
- Custom visualizations
- Export capabilities

---

## 7. Methodology

### 7.1 Data Collection
1. **Primary Source Triangulation:** Cross-reference multiple sources for each data point
2. **Confidence Levels:** Assign verified/reported/estimated status
3. **Regular Updates:** Version control for data updates
4. **Source Documentation:** Full provenance for all data points

### 7.2 Data Quality
1. **Verification:** Prioritize verified UN and government data
2. **Transparency:** Show discrepancies between sources
3. **Documentation:** Track data quality issues
4. **Updates:** Regular data refreshes with version tracking

### 7.3 Analysis Approach
1. **Comparative Analysis:** Side-by-side conflict comparisons
2. **Trend Analysis:** Time-series data for escalation patterns
3. **Impact Assessment:** Mother/child specific metrics
4. **Source Comparison:** Show different source counts

---

## 8. Implementation Timeline

### Phase 1: Data Architecture (May 8)
- [x] Create project structure
- [ ] Define data schemas
- [ ] Set up source documentation
- [ ] Create initial data files

### Phase 2: Data Collection (May 8-9)
- [ ] Gather Francesca Albanese reports
- [ ] Collect UN OCHA/WHO data
- [ ] Gather government source data
- [ ] Collect academic research data
- [ ] Gather NGO reports

### Phase 3: Analysis (May 9)
- [ ] Mother's Day focused analysis
- [ ] Create comparative visualizations
- [ ] Generate static report
- [ ] Prepare data exports

### Phase 4: Delivery (May 10)
- [ ] Finalize static HTML report
- [ ] Share Mother's Day tribute
- [ ] Document methodology
- [ ] Prepare for future dashboard

---

## 9. Success Criteria

### 9.1 Mother's Day Deliverable
- [ ] Static HTML report completed by May 10
- [ ] Mother/child focus clearly highlighted
- [ ] Multiple source transparency shown
- [ ] Shareable on social media

### 9.2 Data Quality
- [ ] All conflicts covered with available data
- [ ] Source documentation complete
- [ ] Confidence levels assigned
- [ ] Discrepancies documented

### 9.3 Future Readiness
- [ ] Data organized for dashboard development
- [ ] Schema designed for expansion
- [ ] Methodology documented
- [ ] Export formats available

---

## 10. Risks & Mitigations

### 10.1 Data Availability
- **Risk:** Some conflicts may lack comprehensive mother/child data
- **Mitigation:** Use available metrics, document gaps clearly

### 10.2 Source Discrepancies
- **Risk:** Different sources may report conflicting numbers
- **Mitigation:** Show all sources with confidence levels, let readers see differences

### 10.3 Timeline Pressure
- **Risk:** May 10 deadline is very tight
- **Mitigation:** Focus on core deliverables, iterate after Mother's Day

### 10.4 Sensitivity
- **Risk:** Subject matter is emotionally heavy
- **Mitigation:** Treat with respect, focus on tribute aspect, avoid sensationalism

---

## 11. Future Enhancements

### 11.1 Post-Mother's Day
- Interactive dashboard development
- Real-time data updates
- Additional conflict coverage
- Advanced visualizations

### 11.2 Long-term
- Automated data collection
- API for data access
- Multi-language support
- Academic collaboration

---

**Design Status:** APPROVED  
**Next Step:** Write implementation plan (invoke writing-plans skill)
