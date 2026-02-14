import { PageLayout } from '../../components/layout/PageLayout';
import { DataTable } from '../../components/dashboard/DataTable';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Eye, Mail } from 'lucide-react';
import { mockClients } from '../../data/mockData';

export function AdminClients() {
  return (
    <PageLayout
      role="admin"
      title="Client Management"
      subtitle="Manage and monitor all your clients"
    >
      <DataTable
        title="All Clients"
        data={mockClients}
        searchable
        filterable
        exportable
        columns={[
          {
            header: 'Client Name',
            accessor: 'name',
            cell: (value, row) => (
              <div>
                <p className="text-sm">{value}</p>
                <p className="text-xs text-muted-foreground">{row.email}</p>
              </div>
            ),
          },
          {
            header: 'Service Type',
            accessor: 'serviceType',
          },
          {
            header: 'Order Status',
            accessor: 'orderStatus',
            cell: (value) => (
              <Badge
                variant={
                  value === 'active'
                    ? 'default'
                    : value === 'pending'
                    ? 'secondary'
                    : 'outline'
                }
                className={
                  value === 'active'
                    ? 'bg-accent text-white'
                    : value === 'pending'
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-green-500/20 text-green-500'
                }
              >
                {value}
              </Badge>
            ),
          },
          {
            header: 'Total Spend',
            accessor: 'totalSpend',
            cell: (value) => <span>${value.toLocaleString()}</span>,
          },
          {
            header: 'Joined Date',
            accessor: 'joinedDate',
          },
          {
            header: 'Actions',
            accessor: (row) => row,
            cell: () => (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
