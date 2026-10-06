# OneMed production migration

This branch preserves the existing React/Vite prototype and adds the foundation for Vercel + Supabase.

1. Create a new Supabase project.
2. Run supabase/migrations/0001_onemed_core.sql in Supabase SQL Editor.
3. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to Vercel.
4. Build with npm run build and deploy the dist directory.
5. Keep GEMINI_API_KEY server-side. The original prototype exposed it through the Vite bundle; production TTS must use a Vercel server route or Supabase Edge Function.
6. Next implementation steps: Supabase Auth UI, real doctor/clinic queries, appointment workflows, Storage/RLS, server-side Gemini TTS, tests and CI.

Important: this migration is newly created. No existing Supabase schema was found in the original repository.
