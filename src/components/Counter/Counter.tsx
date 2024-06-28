import cn from 'classnames';
import { type HTMLAttributes } from 'react';
import './Counter.styl';

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary';
  size: 8 | 12 | 16 | 20 | 24;
  border?: boolean;
  value?: string | number;
  pulse?: boolean;
}

const Counter = ({ variant, size, value, border = false, pulse = false, ...props }: CounterProps) => {
  if(typeof value === 'string' && value.length > 3) {
    value = value.slice(0, 3)
  } 
  else if (typeof value === 'number' && value > 99) {
    value = '99+'
  }

  return (
    <div 
      className={cn(
          `counter`,
          `counter-${variant}`,
          `counter-size-${size}`,
          {
            'counter-border': border,
            'counter-pulse': pulse
          }
        )
      }
      aria-live="polite"
      aria-atomic="true"
      role='status'
      {...props}
    >
      {size > 12 ? value : ''}
      {(pulse && size <= 12) && (
        <>
          <div className={`pulse one pulse-${variant} pulse-size-${size}`}></div>
          <div className={`pulse two pulse-${variant} pulse-size-${size}`}></div>
        </>
      )}
    </div>
  )
}
export default Counter
