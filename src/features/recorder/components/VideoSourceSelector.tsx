import { Grip, Monitor, Square } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface VideoSourceSelectorProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VideoSourceSelector = ({ isOpen, onOpenChange }: VideoSourceSelectorProps) => {
  return (
    <div className="flex items-center gap-1">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Select monitor source"
            className="p-2 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
          >
            <Monitor className="w-5 h-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80" sideOffset={10}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Source Selection</h4>
              <p className="text-sm text-zinc-500">Choose the screen or window to record.</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>

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
