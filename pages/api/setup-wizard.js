const BUSINESS_TEMPLATES = {
  saas: {
    dashboard_name: "SaaS Command Center",
    description: "Track recurring revenue, product adoption, and customer health in one weekly operating rhythm.",
    key_metrics: [
      { name: "Monthly Recurring Revenue (MRR)", type: "number" },
      { name: "Net Revenue Retention (%)", type: "number" },
      { name: "Customer Acquisition Cost (CAC)", type: "number" },
      { name: "Activation Rate (%)", type: "number" },
      { name: "Churn Rate (%)", type: "number" },
      { name: "Open Support Tickets", type: "number" }
    ]
  },
  ecommerce: {
    dashboard_name: "E-commerce Growth Hub",
    description: "Run store performance, inventory risk, and campaign results from a single operating page.",
    key_metrics: [
      { name: "Gross Revenue", type: "number" },
      { name: "Conversion Rate (%)", type: "number" },
      { name: "Average Order Value (AOV)", type: "number" },
      { name: "Cart Abandonment Rate (%)", type: "number" },
      { name: "Contribution Margin (%)", type: "number" },
      { name: "Sell-Through Rate (%)", type: "number" }
    ]
  },
  agency: {
    dashboard_name: "Agency Delivery Room",
    description: "Balance pipeline, client delivery, and team utilization without losing margin visibility.",
    key_metrics: [
      { name: "Monthly Retainer Revenue", type: "number" },
      { name: "Project Margin (%)", type: "number" },
      { name: "Team Utilization (%)", type: "number" },
      { name: "On-Time Delivery Rate (%)", type: "number" },
      { name: "Pipeline Value", type: "number" },
      { name: "Client Health Score", type: "number" }
    ]
  },
  startup: {
    dashboard_name: "Startup Execution Board",
    description: "Unify growth, runway, and milestone execution so leadership sees momentum every week.",
    key_metrics: [
      { name: "Monthly Burn Rate", type: "number" },
      { name: "Runway (Months)", type: "number" },
      { name: "Weekly Active Users", type: "number" },
      { name: "North Star Metric", type: "number" },
      { name: "Experiment Win Rate (%)", type: "number" },
      { name: "Milestones Completed", type: "number" }
    ]
  },
  nonprofit: {
    dashboard_name: "Impact Operations Dashboard",
    description: "Connect fundraising, program outcomes, and volunteer capacity with clear progress loops.",
    key_metrics: [
      { name: "Total Donations", type: "number" },
      { name: "Recurring Donors", type: "number" },
      { name: "Program Completion Rate (%)", type: "number" },
      { name: "Volunteer Hours", type: "number" },
      { name: "Funds to Programs (%)", type: "number" },
      { name: "Impact Score", type: "number" }
    ]
  },
  other: {
    dashboard_name: "Business Command Center",
    description: "A flexible operating template for teams that want one source of truth for goals and performance.",
    key_metrics: [
      { name: "Revenue", type: "number" },
      { name: "Operating Cost", type: "number" },
      { name: "Active Customers", type: "number" },
      { name: "Growth Rate (%)", type: "number" },
      { name: "Goal Progress (%)", type: "number" },
      { name: "Execution Velocity", type: "number" }
    ]
  }
};

const SECTION_BLUEPRINTS = {
  metrics: {
    title: "Pulse Metrics",
    purpose: "One place for weekly KPI updates and trend visibility.",
    starter_views: ["Weekly Pulse", "Monthly Trend", "Targets vs Actuals"],
    starter_properties: ["Metric", "Owner", "Cadence", "Target", "Current", "Delta"]
  },
  pipeline: {
    title: "Pipeline and Delivery",
    purpose: "Track current work from idea to done with clear ownership.",
    starter_views: ["By Stage", "This Week Priorities", "At Risk"],
    starter_properties: ["Work Item", "Stage", "Owner", "Due Date", "Risk", "Value"]
  },
  calendar: {
    title: "Operating Calendar",
    purpose: "Anchor meetings, launches, and key deadlines.",
    starter_views: ["Week Agenda", "Launch Calendar", "Review Rituals"],
    starter_properties: ["Event", "Date", "Team", "Type", "Outcome"]
  },
  customers: {
    title: "Customer and Partner Tracker",
    purpose: "Monitor customer lifecycle and relationship quality.",
    starter_views: ["Accounts by Health", "Renewal Radar", "Top Opportunities"],
    starter_properties: ["Account", "Lifecycle Stage", "Owner", "Health", "Value", "Last Contact"]
  },
  okrs: {
    title: "Goals and OKRs",
    purpose: "Connect strategic goals to measurable weekly execution.",
    starter_views: ["Quarter Objectives", "Key Result Scoreboard", "Blocked KRs"],
    starter_properties: ["Objective", "Key Result", "Owner", "Current", "Target", "Confidence"]
  },
  docs: {
    title: "Knowledge Vault",
    purpose: "Keep SOPs, decisions, and notes organized and easy to discover.",
    starter_views: ["Playbooks", "Decision Log", "Team Onboarding"],
    starter_properties: ["Doc Name", "Category", "Owner", "Status", "Last Updated"]
  }
};

