import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

interface SettingsProps {
  role: 'admin' | 'client' | 'student';
}

export function Settings({ role }: SettingsProps) {
  return (
    <PageLayout
      role={role}
      title="Settings"
      subtitle="Manage your account preferences and security"
    >
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <Card className="p-6">
            <h3 className="text-lg mb-6">Personal Information</h3>
            <div className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Passionate learner and professional" />
              </div>
              <div className="flex gap-3">
                <Button className="bg-accent hover:bg-accent/90">Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg mb-6">Change Password</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button className="bg-accent hover:bg-accent/90">Update Password</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg mb-6">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between max-w-2xl">
                <div>
                  <p className="text-sm mb-1">Enable Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg mb-6">Active Sessions</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm mb-1">Chrome on MacOS</p>
                    <p className="text-xs text-muted-foreground">Last active: 2 minutes ago</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-500">Current</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm mb-1">Safari on iPhone</p>
                    <p className="text-xs text-muted-foreground">Last active: 2 days ago</p>
                  </div>
                  <Button variant="outline" size="sm">Revoke</Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card className="p-6">
            <h3 className="text-lg mb-6">Notification Preferences</h3>
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive email updates about your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Payment Notifications</p>
                  <p className="text-xs text-muted-foreground">Get notified about payments and invoices</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Course Updates</p>
                  <p className="text-xs text-muted-foreground">Notifications about new lessons and content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Marketing Emails</p>
                  <p className="text-xs text-muted-foreground">Promotional content and updates</p>
                </div>
                <Switch />
              </div>
              <Button className="bg-accent hover:bg-accent/90">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences">
          <Card className="p-6">
            <h3 className="text-lg mb-6">Display Preferences</h3>
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="pst">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Dark Mode</p>
                  <p className="text-xs text-muted-foreground">Use dark theme across the dashboard</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button className="bg-accent hover:bg-accent/90">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}