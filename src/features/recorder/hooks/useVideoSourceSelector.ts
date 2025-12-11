import { useCallback, useRef, useState } from "react";
import {
  type ExpandDirection,
  type WindowDimensions,
  windowService,
} from "@/services/window-service";

const RECORDER_WINDOW_DIMENSIONS: WindowDimensions = {
  width: 440,
  collapsedHeight: 70,
  expandedHeight: 400,
};

export function useVideoSourceSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandDirection, setExpandDirection] = useState<ExpandDirection>("down");
  const lastDirectionRef = useRef<ExpandDirection>("down");

  const handleOpenChange = useCallback(async (open: boolean) => {
    if (open) {
      const direction = await windowService.getExpandDirection();
      lastDirectionRef.current = direction;
      setExpandDirection(direction);
      await windowService.expandWindow(RECORDER_WINDOW_DIMENSIONS, direction);
    } else {
      await windowService.collapseWindow(RECORDER_WINDOW_DIMENSIONS, lastDirectionRef.current);
    }

    setIsOpen(open);
  }, []);

  return {
    isOpen,
    expandDirection,
    onOpenChange: handleOpenChange,
  };
}
