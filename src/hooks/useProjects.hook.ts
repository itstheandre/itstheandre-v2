import create from "zustand";
import { ProjectType } from "../shared/types";
import { immer } from "./utils.hooks";

type WorkPageProject = ProjectType | "all";

export type ProjectState = {
  showing: number;
  selected: WorkPageProject;
  showMore: (more: number) => void;
  showLess: (less: number) => void;
  setSelected: (val: WorkPageProject) => void;
};

export const useProjects = create<ProjectState>(
  immer((set) => ({
    /**
     * @default: 3
     */
    showing: 3,
    /**
     * how many more projects to show.
     * will directly affect  showing property
     * @example
     * showMore(5)
     */
    showMore: (more) =>
      set((state) => {
        state.showing += more;
      }),
    /**
     * how many less projects to show
     * will directly affect  showing property
     * @example
     * showMore(5)
     */
    showLess: (less) =>
      set((state) => {
        state.showing -= less;
      }),
    /**
     * @default: all
     * @enum WorkPageProject
     */
    selected: "all",
    /**
     *
     * @param val "all" | "frontend" | "backend" | "app" | "oss"
     */
    setSelected: (val) =>
      set((state) => {
        state.selected = val;
      }),
  }))
);
