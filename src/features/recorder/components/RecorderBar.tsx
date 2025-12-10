export function RecorderBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl w-fit mx-auto transition-all hover:scale-[1.01]">
      {children}
    </div>
  );
}
