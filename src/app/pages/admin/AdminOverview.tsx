import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { ChartCard } from '../../components/dashboard/ChartCard';
import { DataTable } from '../../components/dashboard/DataTable';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { DollarSign, Users, GraduationCap, ShoppingCart, AlertCircle, Clock } from 'lucide-react';
import {
  revenueChartData,
  enrollmentChartData,
  orderStatusData,
  mockOrders,
  mockPayments,
} from '../../data/mockData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function AdminOverview() {
  return (
    <PageLayout
      role="admin"
      title="Admin Overview"
      subtitle="Monitor your business performance and key metrics"
    >
      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$156,230"
          change={{ value: 12.5, label: 'vs last month' }}
          icon={DollarSign}
          trend="up"
          variant="accent"
        />
        <StatCard
          title="Active Clients"
          value="127"
          change={{ value: 8.2, label: 'vs last month' }}
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Active Students"
          value="1,234"
          change={{ value: 15.3, label: 'vs last month' }}
          icon={GraduationCap}
          trend="up"
        />
        <StatCard
          title="Ongoing Orders"
          value="42"
          change={{ value: 3.1, label: 'vs last month' }}
          icon={ShoppingCart}
          trend="down"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <ChartCard title="Monthly Revenue" timeframe>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3A3852" />
              <XAxis dataKey="month" stroke="#9B9BA8" />
              <YAxis stroke="#9B9BA8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#252338',
                  border: '1px solid #3A3852',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="ecommerce"
                stroke="#8D57AB"
                strokeWidth={2}
                name="E-commerce"
              />
              <Line
                type="monotone"
                dataKey="courses"
                stroke="#6366F1"
                strokeWidth={2}
                name="Courses"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Order Status Distribution */}
        <ChartCard title="Order Status Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#252338',
                  border: '1px solid #3A3852',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Enrollment Growth */}
      <div className="mb-6">
        <ChartCard title="Course Enrollment Growth" timeframe>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={enrollmentChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3A3852" />
              <XAxis dataKey="month" stroke="#9B9BA8" />
              <YAxis stroke="#9B9BA8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#252338',
                  border: '1px solid #3A3852',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="enrollments" fill="#8D57AB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Bottom Section: Alerts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts Panel */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-accent" />
            <h3 className="text-lg">Alerts & Insights</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-yellow-500 mt-1" />
                <div>
                  <p className="text-sm mb-1">5 Pending Approvals</p>
                  <p className="text-xs text-muted-foreground">Client projects awaiting review</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <DollarSign className="w-4 h-4 text-red-500 mt-1" />
                <div>
                  <p className="text-sm mb-1">3 Overdue Payments</p>
                  <p className="text-xs text-muted-foreground">Total amount: $12,450</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-green-500 mt-1" />
                <div>
                  <p className="text-sm mb-1">12 Course Completions</p>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Orders */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {mockOrders.slice(0, 4).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex-1">
                  <p className="text-sm mb-1">{order.clientName}</p>
                  <p className="text-xs text-muted-foreground">{order.service}</p>
                </div>
                <div className="text-right mr-4">
                  <p className="text-sm">${order.amount.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
                <Badge
                  variant={
                    order.status === 'active'
                      ? 'default'
                      : order.status === 'pending'
                      ? 'secondary'
                      : 'outline'
                  }
                  className={
                    order.status === 'active'
                      ? 'bg-accent text-white'
                      : order.status === 'pending'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-green-500/20 text-green-500'
                  }
                >
                  {order.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
