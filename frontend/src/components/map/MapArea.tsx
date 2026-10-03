import { Car, Clock3, MapPin, Star, X } from 'lucide-react';

import type { Bid } from '../../types/ride';

type BiddingPanelProps = {
  bids: Bid[];
  onSelectDriver: (bid: Bid) => void;
  onClose: () => void;
};

function BiddingPanel({ bids, onSelectDriver, onClose }: BiddingPanelProps) {
  return (
    <section className='absolute right-6 top-6 z-30 flex h-[calc(100%-3rem)] width-390px flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-neutral-900/10'>
      {/* Header */}
      <div className='border-b border-neutral-100 px-5 pb-4 pt-5'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500'>
              Live bidding
            </p>

            <h2 className='mt-2 text-xl font-semibold tracking-tight text-neutral-900'>
              Drivers are bidding
            </h2>

            <p className='mt-1 text-xs text-neutral-400'>
              Choose the driver that works best for you.
            </p>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='flex h-9 w-9 items-center justify-center rounded-xl text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700'
          >
            <X size={18} />
          </button>
        </div>

        {/* Countdown */}
        <div className='mt-4 flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-3'>
          <div className='flex items-center gap-2'>
            <Clock3 size={16} className='text-orange-500' />

            <span className='text-xs font-medium text-neutral-600'>
              Bidding closes in
            </span>
          </div>

          <span className='text-sm font-bold text-neutral-900'>00:50</span>
        </div>
      </div>

      {/* Bids */}
      <div className='flex-1 space-y-3 overflow-y-auto p-4'>
        {bids.map((bid) => (
          <div
            key={bid.id}
            className='rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-orange-200 hover:shadow-md'
          >
            {/* Driver */}
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white'>
                  <Car size={19} />
                </div>

                <div>
                  <p className='text-sm font-semibold text-neutral-900'>
                    {bid.driverName}
                  </p>

                  <div className='mt-1 flex items-center gap-2 text-[11px] text-neutral-400'>
                    <span className='flex items-center gap-1'>
                      <Star size={12} className='fill-current text-amber-500' />
                      {bid.rating}
                    </span>

                    <span>•</span>

                    <span>{bid.totalTrips.toLocaleString()} trips</span>
                  </div>
                </div>
              </div>

              <div className='text-right'>
                <p className='text-lg font-bold text-neutral-900'>
                  ₹{bid.price}
                </p>

                <p className='text-[10px] text-neutral-400'>driver bid</p>
              </div>
            </div>

            {/* Vehicle */}
            <div className='mt-4 grid grid-cols-2 gap-2'>
              <div className='rounded-xl bg-neutral-50 p-3'>
                <p className='text-[10px] text-neutral-400'>Vehicle</p>

                <p className='mt-1 text-xs font-semibold text-neutral-700'>
                  {bid.vehicle}
                </p>
              </div>

              <div className='rounded-xl bg-neutral-50 p-3'>
                <p className='text-[10px] text-neutral-400'>Number</p>

                <p className='mt-1 text-xs font-semibold text-neutral-700'>
                  {bid.vehicleNumber}
                </p>
              </div>
            </div>

            {/* ETA */}
            <div className='mt-3 flex items-center gap-4 text-[11px] text-neutral-500'>
              <span className='flex items-center gap-1.5'>
                <Clock3 size={13} />
                {bid.etaMinutes} min away
              </span>

              <span className='flex items-center gap-1.5'>
                <MapPin size={13} />
                {bid.distanceKm} km
              </span>
            </div>

            {/* Select */}
            <button
              type='button'
              onClick={() => onSelectDriver(bid)}
              className='mt-4 h-11 w-full rounded-xl bg-neutral-900 text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.99]'
            >
              Select driver
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='border-t border-neutral-100 p-4'>
        <p className='text-center text-[10px] text-neutral-400'>
          You choose the driver. Craftsi never assigns one automatically.
        </p>
      </div>
    </section>
  );
}

export default BiddingPanel;
