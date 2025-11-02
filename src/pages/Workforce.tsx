import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Clock, CheckCircle2, UserCheck } from "lucide-react";

const shifts = [
  {
    id: 1,
    shift: "Morning (6AM - 2PM)",
    team: "Team Alpha",
    supervisor: "John Smith",
    workers: 24,
    status: "active",
    attendance: "24/24",
  },
  {
    id: 2,
    shift: "Afternoon (2PM - 10PM)",
    team: "Team Beta",
    supervisor: "Sarah Johnson",
    workers: 22,
    status: "active",
    attendance: "21/22",
  },
  {
    id: 3,
    shift: "Night (10PM - 6AM)",
    team: "Team Gamma",
    supervisor: "Mike Davis",
    workers: 18,
    status: "scheduled",
    attendance: "0/18",
  },
];

const workerPerformance = [
  { name: "Team Alpha", efficiency: 94, tasks: 156, quality: 98 },
  { name: "Team Beta", efficiency: 91, tasks: 148, quality: 96 },
  { name: "Team Gamma", efficiency: 88, tasks: 132, quality: 95 },
];

const workforceStats = [
  { name: "Total Workers", value: "142", icon: Users },
  { name: "Active Now", value: "46", icon: UserCheck },
  { name: "Avg. Attendance", value: "96%", icon: CheckCircle2 },
  { name: "Avg. Shift Hours", value: "7.8h", icon: Clock },
];

const Workforce = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Workforce Management</h2>
        <p className="text-muted-foreground">Shift scheduling, attendance, and team performance</p>
      </div>

      {/* Workforce Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workforceStats.map((stat) => (
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

      {/* Shift Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Shift Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shift Time</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Supervisor</TableHead>
                <TableHead>Workers</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shifts.map((shift) => (
                <TableRow key={shift.id}>
                  <TableCell className="font-medium">{shift.shift}</TableCell>
                  <TableCell>{shift.team}</TableCell>
                  <TableCell>{shift.supervisor}</TableCell>
                  <TableCell>{shift.workers}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{shift.attendance}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={
                        shift.status === "active" 
                          ? "bg-success/10 text-success border-success/20" 
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {shift.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Team Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead>Tasks Completed</TableHead>
                <TableHead>Quality Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workerPerformance.map((team) => (
                <TableRow key={team.name}>
                  <TableCell className="font-medium">{team.name}</TableCell>
                  <TableCell>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {team.efficiency}%
                    </Badge>
                  </TableCell>
                  <TableCell>{team.tasks}</TableCell>
                  <TableCell>
                    <Badge className="bg-success/10 text-success border-success/20">
                      {team.quality}%
                    </Badge>
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

export default Workforce;
