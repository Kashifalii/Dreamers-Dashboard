import { PageLayout } from "../../components/layout/PageLayout";
import { DataTable } from "../../components/dashboard/DataTable";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Eye, Edit, BarChart3 } from "lucide-react";
import { mockCourses } from "../../data/mockData";

export function AdminCourses() {
  return (
    <PageLayout
      role="admin"
      title="Course Management"
      subtitle="Manage courses and track enrollments"
    >
      <div className="mb-6">
        <Button className="bg-accent hover:bg-accent/90">
          Create New Course
        </Button>
      </div>

      <DataTable
        title="All Courses"
        data={mockCourses}
        searchable
        filterable
        exportable
        columns={[
          {
            header: "Course Name",
            accessor: "name",
            cell: (value, row) => (
              <div>
                <p className="text-sm mb-1">{value}</p>
                <p className="text-xs text-muted-foreground">
                  {row.description}
                </p>
              </div>
            ),
          },
          {
            header: "Category",
            accessor: "category",
            cell: (value) => (
              <Badge variant="secondary" className="bg-secondary">
                {value}
              </Badge>
            ),
          },
          {
            header: "Instructor",
            accessor: "instructor",
          },
          {
            header: "Duration",
            accessor: "duration",
          },
          {
            header: "Enrollments",
            accessor: "enrollmentCount",
            cell: (value) => (
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span>{value}</span>
              </div>
            ),
          },
          {
            header: "Status",
            accessor: "status",
            cell: (value) => (
              <Badge
                variant={value === "active" ? "default" : "secondary"}
                className={
                  value === "active"
                    ? "bg-green-500/20 text-green-500"
                    : "bg-muted"
                }
              >
                {value}
              </Badge>
            ),
          },
          {
            header: "Actions",
            accessor: "name",
            cell: () => (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