const FOCUS_LABELS = {
  growth: "Growth and marketing",
  revenue: "Revenue and sales",
  product: "Product and engineering",
  operations: "Operations",
  customers: "Customer success"
};

function buildSelectedSections(sections) {
  const validSections = Array.isArray(sections) && sections.length
    ? sections.filter((section) => SECTION_BLUEPRINTS[section])
    : ["metrics", "pipeline", "calendar"];

  return validSections.map((sectionId) => {
    const section = SECTION_BLUEPRINTS[sectionId];
    return {
      id: sectionId,
      title: section.title,
      purpose: section.purpose,
      starter_views: section.starter_views,
      starter_properties: section.starter_properties
    };
  });
}

function buildQuickStartGuide(selectedSections, teamSize, primaryFocus) {
  const focusText = FOCUS_LABELS[primaryFocus] || "your current team focus";
  const sectionTitles = selectedSections.map((section) => section.title);
  const firstSection = sectionTitles[0] || "Pulse Metrics";
  const secondSection = sectionTitles[1] || firstSection;

  return [
    `Create a Home page with a "Today, This Week, Risks" layout and pin ${firstSection}.`,
    `Build the ${secondSection} database first, then add relation fields to connect work with metrics.`,
    `Set one weekly owner for each section and schedule a 20-minute Friday update ritual.`,
    `Create a scorecard block for ${focusText} and track no more than six headline metrics.`,
    `Add a "Wins and Learnings" log so the dashboard tells a story, not just numbers.`
  ];
}

function buildFirstWeekMissions(primaryFocus, goal) {
  const focusText = FOCUS_LABELS[primaryFocus] || "core business outcomes";
  const goalText = goal && goal.trim() ? goal.trim() : "improving team visibility";

  return [
    `Day 1: Set dashboard headline and define success for "${goalText}".`,
    "Day 2: Add live data for the top six metrics and verify owners.",
    "Day 3: Tag all open work by stage, risk level, and expected impact.",
    `Day 4: Run a 30-minute review focused on ${focusText}.`,
    "Day 5: Capture one decision, one win, and one blocker in the dashboard journal."
  ];
}

function buildTeamRituals(teamSize) {
  const cadenceBySize = {
    solo: "15-minute solo review every Friday",
    "2-5": "20-minute team sync twice a week",
    "6-15": "30-minute cross-team review every Monday",
    "16-50": "45-minute leadership scorecard review weekly",
    "50+": "60-minute operating review with team leads weekly"
  };

  const coreCadence = cadenceBySize[teamSize] || "30-minute weekly dashboard review";

  return [
    coreCadence,
    "Start each review with one key win and one key risk.",
    "End each review by assigning one next action per owner."
  ];
}

function buildHomeLayout(selectedSections) {
  return [
    "North Star headline with this week's target and actual",
    "KPI strip with six core metrics and trend arrows",
    `Linked database view for ${selectedSections[0] ? selectedSections[0].title : "Pulse Metrics"}`,
    "Decision journal for wins, blockers, and priorities",
    "Action queue filtered to due in the next 7 days"
  ];
}

function buildEngagementHooks(goal) {
  const goalText = goal && goal.trim() ? goal.trim() : "team performance";
  return [
    `Dashboard headline: "Mission this quarter - ${goalText}"`,
    "Weekly section called Momentum Meter (On Track / Watch / Off Track)",
    "Friday retrospective block with prompts: Keep, Improve, Drop"
  ];
}

async function generateDashboardContent(businessType, teamSize, primaryFocus, goal, sections) {
  const template = BUSINESS_TEMPLATES[businessType] || BUSINESS_TEMPLATES.other;
  const selectedSections = buildSelectedSections(sections);
  const quickStartGuide = buildQuickStartGuide(selectedSections, teamSize, primaryFocus);
  const firstWeekMissions = buildFirstWeekMissions(primaryFocus, goal);
  const teamRituals = buildTeamRituals(teamSize);
  const homeLayout = buildHomeLayout(selectedSections);
  const engagementHooks = buildEngagementHooks(goal);
  const focusText = FOCUS_LABELS[primaryFocus] || "your priorities";

  return {
    success: true,
    dashboard_name: template.dashboard_name,
    dashboard_description: `${template.description} Primary focus: ${focusText}.`,
    key_metrics: template.key_metrics,
    quick_start_guide: quickStartGuide,
    first_week_missions: firstWeekMissions,
    team_rituals: teamRituals,
    engagement_hooks: engagementHooks,
    team_size: teamSize,
    primary_focus: primaryFocus,
    user_goal: goal,
    selected_sections: selectedSections.map((section) => section.title),
    notion_template: {
      home_layout: homeLayout,
      sections: selectedSections,
      review_cadence: teamRituals,
      first_week_missions: firstWeekMissions,
      engagement_hooks: engagementHooks
    }
  };
}

// Main API handler
async function handleSetupWizard(req, res) {
  try {
    const { businessType, teamSize, primaryFocus, goal, sections, userEmail } = req.body;

    // Generate dashboard content from templates
    const dashboardContent = await generateDashboardContent(
      businessType,
      teamSize,
      primaryFocus,
      goal,
      sections
    );

    // Return success
    res.json({
      success: true,
      dashboard: dashboardContent,
      message: 'Dashboard template generated!'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
}

module.exports = { handleSetupWizard };
