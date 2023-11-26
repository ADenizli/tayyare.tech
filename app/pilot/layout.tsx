import Sidebar from '@/components/pilot/Sidebar';
import React from 'react';

interface IProps {
     children: React.ReactNode;
}

export default function PilotSectionLayout({ children }: IProps) {
     return (
          <div id='pilot-section'>
               <Sidebar />
               <>{children}</>
          </div>
     );
}
