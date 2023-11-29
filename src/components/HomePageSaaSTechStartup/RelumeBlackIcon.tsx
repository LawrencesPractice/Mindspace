import { memo, SVGProps } from 'react';

const RelumeBlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24.8075 18.5237H26.8868V14.9592H27.7908L29.9993 18.5237H32.2207L29.7798 14.5976C30.8646 14.2747 31.6782 13.5386 31.6782 12.1438V12.0921C31.6782 10.1807 30.2964 9.28955 28.1137 9.28955H24.8075V18.5237ZM26.8868 13.5386V10.891H28.062C29.0694 10.891 29.6377 11.2139 29.6377 12.1567V12.2083C29.6377 13.0995 29.1082 13.5386 28.062 13.5386H26.8868Z'
      fill='black'
    />
    <path
      d='M35.7896 18.6658C37.6365 18.6658 38.7988 17.8522 39.0183 16.3928H37.249C37.1328 16.961 36.7066 17.3356 35.8413 17.3356C34.821 17.3356 34.214 16.6898 34.1624 15.5662H39.0313V15.0496C39.0313 12.6345 37.4815 11.6143 35.738 11.6143C33.7749 11.6143 32.2638 12.9961 32.2638 15.1271V15.2304C32.2638 17.3872 33.749 18.6658 35.7896 18.6658ZM34.1882 14.4168C34.3302 13.4611 34.8985 12.9058 35.738 12.9058C36.6291 12.9058 37.1457 13.3965 37.2103 14.4168H34.1882Z'
      fill='black'
    />
    <path d='M39.9213 18.5237H41.7811V8.70837H39.9213V18.5237Z' fill='black' />
    <path
      d='M45.3491 18.6659C46.4599 18.6659 47.1441 18.1493 47.4928 17.4648V18.5238H49.3526V11.7693H47.4928V15.7342C47.4928 16.7287 46.8729 17.2194 46.0854 17.2194C45.2847 17.2194 44.9098 16.7803 44.9098 15.8633V11.7693H43.0503V16.1216C43.0503 17.891 44.0318 18.6659 45.3491 18.6659Z'
      fill='black'
    />
    <path
      d='M50.6223 18.5237H52.4952V14.533C52.4952 13.6161 53.0762 13.1511 53.7994 13.1511C54.4583 13.1511 54.8586 13.5386 54.8586 14.4039V18.5237H56.7184V14.533C56.7184 13.6161 57.2994 13.1511 58.0226 13.1511C58.6941 13.1511 59.0818 13.5386 59.0818 14.4039V18.5237H60.9416V14.1973C60.9416 12.4021 59.9729 11.6143 58.7199 11.6143C57.8677 11.6143 56.9896 11.9759 56.4471 12.7895C56.1243 11.9888 55.4527 11.6143 54.5615 11.6143C53.5539 11.6143 52.8308 12.1696 52.4952 12.8024V11.7692H50.6223V18.5237Z'
      fill='black'
    />
    <path
      d='M65.2658 18.6658C67.1129 18.6658 68.2754 17.8522 68.4946 16.3928H66.7253C66.6089 16.961 66.1828 17.3356 65.3174 17.3356C64.2972 17.3356 63.6904 16.6898 63.6387 15.5662H68.5077V15.0496C68.5077 12.6345 66.9576 11.6143 65.2142 11.6143C63.2511 11.6143 61.74 12.9961 61.74 15.1271V15.2304C61.74 17.3872 63.2253 18.6658 65.2658 18.6658ZM63.6646 14.4168C63.8067 13.4611 64.3751 12.9058 65.2142 12.9058C66.1054 12.9058 66.6221 13.3965 66.6868 14.4168H63.6646Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.6515 9.842L17.5259 9.61778C17.364 9.34662 17.1356 9.12126 16.8623 8.96306L10.8443 5.49216C10.5717 5.33409 10.2624 5.25057 9.94739 5.25H9.6873C9.37226 5.25057 9.06294 5.33409 8.79042 5.49216L2.77243 8.97203C2.50066 9.12918 2.2749 9.35497 2.11772 9.62675L1.99216 9.85097C1.83408 10.1234 1.75056 10.4328 1.75 10.7478V17.6986C1.75056 18.0136 1.83408 18.3229 1.99216 18.5955L2.11772 18.8197C2.27896 19.0883 2.50381 19.3131 2.77243 19.4744L8.79939 22.9453C9.07056 23.1066 9.38079 23.1904 9.69627 23.1874H9.94739C10.2624 23.1868 10.5717 23.1033 10.8443 22.9453L16.8623 19.4654C17.1367 19.3118 17.3634 19.0852 17.517 18.8107L17.6515 18.5865C17.8077 18.3132 17.8911 18.0043 17.8937 17.6896V10.7388C17.8931 10.4238 17.8096 10.1145 17.6515 9.842ZM9.6873 7.04371H9.94739L15.2031 10.0751L9.82183 13.1783L4.44062 10.0751L9.6873 7.04371ZM10.7187 20.9453L15.9654 17.9139L16.0999 17.6897V11.6268L10.7187 14.7389V20.9453Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(RelumeBlackIcon);
export { Memo as RelumeBlackIcon };