import { PageLayout } from '../../components/layout/PageLayout';
import { DataTable } from '../../components/dashboard/DataTable';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Upload, Eye, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { mockAssignments } from '../../data/mockData';

export function StudentAssignments() {
  const pendingAssignments = mockAssignments.filter(a => a.status === 'pending');
  const submittedAssignments = mockAssignments.filter(a => a.status === 'submitted');
  const gradedAssignments = mockAssignments.filter(a => a.status === 'graded');

  return (
    <PageLayout
      role="student"
      title="Assignments"
      subtitle="Track and submit your course assignments"
    >
      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 border-l-4 border-l-yellow-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl">{pendingAssignments.length}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl">{submittedAssignments.length}</p>
              <p className="text-sm text-muted-foreground">Submitted</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-green-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-2xl">{gradedAssignments.length}</p>
              <p className="text-sm text-muted-foreground">Graded</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Pending Assignments Alert */}
      {pendingAssignments.length > 0 && (
        <Card className="p-6 mb-6 border-l-4 border-l-yellow-500">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-base mb-1">Assignments Due Soon</h3>
              <p className="text-sm text-muted-foreground">
                You have {pendingAssignments.length} pending assignment{pendingAssignments.length > 1 ? 's' : ''} that need your attention.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Assignments Table */}
      <DataTable
        title="All Assignments"
        data={mockAssignments}
        searchable
        filterable
        columns={[
          {
            header: 'Assignment',
            accessor: 'title',
            cell: (value, row) => (
              <div>
                <p className="text-sm mb-1">{value}</p>
                <p className="text-xs text-muted-foreground">{row.courseName}</p>
              </div>
            ),
          },
          {
            header: 'Due Date',
            accessor: 'dueDate',
            cell: (value, row) => {
              const isOverdue = new Date(value) < new Date() && row.status === 'pending';
              return (
                <div className="flex items-center gap-2">
                  {isOverdue && <AlertCircle className="w-4 h-4 text-red-500" />}
                  <span className={isOverdue ? 'text-red-500' : ''}>{value}</span>
                </div>
              );
            },
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
              <Badge
                variant="secondary"
                className={
                  value === 'pending'
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : value === 'submitted'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-green-500/20 text-green-500'
                }
              >
                {value}
              </Badge>
            ),
          },
          {
            header: 'Grade',
            accessor: 'grade',
            cell: (value) => (value ? <span className="text-accent">{value}%</span> : <span className="text-muted-foreground">-</span>),
          },
          {
            header: 'Actions',
            accessor: (row) => row,
            cell: (_, row) => (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                {row.status === 'pending' && (
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    <Upload className="w-3 h-3 mr-1" />
                    Submit
                  </Button>
                )}
              </div>
            ),
          },
        ]}
      />

      {/* Assignment Detail Example */}
      <Card className="p-6 mt-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg mb-2">Build a Todo App with Hooks</h3>
            <p className="text-sm text-muted-foreground">Advanced React Development</p>
          </div>
          <Badge className="bg-yellow-500/20 text-yellow-500">Pending</Badge>
        </div>

        <div className="mb-6 p-4 bg-secondary rounded-lg">
          <h4 className="text-sm mb-2">Assignment Description</h4>
          <p className="text-sm text-muted-foreground">
            Create a fully functional todo application using React hooks (useState, useEffect, useReducer).
            The app should support adding, editing, deleting, and marking todos as complete.
            Include local storage persistence and proper error handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Due Date</p>
            <p className="text-sm">2024-02-20</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Max Points</p>
            <p className="text-sm">100</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Submission Type</p>
            <p className="text-sm">Code + Documentation</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Download Instructions
          </Button>
          <Button className="flex-1 bg-accent hover:bg-accent/90">
            <Upload className="w-4 h-4 mr-2" />
            Submit Assignment
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}
