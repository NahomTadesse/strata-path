import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const productionStages = [
  { id: 1, name: "Raw Materials", status: "completed" as const, progress: 100, output: 1250, target: 1200 },
  { id: 2, name: "Cutting & Shaping", status: "in-progress" as const, progress: 75, output: 920, target: 1200 },
  { id: 3, name: "Assembly", status: "in-progress" as const, progress: 45, output: 540, target: 1200 },
  { id: 4, name: "Quality Control", status: "delayed" as const, progress: 30, output: 360, target: 1200 },
  { id: 5, name: "Packaging", status: "pending" as const, progress: 15, output: 180, target: 1200 },
  { id: 6, name: "Dispatch", status: "pending" as const, progress: 5, output: 60, target: 1200 },
];

const productionLines = [
  { id: "A1", name: "Line A1", status: "on-track" as const, efficiency: 94, uptime: "23.5h", output: 485 },
  { id: "A2", name: "Line A2", status: "on-track" as const, efficiency: 91, uptime: "23.8h", output: 472 },
  { id: "A3", name: "Line A3", status: "critical" as const, efficiency: 45, uptime: "12.2h", output: 215 },
  { id: "B1", name: "Line B1", status: "on-track" as const, efficiency: 88, uptime: "24h", output: 456 },
];

const Production = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Production Pipeline</h2>
        <p className="text-muted-foreground">Real-time production workflow and stage monitoring</p>
      </div>

      {/* Production Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Production Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productionStages.map((stage, index) => (
              <div key={stage.id}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-3 flex-1">
                    {stage.status === "completed" && <CheckCircle2 className="h-5 w-5 text-success" />}
                    {stage.status === "in-progress" && <Clock className="h-5 w-5 text-primary animate-pulse" />}
                    {stage.status === "delayed" && <AlertCircle className="h-5 w-5 text-warning" />}
                    {stage.status === "pending" && <Clock className="h-5 w-5 text-muted-foreground" />}
                    <span className="font-medium">{stage.name}</span>
                  </div>
                  <StatusBadge status={stage.status} />
                  <span className="text-sm text-muted-foreground min-w-[100px] text-right">
                    {stage.output} / {stage.target} units
                  </span>
                </div>
                <Progress value={stage.progress} className="h-3 mb-2" />
                {index < productionStages.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Production Lines */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Production Lines Status</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {productionLines.map((line) => (
            <Card key={line.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{line.name}</CardTitle>
                  <StatusBadge status={line.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Efficiency</span>
                  <span className="font-semibold">{line.efficiency}%</span>
                </div>
                <Progress value={line.efficiency} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Uptime</span>
                  <span className="font-semibold">{line.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Output</span>
                  <span className="font-semibold">{line.output} units</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Production;
