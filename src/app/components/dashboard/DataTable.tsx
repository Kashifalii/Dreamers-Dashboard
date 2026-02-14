import { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Filter, Download } from 'lucide-react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  cell?: (value: any, row: T) => ReactNode;
}

interface DataTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  searchable?: boolean;
  filterable?: boolean;
  exportable?: boolean;
}

export function DataTable<T extends { id: string }>({ 
  title, 
  data, 
  columns, 
  searchable = true,
  filterable = false,
  exportable = false
}: DataTableProps<T>) {
  return (
    <Card className="overflow-hidden">
      {/* Header */}
      {(title || searchable || filterable || exportable) && (
        <div className="p-4 border-b border-border flex items-center justify-between gap-4">
          {title && <h3 className="text-lg">{title}</h3>}
          <div className="flex items-center gap-2 ml-auto">
            {searchable && (
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 h-9 bg-secondary border-0"
                />
              </div>
            )}
            {filterable && (
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            )}
            {exportable && (
              <Button variant="outline" size="sm" className="h-9">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column, index) => {
                  let value: any;
                  if (typeof column.accessor === 'function') {
                    value = column.accessor(row);
                  } else {
                    value = row[column.accessor];
                  }

                  return (
                    <TableCell key={index}>
                      {column.cell ? column.cell(value, row) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="p-12 text-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      )}
    </Card>
  );
}
