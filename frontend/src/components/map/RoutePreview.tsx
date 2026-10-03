function RoutePreview() {
  return (
    <>
      {/* Main route */}
      <div className='pointer-events-none absolute left-[35%] top-[25%] z-[2] h-[340px] w-[6px] rotate-[28deg] rounded-full bg-orange-400/70 blur-[1px]' />

      {/* Pickup point */}
      <div className='absolute left-[42%] top-[27%] z-[5]'>
        <div className='flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-orange-500 shadow-md' />
      </div>

      {/* Destination point */}
      <div className='absolute left-[55%] top-[66%] z-[5]'>
        <div className='flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-neutral-900 shadow-md' />
      </div>
    </>
  );
}

export default RoutePreview;
