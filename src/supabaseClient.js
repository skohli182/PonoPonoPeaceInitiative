import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wewegydupxrqehsoyjus.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indld2VneWR1cHhycWVoc295anVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzODAzMTMsImV4cCI6MjA4Njk1NjMxM30.-MWODF8gA3ngQEa23xJnyWPG2ynxbJD8T_iKAESb5jE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);