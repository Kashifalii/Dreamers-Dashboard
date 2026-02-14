import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { HelpCircle, Mail, MessageSquare, FileText } from 'lucide-react';

interface SupportProps {
  role: 'admin' | 'client' | 'student';
}

export function Support({ role }: SupportProps) {
  return (
    <PageLayout
      role={role}
      title="Support & Feedback"
      subtitle="Get help or share your feedback with us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick Help Cards */}
        <Card className="p-6 hover:bg-secondary/50 cursor-pointer transition-colors">
          <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-base mb-2">Documentation</h3>
          <p className="text-sm text-muted-foreground">
            Browse our comprehensive guides and tutorials
          </p>
        </Card>

        <Card className="p-6 hover:bg-secondary/50 cursor-pointer transition-colors">
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-base mb-2">Live Chat</h3>
          <p className="text-sm text-muted-foreground">
            Chat with our support team in real-time
          </p>
        </Card>

        <Card className="p-6 hover:bg-secondary/50 cursor-pointer transition-colors">
          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-base mb-2">FAQs</h3>
          <p className="text-sm text-muted-foreground">
            Find answers to commonly asked questions
          </p>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-5 h-5 text-accent" />
          <h3 className="text-lg">Contact Support</h3>
        </div>
        <form className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Issue Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Issue</SelectItem>
                <SelectItem value="billing">Billing & Payments</SelectItem>
                <SelectItem value="account">Account Management</SelectItem>
                <SelectItem value="course">Course Content</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Brief description of your issue" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Provide detailed information about your issue..."
              rows={6}
            />
          </div>
          <div className="flex gap-3">
            <Button className="bg-accent hover:bg-accent/90">Submit Ticket</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </Card>

      {/* Feedback Form */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-5 h-5 text-accent" />
          <h3 className="text-lg">Share Your Feedback</h3>
        </div>
        <form className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Label htmlFor="feedbackType">Feedback Type</Label>
            <Select>
              <SelectTrigger id="feedbackType">
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="improvement">Improvement Suggestion</SelectItem>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="general">General Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="We'd love to hear your thoughts..."
              rows={6}
            />
          </div>
          <div className="flex gap-3">
            <Button className="bg-accent hover:bg-accent/90">Submit Feedback</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </Card>

      {/* FAQs Section */}
      <Card className="p-6 mt-6">
        <h3 className="text-lg mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="text-sm mb-2">How do I reset my password?</h4>
            <p className="text-xs text-muted-foreground">
              You can reset your password from the Security section in Settings. Click on "Change Password" and follow the instructions.
            </p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="text-sm mb-2">How do I make a payment?</h4>
            <p className="text-xs text-muted-foreground">
              Navigate to the Payments section and click on "Pay Now" next to any pending invoice. You can pay using credit card or other available payment methods.
            </p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="text-sm mb-2">How can I track my progress?</h4>
            <p className="text-xs text-muted-foreground">
              Your progress is automatically tracked and displayed on your dashboard. You can view detailed progress for each course in the "My Courses" section.
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
}
