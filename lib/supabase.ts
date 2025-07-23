import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://lgklimjczxflxpmtjsoi.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxna2xpbWpjenhmbHhwbXRqc29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNTAyNjcsImV4cCI6MjA2ODgyNjI2N30.PLLE2BOTY0HrezAhG6GomaqjbL1iWHeTJdPnHnWRgZg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for your database tables
export interface Contact {
  id: number
  name: string
  url: string
  icon: string
  created_at: string
}

export interface Skill {
  id: number
  name: string
  created_at: string
}

export interface Education {
  id: number
  name: string
  major: string
  location?: string
  start: string
  end?: string
  image: string
  created_at: string
}

export interface Work {
  id: number
  company: string
  role: string
  location: string
  start: string
  end?: string
  image: string
  created_at: string
}

export interface Project {
  id: number
  name: string
  description: string
  placeholder: string
  techstack: string[]
  image: string[]
  created_at: string
}

export interface Organization {
  id: number
  name: string
  location: string
  year: string[]
  role: string[]
  image: string
  created_at: string
}