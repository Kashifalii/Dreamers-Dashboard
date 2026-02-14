import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';
import { cn } from '../ui/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
  };
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'accent';
}

export function StatCard({ title, value, change, icon: Icon, trend = 'neutral', variant = 'default' }: StatCardProps) {
  return (
    <Card className={cn(
      'p-6',
      variant === 'accent' && 'bg-accent border-accent text-accent-foreground'
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn(
            'text-sm text-muted-foreground mb-1',
            variant === 'accent' && 'text-accent-foreground/80'
          )}>
            {title}
          </p>
          <h3 className={cn(
            'text-2xl mb-2',
            variant === 'accent' && 'text-accent-foreground'
          )}>
            {value}
          </h3>
          {change && (
            <div className="flex items-center gap-2">
              <span className={cn(
                'text-xs',
                trend === 'up' && 'text-green-500',
                trend === 'down' && 'text-red-500',
                trend === 'neutral' && 'text-muted-foreground',
                variant === 'accent' && 'text-accent-foreground/90'
              )}>
                {trend === 'up' && '↑'} {trend === 'down' && '↓'} {change.value}%
              </span>
              <span className={cn(
                'text-xs text-muted-foreground',
                variant === 'accent' && 'text-accent-foreground/70'
              )}>
                {change.label}
              </span>
            </div>
          )}
        </div>
        <div className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center',
          variant === 'default' ? 'bg-secondary' : 'bg-white/20'
        )}>
          <Icon className={cn(
            'w-6 h-6',
            variant === 'default' ? 'text-accent' : 'text-white'
          )} />
        </div>
      </div>
    </Card>
  );
}
