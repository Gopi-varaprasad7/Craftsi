import { ArrowUpRight, CalendarClock, ShieldCheck, Zap } from 'lucide-react';

import LocationInput from './LocationInput';
import ServiceSelector from './ServiceSelector';
import Button from '../ui/Button';

function BookingPanel() {
  function onFindDrivers(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className='absolute left-6 top-6 z-20 width:390px rounded-3xl border border-white/70 bg-white p-5 shadow-2xl shadow-neutral-900/10'>
      {/* Header */}
      <div className='mb-5'>
        <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500'>
          Book a trip
        </p>

        <h1 className='text-[27px] font-semibold leading-tight tracking-[-0.03em] text-neutral-900'>
          Where are you
          <br />
          <span className='text-orange-500'>going today?</span>
        </h1>
      </div>

      {/* Locations */}
      <div className='overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
        <LocationInput type='pickup' />

        <div className='ml-6.25 border-l border-dashed border-neutral-300' />

        <LocationInput type='destination' />
      </div>

      {/* Service selector */}
      <div className='mt-5'>
        <p className='mb-2 text-xs font-semibold text-neutral-700'>Service</p>

        <ServiceSelector />
      </div>

      {/* Find drivers */}
      <Button
        type='button'
        size='lg'
        className='w-full'
        onClick={onFindDrivers}
      >
        Find drivers
        <ArrowUpRight size={18} />
      </Button>

      {/* Schedule */}
      <Button
        type='button'
        variant='ghost'
        className='mt-3 h-12 w-full justify-between px-3'
      >
        <span className='flex items-center gap-3'>
          <CalendarClock size={18} className='text-(--color-text-muted)' />
          Schedule for later
        </span>

        <span className='text-neutral-300'>›</span>
      </Button>

      {/* Trust indicators */}
      <div className='mt-3 grid grid-cols-2 gap-2 border-t border-neutral-100 pt-4'>
        <div className='flex items-center gap-2'>
          <ShieldCheck size={16} className='text-emerald-500' />

          <span className='text-[10px] font-medium text-neutral-500'>
            Verified drivers
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <Zap size={16} className='text-amber-500' />

          <span className='text-[10px] font-medium text-neutral-500'>
            Fast matching
          </span>
        </div>
      </div>
    </section>
  );
}

export default BookingPanel;
