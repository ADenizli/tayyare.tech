import React from 'react';

import './assets/style.css';

interface IProps {
     nav: string[];
}

export default function Topbar({ nav }: IProps) {
     return (
          <div id='topbar'>
               <div className='breadcrumb'>{nav.map((item, index) => (index === nav.length - 1 ? item : item + ' | '))}</div>
               <div className='brand'>powered by ASD</div>
          </div>
     );
}
