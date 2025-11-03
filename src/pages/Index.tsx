import { Activity, TrendingUp, Package, Truck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { KPICard } from "@/components/KPICard";
import { StatusBadge } from "@/components/StatusBadge";
import { ProductionMetrics } from "@/components/ProductionMetrics";
import { MachineMonitor } from "@/components/MachineMonitor";
import { InventoryAlerts } from "@/components/InventoryAlerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const productionData = [
  { name: "Mon", output: 420 },
  { name: "Tue", output: 380 },
  { name: "Wed", output: 450 },
  { name: "Thu", output: 410 },
  { name: "Fri", output: 470 },
  { name: "Sat", output: 390 },
  { name: "Sun", output: 340 },
];

const efficiencyData = [
  { name: "Line 1", efficiency: 94 },
  { name: "Line 2", efficiency: 88 },
  { name: "Line 3", efficiency: 92 },
  { name: "Line 4", efficiency: 85 },
];

const recentAlerts = [
  { id: 1, type: "critical", message: "Machine A3 - Unexpected downtime", time: "5 min ago" },
  { id: 2, type: "warning", message: "Low stock alert: Steel plates", time: "15 min ago" },
  { id: 3, type: "info", message: "Shipment #2847 delayed by 2 hours", time: "1 hour ago" },
];

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">Real-time manufacturing and logistics insights</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Production Output"
          value="2,847"
          icon={Activity}
          trend={{ value: 12.5, isPositive: true }}
        />
        <KPICard
          title="Efficiency Rate"
          value="89.2%"
          icon={TrendingUp}
          trend={{ value: 3.1, isPositive: true }}
        />
        <KPICard
          title="Inventory Items"
          value="1,234"
          icon={Package}
          trend={{ value: 5.2, isPositive: false }}
        />
        <KPICard
          title="Active Shipments"
          value="47"
          icon={Truck}
          trend={{ value: 8.3, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Production Trend */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Production Output Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="output" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Production Lines Efficiency */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Line Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="efficiency" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Production Pipeline Status */}
        <Card>
          <CardHeader>
            <CardTitle>Production Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Raw Materials</span>
                <StatusBadge status="on-track" />
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">In Process</span>
                <StatusBadge status="in-progress" />
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Quality Check</span>
                <StatusBadge status="delayed" />
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Finished Goods</span>
                <StatusBadge status="on-track" />
              </div>
              <Progress value={88} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex gap-3 p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                {alert.type === "critical" && <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />}
                {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />}
                {alert.type === "info" && <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Production Metrics */}
      <ProductionMetrics />

      {/* Machine Monitoring */}
      <MachineMonitor />

      {/* Inventory Alerts */}
      <InventoryAlerts />
    </div>
  );
};

export default Index;
