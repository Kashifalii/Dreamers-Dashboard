import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

/**
 * Dreamers Ecom Tech - Multi-Role Dashboard System
 * 
 * A comprehensive SaaS dashboard supporting three distinct user roles:
 * - Admin: Manage clients, students, courses, and payments
 * - Client: Track projects, communicate with team, manage invoices
 * - Student: Access courses, submit assignments, track progress
 * 
 * Features:
 * - Dark-first design with #8D57AB primary accent
 * - Role-based navigation and access control
 * - Reusable component library (StatCard, DataTable, ChartCard)
 * - Shared Settings and Support pages across all roles
 * - Mock data for realistic demonstration
 */

// Role Selector
import { RoleSelector } from './pages/RoleSelector';

// Admin Pages
import { AdminOverview } from './pages/admin/AdminOverview';
import { AdminClients } from './pages/admin/AdminClients';
import { AdminStudents } from './pages/admin/AdminStudents';
import { AdminCourses } from './pages/admin/AdminCourses';
import { AdminPayments } from './pages/admin/AdminPayments';

// Client Pages
import { ClientOverview } from './pages/client/ClientOverview';
import { ClientProjects } from './pages/client/ClientProjects';
import { ClientMessages } from './pages/client/ClientMessages';
import { ClientPayments } from './pages/client/ClientPayments';

// Student Pages
import { StudentOverview } from './pages/student/StudentOverview';
import { StudentCourses } from './pages/student/StudentCourses';
import { StudentAssignments } from './pages/student/StudentAssignments';
import { StudentPayments } from './pages/student/StudentPayments';

// Shared Pages
import { Settings } from './pages/shared/Settings';
import { Support } from './pages/shared/Support';

export default function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes>
          {/* Landing / Role Selector */}
          <Route path="/" element={<RoleSelector />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/payments" element={<AdminPayments />} />

          {/* Client Routes */}
          <Route path="/client" element={<ClientOverview />} />
          <Route path="/client/projects" element={<ClientProjects />} />
          <Route path="/client/messages" element={<ClientMessages />} />
          <Route path="/client/payments" element={<ClientPayments />} />

          {/* Student Routes */}
          <Route path="/student" element={<StudentOverview />} />
          <Route path="/student/courses" element={<StudentCourses />} />
          <Route path="/student/assignments" element={<StudentAssignments />} />
          <Route path="/student/payments" element={<StudentPayments />} />

          {/* Shared Routes - dynamically handle role */}
          <Route path="/settings" element={<SettingsWrapper />} />
          <Route path="/support" element={<SupportWrapper />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Wrapper components to determine role from current path
function SettingsWrapper() {
  const role = determineRole();
  return <Settings role={role} />;
}

function SupportWrapper() {
  const role = determineRole();
  return <Support role={role} />;
}

function determineRole(): 'admin' | 'client' | 'student' {
  const path = window.location.pathname;
  if (path.includes('/admin')) return 'admin';
  if (path.includes('/client')) return 'client';
  if (path.includes('/student')) return 'student';
  // Default fallback
  return 'admin';
}