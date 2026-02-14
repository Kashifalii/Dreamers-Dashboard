import { NavLink } from 'react-router';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  DollarSign, 
  MessageSquare,
  FolderKanban,
  BookOpen,
  ClipboardList,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../ui/utils';

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DashboardSidebarProps {
  role: 'admin' | 'client' | 'student';
}

const adminNavItems: NavItem[] = [
  { label: 'Overview', path: '/admin', icon: LayoutDashboard },
  { label: 'Clients', path: '/admin/clients', icon: Users },
  { label: 'Students', path: '/admin/students', icon: GraduationCap },
  { label: 'Courses', path: '/admin/courses', icon: BookOpen },
  { label: 'Payments', path: '/admin/payments', icon: DollarSign },
];

const clientNavItems: NavItem[] = [
  { label: 'Overview', path: '/client', icon: LayoutDashboard },
  { label: 'Projects', path: '/client/projects', icon: FolderKanban },
  { label: 'Messages', path: '/client/messages', icon: MessageSquare },
  { label: 'Payments', path: '/client/payments', icon: DollarSign },
];

const studentNavItems: NavItem[] = [
  { label: 'Overview', path: '/student', icon: LayoutDashboard },
  { label: 'My Courses', path: '/student/courses', icon: BookOpen },
  { label: 'Assignments', path: '/student/assignments', icon: ClipboardList },
  { label: 'Fees & Payments', path: '/student/payments', icon: DollarSign },
];

const sharedNavItems: NavItem[] = [
  { label: 'Settings', path: '/settings', icon: Settings },
  { label: 'Support', path: '/support', icon: HelpCircle },
];

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const navItems = role === 'admin' ? adminNavItems : role === 'client' ? clientNavItems : studentNavItems;

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div>
            <h2 className="text-sm text-sidebar-foreground">Dreamers Ecom Tech</h2>
            <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === `/admin` || item.path === `/client` || item.path === `/student`}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  'text-sm text-sidebar-foreground hover:bg-sidebar-accent',
                  isActive && 'bg-accent text-accent-foreground hover:bg-accent'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-sidebar-border space-y-1">
          {sharedNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  'text-sm text-sidebar-foreground hover:bg-sidebar-accent',
                  isActive && 'bg-accent text-accent-foreground hover:bg-accent'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-sidebar-foreground truncate">
              {role === 'admin' ? 'Admin User' : role === 'client' ? 'John Client' : 'Sarah Student'}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {role === 'admin' ? 'admin@dreamers.com' : role === 'client' ? 'john@company.com' : 'sarah@email.com'}
            </p>
          </div>
          <LogOut className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}
