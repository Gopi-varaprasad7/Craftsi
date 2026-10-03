import { LocateFixed, Minus, Plus } from 'lucide-react';
import BookingPanel from '../booking/BookingPanel';
import DriverMarker from './DriverMarker';
import RoutePreview from './RoutePreview';

function MapArea() {
  return (
    <section className='relative h-full min-h-[calc(100vh-5rem)] overflow-hidden bg-[#e8f0ed]'>
      <BookingPanel />
      <RoutePreview />

      <DriverMarker name='Driver 1' eta={6} className='left-[62%] top-[25%]' />

      <DriverMarker name='Driver 2' eta={8} className='left-[72%] top-[48%]' />

      <DriverMarker name='Driver 3' eta={7} className='left-[54%] top-[72%]' />
      {/* Temporary map background */}
      <div className='absolute inset-0'>
        <div className='absolute left-[8%] top-[12%] h-[2px] w-[70%] rotate-[18deg] bg-white/90' />

        <div className='absolute left-[30%] top-[42%] h-[2px] w-[65%] rotate-[-28deg] bg-white/90' />

        <div className='absolute left-[20%] top-[65%] h-[2px] w-[80%] rotate-[8deg] bg-white/90' />

        <div className='absolute left-[55%] top-[5%] h-[100%] w-[2px] rotate-[16deg] bg-white/80' />

        <div className='absolute left-[75%] top-[-10%] h-[120%] w-[2px] rotate-[-20deg] bg-white/80' />
      </div>

      {/* Temporary map label */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/70 px-4 py-2 text-xs font-medium text-neutral-400 backdrop-blur-sm'>
        Map
      </div>

      {/* Map controls */}
      <div className='absolute bottom-6 right-6 flex flex-col overflow-hidden rounded-xl bg-white shadow-lg'>
        <button className='flex h-11 w-11 items-center justify-center text-neutral-500 hover:bg-neutral-50'>
          <Plus size={18} />
        </button>

        <div className='h-px bg-neutral-200' />

        <button className='flex h-11 w-11 items-center justify-center text-neutral-500 hover:bg-neutral-50'>
          <Minus size={18} />
        </button>

        <div className='h-px bg-neutral-200' />

        <button className='flex h-11 w-11 items-center justify-center text-neutral-500 hover:bg-neutral-50'>
          <LocateFixed size={17} />
        </button>
      </div>
    </section>
  );
}

export default MapArea;
