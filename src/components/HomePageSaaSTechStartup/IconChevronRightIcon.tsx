import { memo, SVGProps } from 'react';

const IconChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.48014 5.57114C7.58998 5.68098 7.58998 5.85903 7.48014 5.96887L4.6127 8.8363C4.50287 8.94613 4.32482 8.94613 4.21498 8.8363L4.08238 8.70371C3.97254 8.59388 3.97254 8.4158 4.08238 8.30596L6.61835 5.77L4.08238 3.23403C3.97254 3.12419 3.97254 2.94614 4.08238 2.8363L4.21498 2.7037C4.32482 2.59387 4.50287 2.59387 4.6127 2.7037L7.48014 5.57114Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(IconChevronRightIcon);
export { Memo as IconChevronRightIcon };
