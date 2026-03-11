-- Create Drives Table
CREATE TABLE IF NOT EXISTS public.drives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    usage TEXT,
    percent INTEGER DEFAULT 0,
    gradient BOOLEAN DEFAULT false,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Activities Table
CREATE TABLE IF NOT EXISTS public.activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    meta TEXT,
    time TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Tables Table
CREATE TABLE IF NOT EXISTS public.tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    provider TEXT,
    status TEXT,
    rows_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Table Rows Table
CREATE TABLE IF NOT EXISTS public.table_rows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_id UUID REFERENCES public.tables(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    status TEXT,
    fields JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Scripts Table
CREATE TABLE IF NOT EXISTS public.scripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    trigger_text TEXT,
    preview JSONB DEFAULT '[]'::jsonb,
    active BOOLEAN DEFAULT false,
    status_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Disable Row Level Security (RLS) until Auth is needed
ALTER TABLE public.drives DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.tables DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.table_rows DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.scripts DISABLE ROW LEVEL SECURITY;

-- Seed Initial Data

-- Drives
INSERT INTO public.drives (name, usage, percent, gradient, description) VALUES
('Google Drive', '8.4 / 15 GB', 56, false, 'Connect via OAuth 2.0'),
('Dropbox', '2.1 / 5 GB', 42, false, 'Connect via Dropbox API'),
('OneDrive', '14.8 / 15 GB', 98, true, 'Connect via Microsoft SSO'),
('S3 Bucket', '32 / 100 GB', 32, false, 'Use access key + secret'),
('FTP / SFTP', 'Not connected', 0, false, 'Manual server credentials');

-- Activities
INSERT INTO public.activities (name, meta, time) VALUES
('Q3_Report_Final.pdf', 'Added to -> Reports Table', '2m ago'),
('Auto-Tag Script ran', '12 files processed', '1h ago'),
('brand_assets_v2.zip', 'Added to -> Media Table', '3h ago'),
('analytics_data.csv', 'Added to -> Research Table', 'Yesterday');

-- Tables
DO $$
DECLARE
    table1_id UUID;
    table2_id UUID;
    table3_id UUID;
    table4_id UUID;
    table5_id UUID;
BEGIN
    INSERT INTO public.tables (name, description, provider, status, rows_count) VALUES
    ('Project Documents', 'All project-related files, proposals, and reports organized by client.', 'Google Drive', 'Active', 48) RETURNING id INTO table1_id;
    INSERT INTO public.tables (name, description, provider, status, rows_count) VALUES
    ('Media Archive', 'Brand assets, photos, videos, and design files.', 'Dropbox', 'Active', 132) RETURNING id INTO table2_id;
    INSERT INTO public.tables (name, description, provider, status, rows_count) VALUES
    ('Research Data', 'CSV exports, datasets, and analysis notebooks.', 'S3 Bucket', 'Syncing', 27) RETURNING id INTO table3_id;
    INSERT INTO public.tables (name, description, provider, status, rows_count) VALUES
    ('Email Attachments', 'Auto-captured attachments from Gmail, sorted by sender.', 'OneDrive', 'Active', 89) RETURNING id INTO table4_id;
    INSERT INTO public.tables (name, description, provider, status, rows_count) VALUES
    ('Private Vault', 'Encrypted documents, contracts, and legal files.', 'Google Drive', 'Locked', 14) RETURNING id INTO table5_id;

    -- Table Rows (Associated with table1_id for simplicity, but could be any)
    INSERT INTO public.table_rows (table_id, title, status, fields) VALUES
    (table1_id, 'Q3 Report Final', 'Active', '[{"label": "Type", "value": "PDF"}, {"label": "Size", "value": "4.2 MB"}, {"label": "Client", "value": "Acme Corp"}, {"label": "Added", "value": "Today"}]'),
    (table1_id, 'Budget Breakdown 2024', 'Active', '[{"label": "Type", "value": "XLSX"}, {"label": "Size", "value": "1.8 MB"}, {"label": "Client", "value": "Globex"}, {"label": "Added", "value": "3 days ago"}]'),
    (table1_id, 'Contract v2 - Initech', 'Pending', '[{"label": "Type", "value": "DOCX"}, {"label": "Size", "value": "820 KB"}, {"label": "Client", "value": "Initech"}, {"label": "Added", "value": "1 week ago"}]'),
    (table1_id, 'Roadmap Slides Q4', 'Active', '[{"label": "Type", "value": "PPTX"}, {"label": "Size", "value": "12.4 MB"}, {"label": "Client", "value": "Internal"}, {"label": "Added", "value": "2 weeks ago"}]'),
    (table1_id, 'Vendor Proposal 2023', 'Archived', '[{"label": "Type", "value": "PDF"}, {"label": "Size", "value": "6.1 MB"}, {"label": "Client", "value": "TechVend"}, {"label": "Added", "value": "3 months ago"}]');
END $$;

-- Scripts
INSERT INTO public.scripts (name, trigger_text, preview, active, status_text) VALUES
('Auto-Tag Files', 'trigger: on_upload', '["# Runs on every upload", "def auto_tag(file):", "  tags = detect_tags(file)", "  return apply(file, tags)"]', true, 'Active - ran 1h ago'),
('Email Attachment Sync', 'trigger: cron 0 9 * * *', '["# Daily at 9AM", "for mail in fetch_unread():", "  extract_attachments(mail)", "  save_to_table(\"Email\")"]', true, 'Active - ran 3h ago'),
('Archive Old Files', 'trigger: cron 0 0 1 * *', '["# Monthly cleanup", "files = query(\"age > 90d\")", "for f in files:", "  move_to_archive(f)"]', false, 'Inactive'),
('Storage Alert', 'trigger: on_threshold (90%)', '["if usage() > 0.9:", "  notify(\"Storage almost full\")", "  suggest_cleanup()"]', true, 'Active - watching');
