import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Cpu, Thermometer, Zap, Droplets, AlertCircle, CheckCircle2, Settings, Activity } from "lucide-react";

const machines = [
  { 
    id: "M-001", 
    name: "CNC Machine A1", 
    status: "operational",
    temperature: 72,
    power: 94,
    vibration: 23,
    coolant: 87,
    uptime: 23.5,
    cycles: 1247
  },
  { 
    id: "M-002", 
    name: "CNC Machine A2", 
    status: "operational",
    temperature: 68,
    power: 91,
    vibration: 19,
    coolant: 92,
    uptime: 23.8,
    cycles: 1289
  },
  { 
    id: "M-003", 
    name: "Press B1", 
    status: "warning",
    temperature: 89,
    power: 88,
    vibration: 45,
    coolant: 65,
    uptime: 22.1,
    cycles: 856
  },
  { 
    id: "M-004", 
    name: "Lathe C1", 
    status: "critical",
    temperature: 95,
    power: 45,
    vibration: 78,
    coolant: 32,
    uptime: 12.2,
    cycles: 423
  },
];

export const MachineMonitor = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-success/10 text-success border-success/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-4 w-4" />;
      case "warning":
      case "critical":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Machine Monitoring</h3>
          <p className="text-sm text-muted-foreground">Real-time sensor data and health metrics</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="h-4 w-4" />
          Configure Sensors
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {machines.map((machine) => (
          <Card key={machine.id} className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">{machine.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{machine.id}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(machine.status)}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(machine.status)}
                    {machine.status}
                  </span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Thermometer className="h-3 w-3" />
                    Temperature
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={machine.temperature} max={100} className="h-1.5 flex-1" />
                    <span className={`text-xs font-medium ${machine.temperature > 85 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {machine.temperature}°C
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="h-3 w-3" />
                    Power Load
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={machine.power} className="h-1.5 flex-1" />
                    <span className="text-xs font-medium text-muted-foreground">{machine.power}%</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Activity className="h-3 w-3" />
                    Vibration
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={machine.vibration} className="h-1.5 flex-1" />
                    <span className={`text-xs font-medium ${machine.vibration > 50 ? 'text-warning' : 'text-muted-foreground'}`}>
                      {machine.vibration}Hz
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Droplets className="h-3 w-3" />
                    Coolant
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={machine.coolant} className="h-1.5 flex-1" />
                    <span className={`text-xs font-medium ${machine.coolant < 50 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {machine.coolant}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-medium ml-2">{machine.uptime}h</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Cycles:</span>
                  <span className="font-medium ml-2">{machine.cycles.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};