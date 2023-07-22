import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://juxmnhvvonkpcrnbuafs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eG1uaHZ2b25rcGNybmJ1YWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNDE4MTIsImV4cCI6MjAwNTYxNzgxMn0.lQK3hZYsPhkLd8dL84v2fGTjPY8jhbP-aSWvhRGTCo4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
