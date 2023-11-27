import React from 'react';
import Sidebar from '@/components/pilot/Sidebar';
import Topbar from '@/components/pilot/Topbar';

import './assets/style.css';

interface IProps {
     children: React.ReactNode;
}

export default function PilotSectionLayout({ children }: IProps) {
     return (
          <div id='pilot-section'>
               <Sidebar />
               <main>
                    <Topbar nav={['Pilot Section', 'Flight Preparation']} />
                    <section>{children}</section>
               </main>
          </div>
     );
}
