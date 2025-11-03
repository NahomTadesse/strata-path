import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package, TrendingDown, Clock, ShoppingCart } from "lucide-react";

const alerts = [
  {
    id: 1,
    item: "Circuit Boards",
    currentStock: 45,
    minStock: 200,
    urgency: "critical",
    daysUntilOut: 2,
    suggestedOrder: 300,
    supplier: "Tech Components Inc."
  },
  {
    id: 2,
    item: "Aluminum Sheets",
    currentStock: 120,
    minStock: 600,
    urgency: "high",
    daysUntilOut: 5,
    suggestedOrder: 800,
    supplier: "Metal Supply Co."
  },
  {
    id: 3,
    item: "Rubber Gaskets",
    currentStock: 95,
    minStock: 500,
    urgency: "medium",
    daysUntilOut: 8,
    suggestedOrder: 600,
    supplier: "Industrial Parts Ltd."
  },
  {
    id: 4,
    item: "Hydraulic Fluid",
    currentStock: 180,
    minStock: 400,
    urgency: "medium",
    daysUntilOut: 7,
    suggestedOrder: 500,
    supplier: "Fluids & Oils Depot"
  },
];

export const InventoryAlerts = () => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "high":
        return "bg-warning/10 text-warning border-warning/20";
      case "medium":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <CardTitle>Low Stock Alerts</CardTitle>
          </div>
          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
            {alerts.filter(a => a.urgency === "critical").length} Critical
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 border rounded-lg bg-card hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">{alert.item}</h4>
                  <p className="text-xs text-muted-foreground">{alert.supplier}</p>
                </div>
              </div>
              <Badge className={getUrgencyColor(alert.urgency)}>
                {alert.urgency}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <span className="text-muted-foreground">Current:</span>
                <span className="font-semibold">{alert.currentStock}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-warning" />
                <span className="text-muted-foreground">Stock-out in:</span>
                <span className="font-semibold">{alert.daysUntilOut} days</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t">
              <div className="text-sm">
                <span className="text-muted-foreground">Suggested order:</span>
                <span className="font-semibold ml-2">{alert.suggestedOrder} units</span>
              </div>
              <Button size="sm" className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Order Now
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};