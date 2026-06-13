// Verified restrictions data — updated quarterly
// Last updated: 2026-06-13
// Status taxonomy:
//   "federal"  = nationwide federal/central government ban or removal
//   "sector"   = restricted in specific critical sectors (defense, telecom, energy)
//   "procure"  = procurement preference excludes Chinese-manufactured cameras
//   "guidance" = official advisory or guidance against Chinese cameras (not yet binding)
//   "watch"    = active debate / pending legislation

export const REGIONS = [
  { id: "all", label: "All regions" },
  { id: "americas", label: "Americas" },
  { id: "europe", label: "Europe" },
  { id: "apac", label: "Asia–Pacific" },
  { id: "meea", label: "Middle East & Africa" },
];

export const STATUS_TYPES = [
  { id: "all", label: "All statuses" },
  { id: "federal", label: "Federal ban", color: "#7A0301", bg: "#FDE8E8" },
  { id: "sector", label: "Sector ban", color: "#8A4A02", bg: "#FFF3E0" },
  { id: "procure", label: "Procurement bar", color: "#5A4202", bg: "#FFF7E0" },
  { id: "guidance", label: "Official guidance", color: "#0E5A1F", bg: "#E8F5E9" },
  { id: "watch", label: "Watch list", color: "#384B7A", bg: "#E8EDF5" },
];

