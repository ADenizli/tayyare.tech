'use client';

// To use router, we changed rendering method from server side to client side

import TButton from '@/components/TButton';
import './assets/style.css';
import { useRouter } from 'next/navigation';

export default function LoginAsPage() {
     const router = useRouter();

     return (
          <div className='full-page-selection-container'>
               <div className='full-page-selection-item'>
                    <h1>As a Controller</h1>
                    <p className='dim'>Under development</p>
               </div>
               <div className='full-page-selection-item'>
                    <h1>Pilot</h1>
                    <TButton onClick={() => router.push('/pilot/createFlight')} size='lg'>
                         Login As
                    </TButton>
               </div>
          </div>
     );
}
