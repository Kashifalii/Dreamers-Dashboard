import { useNavigate } from 'react-router';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Shield, Briefcase, GraduationCap } from 'lucide-react';

export function RoleSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">D</span>
          </div>
          <h1 className="text-3xl mb-2">Dreamers Ecom Tech</h1>
          <p className="text-muted-foreground">
            Select your role to access your dashboard
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            className="p-8 hover:bg-secondary/50 cursor-pointer transition-all hover:scale-105"
            onClick={() => navigate('/admin')}
          >
            <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-xl mb-3">Admin Portal</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Manage clients, students, courses, and monitor business performance
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90">
              Access Admin Dashboard
            </Button>
          </Card>

          <Card
            className="p-8 hover:bg-secondary/50 cursor-pointer transition-all hover:scale-105"
            onClick={() => navigate('/client')}
          >
            <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-xl mb-3">Client Portal</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Track projects, communicate with team, and manage payments
            </p>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Access Client Dashboard
            </Button>
          </Card>

          <Card
            className="p-8 hover:bg-secondary/50 cursor-pointer transition-all hover:scale-105"
            onClick={() => navigate('/student')}
          >
            <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-xl mb-3">Student Portal</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Access courses, track progress, submit assignments, and manage fees
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Access Student Dashboard
            </Button>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Need help? <span className="text-accent cursor-pointer hover:underline">Contact Support</span></p>
        </div>
      </div>
    </div>
  );
}
