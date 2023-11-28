import TYRIcon, { FAIcons } from '@/components/TYRIcon';

import './assets/style.css';

export default function Sidebar() {
     return (
          <div id='sidebar'>
               <div className='logo'></div>
               <div className='menu-item active'>
                    <TYRIcon icon={FAIcons.faPlane} className='icon' />
               </div>
          </div>
     );
}
