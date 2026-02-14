import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Play, Clock, BookOpen, Download, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: '1',
    name: 'Advanced React Development',
    instructor: 'Dr. Alex Turner',
    progress: 65,
    totalLessons: 24,
    completedLessons: 16,
    duration: '12 weeks',
    category: 'Development',
    status: 'in-progress',
  },
  {
    id: '2',
    name: 'E-commerce Business Fundamentals',
    instructor: 'Sarah Mitchell',
    progress: 40,
    totalLessons: 18,
    completedLessons: 7,
    duration: '8 weeks',
    category: 'Business',
    status: 'in-progress',
  },
  {
    id: '3',
    name: 'Digital Marketing Mastery',
    instructor: 'Mark Stevens',
    progress: 85,
    totalLessons: 20,
    completedLessons: 17,
    duration: '10 weeks',
    category: 'Marketing',
    status: 'in-progress',
  },
  {
    id: '4',
    name: 'UI/UX Design Principles',
    instructor: 'Lisa Wang',
    progress: 100,
    totalLessons: 15,
    completedLessons: 15,
    duration: '6 weeks',
    category: 'Design',
    status: 'completed',
  },
];

const lessons = [
  { id: '1', title: 'Introduction to React Hooks', duration: '45 min', completed: true },
  { id: '2', title: 'useState and useEffect', duration: '60 min', completed: true },
  { id: '3', title: 'Custom Hooks', duration: '55 min', completed: true },
  { id: '4', title: 'Context API', duration: '50 min', completed: false, current: true },
  { id: '5', title: 'Redux Fundamentals', duration: '70 min', completed: false },
  { id: '6', title: 'Redux Toolkit', duration: '65 min', completed: false },
];

const resources = [
  { id: '1', name: 'React Hooks Cheat Sheet', type: 'PDF', size: '2.4 MB' },
  { id: '2', name: 'Code Examples Repository', type: 'ZIP', size: '15.2 MB' },
  { id: '3', name: 'Lecture Slides', type: 'PDF', size: '8.7 MB' },
];

export function StudentCourses() {
  const inProgressCourses = courses.filter(c => c.status === 'in-progress');
  const completedCourses = courses.filter(c => c.status === 'completed');

  return (
    <PageLayout
      role="student"
      title="My Courses"
      subtitle="Access your enrolled courses and learning materials"
    >
      <Tabs defaultValue="in-progress" className="mb-6">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress ({inProgressCourses.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="p-6">
                <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent">
                  {course.category}
                </Badge>
                <h3 className="text-base mb-2">{course.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="p-6">
                <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-500">
                  Completed
                </Badge>
                <h3 className="text-base mb-2">{course.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                
                <div className="flex items-center gap-2 mb-4 p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Course Completed!</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Review
                  </Button>
                  <Button className="flex-1 bg-accent hover:bg-accent/90">
                    Certificate
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lessons */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg mb-4">Course Content</h3>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  lesson.current ? 'bg-accent/20 border border-accent' : 'bg-secondary'
                }`}
              >
                <div className="flex items-center gap-3">
                  {lesson.completed ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                      <Play className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                </div>
                {lesson.current && (
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Start
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Resources */}
        <Card className="p-6">
          <h3 className="text-lg mb-4">Course Resources</h3>
          <div className="space-y-3">
            {resources.map((resource) => (
              <div key={resource.id} className="p-4 bg-secondary rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm mb-1">{resource.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  <Download className="w-3 h-3 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
