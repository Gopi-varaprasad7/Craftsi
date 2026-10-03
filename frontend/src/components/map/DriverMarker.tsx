import { Car } from 'lucide-react';

type DriverMarkerProps = {
  name: string;
  eta: number;
  className?: string;
};

function DriverMarker({ name, eta, className = '' }: DriverMarkerProps) {
  return (
    <div className={`absolute z-10 flex flex-col items-center ${className}`}>
      <div className='flex items-center gap-2 rounded-full border border-white bg-white px-3 py-2 shadow-lg shadow-neutral-900/10'>
        <div className='flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white'>
          <Car size={14} />
        </div>

        <div className='leading-none'>
          <p className='text-[10px] font-medium text-neutral-400'>Nearby</p>

          <p className='mt-1 text-xs font-semibold text-neutral-800'>
            {eta} min
          </p>
        </div>
      </div>

      <div className='mt-1 h-2 w-2 rounded-full border-2 border-white bg-orange-500 shadow' />
    </div>
  );
}

export default DriverMarker;
