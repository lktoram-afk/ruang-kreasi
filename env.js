// Browser-visible Supabase configuration. Never put a service_role or secret key here.
export const SUPABASE_URL = 'https://wwklwztohlduvkiirhnp.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3a2x3enRvaGxkdXZraWlyaG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3NzA2MjksImV4cCI6MjEwNzM0NjYyOX0.0cXzCWy-Pf4RRY5trb-pNuHweW5FQMMXCCyS5CSGnlc';

const configured =
  /^https:\/\/[^/]+\.supabase\.co\/?$/i.test(SUPABASE_URL) &&
  SUPABASE_ANON_KEY.length > 20 &&
  !SUPABASE_URL.includes('YOUR_PROJECT_REF') &&
  !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_');

export default {
  configured,
  supabaseUrl: SUPABASE_URL,
  supabaseAnonKey: SUPABASE_ANON_KEY
};
