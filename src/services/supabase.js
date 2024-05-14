import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zdbeisecydaklpieupkb.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkYmVpc2VjeWRha2xwaWV1cGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NzM2NDksImV4cCI6MjAyMzE0OTY0OX0.UHS49yxJbYmBc2vQ9XHBH94rIDDSSEXgbNEOCeSDpxQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
