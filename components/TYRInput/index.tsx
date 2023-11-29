import React from 'react';

import './assets/style.css';

interface IProps {
     title: string;
     name: string;
     value: any;
     placeholder: any;
     type: 'text' | 'number' | 'email';
     error: Boolean;
     helperText: any;
     onChange: (e: any) => void;
     onBlur: (e: any) => void;
}

export default function TYRInput({ title, name, type, value, placeholder, error, helperText, onChange, onBlur }: IProps) {
     console.log(helperText);

     return (
          <div className='tyr-input-control'>
               <span className='tyr-input-title'>{title}</span>
               <input
                    className={error ? ' tyr-input error' : 'tyr-input'}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
               />
               <span className={error && helperText !== undefined ? 'tyr-helper-text error' : 'tyr-helper-text'}>{helperText}</span>
          </div>
     );
}
