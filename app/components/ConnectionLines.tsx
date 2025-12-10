export const ConnectionLines = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[105px] hidden md:flex justify-center">
      <div className="relative flex w-[65%] items-center justify-between">
        {/* Left connector */}
        <div className="h-px flex-1 border-t border-dashed border-[#BBF52D]/60"></div>

        {/* Center dot */}
        <div className="mx-4 h-3 w-3 rounded-full bg-[#BBF52D]/80 shadow-[0_0_12px_#BBF52D]"></div>

        {/* Right connector */}
        <div className="h-px flex-1 border-t border-dashed border-[#BBF52D]/60"></div>
      </div>
    </div>
  );
};
