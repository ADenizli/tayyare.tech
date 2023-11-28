import React from 'react';

import './assets/style.css';

interface IProps {
     children: React.ReactNode;
}

export default function TYRMainCard({ children }: IProps) {
     return <div className='main-card'>{children}</div>;
}
