import { Grip, Monitor, Square } from "lucide-react";

export const VideoSourceSelector = () => {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label="Select monitor source"
        className="p-2 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
      >
        <Monitor className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Select left panel layout"
        className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
      >
        <Square className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Select grid layout"
        className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
      >
        <Grip className="w-5 h-5" />
      </button>
    </div>
  );
};
