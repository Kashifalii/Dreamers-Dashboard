import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { DataTable } from '../../components/dashboard/DataTable';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { DollarSign, CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';

const feeBreakdown = [
  { id: '1', course: 'Advanced React Development', fee: 499, paid: 499, due: 0, status: 'paid', date: '2024-01-10' },
  { id: '2', course: 'E-commerce Business Fundamentals', fee: 599, paid: 300, due: 299, status: 'partial', date: '2024-02-15' },
  { id: '3', course: 'Digital Marketing Mastery', fee: 399, paid: 0, due: 399, status: 'due', date: '2024-02-20' },
];

const paymentHistory = [
  { id: '1', description: 'Course Enrollment - Advanced React', amount: 499, date: '2024-01-10', method: 'Credit Card' },
  { id: '2', description: 'Course Enrollment - E-commerce (Partial)', amount: 300, date: '2024-02-15', method: 'Credit Card' },
];

export function StudentPayments() {
  const totalFees = feeBreakdown.reduce((sum, item) => sum + item.fee, 0);
  const totalPaid = feeBreakdown.reduce((sum, item) => sum + item.paid, 0);
  const totalDue = feeBreakdown.reduce((sum, item) => sum + item.due, 0);

  return (
    <PageLayout
      role="student"
      title="Fees & Payments"
      subtitle="Manage your course fees and payment history"
    >
      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Fees"
          value={`$${totalFees.toLocaleString()}`}
          icon={DollarSign}
          variant="accent"
        />
        <StatCard
          title="Total Paid"
          value={`$${totalPaid.toLocaleString()}`}
          icon={CheckCircle2}
        />
        <StatCard
          title="Amount Due"
          value={`$${totalDue.toLocaleString()}`}
          icon={AlertCircle}
        />
        <StatCard
          title="Enrolled Courses"
          value={feeBreakdown.length}
          icon={CreditCard}
        />
      </div>

      {/* Due Payment Alert */}
      {totalDue > 0 && (
        <Card className="p-6 mb-6 border-l-4 border-l-red-500">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="text-base mb-2">Outstanding Payment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You have a pending payment of ${totalDue.toLocaleString()} for your course enrollments.
                </p>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Pay Now
            </Button>
          </div>
        </Card>
      )}

      {/* Fee Breakdown */}
      <DataTable
        title="Fee Breakdown by Course"
        data={feeBreakdown}
        searchable
        columns={[
          {
            header: 'Course',
            accessor: 'course',
          },
          {
            header: 'Total Fee',
            accessor: 'fee',
            cell: (value) => <span>${value.toLocaleString()}</span>,
          },
          {
            header: 'Paid Amount',
            accessor: 'paid',
            cell: (value) => <span className="text-green-500">${value.toLocaleString()}</span>,
          },
          {
            header: 'Due Amount',
            accessor: 'due',
            cell: (value) => (
              <span className={value > 0 ? 'text-red-500' : 'text-muted-foreground'}>
                ${value.toLocaleString()}
              </span>
            ),
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
              <Badge
                variant="secondary"
                className={
                  value === 'paid'
                    ? 'bg-green-500/20 text-green-500'
                    : value === 'partial'
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-red-500/20 text-red-500'
                }
              >
                {value === 'paid' ? 'Paid' : value === 'partial' ? 'Partial' : 'Due'}
              </Badge>
            ),
          },
          {
            header: 'Enrollment Date',
            accessor: 'date',
          },
          {
            header: 'Actions',
            accessor: (row) => row,
            cell: (_, row) => (
              <div className="flex gap-2">
                {row.due > 0 && (
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Pay ${row.due}
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Receipt
                </Button>
              </div>
            ),
          },
        ]}
      />

      {/* Payment History */}
      <div className="mt-6">
        <DataTable
          title="Payment History"
          data={paymentHistory}
          searchable
          exportable
          columns={[
            {
              header: 'Description',
              accessor: 'description',
            },
            {
              header: 'Amount',
              accessor: 'amount',
              cell: (value) => <span className="text-accent">${value.toLocaleString()}</span>,
            },
            {
              header: 'Date',
              accessor: 'date',
            },
            {
              header: 'Payment Method',
              accessor: 'method',
              cell: (value) => (
                <Badge variant="secondary" className="bg-secondary">
                  {value}
                </Badge>
              ),
            },
            {
              header: 'Actions',
              accessor: (row) => row,
              cell: () => (
                <Button variant="outline" size="sm">
                  Download Receipt
                </Button>
              ),
            },
          ]}
        />
      </div>
    </PageLayout>
  );
}
