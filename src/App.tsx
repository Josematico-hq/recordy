import "./App.css";
import { DragHandle } from "./features/recorder/components/DragHandle";
import { RecorderBar } from "./features/recorder/components/RecorderBar";
import { VideoSourceSelector } from "./features/recorder/components/VideoSourceSelector";
import { useRecorderWindow } from "./features/recorder/hooks/useRecorderWindow";
import { useVideoSourceSelector } from "./features/recorder/hooks/useVideoSourceSelector";

function App() {
  const { startDragging } = useRecorderWindow();
  const { isOpen, onOpenChange, expandDirection } = useVideoSourceSelector();

  return (
    <div
      className={`flex flex-col h-screen w-full ${expandDirection === "up" ? "justify-end" : "justify-start"}`}
    >
      <RecorderBar>
        <DragHandle onDragStart={startDragging} />

        <VideoSourceSelector isOpen={isOpen} onOpenChange={onOpenChange} />

        <div className="w-px h-6 bg-zinc-700" />

        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-zinc-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-green-500"
            aria-hidden="true"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
          <div className="flex items-center gap-1 h-3">
            <div className="w-1 h-1.5 bg-green-500/50 rounded-full" />
            <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="w-1 h-2 bg-green-500/50 rounded-full" />
          </div>
        </div>

        <div className="w-px h-6 bg-zinc-700" />

        <button
          type="button"
          aria-label="Start recording"
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-[0_0_15px_-3px_rgba(239,68,68,0.5)] transition-all active:scale-95"
        >
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-110 transition-transform" />
          <span>Rec</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Settings"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </RecorderBar>
    </div>
  );
}

export default App;
