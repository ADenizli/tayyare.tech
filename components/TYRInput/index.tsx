import React from 'react';

import './assets/style.css';

interface IProps {
     title: string;
     name: string;
     value: any;
     placeholder: any;
     type: 'text' | 'number' | 'email';
}

export default function TYRInput({ title, name, type, value, placeholder }: IProps) {
     return (
          <div className='tyr-input-control'>
               <span className='tyr-input-title'>{title}</span>
               <input className='tyr-input' name={name} type={type} value={value} placeholder={placeholder} />
          </div>
     );
}
