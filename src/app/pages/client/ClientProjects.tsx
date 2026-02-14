import { PageLayout } from "../../components/layout/PageLayout";
import { DataTable } from "../../components/dashboard/DataTable";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { Eye, MessageSquare } from "lucide-react";

const projects = [
  {
    id: "1",
    name: "E-commerce Platform Development",
    status: "in-progress",
    progress: 75,
    deadline: "2024-03-15",
    team: "Team A",
    budget: 15000,
  },
  {
    id: "2",
    name: "Payment Gateway Integration",
    status: "in-progress",
    progress: 45,
    deadline: "2024-02-28",
    team: "Team B",
    budget: 12000,
  },
  {
    id: "3",
    name: "Product Catalog Setup",
    status: "completed",
    progress: 100,
    deadline: "2024-02-10",
    team: "Team A",
    budget: 8000,
  },
  {
    id: "4",
    name: "UI/UX Design",
    status: "completed",
    progress: 100,
    deadline: "2024-01-20",
    team: "Team C",
    budget: 10000,
  },
];

export function ClientProjects() {
  return (
    <PageLayout
      role="client"
      title="Projects"
      subtitle="View and manage all your projects"
    >
      <DataTable
        title="All Projects"
        data={projects}
        searchable
        filterable
        columns={[
          {
            header: "Project Name",
            accessor: "name",
            cell: (value, row) => (
              <div>
                <p className="text-sm mb-1">{value}</p>
                <p className="text-xs text-muted-foreground">
                  Team: {row.team}
                </p>
              </div>
            ),
          },
          {
            header: "Progress",
            accessor: "progress",
            cell: (value) => (
              <div className="w-32">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">
                    {value}%
                  </span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ),
          },
          {
            header: "Status",
            accessor: "status",
            cell: (value) => (
              <Badge
                variant={value === "completed" ? "default" : "secondary"}
                className={
                  value === "completed"
                    ? "bg-green-500/20 text-green-500"
                    : "bg-accent text-white"
                }
              >
                {value === "completed" ? "Completed" : "In Progress"}
              </Badge>
            ),
          },
          {
            header: "Deadline",
            accessor: "deadline",
          },
          {
            header: "Budget",
            accessor: "budget",
            cell: (value) => <span>${value.toLocaleString()}</span>,
          },
          {
            header: "Actions",
            accessor: "id",
            cell: () => (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 px-2">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 px-2">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
