import {
  BadgeCheck,
  Banknote,
  BellRing,
  Binoculars,
  FileCheck2,
  Landmark,
  Network,
  Radar,
  SearchCheck,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

export const modules = [
  {
    number: "01",
    slug: "sanctions-screening",
    name: "Sanctions and watchlist screening",
    summary:
      "Customer, transaction, SWIFT and remittance screening across global and internal lists.",
    details:
      "AML365 supports on-demand and batch screening, list-change rescreening, configurable matching scores, whitelisting and role-based alert workflows.",
    features: [
      "OFAC, UN, UK, EU and other supported lists",
      "Central bank and internal watchlists",
      "Web-service integration with source systems",
    ],
    icon: SearchCheck,
  },
  {
    number: "02",
    slug: "kyc-risk",
    name: "KYC, transaction profile and risk",
    summary:
      "Customer risk scoring and periodic review aligned with the institution’s configured policy.",
    details:
      "Teams can configure model fields, capture or import transaction profiles, identify incomplete KYC, review high-risk accounts and manage periodic review schedules.",
    features: [
      "Configurable customer risk model",
      "Periodic KYC and transaction-profile review",
      "Manual risk override with controlled access",
    ],
    icon: BadgeCheck,
  },
  {
    number: "03",
    slug: "transaction-monitoring",
    name: "Transaction monitoring",
    summary:
      "Rule-based detection, alert generation and investigation workflows.",
    details:
      "The monitoring engine applies configurable scenarios and thresholds, links alerts with customer and transaction details, and connects investigation to STR/SAR filing and case management.",
    features: [
      "Configurable rules and violation settings",
      "Alert evidence, notes and document history",
      "Customer and transaction review",
    ],
    icon: Radar,
  },
  {
    number: "04",
    slug: "activity-filing",
    name: "Activity filing",
    summary:
      "Central management of STR/SAR preparation, review and filing activity.",
    details:
      "Authorised teams can manage filing workflows, review history, branch input and supporting documentation from a controlled workbench.",
    features: [
      "Draft and review workflow",
      "Branch participation",
      "Status-based reporting",
    ],
    icon: FileCheck2,
  },
  {
    number: "05",
    slug: "ctr",
    name: "Cash transaction reporting",
    summary: "CTR alert generation, review and regulatory report preparation.",
    details:
      "The module covers automated alert generation, incomplete-data checks, controlled manual entry and report preparation in the required workflow.",
    features: [
      "Rule-driven CTR alerts",
      "Data validation and review",
      "Report preparation and export",
    ],
    icon: Banknote,
  },
  {
    number: "06",
    slug: "tbml",
    name: "Trade-based money laundering",
    summary:
      "Trade-customer risk and rule monitoring for import and export activity.",
    details:
      "AML365 supports trade customer profiles, transaction profiles, configurable rules, price-index integration and case workflows for trade-finance monitoring.",
    features: [
      "Trade customer risk profile",
      "Threshold and profile inconsistency rules",
      "Price verification service integration",
    ],
    icon: Landmark,
  },
  {
    number: "07",
    slug: "card-remittance",
    name: "Card and remittance monitoring",
    summary:
      "Dedicated monitoring rules and review workflows for card and remittance activity.",
    details:
      "Compliance teams can centrally manage rules, alert forwarding, review history, supporting documents and status-based reports.",
    features: [
      "Configurable monitoring rules",
      "Alert forwarding and reopening",
      "Supporting document storage",
    ],
    icon: BellRing,
  },
  {
    number: "09",
    slug: "fatca",
    name: "FATCA",
    summary:
      "US indicia identification, alert review and IRS-format XML reporting.",
    details:
      "The FATCA module supports possible-customer identification, balance-based alerts, document handling and required XML or nil-report generation.",
    features: [
      "US indicia detection",
      "Alert review workflow",
      "IRS XML and nil report generation",
    ],
    icon: ShieldCheck,
  },
  {
    number: "10",
    slug: "inquiry",
    name: "Inquiry management",
    summary:
      "Structured inquiry distribution, branch response and central review.",
    details:
      "Teams can configure inquiries, distribute them by subject, manage attachments and approvals, and track match or no-match responses.",
    features: [
      "Configurable inquiry workflow",
      "Branch response and approval",
      "Search and reply summary",
    ],
    icon: Binoculars,
  },
  {
    number: "11",
    slug: "assessment",
    name: "Assessment and BB reporting",
    summary:
      "Self-assessment, independent testing and half-yearly Bangladesh Bank reporting.",
    details:
      "The workflow covers branch questionnaires, deadlines, evaluation, reassessment, historical review and preparation of the half-yearly report.",
    features: [
      "Branch questionnaire generation",
      "Independent testing process",
      "Half-yearly report preparation",
    ],
    icon: Waypoints,
  },
  {
    number: "12",
    slug: "reporting",
    name: "Dashboards and reporting",
    summary:
      "Operational reporting for alert status, progress, productivity and review quality.",
    details:
      "Authorised users can work with interactive dashboards and export reports in supported formats including Excel, PDF and JPEG.",
    features: [
      "Status and aging views",
      "Operational metrics",
      "Multiple export formats",
    ],
    icon: Network,
  },
];

export const roadmap = [
  [
    "AI-assisted name screening",
    "AI-based fuzzy matching and natural-language techniques for sanctions screening.",
  ],
  [
    "Dynamic customer risk scoring",
    "Risk model adjustments informed by observed customer activity.",
  ],
  [
    "Alert prioritisation",
    "Machine-assisted ranking to help teams focus review effort.",
  ],
  [
    "False-positive reduction",
    "Predictive filtering models intended to reduce repetitive alert review.",
  ],
  [
    "Behavioural analytics",
    "Customer behaviour profiling for unusual-activity analysis.",
  ],
  [
    "Entity resolution and link analysis",
    "Graph analysis for related-party and relationship discovery.",
  ],
  [
    "Anomaly and pattern detection",
    "Advanced analytics for unusual transaction behaviour.",
  ],
  [
    "Adverse-media monitoring",
    "Natural-language analysis to support negative-news review.",
  ],
];

export const clients = [
  ["UCB", "/clients/ucb.png"],
  ["Sonali Bank", "/clients/sonali-bank.png"],
  ["Agrani Bank", "/clients/agrani-bank.png"],
  ["Rupali Bank", "/clients/rupali-bank.png"],
  ["Prime Bank", "/clients/prime-bank.jpeg"],
  ["AB Bank", "/clients/ab-bank.jpeg"],
  ["Eastern Bank", "/clients/eastern-bank.png"],
  ["IFIC Bank", "/clients/ific-bank.jpeg"],
  ["Jamuna Bank", "/clients/jamuna-bank.jpeg"],
  ["Trust Bank", "/clients/trust-bank.png"],
  ["Mutual Trust Bank", "/clients/mutual-trust-bank.jpeg"],
  ["Social Islami Bank", "/clients/social-islami-bank.png"],
  ["Mercantile Bank", "/clients/mercantile-bank.jpeg"],
  ["Union Bank", "/clients/union-bank.png"],
];
