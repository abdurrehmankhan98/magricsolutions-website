function DecorativeFeedbackElements() {
  return (
    <>
      {/* Left lime glow */}
      <div className="pointer-events-none absolute left-0 top-[20%] h-[260px] w-[260px] rounded-full bg-[#C6FF2B] opacity-20 blur-[140px]" />

      {/* Right lime glow */}
      <div className="pointer-events-none absolute right-[-80px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[#9BF021] opacity-20 blur-[160px]" />

      {/* Subtle dots left */}
      <div className="pointer-events-none absolute top-24 left-10 hidden md:block opacity-30">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-[#BBF52D]" />
          ))}
        </div>
      </div>

      {/* Subtle dots right */}
      <div className="pointer-events-none absolute top-12 right-16 hidden md:block opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          ))}
        </div>
      </div>
    </>
  );
}
export default DecorativeFeedbackElements;