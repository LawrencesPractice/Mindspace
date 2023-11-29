import { memo, SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.19885 7.83146C6.08901 7.9413 5.91096 7.9413 5.80112 7.83146L2.93369 4.96402C2.82386 4.85418 2.82386 4.67613 2.93369 4.5663L3.06628 4.4337C3.17611 4.32386 3.35419 4.32386 3.46403 4.4337L5.99999 6.96967L8.53596 4.4337C8.6458 4.32386 8.82385 4.32386 8.93369 4.4337L9.06629 4.5663C9.17612 4.67613 9.17612 4.85418 9.06629 4.96402L6.19885 7.83146Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ChevronDownIcon);
export { Memo as ChevronDownIcon };