export const RESTRICTIONS = [
  {
    country: "United States", code: "US", region: "americas", status: "federal",
    regulation: "NDAA Section 889",
    year: 2019, effective: "Aug 2019; expanded 2020",
    scope: "Federal agencies, federal contractors, federally-funded organisations.",
    detail: "Section 889 of the John S. McCain NDAA prohibits US federal agencies and their contractors from procuring or using telecommunications and video surveillance equipment from named Chinese manufacturers. Extended to grantees in 2020. State-level follow-on legislation in TX, FL, GA, LA, AR, VT, CT.",
    source: "https://www.congress.gov/bill/115th-congress/house-bill/5515",
  },
  {
    country: "United Kingdom", code: "GB", region: "europe", status: "federal",
    regulation: "Cabinet Office instruction; Procurement Act 2023",
    year: 2022, effective: "Nov 2022",
    scope: "Sensitive government sites and core procurement.",
    detail: "Cabinet Office instructed all government departments to stop deploying Chinese-manufactured surveillance equipment on sensitive sites and to remove existing equipment where feasible. Procurement Act 2023 codified supplier-exclusion grounds covering supply-chain risk.",
    source: "https://www.gov.uk/government/news/government-departments-told-to-remove-chinese-surveillance-equipment",
  },
  {
    country: "Australia", code: "AU", region: "apac", status: "federal",
    regulation: "Federal audit + removal directive; SOCI Act 2018+",
    year: 2023, effective: "Feb 2023",
    scope: "Federal departments, defense, critical infrastructure operators.",
    detail: "Following a Senate audit, the federal government ordered removal of Chinese-manufactured cameras from Defence and DFAT sites. State governments and several universities followed. Security of Critical Infrastructure Act compliance obligations extend supply-chain scrutiny to telecom, energy, water and transport.",
    source: "https://www.abc.net.au/news/2023-02-09/chinese-made-security-cameras-government-buildings/101942570",
  },
  {
    country: "Japan", code: "JP", region: "apac", status: "procure",
    regulation: "METI procurement guidance",
    year: 2018, effective: "Dec 2018",
    scope: "Central government, defense, sensitive ministries.",
    detail: "Ministry of Economy, Trade and Industry restricted Chinese surveillance equipment in government procurement, aligned with US export-control measures. Japan was the first major Western-aligned economy to formalize procurement restrictions.",
    source: "https://www.reuters.com/article/us-japan-china-tech-idUSKBN1OA0L4",
  },
  {
    country: "Canada", code: "CA", region: "americas", status: "federal",
    regulation: "Federal department directives",
    year: 2023, effective: "May 2023",
    scope: "Federal departments, Crown corporations.",
    detail: "Following the US lead, Canadian federal departments began removing Chinese-manufactured cameras from federal facilities. Procurement Canada applies enhanced supply-chain scrutiny.",
    source: "https://www.cbc.ca/news/politics/chinese-cameras-federal-buildings-1.6857108",
  },
  {
    country: "New Zealand", code: "NZ", region: "apac", status: "federal",
    regulation: "Government-wide review",
    year: 2023, effective: "Feb 2023",
    scope: "Government agencies following Australian lead.",
    detail: "Within days of Australia's announcement, New Zealand's GCSB and government agencies initiated audits and removal of Chinese-manufactured surveillance equipment from government premises.",
    source: "https://www.rnz.co.nz/news/political/483989/government-buildings-using-chinese-surveillance-cameras",
  },
  {
    country: "Lithuania", code: "LT", region: "europe", status: "federal",
    regulation: "National security directive",
    year: 2021, effective: "2021",
    scope: "Government and critical infrastructure.",
    detail: "Lithuania's National Cyber Security Centre issued warnings against Chinese-manufactured surveillance equipment for government deployments, followed by removal directives from defence and central government installations.",
    source: "https://www.nksc.lt/",
  },
  {
    country: "Latvia", code: "LV", region: "europe", status: "sector",
    regulation: "Baltic security alignment",
    year: 2022, effective: "2022",
    scope: "Defence and government.",
    detail: "Following Lithuanian guidance and broader Baltic security cooperation, Latvia restricted Chinese-manufactured surveillance equipment in defence and central government settings.",
    source: "",
  },
  {
    country: "Estonia", code: "EE", region: "europe", status: "sector",
    regulation: "Baltic security alignment",
    year: 2022, effective: "2022",
    scope: "Defence and government.",
    detail: "Estonia joined Baltic neighbours in restricting Chinese-manufactured surveillance equipment in defence and central government settings.",
    source: "",
  },
  {
    country: "Taiwan", code: "TW", region: "apac", status: "federal",
    regulation: "Government procurement directives",
    year: 2019, effective: "2019",
    scope: "Government, defence, critical infrastructure.",
    detail: "Taiwan's Executive Yuan banned Chinese-manufactured information and surveillance equipment from government procurement, aligned with broader supply-chain de-risking.",
    source: "",
  },
  {
    country: "India", code: "IN", region: "apac", status: "procure",
    regulation: "PPP-MII Order + STQC mandate",
    year: 2024, effective: "Apr 2025",
    scope: "Central government, defence, public-sector undertakings.",
    detail: "Indian Ministry of Electronics and IT requires STQC / BIS ER-01 certification for all network cameras sold in India from April 2025. Public Procurement (Preference to Make in India) Order favours domestic manufacturers.",
    source: "https://www.meity.gov.in/",
  },
  {
    country: "Netherlands", code: "NL", region: "europe", status: "watch",
    regulation: "Parliamentary debate, ministry directives pending",
    year: 2023, effective: "Active debate 2023+",
    scope: "Pending — focused on government and critical infrastructure.",
    detail: "Dutch parliament held debates on Chinese-manufactured surveillance equipment in government deployments. Ministry of Defence has begun removal at sensitive sites. Broader legislation under consideration.",
    source: "",
  },
  {
    country: "Germany", code: "DE", region: "europe", status: "watch",
    regulation: "BSI evaluations + 5G supply chain framework",
    year: 2023, effective: "Active review 2023+",
    scope: "Pending — BSI guidance for critical infrastructure.",
    detail: "Bundesamt für Sicherheit in der Informationstechnik (BSI) actively evaluating Chinese surveillance equipment. The 2023 IT Security Act framework provides legal basis for component-level restrictions.",
    source: "",
  },
  {
    country: "France", code: "FR", region: "europe", status: "watch",
    regulation: "ANSSI guidance + critical-infrastructure framework",
    year: 2023, effective: "Active review",
    scope: "Pending — critical infrastructure focus.",
    detail: "ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) provides ongoing guidance against Chinese-manufactured surveillance equipment for critical infrastructure. No formal federal ban yet.",
    source: "",
  },
  {
    country: "Italy", code: "IT", region: "europe", status: "watch",
    regulation: "Golden Power review",
    year: 2023, effective: "Active review",
    scope: "Pending — strategic sectors via Golden Power oversight.",
    detail: "Italy's Golden Power regulatory framework provides mechanism for case-by-case review of Chinese surveillance procurement in strategic sectors.",
    source: "",
  },
  {
    country: "European Union", code: "EU", region: "europe", status: "guidance",
    regulation: "Cyber Resilience Act + AI Act framework",
    year: 2024, effective: "Phased 2025-2027",
    scope: "Pan-EU framework affecting all connected devices including cameras.",
    detail: "EU Cyber Resilience Act imposes security obligations on connected devices including cameras. EU AI Act regulates biometric surveillance specifically. Both create de-facto compliance pressure on Chinese supply chains across EU member states.",
    source: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
  },
];
