import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, DollarSign, TrendingUp, Package } from "lucide-react";

const orders = [
  {
    id: "ORD-1024",
    customer: "Acme Corp",
    product: "Industrial Pumps",
    quantity: 150,
    priority: "high",
    status: "in-progress" as const,
    fulfillment: 65,
    deadline: "2024-12-15",
  },
  {
    id: "ORD-1025",
    customer: "TechManu Inc",
    product: "Motor Assemblies",
    quantity: 200,
    priority: "medium",
    status: "on-track" as const,
    fulfillment: 80,
    deadline: "2024-12-20",
  },
  {
    id: "ORD-1026",
    customer: "BuildCo",
    product: "Steel Frames",
    quantity: 80,
    priority: "high",
    status: "delayed" as const,
    fulfillment: 40,
    deadline: "2024-12-12",
  },
  {
    id: "ORD-1027",
    customer: "GlobalParts",
    product: "Circuit Boards",
    quantity: 500,
    priority: "low",
    status: "pending" as const,
    fulfillment: 15,
    deadline: "2024-12-25",
  },
];

const orderStats = [
  { name: "Total Orders", value: "127", icon: ClipboardList },
  { name: "Pending Orders", value: "34", icon: Package },
  { name: "Order Value", value: "$2.4M", icon: DollarSign },
  { name: "Fulfillment Rate", value: "87%", icon: TrendingUp },
];

const Orders = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Order Management</h2>
        <p className="text-muted-foreground">Track and manage production orders and demand</p>
      </div>

      {/* Order Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {orderStats.map((stat) => (
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

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Fulfillment</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.quantity} units</TableCell>
                  <TableCell>
                    <Badge variant={getPriorityColor(order.priority)}>
                      {order.priority.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="w-[150px]">
                    <div className="space-y-1">
                      <Progress value={order.fulfillment} className="h-2" />
                      <span className="text-xs text-muted-foreground">
                        {order.fulfillment}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
