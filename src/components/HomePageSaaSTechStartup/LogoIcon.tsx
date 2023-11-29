import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_202_2)'>
      <path d='M0.282227 10.5H6.62425V8.72198H2.55023V0.48999H0.282227V10.5Z' fill='black' />
      <path
        d='M10.7935 9.11401C9.6455 9.11401 9.0015 8.274 9.0015 6.874V6.762C9.0015 5.362 9.6735 4.55001 10.7935 4.55001C11.9275 4.55001 12.5855 5.39 12.5855 6.79V6.888C12.5855 8.274 11.9275 9.11401 10.7935 9.11401ZM10.7795 10.654C12.9775 10.654 14.6435 9.184 14.6435 6.874V6.762C14.6435 4.48001 12.9915 3.01001 10.7935 3.01001C8.5955 3.01001 6.9295 4.50801 6.9295 6.804V6.916C6.9295 9.198 8.5955 10.654 10.7795 10.654Z'
        fill='black'
      />
      <path
        d='M18.8324 13.202C21.2404 13.202 22.6824 12.096 22.6964 9.926V3.17801H20.6804V4.27001C20.2604 3.52801 19.5464 3.01001 18.3564 3.01001C16.5364 3.01001 15.1364 4.48001 15.1364 6.58V6.678C15.1364 8.848 16.5504 10.178 18.3284 10.178C19.4064 10.178 20.2744 9.534 20.6804 8.82V9.926C20.6804 11.074 20.0644 11.718 18.8324 11.718C17.7964 11.718 17.3344 11.298 17.2084 10.654H15.1924C15.3884 12.166 16.4664 13.202 18.8324 13.202ZM18.9304 8.65201C17.9224 8.65201 17.2084 7.896 17.2084 6.678V6.566C17.2084 5.362 17.8384 4.55001 18.9724 4.55001C20.0784 4.55001 20.7364 5.306 20.7364 6.552V6.65C20.7364 7.896 19.9944 8.65201 18.9304 8.65201Z'
        fill='black'
      />
      <path
        d='M27.4809 9.11401C26.3329 9.11401 25.6889 8.274 25.6889 6.874V6.762C25.6889 5.362 26.3609 4.55001 27.4809 4.55001C28.6149 4.55001 29.2729 5.39 29.2729 6.79V6.888C29.2729 8.274 28.6149 9.11401 27.4809 9.11401ZM27.4669 10.654C29.6649 10.654 31.3309 9.184 31.3309 6.874V6.762C31.3309 4.48001 29.6789 3.01001 27.4809 3.01001C25.2829 3.01001 23.6169 4.50801 23.6169 6.804V6.916C23.6169 9.198 25.2829 10.654 27.4669 10.654Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_202_2'>
        <rect width={31.5} height={13.5} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
