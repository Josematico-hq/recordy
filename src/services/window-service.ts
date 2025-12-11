import { getCurrentWindow } from "@tauri-apps/api/window";

export const windowService = {
  startDragging: async (): Promise<void> => {
    await getCurrentWindow().startDragging();
  },
};
