import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Shield, Database, Users } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage system configuration and preferences</p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            <CardTitle>General Settings</CardTitle>
          </div>
          <CardDescription>Configure basic system settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="factory-name">Factory Name</Label>
            <Input id="factory-name" placeholder="Enter factory name" defaultValue="Main Production Facility" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter location" defaultValue="Industrial District, City" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Input id="timezone" placeholder="Enter timezone" defaultValue="UTC-5" />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notifications</CardTitle>
          </div>
          <CardDescription>Configure alert and notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Machine Downtime Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified when machines go offline</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Low Inventory Alerts</Label>
              <p className="text-sm text-muted-foreground">Alert when stock levels are low</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Shipment Delays</Label>
              <p className="text-sm text-muted-foreground">Notify about delayed shipments</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <CardTitle>User Management</CardTitle>
          </div>
          <CardDescription>Manage users and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>User Roles</Label>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">Admin</p>
                  <p className="text-sm text-muted-foreground">Full system access</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">Production Manager</p>
                  <p className="text-sm text-muted-foreground">Production & inventory access</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">Operator</p>
                  <p className="text-sm text-muted-foreground">Basic operational access</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            <CardTitle>Integrations</CardTitle>
          </div>
          <CardDescription>Connect external systems and APIs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>ERP System</Label>
            <div className="flex gap-2">
              <Input placeholder="API Endpoint" />
              <Button variant="outline">Connect</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>IoT Sensors</Label>
            <div className="flex gap-2">
              <Input placeholder="Device Gateway URL" />
              <Button variant="outline">Connect</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Logistics Partners</Label>
            <div className="flex gap-2">
              <Input placeholder="Partner API Key" />
              <Button variant="outline">Connect</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="lg" className="bg-gradient-primary">
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
