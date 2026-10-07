import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FurnitureId =
  | "board"
  | "teacher-desk"
  | "desk"
  | "door"
  | "window"
  | "shelf"
  | "plant"
  | "bin";

export interface PlacedItem {
  id: string;
  kind: FurnitureId;
  x: number;
  y: number;
  rotation: 0 | 90 | 180 | 270;
}

interface TeacherProfile {
  name: string;
  className: string;
  studentCount: string;
  date: string;
  duration: string;
  place: string;
  lessonNo: string;
}

interface AppState {
  teacherMode: boolean;
  setTeacherMode: (value: boolean) => void;
  profile: TeacherProfile;
  setProfile: (patch: Partial<TeacherProfile>) => void;
  classroomItems: PlacedItem[];
  addClassroomItem: (kind: FurnitureId) => void;
  moveClassroomItem: (id: string, x: number, y: number) => void;
  rotateClassroomItem: (id: string) => void;
  removeClassroomItem: (id: string) => void;
  resetClassroom: () => void;
  selectedPlace: string | null;
  setSelectedPlace: (id: string | null) => void;
  legendAssignments: Record<string, string>;
  setLegendAssignment: (slot: string, placeId: string) => void;
  resetLegend: () => void;
  routeStops: string[];
  toggleRouteStop: (id: string) => void;
  resetRoute: () => void;
  altitude: number;
  setAltitude: (value: number) => void;
}

const defaultClassroom: PlacedItem[] = [
  { id: "board-1", kind: "board", x: 38, y: 6, rotation: 0 },
  { id: "teacher-1", kind: "teacher-desk", x: 42, y: 22, rotation: 0 },
  { id: "door-1", kind: "door", x: 4, y: 70, rotation: 0 },
  { id: "window-1", kind: "window", x: 20, y: 2, rotation: 0 },
  { id: "window-2", kind: "window", x: 62, y: 2, rotation: 0 },
  { id: "shelf-1", kind: "shelf", x: 84, y: 18, rotation: 0 },
  { id: "plant-1", kind: "plant", x: 86, y: 78, rotation: 0 },
  { id: "bin-1", kind: "bin", x: 8, y: 18, rotation: 0 },
  { id: "desk-1", kind: "desk", x: 18, y: 42, rotation: 0 },
  { id: "desk-2", kind: "desk", x: 42, y: 42, rotation: 0 },
  { id: "desk-3", kind: "desk", x: 66, y: 42, rotation: 0 },
  { id: "desk-4", kind: "desk", x: 18, y: 62, rotation: 0 },
  { id: "desk-5", kind: "desk", x: 42, y: 62, rotation: 0 },
  { id: "desk-6", kind: "desk", x: 66, y: 62, rotation: 0 },
];

let itemSeq = 0;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      teacherMode: true,
      setTeacherMode: (value) => set({ teacherMode: value }),
      profile: {
        name: "",
        className: "چهارم",
        studentCount: "",
        date: "",
        duration: "۴۵ دقیقه",
        place: "کلاس درس",
        lessonNo: "",
      },
      setProfile: (patch) =>
        set((state) => ({ profile: { ...state.profile, ...patch } })),
      classroomItems: defaultClassroom,
      addClassroomItem: (kind) =>
        set((state) => {
          itemSeq += 1;
          return {
            classroomItems: [
              ...state.classroomItems,
              {
                id: `${kind}-${itemSeq}`,
                kind,
                x: 40,
                y: 40,
                rotation: 0,
              },
            ],
          };
        }),
      moveClassroomItem: (id, x, y) =>
        set((state) => ({
          classroomItems: state.classroomItems.map((item) =>
            item.id === id ? { ...item, x, y } : item,
          ),
        })),
      rotateClassroomItem: (id) =>
        set((state) => ({
          classroomItems: state.classroomItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  rotation: ((item.rotation + 90) % 360) as PlacedItem["rotation"],
                }
              : item,
          ),
        })),
      removeClassroomItem: (id) =>
        set((state) => ({
          classroomItems: state.classroomItems.filter((item) => item.id !== id),
        })),
      resetClassroom: () => set({ classroomItems: defaultClassroom }),
      selectedPlace: null,
      setSelectedPlace: (id) => set({ selectedPlace: id }),
      legendAssignments: {},
      setLegendAssignment: (slot, placeId) =>
        set((state) => ({
          legendAssignments: { ...state.legendAssignments, [slot]: placeId },
        })),
      resetLegend: () => set({ legendAssignments: {} }),
      routeStops: [],
      toggleRouteStop: (id) =>
        set((state) => {
          const exists = state.routeStops.includes(id);
          return {
            routeStops: exists
              ? state.routeStops.filter((stop) => stop !== id)
              : [...state.routeStops, id],
          };
        }),
      resetRoute: () => set({ routeStops: [] }),
      altitude: 18,
      setAltitude: (value) => set({ altitude: value }),
    }),
    {
      name: "bird-eye-lesson",
      skipHydration: true,
      partialize: (state) => ({ profile: state.profile }),
    },
  ),
);
