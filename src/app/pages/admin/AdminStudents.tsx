import { PageLayout } from '../../components/layout/PageLayout';
import { DataTable } from '../../components/dashboard/DataTable';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Eye, Mail } from 'lucide-react';
import { mockStudents } from '../../data/mockData';

export function AdminStudents() {
  return (
    <PageLayout
      role="admin"
      title="Student Management"
      subtitle="Track student progress and enrollments"
    >
      <DataTable
        title="All Students"
        data={mockStudents}
        searchable
        filterable
        exportable
        columns={[
          {
            header: 'Student Name',
            accessor: 'name',
            cell: (value, row) => (
              <div>
                <p className="text-sm">{value}</p>
                <p className="text-xs text-muted-foreground">{row.email}</p>
              </div>
            ),
          },
          {
            header: 'Enrolled Courses',
            accessor: 'enrolledCourses',
          },
          {
            header: 'Completed Courses',
            accessor: 'completedCourses',
          },
          {
            header: 'Overall Progress',
            accessor: 'progress',
            cell: (value) => (
              <div className="w-32">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ),
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
              <Badge
                variant={value === 'active' ? 'default' : 'secondary'}
                className={value === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-muted'}
              >
                {value}
              </Badge>
            ),
          },
          {
            header: 'Joined Date',
            accessor: 'joinedDate',
          },
          {
            header: 'Actions',
            accessor: (row) => row,
            cell: () => (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
