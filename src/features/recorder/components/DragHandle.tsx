interface DragHandleProps {
  onDragStart: () => void;
}

export function DragHandle({ onDragStart }: DragHandleProps) {
  return (
    <div
      className="w-2 hover:w-4 h-8 rounded-full bg-zinc-700/50 cursor-move hover:bg-zinc-600 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
      onPointerDown={onDragStart}
    />
  );
}
