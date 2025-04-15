
import { Project } from "./types";
import { sqlDataWarehouse } from "./projects/sql-data-warehouse";
import { tableauHrDashboard } from "./projects/tableau-hr-dashboard";
import { netflixAnalytics } from "./projects/netflix-analytics";

export const projects: { [key: string]: Project } = {
  "1": sqlDataWarehouse,
  "2": tableauHrDashboard,
  "3": netflixAnalytics
};
