import { ReactNode } from 'react';
import { Card } from '../ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  timeframe?: boolean;
}

export function ChartCard({ title, children, timeframe = false }: ChartCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg">{title}</h3>
        {timeframe && (
          <Select defaultValue="6m">
            <SelectTrigger className="w-32 h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="w-full h-80">
        {children}
      </div>
    </Card>
  );
}
