import { writable } from 'svelte/store';
import { supabase } from './supabaseClient';

export type Drive = {
  id: string;
  name: string;
  usage: string;
  percent: number;
  gradient?: boolean;
  description?: string;
  created_at: string;
};

export type Activity = {
  id: string;
  name: string;
  meta: string;
  time: string;
  created_at: string;
};

export type Table = {
  id: string;
  name: string;
  description: string;
  provider: string;
  status: 'Active' | 'Syncing' | 'Locked';
  rows_count: number;
  created_at: string;
};

export type TableRow = {
  id: string;
  table_id: string;
  title: string;
  status: 'Active' | 'Pending' | 'Archived';
  fields: Array<{ label: string; value: string }>;
  created_at: string;
};

export type ScriptJob = {
  id: string;
  name: string;
  trigger_text: string;
  preview: string[];
  active: boolean;
  status_text: string;
  created_at: string;
};

export const drives = writable<Drive[]>([]);
export const activities = writable<Activity[]>([]);
export const tables = writable<Table[]>([]);
export const tableRows = writable<TableRow[]>([]);
export const scripts = writable<ScriptJob[]>([]);

export async function fetchDrives() {
  const { data } = await supabase.from('drives').select('*').order('created_at', { ascending: true });
  if (data) drives.set(data);
}

export async function fetchActivities() {
  const { data } = await supabase.from('activities').select('*').order('created_at', { ascending: false });
  if (data) activities.set(data);
}

export async function fetchTables() {
  const { data } = await supabase.from('tables').select('*').order('created_at', { ascending: true });
  if (data) tables.set(data);
}

export async function fetchTableRows(tableId?: string) {
  let query = supabase.from('table_rows').select('*').order('created_at', { ascending: false });
  if (tableId) query = query.eq('table_id', tableId);
  const { data } = await query;
  if (data) tableRows.set(data);
}

export async function fetchScripts() {
  const { data } = await supabase.from('scripts').select('*').order('created_at', { ascending: true });
  if (data) scripts.set(data);
}

export const profileSections = [
  {
    title: 'Account',
    items: [
      { label: 'Edit Profile', value: '' },
      { label: 'Security', value: '' },
      { label: 'Notifications', value: '' },
    ],
  },
  {
    title: 'Storage',
    items: [
      { label: 'Total Used', value: '57.3 GB' },
      { label: 'Plan', value: 'Free' },
      { label: 'Connected Drives', value: '4' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Center', value: '' },
      { label: 'App Version', value: 'v1.2.0' },
    ],
  },
];

export const addRowFilters = ['All', 'Active', 'Pending', 'Archived', 'PDF', 'Spreadsheet'];
