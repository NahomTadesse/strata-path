import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Bell, Shield, Database, Users, Workflow, AlertTriangle, Download, Key, Server, Clock, Gauge, FileText, Save, RefreshCw, Trash2, Plus, Edit, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const Settings = () => {
  const [autoRefreshInterval, setAutoRefreshInterval] = useState([30]);
  const [sessionTimeout, setSessionTimeout] = useState([30]);
  const [lowStockThreshold, setLowStockThreshold] = useState([20]);
  const [efficiencyThreshold, setEfficiencyThreshold] = useState([85]);

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@factory.com", role: "Admin", status: "Active", lastLogin: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@factory.com", role: "Production Manager", status: "Active", lastLogin: "5 hours ago" },
    { id: 3, name: "Mike Johnson", email: "mike@factory.com", role: "Logistics Coordinator", status: "Active", lastLogin: "1 day ago" },
    { id: 4, name: "Sarah Williams", email: "sarah@factory.com", role: "Line Operator", status: "Inactive", lastLogin: "3 days ago" },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Advanced system configuration and management</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 p-1 rounded-lg" style={{ backgroundColor: 'hsl(var(--sidebar) / 0.3)' }}>
          <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Alerts
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Users
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Security
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Integrations
          </TabsTrigger>
          <TabsTrigger value="thresholds" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Thresholds
          </TabsTrigger>
          <TabsTrigger value="automation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Automation
          </TabsTrigger>
          <TabsTrigger value="system" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            System
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <SettingsIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Facility Configuration</CardTitle>
                    <CardDescription>Configure basic facility and operational settings</CardDescription>
                  </div>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="factory-name" className="text-sm font-semibold flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Factory Name
                  </Label>
                  <Input id="factory-name" defaultValue="Main Production Facility" className="border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facility-id" className="text-sm font-semibold flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    Facility ID
                  </Label>
                  <Input id="facility-id" defaultValue="FAC-001" className="border-primary/20 focus:border-primary" />
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-semibold">Location</Label>
                  <Input id="location" defaultValue="Industrial District, City" className="border-primary/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-sm font-semibold">Timezone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger id="timezone" className="border-primary/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">UTC-8 (PST)</SelectItem>
                      <SelectItem value="utc-5">UTC-5 (EST)</SelectItem>
                      <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                      <SelectItem value="utc+1">UTC+1 (CET)</SelectItem>
                      <SelectItem value="utc+8">UTC+8 (CST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="shift-start" className="text-sm font-semibold">Default Shift Start</Label>
                  <Input id="shift-start" type="time" defaultValue="06:00" className="border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shift-duration" className="text-sm font-semibold">Shift Duration (hours)</Label>
                  <Input id="shift-duration" type="number" defaultValue="8" min="1" max="24" className="border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shifts-per-day" className="text-sm font-semibold">Shifts Per Day</Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="shifts-per-day" className="border-primary/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Shift</SelectItem>
                      <SelectItem value="2">2 Shifts</SelectItem>
                      <SelectItem value="3">3 Shifts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-sm font-semibold">Auto-Refresh Interval (seconds)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={autoRefreshInterval}
                    onValueChange={setAutoRefreshInterval}
                    min={10}
                    max={300}
                    step={10}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium min-w-[60px] text-right">{autoRefreshInterval[0]}s</span>
                </div>
                <p className="text-xs text-muted-foreground">How often dashboards refresh automatically</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Display & Interface</CardTitle>
              <CardDescription>Customize how information is displayed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div className="space-y-1">
                  <Label className="font-semibold">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme across the platform</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div className="space-y-1">
                  <Label className="font-semibold">Compact View</Label>
                  <p className="text-sm text-muted-foreground">Display more data in condensed layout</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div className="space-y-1">
                  <Label className="font-semibold">High Contrast Mode</Label>
                  <p className="text-sm text-muted-foreground">Enhanced visibility for better readability</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                <div className="space-y-1">
                  <Label className="font-semibold">Show Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable smooth transitions and effects</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alerts & Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Alert Configuration</CardTitle>
                    <CardDescription>Manage notification preferences and alert rules</CardDescription>
                  </div>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-gradient-to-r from-destructive/5 to-transparent">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <div>
                      <Label className="font-semibold">Critical System Alerts</Label>
                      <p className="text-xs text-muted-foreground">Machine failures, safety issues</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-gradient-to-r from-warning/5 to-transparent">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-warning" />
                    <div>
                      <Label className="font-semibold">Production Delays</Label>
                      <p className="text-xs text-muted-foreground">When targets are missed or delayed</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-gradient-to-r from-success/5 to-transparent">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-success" />
                    <div>
                      <Label className="font-semibold">Quality Control Failures</Label>
                      <p className="text-xs text-muted-foreground">Failed inspections and quality checks</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Inventory Notifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <Label className="font-semibold">Low Stock Warnings</Label>
                      <p className="text-xs text-muted-foreground">When inventory drops below threshold</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <Label className="font-semibold">Overstock Alerts</Label>
                      <p className="text-xs text-muted-foreground">Excess inventory warnings</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <Label className="font-semibold">Material Expiration</Label>
                      <p className="text-xs text-muted-foreground">Items approaching expiration date</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div>
                      <Label className="font-semibold">Reorder Suggestions</Label>
                      <p className="text-xs text-muted-foreground">AI-driven restock recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-sm font-semibold">Alert Priority Threshold</Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="border-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Alerts (Low, Medium, High, Critical)</SelectItem>
                    <SelectItem value="medium">Medium & Above</SelectItem>
                    <SelectItem value="high">High & Critical Only</SelectItem>
                    <SelectItem value="critical">Critical Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-sm font-semibold">Notification Channels</Label>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Email Notifications</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>SMS Alerts</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>In-App Notifications</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Webhook Integration</Label>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management */}
        <TabsContent value="users" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage team members and access permissions</CardDescription>
                  </div>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {user.status === "Active" ? (
                          <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
                        ) : (
                          <Badge variant="outline" className="bg-muted">Inactive</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>Define access levels for each role</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">System Administrator</p>
                    <p className="text-sm text-muted-foreground">Full system access and configuration rights</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground">All Modules</Badge>
                  <Badge className="bg-primary text-primary-foreground">User Management</Badge>
                  <Badge className="bg-primary text-primary-foreground">System Settings</Badge>
                  <Badge className="bg-primary text-primary-foreground">Security Config</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">Production Manager</p>
                    <p className="text-sm text-muted-foreground">Production, inventory, and order management</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Production</Badge>
                  <Badge variant="outline">Inventory</Badge>
                  <Badge variant="outline">Orders</Badge>
                  <Badge variant="outline">Analytics</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">Logistics Coordinator</p>
                    <p className="text-sm text-muted-foreground">Shipment and supply chain operations</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Logistics</Badge>
                  <Badge variant="outline">Inventory (View)</Badge>
                  <Badge variant="outline">Orders (View)</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">Line Operator</p>
                    <p className="text-sm text-muted-foreground">Basic operational and reporting access</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Production (View)</Badge>
                  <Badge variant="secondary">Workforce</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Security Policies</CardTitle>
                    <CardDescription>Configure authentication and access controls</CardDescription>
                  </div>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-destructive/5 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-destructive" />
                    <div>
                      <Label className="font-semibold">Two-Factor Authentication (2FA)</Label>
                      <p className="text-xs text-muted-foreground">Require 2FA for all user accounts</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <Label className="font-semibold">Auto Session Timeout</Label>
                      <p className="text-xs text-muted-foreground">Automatically log out after inactivity</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-semibold">Session Timeout Duration</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={sessionTimeout}
                    onValueChange={setSessionTimeout}
                    min={5}
                    max={120}
                    step={5}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium min-w-[80px] text-right">{sessionTimeout[0]} minutes</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Password Requirements
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Minimum 8 characters</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Require uppercase</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Require numbers</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Require special characters</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label htmlFor="password-expiry" className="text-sm font-semibold">Password Expiry</Label>
                <Select defaultValue="90">
                  <SelectTrigger id="password-expiry" className="border-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never Expire</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                    <SelectItem value="60">60 Days</SelectItem>
                    <SelectItem value="90">90 Days</SelectItem>
                    <SelectItem value="180">180 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Access Control
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>IP Whitelisting</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Login Attempt Limiting</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label>Activity Logging</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Recent Security Events</CardTitle>
              <CardDescription>Monitor authentication and access activities</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { event: "Successful login", user: "john@factory.com", time: "2 minutes ago", type: "success" },
                  { event: "Failed login attempt", user: "unknown@email.com", time: "15 minutes ago", type: "warning" },
                  { event: "Password changed", user: "jane@factory.com", time: "1 hour ago", type: "info" },
                  { event: "New user added", user: "mike@factory.com", time: "3 hours ago", type: "success" },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                    <div className="flex items-center gap-3">
                      {log.type === "success" && <div className="h-2 w-2 rounded-full bg-success" />}
                      {log.type === "warning" && <div className="h-2 w-2 rounded-full bg-warning" />}
                      {log.type === "info" && <div className="h-2 w-2 rounded-full bg-primary" />}
                      <div>
                        <p className="text-sm font-medium">{log.event}</p>
                        <p className="text-xs text-muted-foreground">{log.user}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>System Integrations</CardTitle>
                  <CardDescription>Connect external systems and services</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">ERP System</CardTitle>
                      <Badge className="bg-success/10 text-success border-success/20">Connected</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="erp-endpoint" className="text-sm">API Endpoint</Label>
                      <Input id="erp-endpoint" defaultValue="https://erp.company.com/api" className="text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="erp-key" className="text-sm">API Key</Label>
                      <Input id="erp-key" type="password" defaultValue="••••••••••••" className="text-sm" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Test
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">IoT Sensors</CardTitle>
                      <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="iot-protocol" className="text-sm">Protocol</Label>
                      <Select defaultValue="mqtt">
                        <SelectTrigger id="iot-protocol">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mqtt">MQTT</SelectItem>
                          <SelectItem value="http">HTTP/REST</SelectItem>
                          <SelectItem value="websocket">WebSocket</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="iot-endpoint" className="text-sm">Broker URL</Label>
                      <Input id="iot-endpoint" defaultValue="mqtt://iot.factory.local:1883" className="text-sm" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">SCADA System</CardTitle>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Connect SCADA for real-time machine data integration
                    </p>
                    <Button size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect SCADA
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Logistics Partners</CardTitle>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Integrate with carriers for shipment tracking
                    </p>
                    <Button size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Partner
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-semibold">Webhook Endpoints</h4>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="font-semibold">Production Updates</Label>
                      <Switch defaultChecked />
                    </div>
                    <Input 
                      defaultValue="https://api.company.com/webhooks/production" 
                      className="text-sm"
                      readOnly
                    />
                  </div>
                  <div className="p-4 border rounded-lg bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="font-semibold">Inventory Changes</Label>
                      <Switch defaultChecked />
                    </div>
                    <Input 
                      defaultValue="https://api.company.com/webhooks/inventory" 
                      className="text-sm"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Thresholds */}
        <TabsContent value="thresholds" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Gauge className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Performance Thresholds</CardTitle>
                    <CardDescription>Set operational limits and targets</CardDescription>
                  </div>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold mb-4 block">Low Stock Threshold (%)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={lowStockThreshold}
                      onValueChange={setLowStockThreshold}
                      min={5}
                      max={50}
                      step={5}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium min-w-[60px] text-right bg-destructive/10 text-destructive px-3 py-1 rounded">
                      {lowStockThreshold[0]}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Trigger alert when stock falls below this percentage
                  </p>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-semibold mb-4 block">Minimum Efficiency Target (%)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={efficiencyThreshold}
                      onValueChange={setEfficiencyThreshold}
                      min={50}
                      max={100}
                      step={5}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium min-w-[60px] text-right bg-success/10 text-success px-3 py-1 rounded">
                      {efficiencyThreshold[0]}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Alert when production line efficiency drops below target
                  </p>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="max-downtime" className="text-sm font-semibold">
                      Max Acceptable Downtime (minutes)
                    </Label>
                    <Input 
                      id="max-downtime" 
                      type="number" 
                      defaultValue="30"
                      min="0"
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quality-threshold" className="text-sm font-semibold">
                      Min Quality Pass Rate (%)
                    </Label>
                    <Input 
                      id="quality-threshold" 
                      type="number" 
                      defaultValue="95"
                      min="0"
                      max="100"
                      className="border-primary/20"
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="delivery-sla" className="text-sm font-semibold">
                      Delivery SLA (hours)
                    </Label>
                    <Input 
                      id="delivery-sla" 
                      type="number" 
                      defaultValue="48"
                      min="0"
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="production-target" className="text-sm font-semibold">
                      Daily Production Target (units)
                    </Label>
                    <Input 
                      id="production-target" 
                      type="number" 
                      defaultValue="1200"
                      min="0"
                      className="border-primary/20"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Alert Escalation Rules</CardTitle>
              <CardDescription>Define when and how alerts escalate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-warning/5 to-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Label className="font-semibold">Critical Alert Escalation</Label>
                    <p className="text-xs text-muted-foreground">Notify management if unresolved</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-xs">Escalation Delay</Label>
                    <Select defaultValue="15">
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Notify</Label>
                    <Select defaultValue="manager">
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Production Manager</SelectItem>
                        <SelectItem value="admin">System Admin</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automation */}
        <TabsContent value="automation" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Workflow className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Automation Rules</CardTitle>
                    <CardDescription>Automated workflows and intelligent actions</CardDescription>
                  </div>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Rule
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-success/5 to-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <Label className="font-semibold">Auto-Reorder Low Stock Items</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically generate purchase orders when stock is low
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">Trigger: Stock &lt; 20%</Badge>
                    <span>→</span>
                    <Badge variant="outline" className="text-xs">Action: Generate PO</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <Label className="font-semibold">Shift Handover Reports</Label>
                    <p className="text-xs text-muted-foreground">
                      Auto-generate and email reports at shift changes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">Trigger: Shift End</Badge>
                    <span>→</span>
                    <Badge variant="outline" className="text-xs">Action: Email Report</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-warning/5 to-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <Label className="font-semibold">Quality Check Failures</Label>
                    <p className="text-xs text-muted-foreground">
                      Pause production line when quality checks fail repeatedly
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">Trigger: 3 Failed Checks</Badge>
                    <span>→</span>
                    <Badge variant="outline" className="text-xs">Action: Pause Line</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <Label className="font-semibold">Predictive Maintenance Scheduling</Label>
                    <p className="text-xs text-muted-foreground">
                      Schedule maintenance based on machine usage patterns
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">Trigger: AI Analysis</Badge>
                    <span>→</span>
                    <Badge variant="outline" className="text-xs">Action: Schedule Task</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <Label className="font-semibold">Shipment Delay Notifications</Label>
                    <p className="text-xs text-muted-foreground">
                      Notify customers when shipments are delayed
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">Trigger: ETA Changed</Badge>
                    <span>→</span>
                    <Badge variant="outline" className="text-xs">Action: Send Email</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Scheduled Tasks</CardTitle>
              <CardDescription>Recurring automated operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              <div className="p-3 border rounded-lg bg-card/50 flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-sm">Daily Production Summary</Label>
                  <p className="text-xs text-muted-foreground">Runs at 11:59 PM daily</p>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
              </div>
              <div className="p-3 border rounded-lg bg-card/50 flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-sm">Weekly Inventory Audit</Label>
                  <p className="text-xs text-muted-foreground">Runs Sunday at 6:00 AM</p>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
              </div>
              <div className="p-3 border rounded-lg bg-card/50 flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-sm">Monthly Analytics Report</Label>
                  <p className="text-xs text-muted-foreground">Runs 1st of each month</p>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System */}
        <TabsContent value="system" className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>System Information</CardTitle>
                  <CardDescription>Platform health and diagnostics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg bg-card/50">
                  <Label className="text-xs text-muted-foreground">System Version</Label>
                  <p className="text-lg font-semibold mt-1">v2.5.3</p>
                </div>
                <div className="p-4 border rounded-lg bg-card/50">
                  <Label className="text-xs text-muted-foreground">Database Status</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <p className="text-lg font-semibold">Healthy</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-card/50">
                  <Label className="text-xs text-muted-foreground">API Response Time</Label>
                  <p className="text-lg font-semibold mt-1">127ms</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Backup, export, and maintenance operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="p-4 border rounded-lg bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Label className="font-semibold">Automatic Backups</Label>
                    <p className="text-xs text-muted-foreground">Daily automated database backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="text-xs text-muted-foreground">
                  Last backup: 2 hours ago
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export All Data
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Generate System Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Maintenance Mode</CardTitle>
              <CardDescription>System maintenance and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="p-4 border border-warning/30 rounded-lg bg-gradient-to-r from-warning/5 to-transparent">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <Label className="font-semibold">Enable Maintenance Mode</Label>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  This will temporarily disable user access while performing system updates
                </p>
                <Button variant="outline" className="gap-2">
                  <Lock className="h-4 w-4" />
                  Enable Maintenance Mode
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label className="font-semibold">Database Optimization</Label>
                <p className="text-sm text-muted-foreground">
                  Optimize database tables and indexes for better performance
                </p>
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Run Optimization
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label className="font-semibold">Clear Cache</Label>
                <p className="text-sm text-muted-foreground">
                  Clear system cache to resolve performance issues
                </p>
                <Button variant="outline" className="gap-2">
                  <Trash2 className="h-4 w-4" />
                  Clear All Caches
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader className="bg-gradient-to-r from-destructive/5 to-transparent">
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions - proceed with caution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              <Button variant="outline" className="w-full gap-2 border-destructive/30 text-destructive hover:bg-destructive/10">
                <Trash2 className="h-4 w-4" />
                Reset All Settings to Default
              </Button>
              <Button variant="outline" className="w-full gap-2 border-destructive/30 text-destructive hover:bg-destructive/10">
                <AlertTriangle className="h-4 w-4" />
                Purge Historical Data (90+ days)
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;