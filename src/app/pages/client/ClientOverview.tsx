import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { FolderKanban, Clock, CheckCircle2, DollarSign, Calendar, MessageSquare } from 'lucide-react';

export function ClientOverview() {
  const projects = [
    { id: '1', name: 'E-commerce Platform Development', status: 'in-progress', progress: 75, deadline: '2024-03-15', team: 'Team A' },
    { id: '2', name: 'Payment Gateway Integration', status: 'in-progress', progress: 45, deadline: '2024-02-28', team: 'Team B' },
    { id: '3', name: 'Product Catalog Setup', status: 'completed', progress: 100, deadline: '2024-02-10', team: 'Team A' },
  ];

  const milestones = [
    { id: '1', title: 'Design Mockups Approved', date: '2024-02-05', completed: true },
    { id: '2', title: 'Backend API Development', date: '2024-02-15', completed: true },
    { id: '3', title: 'Frontend Integration', date: '2024-02-25', completed: false },
    { id: '4', title: 'Testing & QA', date: '2024-03-05', completed: false },
  ];

  return (
    <PageLayout
      role="client"
      title="Project Overview"
      subtitle="Track your project progress and milestones"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Active Projects"
          value="2"
          icon={FolderKanban}
          variant="accent"
        />
        <StatCard
          title="In Progress"
          value="2"
          icon={Clock}
        />
        <StatCard
          title="Completed"
          value="3"
          icon={CheckCircle2}
        />
        <StatCard
          title="Total Invested"
          value="$45,000"
          icon={DollarSign}
        />
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg mb-4">Active Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-base mb-2">{project.name}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.deadline}
                      </span>
                      <span>Team: {project.team}</span>
                    </div>
                  </div>
                  <Badge
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className={
                      project.status === 'completed'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-accent text-white'
                    }
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div>
          <h2 className="text-lg mb-4">Project Milestones</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex items-start gap-4">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed ? 'bg-green-500/20' : 'bg-secondary'
                      }`}
                    >
                      {milestone.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <span className="text-xs text-muted-foreground">{index + 1}</span>
                      )}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-1/2 top-8 w-0.5 h-8 bg-border -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="text-sm mb-1">{milestone.title}</h4>
                    <p className="text-xs text-muted-foreground">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <MessageSquare className="w-6 h-6 text-accent" />
            <span>Contact Team</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <FolderKanban className="w-6 h-6 text-accent" />
            <span>View All Projects</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <DollarSign className="w-6 h-6 text-accent" />
            <span>Payment History</span>
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}
