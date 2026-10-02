import {
  Car,
  Package,
  UserRound,
  UsersRound,
  ReceiptText,
  WalletCards,
  CircleHelp,
  ShieldCheck,
  MoreHorizontal,
} from 'lucide-react';

const transportItems = [
  {
    label: 'Rides',
    icon: Car,
    active: true,
  },
  {
    label: 'Courier',
    icon: Package,
    active: false,
  },
  {
    label: 'Hire a Driver',
    icon: UserRound,
    active: false,
  },
  {
    label: 'Ride Share',
    icon: UsersRound,
    active: false,
  },
];

const craftsiItems = [
  {
    label: 'Trips',
    icon: ReceiptText,
  },
  {
    label: 'Wallet',
    icon: WalletCards,
  },
  {
    label: 'Support',
    icon: CircleHelp,
  },
];

function Sidebar() {
  return (
    <aside className='hidden w-[264px] shrink-0 flex-col border-r border-neutral-200 bg-white lg:flex'>
      {/* Brand */}
      <div className='px-10 pb-8 pt-10'>
        <div className='flex items-center gap-3'>
          <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white'>
            <Car size={20} strokeWidth={2.5} />
          </div>

          <span className='text-[22px] font-semibold tracking-tight text-neutral-900'>
            craftsi
          </span>
        </div>

        <p className='mt-2 pl-1 text-[9px] font-semibold tracking-[0.28em] text-neutral-400'>
          MOVE BETTER
        </p>
      </div>

      {/* Navigation */}
      <nav className='flex-1 px-6'>
        <p className='mb-3 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400'>
          Transport
        </p>

        <div className='space-y-1'>
          {transportItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`flex h-12 w-full items-center gap-4 rounded-xl px-4 text-left text-sm font-medium transition ${
                  item.active
                    ? 'bg-orange-50 text-neutral-900'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={item.active ? 2.2 : 1.8}
                  className={item.active ? 'text-orange-500' : ''}
                />

                <span>{item.label}</span>

                {item.active && (
                  <span className='ml-auto h-1.5 w-1.5 rounded-full bg-orange-500' />
                )}
              </button>
            );
          })}
        </div>

        <p className='mb-3 mt-10 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400'>
          Your Craftsi
        </p>

        <div className='space-y-1'>
          {craftsiItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className='flex h-12 w-full items-center gap-4 rounded-xl px-4 text-left text-sm font-medium text-neutral-500 transition hover:bg-neutral-50 hover:text-neutral-900'
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Trust card */}
      <div className='px-6'>
        <div className='rounded-2xl border border-neutral-200 bg-neutral-50 p-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-white'>
              <ShieldCheck size={19} className='text-emerald-500' />
            </div>

            <div>
              <p className='text-xs font-semibold text-neutral-800'>
                Ride with confidence
              </p>

              <p className='mt-1 text-[11px] text-neutral-400'>
                Every driver is verified.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className='flex items-center gap-3 px-8 py-6'>
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white'>
          AS
        </div>

        <div className='min-w-0 flex-1'>
          <p className='truncate text-xs font-semibold text-neutral-800'>
            Arjun Sharma
          </p>

          <p className='mt-0.5 text-[11px] text-neutral-400'>
            Personal account
          </p>
        </div>

        <MoreHorizontal size={17} className='text-neutral-400' />
      </div>
    </aside>
  );
}

export default Sidebar;
