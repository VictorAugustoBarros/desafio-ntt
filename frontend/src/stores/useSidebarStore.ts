import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  toggleCalendarOpen: () => void;
};

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      calendarOpen: false,
      setCalendarOpen: (open) => set({ calendarOpen: open }),
      toggleCalendarOpen: () =>
        set((state) => ({ calendarOpen: !state.calendarOpen })),
    }),
    {
      name: "sidebar-storage",
    }
  )
);
