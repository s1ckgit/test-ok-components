import cn from 'classnames';
import { type ButtonHTMLAttributes } from 'react';
import Counter from '../Counter/Counter';
import './Button.styl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary';
  size: 28 | 36 | 56;
  state: 'enabled' | 'loading' | 'disabled';
  counter: boolean;
}

type CounterSizeType = {
  [key in ButtonProps['size']]: 16 | 20 | 24;
};

const counterSize: CounterSizeType= {
  '28': 16,
  '36': 20,
  '56': 24
}

const Button = ({variant, size, state, counter, label, ...props}: ButtonProps) => {
  return (
    <button 
      disabled={state !== 'enabled' ? true : false}
      className={cn(
          `button`,
          `button-${variant}`,
          `button-size-${size}`,
          {
            'button-enabled': state === 'enabled',
            'button-loading': state === 'loading'
          }
        )
      }
      role='button'
      {...props}
    >
      <div className={cn(
        `content`,
        {
          'content-loading': state === 'loading'
        }
      )}>
        <>
          <p className='label'>
            {label}
          </p>
          {counter && (
            <Counter variant={variant} size={counterSize[size]} quantity={999}/>
          )}
        </>
      </div>

      {state === 'loading' && (
        <div className={`loader-wrapper loader-size-${size}`}>
          <span className='loader' />
        </div>  
      )}
    </button>
  )
}
export default Button
