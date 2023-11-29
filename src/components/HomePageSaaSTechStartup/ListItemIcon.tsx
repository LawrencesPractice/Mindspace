import { memo, SVGProps } from 'react';

const ListItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.73 7.11951L20.59 6.86951C20.4094 6.5672 20.1547 6.31594 19.85 6.13951L13.14 2.26951C12.8362 2.09326 12.4913 2.00013 12.14 1.99951H11.85C11.4987 2.00013 11.1538 2.09326 10.85 2.26951L4.14 6.14951C3.83697 6.32477 3.58526 6.57648 3.41 6.87951L3.27 7.12951C3.09375 7.43335 3.00062 7.77825 3 8.12951V15.8795C3.00062 16.2308 3.09375 16.5757 3.27 16.8795L3.41 17.1295C3.58979 17.429 3.84049 17.6797 4.14 17.8595L10.86 21.7295C11.1623 21.9094 11.5082 22.0028 11.86 21.9995H12.14C12.4913 21.9989 12.8362 21.9058 13.14 21.7295L19.85 17.8495C20.156 17.6782 20.4087 17.4255 20.58 17.1195L20.73 16.8695C20.9041 16.5648 20.9971 16.2205 21 15.8695V8.11951C20.9994 7.76825 20.9063 7.42335 20.73 7.11951ZM11.85 3.99951H12.14L18 7.37951L12 10.8395L6 7.37951L11.85 3.99951ZM13 19.4995L18.85 16.1195L19 15.8695V9.10951L13 12.5795V19.4995Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ListItemIcon);
export { Memo as ListItemIcon };
