// Mock data for Dreamers Ecom Tech Dashboard

export interface Client {
  id: string;
  name: string;
  email: string;
  serviceType: string;
  orderStatus: 'active' | 'pending' | 'completed';
  totalSpend: number;
  joinedDate: string;
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledCourses: number;
  completedCourses: number;
  progress: number;
  status: 'active' | 'inactive';
  joinedDate: string;
  avatar?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  enrollmentCount: number;
  status: 'active' | 'inactive';
  progress?: number;
  instructor: string;
  duration: string;
  category: string;
}

export interface Order {
  id: string;
  clientName: string;
  service: string;
  status: 'active' | 'pending' | 'completed';
  amount: number;
  date: string;
}

export interface Payment {
  id: string;
  from: string;
  type: 'course' | 'ecommerce';
  amount: number;
  status: 'paid' | 'due' | 'pending';
  date: string;
}

export interface Message {
  id: string;
  from: string;
  message: string;
  timestamp: string;
  read: boolean;
  hasAttachment?: boolean;
}

export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
}

// Admin Mock Data
export const mockClients: Client[] = [
  { id: '1', name: 'Tech Solutions Inc', email: 'contact@techsolutions.com', serviceType: 'E-commerce Development', orderStatus: 'active', totalSpend: 45000, joinedDate: '2024-01-15' },
  { id: '2', name: 'Global Traders Co', email: 'info@globaltraders.com', serviceType: 'Marketplace Integration', orderStatus: 'active', totalSpend: 32000, joinedDate: '2024-02-20' },
  { id: '3', name: 'Urban Fashion Ltd', email: 'hello@urbanfashion.com', serviceType: 'Product Catalog', orderStatus: 'pending', totalSpend: 18000, joinedDate: '2024-03-10' },
  { id: '4', name: 'Green Market', email: 'support@greenmarket.com', serviceType: 'Payment Gateway', orderStatus: 'completed', totalSpend: 25000, joinedDate: '2023-11-05' },
  { id: '5', name: 'Digital Dynamics', email: 'team@digitaldynamics.com', serviceType: 'Full Stack Solution', orderStatus: 'active', totalSpend: 67000, joinedDate: '2024-01-08' },
];

export const mockStudents: Student[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah.j@email.com', enrolledCourses: 3, completedCourses: 1, progress: 65, status: 'active', joinedDate: '2024-01-10' },
  { id: '2', name: 'Michael Chen', email: 'michael.c@email.com', enrolledCourses: 2, completedCourses: 2, progress: 100, status: 'active', joinedDate: '2023-12-01' },
  { id: '3', name: 'Emma Williams', email: 'emma.w@email.com', enrolledCourses: 4, completedCourses: 0, progress: 45, status: 'active', joinedDate: '2024-02-15' },
  { id: '4', name: 'James Brown', email: 'james.b@email.com', enrolledCourses: 1, completedCourses: 0, progress: 25, status: 'inactive', joinedDate: '2024-03-01' },
  { id: '5', name: 'Olivia Martinez', email: 'olivia.m@email.com', enrolledCourses: 3, completedCourses: 1, progress: 78, status: 'active', joinedDate: '2024-01-20' },
];

export const mockCourses: Course[] = [
  { id: '1', name: 'Advanced React Development', description: 'Master React hooks, state management, and modern patterns', enrollmentCount: 234, status: 'active', instructor: 'Dr. Alex Turner', duration: '12 weeks', category: 'Development', progress: 65 },
  { id: '2', name: 'E-commerce Business Fundamentals', description: 'Learn to build and scale online businesses', enrollmentCount: 189, status: 'active', instructor: 'Sarah Mitchell', duration: '8 weeks', category: 'Business', progress: 40 },
  { id: '3', name: 'Digital Marketing Mastery', description: 'Complete guide to modern digital marketing', enrollmentCount: 312, status: 'active', instructor: 'Mark Stevens', duration: '10 weeks', category: 'Marketing', progress: 85 },
  { id: '4', name: 'UI/UX Design Principles', description: 'Create beautiful and functional user interfaces', enrollmentCount: 156, status: 'active', instructor: 'Lisa Wang', duration: '6 weeks', category: 'Design' },
  { id: '5', name: 'Data Analytics for Business', description: 'Make data-driven decisions', enrollmentCount: 98, status: 'inactive', instructor: 'Robert Garcia', duration: '14 weeks', category: 'Analytics' },
];

