// Preset templates - no AI needed
async function generateDashboardContent(businessType, teamSize, primaryFocus, goal, sections) {
  const templates = {
    saas: {
      dashboard_name: 'SaaS Metrics Dashboard',
      dashboard_description: 'Track MRR, CAC, LTV, churn rate and customer health for your SaaS business.',
      key_metrics: [
        { name: 'Monthly Recurring Revenue (MRR)', type: 'number' },
        { name: 'Customer Acquisition Cost (CAC)', type: 'number' },
        { name: 'Lifetime Value (LTV)', type: 'number' },
        { name: 'Churn Rate (%)', type: 'number' },
        { name: 'Active Users', type: 'number' },
        { name: 'Feature Adoption Rate (%)', type: 'number' },
        { name: 'Support Tickets (Open)', type: 'number' }
      ],
      quick_start_guide: [
        'Create a "Metrics" database to track KPIs',
        'Add your current MRR and customer count',
        'Set up monthly recurring events to update metrics',
        'Create a "Customers" database to track health',
        'Link customers to revenue data'
      ]
    },
    ecommerce: {
      dashboard_name: 'E-commerce Dashboard',
      dashboard_description: 'Monitor sales, inventory levels, and customer behavior in real-time.',
      key_metrics: [
        { name: 'Total Revenue', type: 'number' },
        { name: 'Conversion Rate (%)', type: 'number' },
        { name: 'Average Order Value (AOV)', type: 'number' },
        { name: 'Cart Abandonment Rate (%)', type: 'number' },
        { name: 'Customer Acquisition Cost (CAC)', type: 'number' },
        { name: 'Inventory Count', type: 'number' },
        { name: 'Supplier Status', type: 'select' }
      ],
      quick_start_guide: [
        'Create a "Sales" database to track orders',
        'Set up "Inventory" database for products',
        'Create "Suppliers" database for vendor tracking',
        'Add daily sales data from your store',
        'Track inventory levels and reorder points'
      ]
    },
    agency: {
      dashboard_name: 'Agency Dashboard',
      dashboard_description: 'Manage projects, profitability, team capacity, and client relationships.',
      key_metrics: [
        { name: 'Monthly Revenue', type: 'number' },
        { name: 'Project Profitability (%)', type: 'number' },
        { name: 'Resource Utilization (%)', type: 'number' },
        { name: 'Client Health Score', type: 'number' },
        { name: 'Pipeline Value', type: 'number' },
        { name: 'Team Capacity Available (%)', type: 'number' },
        { name: 'Deliverable Status', type: 'select' }
      ],
      quick_start_guide: [
        'Create a "Projects" database for active work',
        'Set up "Clients" database with contact info',
        'Create "Team" database for capacity planning',
        'Add projects with budget and profitability',
        'Track team member allocation per project'
      ]
    },
    startup: {
      dashboard_name: 'Startup Dashboard',
      dashboard_description: 'Track burn rate, runway, and growth metrics for early-stage companies.',
      key_metrics: [
        { name: 'Monthly Burn Rate', type: 'number' },
        { name: 'Cash Runway (Months)', type: 'number' },
        { name: 'User Growth Rate (%)', type: 'number' },
        { name: 'Engagement Rate (%)', type: 'number' },
        { name: 'Fundraising Progress (%)', type: 'number' },
        { name: 'Team Size', type: 'number' },
        { name: 'Milestone Status', type: 'select' }
      ],
      quick_start_guide: [
        'Create a "Financials" database to track burn',
        'Set up "Users" database for growth tracking',
        'Create "Milestones" database for planning',
        'Add monthly financial data',
        'Track user growth and key metrics weekly'
      ]
    },
    nonprofit: {
      dashboard_name: 'Non-profit Dashboard',
      dashboard_description: 'Track donations, programs, impact, and team performance.',
      key_metrics: [
        { name: 'Total Donations', type: 'number' },
        { name: 'Active Donors', type: 'number' },
        { name: 'Program Participants', type: 'number' },
        { name: 'Impact Score', type: 'number' },
        { name: 'Operating Costs', type: 'number' },
        { name: 'Funds Allocated (%)', type: 'number' },
        { name: 'Volunteer Hours', type: 'number' }
      ],
      quick_start_guide: [
        'Create a "Donors" database to track giving',
        'Set up "Programs" database for initiatives',
        'Create "Volunteers" database for hours tracking',
        'Record monthly donation data',
        'Track program impact and outcomes'
      ]
    },
    other: {
      dashboard_name: 'Business Dashboard',
      dashboard_description: 'A customizable dashboard to track your business metrics and progress.',
      key_metrics: [
        { name: 'Monthly Revenue', type: 'number' },
        { name: 'Operating Costs', type: 'number' },
        { name: 'Customer Count', type: 'number' },
        { name: 'Growth Rate (%)', type: 'number' },
        { name: 'Team Size', type: 'number' },
        { name: 'Key Goal Progress (%)', type: 'number' },
        { name: 'Status', type: 'select' }
      ],
      quick_start_guide: [
        'Create a "Metrics" database',
        'Add your key performance indicators',
        'Set up weekly review schedule',
        'Create a "Team" database',
        'Track progress toward goals'
      ]
    }
  };

  // Get template for business type, default to 'other'
  const template = templates[businessType] || templates.other;

  return {
    success: true,
    dashboard_name: template.dashboard_name,
    dashboard_description: template.dashboard_description,
    key_metrics: template.key_metrics,
    quick_start_guide: template.quick_start_guide,
    team_size: teamSize,
    primary_focus: primaryFocus,
    user_goal: goal,
    selected_sections: sections
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