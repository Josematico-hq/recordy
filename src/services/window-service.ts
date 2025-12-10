import { getCurrentWindow } from "@tauri-apps/api/window";

export const windowService = {
  startDragging: async () => {
    await getCurrentWindow().startDragging();
  },
};
