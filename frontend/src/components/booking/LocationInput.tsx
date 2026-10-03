import { Crosshair, MapPin } from 'lucide-react';

type LocationInputProps = {
  type: 'pickup' | 'destination';
  value?: string;
};

function LocationInput({ type, value }: LocationInputProps) {
  const isPickup = type === 'pickup';

  return (
    <div className='relative flex gap-3 px-4 py-3'>
      <div className='flex w-5 shrink-0 justify-center pt-1'>
        {isPickup ? (
          <Crosshair size={18} className='text-orange-500' />
        ) : (
          <MapPin size={18} className='text-neutral-500' />
        )}
      </div>

      <div className='min-w-0 flex-1'>
        <p className='text-[11px] font-medium text-neutral-400'>
          {isPickup ? 'Pickup' : 'Destination'}
        </p>

        <p
          className={`mt-1 truncate text-sm ${
            value ? 'font-medium text-neutral-800' : 'text-neutral-400'
          }`}
        >
          {value || (isPickup ? 'Current location' : 'Enter a destination')}
        </p>
      </div>

      {isPickup && (
        <button
          type='button'
          className='flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700'
        >
          <MapPin size={15} />
        </button>
      )}
    </div>
  );
}

export default LocationInput;
