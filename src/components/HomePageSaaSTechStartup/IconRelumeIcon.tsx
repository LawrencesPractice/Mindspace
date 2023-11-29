import { memo, SVGProps } from 'react';

const IconRelumeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.0633 7.12L20.9233 6.87C20.7427 6.56769 20.488 6.31643 20.1833 6.14L13.4733 2.27C13.1695 2.09375 12.8246 2.00062 12.4733 2H12.1833C11.832 2.00062 11.4871 2.09375 11.1833 2.27L4.47334 6.15C4.17031 6.32526 3.9186 6.57697 3.74334 6.88L3.60334 7.13C3.42709 7.43384 3.33396 7.77874 3.33334 8.13V15.88C3.33396 16.2313 3.42709 16.5762 3.60334 16.88L3.74334 17.13C3.92313 17.4295 4.17383 17.6802 4.47334 17.86L11.1933 21.73C11.4956 21.9099 11.8415 22.0033 12.1933 22H12.4733C12.8246 21.9994 13.1695 21.9063 13.4733 21.73L20.1833 17.85C20.4893 17.6787 20.742 17.426 20.9133 17.12L21.0633 16.87C21.2374 16.5653 21.3304 16.221 21.3333 15.87V8.12C21.3327 7.76874 21.2396 7.42384 21.0633 7.12ZM12.1833 4H12.4733L18.3333 7.38L12.3333 10.84L6.33334 7.38L12.1833 4ZM13.3333 19.5L19.1833 16.12L19.3333 15.87V9.11L13.3333 12.58V19.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(IconRelumeIcon);
export { Memo as IconRelumeIcon };
