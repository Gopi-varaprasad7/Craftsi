import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import TopBar from '../components/navigation/TopBar';

function CustomerLayout() {
  return (
    <div className='flex min-h-screen bg-neutral-100'>
      <Sidebar />

      <div className='flex min-w-0 flex-1 flex-col'>
        <TopBar />

        <main className='relative flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default CustomerLayout;
