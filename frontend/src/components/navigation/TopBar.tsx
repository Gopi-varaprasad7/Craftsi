import { Bell, ChevronDown } from 'lucide-react';

function TopBar() {
  return (
    <header className="hidden h-20 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-8 lg:flex">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-neutral-400">Transportation</span>

        <span className="text-neutral-300">›</span>

        <span className="font-semibold text-neutral-800">Rides</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <button className="relative text-neutral-500 transition hover:text-neutral-900">
          <Bell size={20} strokeWidth={1.8} />

          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange-500" />
        </button>

        <button className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
            AS
          </div>

          <span className="text-sm font-semibold text-neutral-800">
            Arjun
          </span>

          <ChevronDown size={16} className="text-neutral-400" />
        </button>
      </div>
    </header>
  );
}

export default TopBar;