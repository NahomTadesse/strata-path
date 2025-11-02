import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Truck, Package, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const shipments = [
  {
    id: "SH-2847",
    destination: "New York, NY",
    status: "in-progress" as const,
    progress: 65,
    eta: "2 hours",
    carrier: "FastShip Logistics",
  },
  {
    id: "SH-2848",
    destination: "Los Angeles, CA",
    status: "delayed" as const,
    progress: 40,
    eta: "Delayed by 3h",
    carrier: "QuickMove",
  },
  {
    id: "SH-2849",
    destination: "Chicago, IL",
    status: "on-track" as const,
    progress: 85,
    eta: "45 minutes",
    carrier: "FastShip Logistics",
  },
  {
    id: "SH-2850",
    destination: "Houston, TX",
    status: "completed" as const,
    progress: 100,
    eta: "Delivered",
    carrier: "ExpressRoute",
  },
  {
    id: "SH-2851",
    destination: "Phoenix, AZ",
    status: "in-progress" as const,
    progress: 25,
    eta: "6 hours",
    carrier: "QuickMove",
  },
];

const logisticsStats = [
  { name: "Active Shipments", value: "47", icon: Truck },
  { name: "In Transit", value: "32", icon: Package },
  { name: "Avg. Delivery Time", value: "4.2h", icon: Clock },
  { name: "On-Time Rate", value: "94%", icon: MapPin },
];

const Logistics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Logistics & Supply Chain</h2>
        <p className="text-muted-foreground">Track shipments and manage logistics operations</p>
      </div>

      {/* Logistics Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {logisticsStats.map((stat) => (
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

      {/* Shipments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {shipment.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{shipment.carrier}</Badge>
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <div className="space-y-1">
                      <Progress value={shipment.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">
                        {shipment.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{shipment.eta}</TableCell>
                  <TableCell>
                    <StatusBadge status={shipment.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Shipment Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Route Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Map visualization coming soon</p>
              <p className="text-sm text-muted-foreground">GPS tracking integration placeholder</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logistics;
