import { PageLayout } from '../../components/layout/PageLayout';
import { StatCard } from '../../components/dashboard/StatCard';
import { DataTable } from '../../components/dashboard/DataTable';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { DollarSign, CreditCard, Clock, CheckCircle2 } from 'lucide-react';

const invoices = [
  { id: 'INV-001', project: 'E-commerce Platform Development', amount: 15000, status: 'paid', date: '2024-02-10', dueDate: '2024-02-20' },
  { id: 'INV-002', project: 'Payment Gateway Integration', amount: 12000, status: 'pending', date: '2024-02-12', dueDate: '2024-02-22' },
  { id: 'INV-003', project: 'Product Catalog Setup', amount: 8000, status: 'paid', date: '2024-01-15', dueDate: '2024-01-25' },
  { id: 'INV-004', project: 'UI/UX Design', amount: 10000, status: 'paid', date: '2024-01-05', dueDate: '2024-01-15' },
];

export function ClientPayments() {
  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <PageLayout
      role="client"
      title="Payments"
      subtitle="View invoices and payment history"
    >
      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Invoiced"
          value={`$${totalInvoiced.toLocaleString()}`}
          icon={DollarSign}
          variant="accent"
        />
        <StatCard
          title="Total Paid"
          value={`$${totalPaid.toLocaleString()}`}
          icon={CheckCircle2}
        />
        <StatCard
          title="Pending Payment"
          value={`$${totalPending.toLocaleString()}`}
          icon={Clock}
        />
        <StatCard
          title="Invoices"
          value={invoices.length}
          icon={CreditCard}
        />
      </div>

      {/* Payment Due Alert */}
      {totalPending > 0 && (
        <Card className="p-6 mb-6 border-l-4 border-l-accent">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base mb-2">Payment Due</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You have pending payments totaling ${totalPending.toLocaleString()}
              </p>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Make Payment
            </Button>
          </div>
        </Card>
      )}

      {/* Invoices Table */}
      <DataTable
        title="All Invoices"
        data={invoices}
        searchable
        exportable
        columns={[
          {
            header: 'Invoice ID',
            accessor: 'id',
            cell: (value) => <span className="text-accent">{value}</span>,
          },
          {
            header: 'Project',
            accessor: 'project',
          },
          {
            header: 'Amount',
            accessor: 'amount',
            cell: (value) => <span>${value.toLocaleString()}</span>,
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (value) => (
              <Badge
                variant={value === 'paid' ? 'default' : 'secondary'}
                className={
                  value === 'paid'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }
              >
                {value}
              </Badge>
            ),
          },
          {
            header: 'Invoice Date',
            accessor: 'date',
          },
          {
            header: 'Due Date',
            accessor: 'dueDate',
          },
          {
            header: 'Actions',
            accessor: (row) => row,
            cell: (_, row) => (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Download
                </Button>
                {row.status === 'pending' && (
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Pay Now
                  </Button>
                )}
              </div>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
