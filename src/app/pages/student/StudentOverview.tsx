import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { ChartCard } from '../../components/dashboard/ChartCard';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { BookOpen, Award, Clock, TrendingUp, Play } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const progressData = [
  { week: 'Week 1', hours: 8 },
  { week: 'Week 2', hours: 12 },
  { week: 'Week 3', hours: 10 },
  { week: 'Week 4', hours: 15 },
];

const enrolledCourses = [
  { id: '1', name: 'Advanced React Development', progress: 65, nextLesson: 'State Management with Redux', instructor: 'Dr. Alex Turner' },
  { id: '2', name: 'E-commerce Business Fundamentals', progress: 40, nextLesson: 'Customer Acquisition Strategies', instructor: 'Sarah Mitchell' },
  { id: '3', name: 'Digital Marketing Mastery', progress: 85, nextLesson: 'Social Media Analytics', instructor: 'Mark Stevens' },
];

export function StudentOverview() {
  return (
    <PageLayout
      role="student"
      title="Learning Dashboard"
      subtitle="Track your progress and continue learning"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Enrolled Courses"
          value="3"
          icon={BookOpen}
          variant="accent"
        />
        <StatCard
          title="Completed Courses"
          value="1"
          icon={Award}
        />
        <StatCard
          title="Learning Hours"
          value="45h"
          change={{ value: 12.5, label: 'this week' }}
          icon={Clock}
          trend="up"
        />
        <StatCard
          title="Average Progress"
          value="63%"
          change={{ value: 8.3, label: 'this month' }}
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Weekly Progress Chart */}
        <div className="lg:col-span-2">
          <ChartCard title="Weekly Learning Activity">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3A3852" />
                <XAxis dataKey="week" stroke="#9B9BA8" />
                <YAxis stroke="#9B9BA8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#252338',
                    border: '1px solid #3A3852',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#8D57AB"
                  strokeWidth={2}
                  name="Learning Hours"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Achievements */}
        <Card className="p-6">
          <h3 className="text-lg mb-4">Recent Achievements</h3>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm">Course Completed</h4>
                  <p className="text-xs text-muted-foreground">UI/UX Design Principles</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-sm">7-Day Streak</h4>
                  <p className="text-xs text-muted-foreground">Keep it up!</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm">10 Lessons Completed</h4>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Continue Learning */}
      <div className="mb-6">
        <h2 className="text-lg mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  In Progress
                </Badge>
                <span className="text-sm text-muted-foreground">{course.progress}%</span>
              </div>
              <h3 className="text-base mb-2">{course.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{course.instructor}</p>
              <Progress value={course.progress} className="h-2 mb-4" />
              <div className="mb-4 p-3 bg-secondary rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Next Lesson</p>
                <p className="text-sm">{course.nextLesson}</p>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Play className="w-4 h-4 mr-2" />
                Continue Learning
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <BookOpen className="w-6 h-6 text-accent" />
            <span>Browse Courses</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <Clock className="w-6 h-6 text-accent" />
            <span>Assignments</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <Award className="w-6 h-6 text-accent" />
            <span>Certificates</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            <span>Progress Report</span>
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}
