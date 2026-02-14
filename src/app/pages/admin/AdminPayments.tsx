import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { DataTable } from '../../components/dashboard/DataTable';
import { ChartCard } from '../../components/dashboard/ChartCard';
import { Badge } from '../../components/ui/badge';
import { DollarSign, TrendingUp, CreditCard, AlertCircle } from 'lucide-react';
import { mockPayments, revenueChartData } from '../../data/mockData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function AdminPayments() {
  const totalRevenue = mockPayments.reduce((sum, p) => sum + p.amount, 0);
  const paidAmount = mockPayments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);
  const dueAmount = mockPayments.filter(p => p.status === 'due').reduce((sum, p) => sum + p.amount, 0);

  return (
    <PageLayout
      role="admin"
      title="Payments & Finance"
      subtitle="Monitor revenue and payment transactions"
    >
      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          change={{ value: 15.3, label: 'vs last month' }}
          icon={DollarSign}
          trend="up"
          variant="accent"
        />
        <StatCard
          title="Paid Amount"
          value={`$${paidAmount.toLocaleString()}`}
          change={{ value: 8.7, label: 'vs last month' }}
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Due Amount"
          value={`$${dueAmount.toLocaleString()}`}
          icon={AlertCircle}
        />
        <StatCard
          title="Transactions"
          value={mockPayments.length}
          change={{ value: 12.0, label: 'vs last month' }}
          icon={CreditCard}
          trend="up"
        />
      </div>

      {/* Revenue Breakdown Chart */}
      <div className="mb-6">
        <ChartCard title="Revenue Breakdown: E-commerce vs Courses" timeframe>
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
                name="E-commerce Revenue"
              />
              <Line
                type="monotone"
                dataKey="courses"
                stroke="#6366F1"
                strokeWidth={2}
                name="Course Revenue"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Payment Transactions Table */}
      <DataTable
        title="Recent Transactions"
        data={mockPayments}
        searchable
        filterable
        exportable
        columns={[
          {
            header: 'From',
            accessor: 'from',
          },
          {
            header: 'Type',
            accessor: 'type',
            cell: (value) => (
              <Badge
                variant="secondary"
                className={value === 'ecommerce' ? 'bg-accent/20 text-accent' : 'bg-blue-500/20 text-blue-500'}
              >
                {value === 'ecommerce' ? 'E-commerce' : 'Course'}
              </Badge>
            ),
          },
          {
            header: 'Amount',
            accessor: 'amount',
            cell: (value) => <span className="text-accent">${value.toLocaleString()}</span>,
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
              <Badge
                variant={
                  value === 'paid'
                    ? 'default'
                    : value === 'due'
                    ? 'secondary'
                    : 'outline'
                }
                className={
                  value === 'paid'
                    ? 'bg-green-500/20 text-green-500'
                    : value === 'due'
                    ? 'bg-red-500/20 text-red-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }
              >
                {value}
              </Badge>
            ),
          },
          {
            header: 'Date',
            accessor: 'date',
          },
        ]}
      />
    </PageLayout>
  );
}
