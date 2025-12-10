interface DragHandleProps {
  onDragStart: () => void;
}

export function DragHandle({ onDragStart }: DragHandleProps) {
  return (
    <div
      className="w-2 h-8 rounded-full bg-zinc-700/50 cursor-move hover:bg-zinc-600/50 transition-colors"
      onPointerDown={onDragStart}
    />
  );
}
