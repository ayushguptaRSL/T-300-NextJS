export interface ProjectTeamMember {
  name: string;
  role: string;
}

export interface ProjectTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ProjectActivity {
  id: string;
  action: string;
  timestamp: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on-hold";
  team: ProjectTeamMember[];
  tasks: ProjectTask[];
  activity: ProjectActivity[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Next.js App Router Migration",
    description: "Migrate frontend architecture to Next.js App Router with React Server Components.",
    status: "active",
    team: [
      { name: "Ayush", role: "Frontend Lead" },
      { name: "Shrirang", role: "Software Engineer" }
    ],
    tasks: [
      { id: "t-1", title: "Setup App Router file structure", completed: true },
      { id: "t-2", title: "Migrate shared layout and navigation", completed: true },
      { id: "t-3", title: "Implement Suspense streaming on Dashboard", completed: false },
      { id: "t-4", title: "Add catch-all documentation routes", completed: false }
    ],
    activity: [
      { id: "a-1", action: "Merged layout navigation PR", timestamp: "10 mins ago" },
      { id: "a-2", action: "Created task board for sprint 4", timestamp: "2 hours ago" },
      { id: "a-3", action: "Project initialized in Project Explorer", timestamp: "1 day ago" }
    ]
  },
  {
    id: "2",
    name: "Customer Analytics Dashboard",
    description: "Real-time metrics and streaming charts for customer telemetry and KPI monitoring.",
    status: "completed",
    team: [
      { name: "Sangam", role: "Data Architect" },
      { name: "Nachiket", role: "Backend Engineer" }
    ],
    tasks: [
      { id: "t-5", title: "Design data aggregation pipeline", completed: true },
      { id: "t-6", title: "Build streaming data widgets", completed: true },
      { id: "t-7", title: "Security and compliance audit", completed: true }
    ],
    activity: [
      { id: "a-4", action: "Dashboard v1.0 deployed to production", timestamp: "3 days ago" },
      { id: "a-5", action: "KPI alerts configured", timestamp: "5 days ago" }
    ]
  },
  {
    id: "3",
    name: "Enterprise Auth & SSO Gateway",
    description: "Unified single sign-on system with role-based access control and OAuth2 integration.",
    status: "active",
    team: [
      { name: "Ayush", role: "Security Engineer" },
      { name: "Nachiket", role: "DevOps Engineer" }
    ],
    tasks: [
      { id: "t-8", title: "Configure SAML 2.0 and OIDC endpoints", completed: true },
      { id: "t-9", title: "Role permission mapping engine", completed: false },
      { id: "t-10", title: "Audit logging and alerts", completed: false }
    ],
    activity: [
      { id: "a-6", action: "Added test credentials for staging", timestamp: "4 hours ago" },
      { id: "a-7", action: "Updated OAuth scopes documentation", timestamp: "1 day ago" }
    ]
  },
  {
    id: "4",
    name: "Mobile Responsive Portal",
    description: "Responsive redesign of the internal enterprise portal for mobile and tablet devices.",
    status: "on-hold",
    team: [
      { name: "Shrirang", role: "UI Designer" },
      { name: "Henry Ford", role: "Frontend Dev" }
    ],
    tasks: [
      { id: "t-11", title: "Audit existing desktop breakpoints", completed: true },
      { id: "t-12", title: "Touch gesture navigation prototypes", completed: false }
    ],
    activity: [
      { id: "a-8", action: "Design review postponed pending budget", timestamp: "2 weeks ago" }
    ]
  }
];

export async function getProjects(search?: string, status?: string): Promise<Project[]> {
  let results = [...projectsData];

  if (search && search.trim() !== "") {
    const q = search.toLowerCase();
    const normQ = q.replace(/[^a-z0-9]/g, "");
    results = results.filter((p) => {
      const name = p.name.toLowerCase();
      const desc = p.description.toLowerCase();
      const normName = name.replace(/[^a-z0-9]/g, "");
      const normDesc = desc.replace(/[^a-z0-9]/g, "");
      return (
        name.includes(q) ||
        desc.includes(q) ||
        (normQ && normName.includes(normQ)) ||
        (normQ && normDesc.includes(normQ))
      );
    });
  }

  if (status && status !== "all" && status.trim() !== "") {
    results = results.filter((p) => p.status === status);
  }

  return results;
}

export async function getProjectById(id: string): Promise<Project> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (id === "error") {
    throw new Error("Simulated failure while loading project data (ID: error).");
  }

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    throw new Error(`Project with ID "${id}" was not found.`);
  }

  return project;
}

export async function getDashboardStats() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    total: projectsData.length,
    active: projectsData.filter((p) => p.status === "active").length,
    completed: projectsData.filter((p) => p.status === "completed").length,
    onHold: projectsData.filter((p) => p.status === "on-hold").length,
    totalTasks: projectsData.reduce((acc, p) => acc + p.tasks.length, 0),
    completedTasks: projectsData.reduce(
      (acc, p) => acc + p.tasks.filter((t) => t.completed).length,
      0
    )
  };
}

export async function getDashboardRecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 2200));
  const activities: Array<{ id: string; project: string; action: string; timestamp: string }> = [];
  projectsData.forEach((project) => {
    project.activity.forEach((act) => {
      activities.push({
        id: act.id,
        project: project.name,
        action: act.action,
        timestamp: act.timestamp
      });
    });
  });
  return activities.slice(0, 5);
}
