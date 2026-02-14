import { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { TopNav } from './TopNav';

interface PageLayoutProps {
  role: 'admin' | 'client' | 'student';
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageLayout({ role, title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
