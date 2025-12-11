import {
  currentMonitor,
  getCurrentWindow,
  LogicalPosition,
  LogicalSize,
} from "@tauri-apps/api/window";

export type ExpandDirection = "up" | "down";

export interface WindowDimensions {
  width: number;
  collapsedHeight: number;
  expandedHeight: number;
}

interface LogicalRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface WindowContext {
  window: LogicalRect;
  monitorHeight: number;
}

async function getWindowContext(): Promise<WindowContext | null> {
  const appWindow = getCurrentWindow();
  const monitor = await currentMonitor();

  if (!monitor) return null;

  const [physicalPos, physicalSize] = await Promise.all([
    appWindow.outerPosition(),
    appWindow.outerSize(),
  ]);

  const scaleFactor = monitor.scaleFactor;

  return {
    window: {
      x: physicalPos.x / scaleFactor,
      y: physicalPos.y / scaleFactor,
      width: physicalSize.width / scaleFactor,
      height: physicalSize.height / scaleFactor,
    },
    monitorHeight: monitor.size.height / scaleFactor,
  };
}

function determineExpandDirection(windowRect: LogicalRect, monitorHeight: number): ExpandDirection {
  const windowCenterY = windowRect.y + windowRect.height / 2;
  return windowCenterY > monitorHeight / 2 ? "up" : "down";
}

async function resizeWithAnchor(
  targetHeight: number,
  direction: ExpandDirection,
  dimensions: WindowDimensions,
): Promise<void> {
  const appWindow = getCurrentWindow();
  const context = await getWindowContext();

  if (!context) {
    await appWindow.setSize(new LogicalSize(dimensions.width, targetHeight));
    return;
  }

  if (direction === "up") {
    const heightDelta = targetHeight - context.window.height;
    const newY = context.window.y - heightDelta;
    await appWindow.setPosition(new LogicalPosition(context.window.x, newY));
  }

  await appWindow.setSize(new LogicalSize(dimensions.width, targetHeight));
}

export const windowService = {
  startDragging: async (): Promise<void> => {
    await getCurrentWindow().startDragging();
  },

  getExpandDirection: async (): Promise<ExpandDirection> => {
    const context = await getWindowContext();
    if (!context) return "down";

    return determineExpandDirection(context.window, context.monitorHeight);
  },

  expandWindow: (dimensions: WindowDimensions, direction: ExpandDirection): Promise<void> =>
    resizeWithAnchor(dimensions.expandedHeight, direction, dimensions),

  collapseWindow: (dimensions: WindowDimensions, direction: ExpandDirection): Promise<void> =>
    resizeWithAnchor(dimensions.collapsedHeight, direction, dimensions),
};
