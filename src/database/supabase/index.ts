import { createClient } from "@supabase/supabase-js";
import {
  FestivalSubmissionLite,
  RawFestival,
  RawNewFestival,
  RawNewReport,
  ReportSubmissionLite,
} from "../../types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

const supabase = createClient(supabaseUrl, supabasePublicKey);

export const supabaseMethods = {
  insertSubmission: (submission: FestivalSubmissionLite) =>
    supabase.from<RawNewFestival>("new_festivals").insert([submission]),
  insertReport: (report: string) => {
    const dataToSend: ReportSubmissionLite = { report };
    return supabase.from<RawNewReport>("new_reports").insert([dataToSend]);
  },
  readAllFestivals: () => supabase.from<RawFestival>("festivals").select("*"),
};
