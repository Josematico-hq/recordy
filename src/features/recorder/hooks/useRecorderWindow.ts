import { windowService } from "@/services/window-service";

export function useRecorderWindow() {
  const startDragging = () => {
    windowService.startDragging();
  };

  return { startDragging };
}