export const mockOrders: Order[] = [
  { id: '1', clientName: 'Tech Solutions Inc', service: 'E-commerce Development', status: 'active', amount: 15000, date: '2024-02-10' },
  { id: '2', clientName: 'Global Traders Co', service: 'Marketplace Integration', status: 'active', amount: 12000, date: '2024-02-12' },
  { id: '3', clientName: 'Urban Fashion Ltd', service: 'Product Catalog', status: 'pending', amount: 8000, date: '2024-02-14' },
  { id: '4', clientName: 'Digital Dynamics', service: 'Full Stack Solution', status: 'active', amount: 22000, date: '2024-02-08' },
];

export const mockPayments: Payment[] = [
  { id: '1', from: 'Sarah Johnson', type: 'course', amount: 499, status: 'paid', date: '2024-02-10' },
  { id: '2', from: 'Tech Solutions Inc', type: 'ecommerce', amount: 15000, status: 'paid', date: '2024-02-12' },
  { id: '3', from: 'Emma Williams', type: 'course', amount: 599, status: 'due', date: '2024-02-15' },
  { id: '4', from: 'Global Traders Co', type: 'ecommerce', amount: 12000, status: 'paid', date: '2024-02-13' },
  { id: '5', from: 'Michael Chen', type: 'course', amount: 399, status: 'paid', date: '2024-02-11' },
];

export const mockMessages: Message[] = [
  { id: '1', from: 'Project Manager', message: 'The latest mockups are ready for review', timestamp: '2024-02-14T10:30:00', read: false, hasAttachment: true },
  { id: '2', from: 'Developer Team', message: 'Payment gateway integration completed', timestamp: '2024-02-14T09:15:00', read: true },
  { id: '3', from: 'Support Team', message: 'Client feedback received on recent deployment', timestamp: '2024-02-13T16:45:00', read: true },
];

export const mockAssignments: Assignment[] = [
  { id: '1', courseId: '1', courseName: 'Advanced React Development', title: 'Build a Todo App with Hooks', dueDate: '2024-02-20', status: 'pending' },
  { id: '2', courseId: '1', courseName: 'Advanced React Development', title: 'State Management Project', dueDate: '2024-02-15', status: 'submitted' },
  { id: '3', courseId: '2', courseName: 'E-commerce Business Fundamentals', title: 'Market Analysis Report', dueDate: '2024-02-18', status: 'graded', grade: 92 },
];

// Chart data
export const revenueChartData = [
  { month: 'Jan', ecommerce: 42000, courses: 12000 },
  { month: 'Feb', ecommerce: 38000, courses: 15000 },
  { month: 'Mar', ecommerce: 51000, courses: 18000 },
  { month: 'Apr', ecommerce: 47000, courses: 16000 },
  { month: 'May', ecommerce: 55000, courses: 21000 },
  { month: 'Jun', ecommerce: 62000, courses: 24000 },
];

export const enrollmentChartData = [
  { month: 'Jan', enrollments: 45 },
  { month: 'Feb', enrollments: 62 },
  { month: 'Mar', enrollments: 78 },
  { month: 'Apr', enrollments: 85 },
  { month: 'May', enrollments: 94 },
  { month: 'Jun', enrollments: 112 },
];

export const orderStatusData = [
  { name: 'Active', value: 12, fill: '#8D57AB' },
  { name: 'Pending', value: 5, fill: '#F59E0B' },
  { name: 'Completed', value: 23, fill: '#10B981' },
];

export const studentProgressData = [
  { progress: '0-25%', count: 12 },
  { progress: '25-50%', count: 28 },
  { progress: '50-75%', count: 45 },
  { progress: '75-100%', count: 67 },
];
