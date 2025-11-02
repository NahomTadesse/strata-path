import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Bell, Shield, Database, Users, Workflow, AlertTriangle, Download, Key, Server, Clock, Gauge, FileText } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Advanced system configuration and management</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                <CardTitle>General Settings</CardTitle>
              </div>
              <CardDescription>Configure basic system settings and facility information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="factory-name">Factory Name</Label>
                  <Input id="factory-name" defaultValue="Main Production Facility" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facility-id">Facility ID</Label>
                  <Input id="facility-id" defaultValue="FAC-001" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Industrial District, City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">UTC-8 (PST)</SelectItem>
                      <SelectItem value="utc-5">UTC-5 (EST)</SelectItem>
                      <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                      <SelectItem value="utc+1">UTC+1 (CET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="shift-start">Default Shift Start</Label>
                  <Input id="shift-start" type="time" defaultValue="06:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shift-duration">Shift Duration (hours)</Label>
                  <Input id="shift-duration" type="number" defaultValue="8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">System Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="zh">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme across the platform</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compact View</Label>
                  <p className="text-sm text-muted-foreground">Show more data in less space</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-refresh Dashboards</Label>
                  <p className="text-sm text-muted-foreground">Automatically update data every 30 seconds</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Alert Configuration</CardTitle>
              </div>
              <CardDescription>Configure when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Production Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Machine Downtime</Label>
                        <p className="text-sm text-muted-foreground">Alert when machines are offline</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Production Target Missed</Label>
                        <p className="text-sm text-muted-foreground">Notify when targets aren't met</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Quality Control Failures</Label>
                        <p className="text-sm text-muted-foreground">Alert on failed quality checks</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="font-semibold mb-3">Inventory Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Low Stock</Label>
                        <p className="text-sm text-muted-foreground">Alert when inventory is below threshold</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Overstock Warning</Label>
                        <p className="text-sm text-muted-foreground">Notify when stock exceeds optimal levels</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Expiring Materials</Label>
                        <p className="text-sm text-muted-foreground">Alert for materials nearing expiration</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="font-semibold mb-3">Logistics Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Shipment Delays</Label>
                        <p className="text-sm text-muted-foreground">Notify about delayed shipments</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Delivery Confirmations</Label>
                        <p className="text-sm text-muted-foreground">Alert on successful deliveries</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label>Alert Priority Threshold</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Alerts</SelectItem>
                    <SelectItem value="medium">Medium & High Priority</SelectItem>
                    <SelectItem value="high">High Priority Only</SelectItem>
                    <SelectItem value="critical">Critical Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <CardTitle>User Management</CardTitle>
              </div>
              <CardDescription>Manage users, roles, and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold">System Administrator</p>
                      <p className="text-sm text-muted-foreground">Full system access and configuration</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">All Modules</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">User Management</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">Settings</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold">Production Manager</p>
                      <p className="text-sm text-muted-foreground">Production pipeline and inventory management</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded">Production</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded">Inventory</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded">Orders</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold">Logistics Coordinator</p>
                      <p className="text-sm text-muted-foreground">Shipment and supply chain management</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-success/10 text-success rounded">Logistics</span>
                    <span className="px-2 py-1 bg-success/10 text-success rounded">Inventory</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold">Line Operator</p>
                      <p className="text-sm text-muted-foreground">Basic operational access</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded">Production (View)</span>
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded">Workforce</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold">Quality Analyst</p>
                      <p className="text-sm text-muted-foreground">Quality control and reporting</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-warning/10 text-warning rounded">Analytics</span>
                    <span className="px-2 py-1 bg-warning/10 text-warning rounded">Production (View)</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <Button className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Add New User
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <CardTitle>Security Settings</CardTitle>
              </div>
              <CardDescription>Configure security policies and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Timeout Duration (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label>Password Policy</Label>
                <div className="space-y-2 p-3 border rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Minimum 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Require uppercase and lowercase</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Require numbers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <span>Require special characters</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label>API Access</Label>
                <div className="flex gap-2">
                  <Input placeholder="API Key" type="password" defaultValue="••••••••••••••••" />
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Audit Logging</Label>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Track all user activities and changes</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <CardTitle>System Integrations</CardTitle>
              </div>
              <CardDescription>Connect external systems, IoT devices, and third-party services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Server className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">ERP System</p>
                        <p className="text-sm text-muted-foreground">SAP, Oracle, or custom ERP</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-success/10 text-success rounded-full">Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="API Endpoint" defaultValue="https://erp.company.com/api" />
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Gauge className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold">IoT Sensors & SCADA</p>
                        <p className="text-sm text-muted-foreground">Real-time machine data</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Not Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Device Gateway URL" />
                    <Button>Connect</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Key className="h-5 w-5 text-warning" />
                      <div>
                        <p className="font-semibold">Logistics Partners API</p>
                        <p className="text-sm text-muted-foreground">FedEx, UPS, DHL integration</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-success/10 text-success rounded-full">Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Partner API Key" type="password" defaultValue="••••••••••••••••" />
                    <Button variant="outline">Update</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Database className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-semibold">Supply Chain Database</p>
                        <p className="text-sm text-muted-foreground">Supplier and vendor data sync</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Not Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Database Connection String" />
                    <Button>Connect</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Quality Management System</p>
                        <p className="text-sm text-muted-foreground">ISO compliance and QMS integration</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Not Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="QMS API Endpoint" />
                    <Button>Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Thresholds */}
        <TabsContent value="thresholds" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <CardTitle>Alert Thresholds</CardTitle>
              </div>
              <CardDescription>Configure operational thresholds and trigger points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Production Thresholds</h4>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label>Minimum Efficiency (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="85" className="flex-1" />
                      <span className="text-sm text-muted-foreground">Alert if below</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Maximum Downtime (hours/day)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="2" className="flex-1" />
                      <span className="text-sm text-muted-foreground">Alert if exceeds</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Defect Rate Threshold (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="2" step="0.1" className="flex-1" />
                      <span className="text-sm text-muted-foreground">Alert if exceeds</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-semibold mb-3">Inventory Thresholds</h4>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label>Low Stock Warning (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="20" className="flex-1" />
                      <span className="text-sm text-muted-foreground">% of max capacity</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Critical Stock Level (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="10" className="flex-1" />
                      <span className="text-sm text-muted-foreground">% of max capacity</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Overstock Threshold (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="95" className="flex-1" />
                      <span className="text-sm text-muted-foreground">% of max capacity</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-semibold mb-3">Logistics Thresholds</h4>
                <div className="space-y-3">
                  <div className="grid gap-2">
                    <Label>Delivery Delay Alert (hours)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="2" className="flex-1" />
                      <span className="text-sm text-muted-foreground">Hours past ETA</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>On-Time Delivery Target (%)</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="number" defaultValue="95" className="flex-1" />
                      <span className="text-sm text-muted-foreground">Alert if below</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automation */}
        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5" />
                <CardTitle>Workflow Automation</CardTitle>
              </div>
              <CardDescription>Configure automated actions and workflows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Auto-Restock on Low Inventory</p>
                      <p className="text-sm text-muted-foreground">Automatically generate purchase orders</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Input placeholder="Minimum quantity" type="number" defaultValue="100" />
                    <Input placeholder="Reorder quantity" type="number" defaultValue="500" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Shift Change Notifications</p>
                      <p className="text-sm text-muted-foreground">Alert supervisors 15min before shift change</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Quality Check Reminders</p>
                      <p className="text-sm text-muted-foreground">Remind operators to perform quality checks</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Every 1 hour</SelectItem>
                        <SelectItem value="2">Every 2 hours</SelectItem>
                        <SelectItem value="4">Every 4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Preventive Maintenance Scheduling</p>
                      <p className="text-sm text-muted-foreground">Schedule maintenance based on runtime hours</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Input placeholder="Hours between maintenance" type="number" defaultValue="200" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Auto-Generate Daily Reports</p>
                      <p className="text-sm text-muted-foreground">Email production summary at end of day</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Input type="time" defaultValue="18:00" />
                    <Input placeholder="Email recipients" defaultValue="manager@company.com" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                <CardTitle>System Maintenance</CardTitle>
              </div>
              <CardDescription>System health, backups, and maintenance operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Database Management</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Database Size</p>
                      <p className="text-sm text-muted-foreground">2.4 GB / 10 GB allocated</p>
                    </div>
                    <Button variant="outline" size="sm">Optimize</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Last Backup</p>
                      <p className="text-sm text-muted-foreground">Today at 02:00 AM</p>
                    </div>
                    <Button variant="outline" size="sm">Backup Now</Button>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-semibold mb-3">Data Export</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Production Data (CSV)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Inventory Report (Excel)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Analytics Dashboard (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Complete System Data (JSON)
                  </Button>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-semibold mb-3">System Information</h4>
                <div className="space-y-2 p-3 border rounded-lg bg-muted/50 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>v2.4.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Uptime:</span>
                    <span>23 days, 14 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Users:</span>
                    <span>46 / 142</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPU Usage:</span>
                    <span>34%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Memory:</span>
                    <span>4.2 GB / 16 GB</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h4 className="font-semibold mb-3 text-destructive">Danger Zone</h4>
                <div className="space-y-2 p-4 border-2 border-destructive/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Clear All Cache</p>
                      <p className="text-sm text-muted-foreground">Remove temporary data and cached files</p>
                    </div>
                    <Button variant="destructive" size="sm">Clear Cache</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Reset to Factory Defaults</p>
                      <p className="text-sm text-muted-foreground">⚠️ This will erase all custom settings</p>
                    </div>
                    <Button variant="destructive" size="sm">Reset</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save All Button */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="lg">Cancel</Button>
        <Button size="lg" className="bg-gradient-primary" onClick={handleSave}>
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
