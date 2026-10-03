import { Car, Package, UserRound, UsersRound } from 'lucide-react';

type Service = {
  id: string;
  label: string;
  icon: typeof Car;
};

const services: Service[] = [
  {
    id: 'ride',
    label: 'Ride',
    icon: Car,
  },
  {
    id: 'courier',
    label: 'Courier',
    icon: Package,
  },
  {
    id: 'hire',
    label: 'Hire',
    icon: UserRound,
  },
  {
    id: 'share',
    label: 'Share',
    icon: UsersRound,
  },
];

function ServiceSelector() {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {services.map((service, index) => {
        const Icon = service.icon;
        const active = index === 0;

        return (
          <button
            key={service.id}
            type='button'
            className={`flex min-w-0 flex-col items-center gap-2 rounded-xl border px-2 py-3 transition ${
              active
                ? 'border-orange-200 bg-orange-50 text-orange-600'
                : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <Icon size={18} />

            <span className='truncate text-[11px] font-medium'>
              {service.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ServiceSelector;
