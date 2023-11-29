import { memo, SVGProps } from 'react';

const TitleIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.26513 10.4419C8.11868 10.5884 7.88128 10.5884 7.73483 10.4419L3.91159 6.6187C3.76515 6.47225 3.76515 6.23485 3.91159 6.0884L4.08837 5.9116C4.23482 5.76515 4.47225 5.76515 4.6187 5.9116L7.99998 9.2929L11.3813 5.9116C11.5277 5.76515 11.7651 5.76515 11.9116 5.9116L12.0884 6.0884C12.2348 6.23485 12.2348 6.47225 12.0884 6.6187L8.26513 10.4419Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(TitleIcon3);
export { Memo as TitleIcon3 };
