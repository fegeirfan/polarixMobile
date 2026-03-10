export type Drive = {
  name: string;
  usage: string;
  percent: number;
  icon: string;
  iconBackground: string;
  gradient?: boolean;
  description?: string;
};

export type Activity = {
  icon: string;
  iconBackground: string;
  name: string;
  meta: string;
  time: string;
};

export type Table = {
  icon: string;
  iconBackground: string;
  name: string;
  description: string;
  provider: string;
  status: 'Active' | 'Syncing' | 'Locked';
  rows: number;
};

export type TableRow = {
  icon: string;
  title: string;
  status: 'Active' | 'Pending' | 'Archived';
  fields: Array<{ label: string; value: string }>;
};

export type ScriptJob = {
  icon: string;
  iconBackground: string;
  name: string;
  trigger: string;
  preview: string[];
  active: boolean;
  statusText: string;
};

export const drives: Drive[] = [
  { name: 'Google Drive', usage: '8.4 / 15 GB', percent: 56, icon: '☁️', iconBackground: '#e8f0fe', description: 'Connect via OAuth 2.0' },
  { name: 'Dropbox', usage: '2.1 / 5 GB', percent: 42, icon: '📦', iconBackground: '#e8f4fd', description: 'Connect via Dropbox API' },
  { name: 'OneDrive', usage: '14.8 / 15 GB', percent: 98, icon: '🔷', iconBackground: '#e9f0fe', gradient: true, description: 'Connect via Microsoft SSO' },
  { name: 'S3 Bucket', usage: '32 / 100 GB', percent: 32, icon: '🗄️', iconBackground: '#fff7ed', description: 'Use access key + secret' },
  { name: 'FTP / SFTP', usage: 'Not connected', percent: 0, icon: '📂', iconBackground: '#f0fdf4', description: 'Manual server credentials' },
];

export const activities: Activity[] = [
  { icon: '📄', iconBackground: '#e8f0fe', name: 'Q3_Report_Final.pdf', meta: 'Added to -> Reports Table', time: '2m ago' },
  { icon: '⚡', iconBackground: '#ecfdf5', name: 'Auto-Tag Script ran', meta: '12 files processed', time: '1h ago' },
  { icon: '🖼️', iconBackground: '#fff7ed', name: 'brand_assets_v2.zip', meta: 'Added to -> Media Table', time: '3h ago' },
  { icon: '📊', iconBackground: '#f5f3ff', name: 'analytics_data.csv', meta: 'Added to -> Research Table', time: 'Yesterday' },
];

export const tables: Table[] = [
  { icon: '📁', iconBackground: '#e8f0fe', name: 'Project Documents', description: 'All project-related files, proposals, and reports organized by client.', provider: 'Google Drive', status: 'Active', rows: 48 },
  { icon: '🖼️', iconBackground: '#ecfdf5', name: 'Media Archive', description: 'Brand assets, photos, videos, and design files.', provider: 'Dropbox', status: 'Active', rows: 132 },
  { icon: '📊', iconBackground: '#fff7ed', name: 'Research Data', description: 'CSV exports, datasets, and analysis notebooks.', provider: 'S3 Bucket', status: 'Syncing', rows: 27 },
  { icon: '📬', iconBackground: '#f5f3ff', name: 'Email Attachments', description: 'Auto-captured attachments from Gmail, sorted by sender.', provider: 'OneDrive', status: 'Active', rows: 89 },
  { icon: '🔒', iconBackground: '#fef2f2', name: 'Private Vault', description: 'Encrypted documents, contracts, and legal files.', provider: 'Google Drive', status: 'Locked', rows: 14 },
];

