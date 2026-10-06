create extension if not exists pgcrypto;

create type public.user_role as enum ('patient','doctor','clinic','admin');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.user_role not null default 'patient',
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.doctors (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  specialty text not null,
  bio text,
  license_number text,
  experience_years integer,
  is_verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.clinics (
  id uuid primary key default gen_random_uuid(),
  owner_profile_id uuid references public.profiles(id) on delete set null,
  name text not null,
  description text,
  address text,
  phone text,
  is_verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.profiles(id) on delete cascade,
  doctor_id uuid references public.doctors(id) on delete set null,
  clinic_id uuid references public.clinics(id) on delete set null,
  starts_at timestamptz not null,
  status text not null default 'requested',
  notes text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.doctors enable row level security;
alter table public.clinics enable row level security;
alter table public.appointments enable row level security;

create policy "profiles own row" on public.profiles for select using (auth.uid() = id);
create policy "profiles own update" on public.profiles for update using (auth.uid() = id);
create policy "doctors public read" on public.doctors for select using (true);
create policy "clinics public read" on public.clinics for select using (true);
create policy "appointments patient read" on public.appointments for select using (auth.uid() = patient_id);
create policy "appointments patient create" on public.appointments for insert with check (auth.uid() = patient_id);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();
