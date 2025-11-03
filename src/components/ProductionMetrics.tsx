import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Activity, Download } from "lucide-react";

const hourlyData = [
  { hour: "00:00", output: 45, efficiency: 88 },
  { hour: "02:00", output: 48, efficiency: 91 },
  { hour: "04:00", output: 52, efficiency: 94 },
  { hour: "06:00", output: 58, efficiency: 96 },
  { hour: "08:00", output: 62, efficiency: 97 },
  { hour: "10:00", output: 65, efficiency: 98 },
  { hour: "12:00", output: 63, efficiency: 96 },
  { hour: "14:00", output: 67, efficiency: 99 },
  { hour: "16:00", output: 64, efficiency: 95 },
  { hour: "18:00", output: 59, efficiency: 93 },
  { hour: "20:00", output: 54, efficiency: 90 },
  { hour: "22:00", output: 48, efficiency: 89 },
];

export const ProductionMetrics = () => {
  const avgOutput = Math.round(hourlyData.reduce((acc, d) => acc + d.output, 0) / hourlyData.length);
  const avgEfficiency = Math.round(hourlyData.reduce((acc, d) => acc + d.efficiency, 0) / hourlyData.length);

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Real-Time Production Metrics</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Hourly output and efficiency tracking</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <div className="p-4 border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Avg Output/Hour</span>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="text-2xl font-bold">{avgOutput} units</p>
            <Badge className="mt-2 bg-success/10 text-success border-success/20">+12.3%</Badge>
          </div>
          
          <div className="p-4 border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Avg Efficiency</span>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="text-2xl font-bold">{avgEfficiency}%</p>
            <Badge className="mt-2 bg-success/10 text-success border-success/20">+3.7%</Badge>
          </div>
          
          <div className="p-4 border rounded-lg bg-gradient-to-br from-warning/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Peak Hour</span>
              <Activity className="h-4 w-4 text-warning" />
            </div>
            <p className="text-2xl font-bold">14:00</p>
            <Badge className="mt-2 bg-warning/10 text-warning border-warning/20">67 units</Badge>
          </div>
          
          <div className="p-4 border rounded-lg bg-gradient-to-br from-destructive/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Low Hour</span>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </div>
            <p className="text-2xl font-bold">00:00</p>
            <Badge className="mt-2 bg-destructive/10 text-destructive border-destructive/20">45 units</Badge>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="hour" className="text-xs" />
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
              name="Output (units/hr)"
              dot={{ fill: 'hsl(var(--primary))' }}
            />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              stroke="hsl(var(--success))" 
              strokeWidth={2}
              name="Efficiency (%)"
              dot={{ fill: 'hsl(var(--success))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};