export const tableRows: TableRow[] = [
  {
    icon: '📄',
    title: 'Q3 Report Final',
    status: 'Active',
    fields: [
      { label: 'Type', value: 'PDF' },
      { label: 'Size', value: '4.2 MB' },
      { label: 'Client', value: 'Acme Corp' },
      { label: 'Added', value: 'Today' },
    ],
  },
  {
    icon: '📊',
    title: 'Budget Breakdown 2024',
    status: 'Active',
    fields: [
      { label: 'Type', value: 'XLSX' },
      { label: 'Size', value: '1.8 MB' },
      { label: 'Client', value: 'Globex' },
      { label: 'Added', value: '3 days ago' },
    ],
  },
  {
    icon: '📋',
    title: 'Contract v2 - Initech',
    status: 'Pending',
    fields: [
      { label: 'Type', value: 'DOCX' },
      { label: 'Size', value: '820 KB' },
      { label: 'Client', value: 'Initech' },
      { label: 'Added', value: '1 week ago' },
    ],
  },
  {
    icon: '🗺️',
    title: 'Roadmap Slides Q4',
    status: 'Active',
    fields: [
      { label: 'Type', value: 'PPTX' },
      { label: 'Size', value: '12.4 MB' },
      { label: 'Client', value: 'Internal' },
      { label: 'Added', value: '2 weeks ago' },
    ],
  },
  {
    icon: '📦',
    title: 'Vendor Proposal 2023',
    status: 'Archived',
    fields: [
      { label: 'Type', value: 'PDF' },
      { label: 'Size', value: '6.1 MB' },
      { label: 'Client', value: 'TechVend' },
      { label: 'Added', value: '3 months ago' },
    ],
  },
];

export const scripts: ScriptJob[] = [
  {
    icon: '⚡',
    iconBackground: '#ecfdf5',
    name: 'Auto-Tag Files',
    trigger: 'trigger: on_upload',
    preview: ['# Runs on every upload', 'def auto_tag(file):', '  tags = detect_tags(file)', '  return apply(file, tags)'],
    active: true,
    statusText: 'Active - ran 1h ago',
  },
  {
    icon: '📧',
    iconBackground: '#eff6ff',
    name: 'Email Attachment Sync',
    trigger: 'trigger: cron 0 9 * * *',
    preview: ['# Daily at 9AM', 'for mail in fetch_unread():', '  extract_attachments(mail)', '  save_to_table("Email")'],
    active: true,
    statusText: 'Active - ran 3h ago',
  },
  {
    icon: '🗃️',
    iconBackground: '#fef9c3',
    name: 'Archive Old Files',
    trigger: 'trigger: cron 0 0 1 * *',
    preview: ['# Monthly cleanup', 'files = query("age > 90d")', 'for f in files:', '  move_to_archive(f)'],
    active: false,
    statusText: 'Inactive',
  },
  {
    icon: '🔔',
    iconBackground: '#fdf4ff',
    name: 'Storage Alert',
    trigger: 'trigger: on_threshold (90%)',
    preview: ['if usage() > 0.9:', '  notify("Storage almost full")', '  suggest_cleanup()'],
    active: true,
    statusText: 'Active - watching',
  },
];

export const profileSections = [
  {
    title: 'Account',
    items: [
      { icon: '👤', iconBackground: '#e8f0fe', label: 'Edit Profile', value: '' },
      { icon: '🔒', iconBackground: '#ecfdf5', label: 'Security', value: '' },
      { icon: '🔔', iconBackground: '#fff7ed', label: 'Notifications', value: '' },
    ],
  },
  {
    title: 'Storage',
    items: [
      { icon: '☁️', iconBackground: '#f5f3ff', label: 'Total Used', value: '57.3 GB' },
      { icon: '⭐', iconBackground: '#eff6ff', label: 'Plan', value: 'Free' },
      { icon: '🔗', iconBackground: '#ecfdf5', label: 'Connected Drives', value: '4' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: '❓', iconBackground: '#fef9c3', label: 'Help Center', value: '' },
      { icon: 'ℹ️', iconBackground: '#f1f5f9', label: 'App Version', value: 'v1.2.0' },
    ],
  },
];

export const addRowFilters = ['All', 'Active', 'Pending', 'Archived', 'PDF', 'Spreadsheet'];
