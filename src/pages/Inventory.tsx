import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle2, Package } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const inventoryItems = [
  { id: 1, name: "Steel Plates", category: "Raw Material", stock: 450, maxStock: 500, unit: "kg", status: "good" },
  { id: 2, name: "Aluminum Sheets", category: "Raw Material", stock: 120, maxStock: 600, unit: "kg", status: "low" },
  { id: 3, name: "Electric Motors", category: "Components", stock: 85, maxStock: 100, unit: "pcs", status: "good" },
  { id: 4, name: "Bolts & Screws", category: "Components", stock: 2500, maxStock: 3000, unit: "pcs", status: "good" },
  { id: 5, name: "Circuit Boards", category: "Components", stock: 45, maxStock: 200, unit: "pcs", status: "critical" },
  { id: 6, name: "Paint (Blue)", category: "Finishing", stock: 180, maxStock: 200, unit: "L", status: "good" },
  { id: 7, name: "Packaging Boxes", category: "Packaging", stock: 850, maxStock: 1000, unit: "pcs", status: "good" },
  { id: 8, name: "Rubber Gaskets", category: "Components", stock: 95, maxStock: 500, unit: "pcs", status: "low" },
];

const warehouseStats = [
  { name: "Total Items", value: "1,234", icon: Package },
  { name: "Low Stock Alerts", value: "8", icon: AlertTriangle },
  { name: "Optimal Stock", value: "892", icon: CheckCircle2 },
];

const Inventory = () => {
  const getStockPercentage = (stock: number, max: number) => (stock / max) * 100;
  
  const getStockStatus = (status: string) => {
    switch (status) {
      case "good":
        return <Badge className="bg-success/10 text-success border-success/20">Good</Badge>;
      case "low":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Low Stock</Badge>;
      case "critical":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Critical</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
        <p className="text-muted-foreground">Real-time inventory tracking and material management</p>
      </div>

      {/* Warehouse Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {warehouseStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    {item.stock} / {item.maxStock} {item.unit}
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <div className="space-y-1">
                      <Progress 
                        value={getStockPercentage(item.stock, item.maxStock)} 
                        className="h-2"
                      />
                      <span className="text-xs text-muted-foreground">
                        {getStockPercentage(item.stock, item.maxStock).toFixed(0)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{getStockStatus(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
