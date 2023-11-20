'use client';
// Because of props section, we changed rendering method from server side to client side

import './assets/style.css';

interface IProps {
     children: string;
     onClick?: () => any;
     size?: 'sm' | 'md' | 'lg' | 'xl';
     color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const defaultOnClick = () => {
     console.log('forgotten onClick function');
};

export default function TButton({ children, onClick = defaultOnClick, size = 'md', color = 'primary' }: IProps) {
     return (
          <button className={size + ' ' + color} onClick={onClick}>
               {children}
          </button>
     );
}
