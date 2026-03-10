<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Polarix</title>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --blue-900: #0a1628;
    --blue-800: #0d1f3c;
    --blue-700: #102a52;
    --blue-600: #1340a0;
    --blue-500: #1a52cc;
    --blue-400: #2e6ef7;
    --blue-300: #5d91ff;
    --blue-200: #93b8ff;
    --blue-100: #d4e4ff;
    --blue-50:  #eef4ff;
    --accent:   #38bdf8;
    --accent2:  #06b6d4;
    --white:    #ffffff;
    --gray-50:  #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;
    --success:  #10b981;
    --warning:  #f59e0b;
    --danger:   #ef4444;
    --font-main: 'Sora', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --shadow-sm: 0 1px 3px rgba(19,64,160,0.08), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(19,64,160,0.10), 0 2px 6px rgba(0,0,0,0.06);
    --shadow-lg: 0 12px 40px rgba(19,64,160,0.14), 0 4px 12px rgba(0,0,0,0.08);
    --shadow-card: 0 2px 12px rgba(19,64,160,0.08), 0 1px 4px rgba(0,0,0,0.04);
    --nav-h: 68px;
    --header-h: 60px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    height: 100%;
    font-family: var(--font-main);
    background: var(--gray-50);
    color: var(--gray-900);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  #app {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
    background: var(--white);
    position: relative;
    box-shadow: 0 0 60px rgba(0,0,0,0.12);
    overflow: hidden;
  }

  /* ── PAGES ── */
  .page {
    display: none;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
  .page.active { display: flex; }

  /* ── SCROLLABLE CONTENT ── */
  .page-content {
    flex: 1;
    overflow-y: auto;
    padding-bottom: calc(var(--nav-h) + 16px);
    -webkit-overflow-scrolling: touch;
  }
  .page-content::-webkit-scrollbar { display: none; }

  /* ── HEADER ── */
  .header {
    height: var(--header-h);
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: var(--white);
    border-bottom: 1px solid var(--gray-100);
    position: relative;
    z-index: 10;
    flex-shrink: 0;
  }
  .header-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--gray-900);
    flex: 1;
    letter-spacing: -0.3px;
  }
  .header-action {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: var(--blue-50);
    border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--blue-500);
    transition: all 0.15s;
  }
  .header-action:hover { background: var(--blue-100); }
  .header-back {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: transparent;
    border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--gray-600);
    margin-right: 8px;
    transition: all 0.15s;
  }
  .header-back:hover { background: var(--gray-100); }

  /* ── BOTTOM NAV ── */
  #bottom-nav {
    height: var(--nav-h);
    background: var(--white);
    border-top: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 8px 8px;
    flex-shrink: 0;
    position: relative;
    z-index: 100;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    border-radius: var(--radius-md);
    cursor: pointer;
    border: none;
    background: transparent;
    transition: all 0.2s;
    flex: 1;
  }
  .nav-item svg { transition: all 0.2s; }
  .nav-item span {
    font-size: 10px;
    font-weight: 500;
    color: var(--gray-400);
    transition: color 0.2s;
  }
  .nav-item.active { background: var(--blue-50); }
  .nav-item.active span { color: var(--blue-500); }
  .nav-item.active svg { stroke: var(--blue-500); }
  .nav-item:not(.active) svg { stroke: var(--gray-400); }
  .nav-add {
    width: 48px; height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--blue-400), var(--blue-600));
    border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(46,110,247,0.35);
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .nav-add:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(46,110,247,0.45); }
  .nav-add:active { transform: translateY(0); }

  /* ══════════════════════════════════════
     LOGIN PAGE
  ══════════════════════════════════════ */
  #page-login {
    background: linear-gradient(160deg, var(--blue-900) 0%, var(--blue-800) 40%, #0a1e40 100%);
    justify-content: center;
    align-items: center;
    padding: 0 24px;
  }
  .login-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
  }
  .login-bg-orb-1 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(46,110,247,0.3), transparent 70%);
    top: -60px; right: -60px;
  }
  .login-bg-orb-2 {
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%);
    bottom: 80px; left: -40px;
  }
  .login-card {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: var(--radius-xl);
    padding: 32px 24px 28px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .login-logo {
    display: flex; flex-direction: column; align-items: center;
    margin-bottom: 36px;
  }
  .login-logo-icon {
    width: 56px; height: 56px;
    background: linear-gradient(135deg, var(--blue-300), var(--accent));
    border-radius: 18px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px;
    box-shadow: 0 8px 28px rgba(56,189,248,0.28);
  }
  .login-logo-text {
    font-size: 30px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.6px;
  }
  .btn-google {
    width: 100%;
    padding: 13px;
    border-radius: var(--radius-md);
    background: var(--white);
    border: none;
    color: var(--gray-800);
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 600;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 12px;
    box-shadow: var(--shadow-sm);
  }
  .btn-google:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
  .login-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 18px 0;
  }
  .login-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.1); }
  .login-divider span { color: rgba(255,255,255,0.35); font-size: 12px; }
  .input-group { margin-bottom: 12px; }
  .input-field {
    width: 100%;
    padding: 13px 14px;
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    color: var(--white);
    font-family: var(--font-main);
    font-size: 14px;
    outline: none;
    transition: all 0.2s;
  }
  .input-field::placeholder { color: rgba(255,255,255,0.3); }
  .input-field:focus { border-color: var(--blue-300); background: rgba(255,255,255,0.1); }
  .btn-primary {
    width: 100%;
    padding: 13px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, var(--blue-400), var(--blue-600));
    border: none;
    color: var(--white);
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 16px rgba(46,110,247,0.35);
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(46,110,247,0.45); }
  .login-footer {
    text-align: center;
    margin-top: 20px;
    color: rgba(255,255,255,0.35);
    font-size: 12px;
  }
  .login-footer a { color: var(--blue-300); text-decoration: none; }

  /* ══════════════════════════════════════
     HOME / DASHBOARD PAGE
  ══════════════════════════════════════ */
  .home-hero {
    background: linear-gradient(135deg, var(--blue-800) 0%, var(--blue-600) 100%);
    padding: 24px 20px 32px;
    position: relative;
    overflow: hidden;
  }
  .home-hero-orb {
    position: absolute;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
    top: -60px; right: -40px;
  }
  .home-greeting {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 4px;
  }
  .home-username {
    font-size: 22px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
  .home-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
  .home-stat {
    background: rgba(255,255,255,0.1);
    border-radius: var(--radius-md);
    padding: 12px;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .home-stat-val {
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.5px;
    font-family: var(--font-mono);
  }
  .home-stat-label {
    font-size: 10px;
    color: rgba(255,255,255,0.55);
    margin-top: 2px;
    font-weight: 500;
  }
  .section-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 20px 12px;
  }
  .section-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--gray-800);
    letter-spacing: -0.2px;
  }
  .section-link {
    font-size: 12px;
    color: var(--blue-500);
    font-weight: 500;
    cursor: pointer;
    background: none;
    border: none;
  }

  /* Drive Cards */
  .drives-scroll {
    display: flex;
    gap: 12px;
    padding: 0 20px 4px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .drives-scroll::-webkit-scrollbar { display: none; }
  .drive-card {
    flex-shrink: 0;
    width: 160px;
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-lg);
    padding: 16px;
    box-shadow: var(--shadow-card);
    cursor: pointer;
    transition: all 0.2s;
  }
  .drive-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .drive-icon {
    width: 40px; height: 40px;
    border-radius: var(--radius-sm);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px;
    font-size: 20px;
  }
  .drive-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-800);
    margin-bottom: 4px;
  }
  .drive-used {
    font-size: 11px;
    color: var(--gray-500);
    margin-bottom: 10px;
    font-family: var(--font-mono);
  }
  .drive-bar {
    height: 4px;
    background: var(--gray-100);
    border-radius: 99px;
    overflow: hidden;
  }
  .drive-bar-fill {
    height: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, var(--blue-400), var(--accent));
  }
  .drive-add-card {
    flex-shrink: 0;
    width: 100px;
    background: var(--blue-50);
    border: 1.5px dashed var(--blue-200);
    border-radius: var(--radius-lg);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .drive-add-card:hover { background: var(--blue-100); }
  .drive-add-card span { font-size: 11px; color: var(--blue-500); font-weight: 500; text-align: center; }

  /* Recent activity */
  .activity-list { padding: 0 20px; display: flex; flex-direction: column; gap: 8px; }
  .activity-item {
    display: flex; align-items: center; gap: 12px;
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-md);
    padding: 12px 14px;
    box-shadow: var(--shadow-sm);
  }
  .activity-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
  }
  .activity-info { flex: 1; min-width: 0; }
  .activity-name { font-size: 13px; font-weight: 500; color: var(--gray-800); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .activity-meta { font-size: 11px; color: var(--gray-400); margin-top: 2px; }
  .activity-time { font-size: 11px; color: var(--gray-400); white-space: nowrap; font-family: var(--font-mono); }

  /* ══════════════════════════════════════
     TABLES PAGE
  ══════════════════════════════════════ */
  .search-bar {
    margin: 12px 20px;
    display: flex; align-items: center; gap: 10px;
    background: var(--gray-100);
    border-radius: var(--radius-md);
    padding: 10px 14px;
  }
  .search-bar svg { stroke: var(--gray-400); flex-shrink: 0; }
  .search-bar input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--font-main);
    font-size: 13px;
    color: var(--gray-800);
  }
  .search-bar input::placeholder { color: var(--gray-400); }

  .tables-list { padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
  .table-card {
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-lg);
    padding: 16px;
    box-shadow: var(--shadow-card);
    cursor: pointer;
    transition: all 0.2s;
  }
  .table-card:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
  .table-card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px; }
  .table-card-icon {
    width: 38px; height: 38px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .table-card-name { font-size: 15px; font-weight: 600; color: var(--gray-800); margin-bottom: 3px; letter-spacing: -0.2px; }
  .table-card-desc { font-size: 12px; color: var(--gray-500); line-height: 1.4; }
  .table-card-footer { display: flex; align-items: center; gap: 8px; margin-top: 12px; }
  .table-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 99px;
    font-family: var(--font-mono);
  }
  .table-tag-blue { background: var(--blue-50); color: var(--blue-500); }
  .table-tag-green { background: #ecfdf5; color: #059669; }
  .table-tag-amber { background: #fffbeb; color: #d97706; }
  .table-card-rows { font-size: 11px; color: var(--gray-400); margin-left: auto; }

  /* ══════════════════════════════════════
     TABLE DETAIL PAGE
  ══════════════════════════════════════ */
  .detail-header-info {
    padding: 16px 20px;
    background: var(--white);
    border-bottom: 1px solid var(--gray-100);
  }
  .detail-table-name { font-size: 20px; font-weight: 700; color: var(--gray-900); letter-spacing: -0.4px; margin-bottom: 6px; }
  .detail-meta { display: flex; gap: 12px; align-items: center; }
  .detail-meta-item { font-size: 12px; color: var(--gray-500); display: flex; align-items: center; gap: 5px; }
  .detail-meta-item svg { stroke: var(--gray-400); }

  .filter-bar {
    display: flex; gap: 8px; padding: 12px 20px;
    overflow-x: auto; -webkit-overflow-scrolling: touch;
  }
  .filter-bar::-webkit-scrollbar { display: none; }
  .filter-chip {
    flex-shrink: 0;
    padding: 6px 12px;
    border-radius: 99px;
    border: 1px solid var(--gray-200);
    background: var(--white);
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-600);
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .filter-chip.active { background: var(--blue-500); border-color: var(--blue-500); color: var(--white); }

  .rows-list { padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
  .row-card {
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-md);
    padding: 14px;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: all 0.2s;
  }
  .row-card:hover { border-color: var(--blue-200); box-shadow: var(--shadow-md); }
  .row-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .row-thumb {
    width: 42px; height: 42px;
    border-radius: 10px;
    background: var(--gray-100);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .row-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .row-title { font-size: 14px; font-weight: 600; color: var(--gray-800); flex: 1; min-width: 0; }
  .row-badge {
    font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 99px;
    flex-shrink: 0;
  }
  .badge-active { background: #ecfdf5; color: #059669; }
  .badge-pending { background: #fffbeb; color: #d97706; }
  .badge-archived { background: var(--gray-100); color: var(--gray-500); }
  .row-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .row-field { }
  .row-field-label { font-size: 10px; color: var(--gray-400); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
  .row-field-val { font-size: 12px; color: var(--gray-700); font-family: var(--font-mono); margin-top: 1px; }

  /* ══════════════════════════════════════
     ADD ROW PAGE
  ══════════════════════════════════════ */
  .form-body { padding: 20px; display: flex; flex-direction: column; gap: 16px; }
  .form-group { }
  .form-label { font-size: 12px; font-weight: 600; color: var(--gray-600); margin-bottom: 6px; display: block; letter-spacing: 0.2px; text-transform: uppercase; }
  .form-input {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid var(--gray-200);
    border-radius: var(--radius-md);
    font-family: var(--font-main);
    font-size: 14px;
    color: var(--gray-800);
    background: var(--white);
    outline: none;
    transition: all 0.2s;
  }
  .form-input:focus { border-color: var(--blue-400); box-shadow: 0 0 0 3px rgba(46,110,247,0.1); }
  .form-select {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid var(--gray-200);
    border-radius: var(--radius-md);
    font-family: var(--font-main);
    font-size: 14px;
    color: var(--gray-800);
    background: var(--white);
    outline: none;
    appearance: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .form-select:focus { border-color: var(--blue-400); }
  .upload-zone {
    border: 2px dashed var(--gray-200);
    border-radius: var(--radius-lg);
    padding: 28px;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    cursor: pointer;
    transition: all 0.2s;
    background: var(--gray-50);
  }
  .upload-zone:hover { border-color: var(--blue-300); background: var(--blue-50); }
  .upload-zone-icon { font-size: 32px; }
  .upload-zone-text { font-size: 14px; font-weight: 500; color: var(--gray-600); }
  .upload-zone-sub { font-size: 12px; color: var(--gray-400); }
  .btn-submit {
    width: 100%;
    padding: 14px;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, var(--blue-400), var(--blue-600));
    border: none;
    color: var(--white);
    font-family: var(--font-main);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 16px rgba(46,110,247,0.30);
    letter-spacing: -0.2px;
  }
  .btn-submit:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(46,110,247,0.40); }
  .btn-submit:active { transform: translateY(0); }

  /* ══════════════════════════════════════
     SCRIPTS PAGE
  ══════════════════════════════════════ */
  .scripts-list { padding: 0 20px; display: flex; flex-direction: column; gap: 10px; }
  .script-card {
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-lg);
    padding: 16px;
    box-shadow: var(--shadow-card);
    cursor: pointer;
    transition: all 0.2s;
  }
  .script-card:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
  .script-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .script-icon {
    width: 40px; height: 40px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .script-name { font-size: 14px; font-weight: 600; color: var(--gray-800); }
  .script-trigger { font-size: 11px; color: var(--gray-400); margin-top: 2px; font-family: var(--font-mono); }
  .script-desc { font-size: 12px; color: var(--gray-500); line-height: 1.5; margin-bottom: 12px; }
  .script-footer { display: flex; align-items: center; justify-content: space-between; }
  .script-status { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; }
  .status-dot { width: 6px; height: 6px; border-radius: 50%; }
  .status-dot-green { background: var(--success); }
  .status-dot-gray { background: var(--gray-300); }
  .status-active { color: var(--success); }
  .status-inactive { color: var(--gray-400); }
  .script-run-btn {
    padding: 7px 14px;
    border-radius: 8px;
    background: var(--blue-50);
    border: 1px solid var(--blue-100);
    color: var(--blue-500);
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
  }
  .script-run-btn:hover { background: var(--blue-100); }
  .script-toggle {
    display: flex; align-items: center;
    gap: 6px;
  }
  .toggle {
    width: 36px; height: 20px;
    border-radius: 99px;
    background: var(--gray-200);
    position: relative;
    cursor: pointer;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .toggle.on { background: var(--blue-400); }
  .toggle::after {
    content: '';
    position: absolute;
    width: 16px; height: 16px;
    border-radius: 50%;
    background: var(--white);
    top: 2px; left: 2px;
    transition: transform 0.2s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  }
  .toggle.on::after { transform: translateX(16px); }

  /* ══════════════════════════════════════
     PROFILE PAGE
  ══════════════════════════════════════ */
  .profile-hero {
    background: linear-gradient(135deg, var(--blue-800), var(--blue-600));
    padding: 32px 20px 48px;
    display: flex; flex-direction: column; align-items: center;
    position: relative; overflow: hidden;
  }
  .profile-hero-orb {
    position: absolute; width: 180px; height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%);
    top: -40px; right: -40px;
  }
  .profile-avatar {
    width: 80px; height: 80px;
    border-radius: 24px;
    background: linear-gradient(135deg, var(--blue-300), var(--accent));
    display: flex; align-items: center; justify-content: center;
    font-size: 32px;
    margin-bottom: 14px;
    border: 3px solid rgba(255,255,255,0.2);
    position: relative; z-index: 1;
  }
  .profile-name { font-size: 20px; font-weight: 700; color: var(--white); letter-spacing: -0.4px; position: relative; z-index: 1; }
  .profile-email { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 4px; position: relative; z-index: 1; }
  .profile-content {
    flex: 1;
    overflow-y: auto;
    margin-top: -24px;
    padding: 0 16px 100px;
  }
  .profile-content::-webkit-scrollbar { display: none; }
  .profile-section {
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    margin-bottom: 12px;
  }
  .profile-section-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--gray-400);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    padding: 12px 16px 8px;
  }
  .profile-item {
    display: flex; align-items: center; gap: 14px;
    padding: 13px 16px;
    cursor: pointer;
    transition: background 0.15s;
    border-top: 1px solid var(--gray-50);
  }
  .profile-item:first-of-type { border-top: none; }
  .profile-item:hover { background: var(--gray-50); }
  .profile-item-icon {
    width: 34px; height: 34px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
  }
  .profile-item-label { flex: 1; font-size: 14px; font-weight: 500; color: var(--gray-800); }
  .profile-item-val { font-size: 13px; color: var(--gray-400); font-family: var(--font-mono); }
  .profile-item-arrow { color: var(--gray-300); }
  .profile-logout {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%;
    padding: 14px;
    background: #fff5f5;
    border: 1px solid #fee2e2;
    border-radius: var(--radius-md);
    color: var(--danger);
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    margin-top: 4px;
  }
  .profile-logout:hover { background: #fee2e2; }

  /* ══════════════════════════════════════
     ADD DRIVE PAGE
  ══════════════════════════════════════ */
  .drive-options { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
  .drive-option {
    display: flex; align-items: center; gap: 14px;
    background: var(--white);
    border: 1.5px solid var(--gray-200);
    border-radius: var(--radius-lg);
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .drive-option:hover { border-color: var(--blue-300); background: var(--blue-50); }
  .drive-option.selected { border-color: var(--blue-400); background: var(--blue-50); box-shadow: 0 0 0 3px rgba(46,110,247,0.1); }
  .drive-option-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
  .drive-option-info { flex: 1; }
  .drive-option-name { font-size: 15px; font-weight: 600; color: var(--gray-800); }
  .drive-option-desc { font-size: 12px; color: var(--gray-500); margin-top: 2px; }
  .drive-option-check {
    width: 22px; height: 22px;
    border-radius: 50%;
    border: 2px solid var(--gray-300);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s;
  }
  .drive-option.selected .drive-option-check {
    background: var(--blue-500);
    border-color: var(--blue-500);
  }

  .connect-form { padding: 0 20px 20px; }
  .connect-form .form-group { margin-bottom: 14px; }

  /* ══════════════════════════════════════
     TOAST
  ══════════════════════════════════════ */
  #toast {
    position: fixed;
    bottom: calc(var(--nav-h) + 16px);
    left: 50%; transform: translateX(-50%);
    background: var(--gray-900);
    color: var(--white);
    padding: 10px 18px;
    border-radius: 99px;
    font-size: 13px;
    font-weight: 500;
    font-family: var(--font-main);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    white-space: nowrap;
    max-width: 90vw;
  }
  #toast.show { opacity: 1; }

  /* ══════════════════════════════════════
     ANIMATIONS
  ══════════════════════════════════════ */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .page.active .page-content > * {
    animation: fadeIn 0.25s ease both;
  }
  .page.active .page-content > *:nth-child(1) { animation-delay: 0.04s; }
  .page.active .page-content > *:nth-child(2) { animation-delay: 0.08s; }
  .page.active .page-content > *:nth-child(3) { animation-delay: 0.12s; }
  .page.active .page-content > *:nth-child(4) { animation-delay: 0.16s; }

  /* ── LOGIN → APP TRANSITION ── */
  @keyframes splashOut {
    0%   { opacity: 1; transform: scale(1); }
    40%  { opacity: 1; transform: scale(1.04); }
    100% { opacity: 0; transform: scale(0.92); }
  }
  @keyframes appIn {
    0%   { opacity: 0; transform: scale(1.06) translateY(12px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  #page-login.logging-in {
    animation: splashOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
    pointer-events: none;
  }
  #page-home.entering {
    animation: appIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  /* Loading dots on login button */
  @keyframes dotBounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
    40% { transform: translateY(-5px); opacity: 1; }
  }
  .loading-dots { display: flex; gap: 5px; align-items: center; justify-content: center; }
  .loading-dots span {
    width: 6px; height: 6px; border-radius: 50%;
    background: currentColor;
    animation: dotBounce 1s infinite;
  }
  .loading-dots span:nth-child(2) { animation-delay: 0.15s; }
  .loading-dots span:nth-child(3) { animation-delay: 0.3s; }

  /* Utility */
  .mt-4 { margin-top: 4px; }
  .mt-8 { margin-top: 8px; }
  .mt-12 { margin-top: 12px; }
  .text-sm { font-size: 12px; }
  .text-muted { color: var(--gray-400); }
  .flex { display: flex; }
  .items-center { align-items: center; }
  .gap-8 { gap: 8px; }
  .w-full { width: 100%; }
  .p-20 { padding: 0 20px; }

  /* Code preview in scripts */
  .code-preview {
    background: var(--gray-900);
    border-radius: var(--radius-sm);
    padding: 10px 12px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--blue-300);
    line-height: 1.6;
    margin-bottom: 12px;
    overflow: hidden;
    position: relative;
  }
  .code-preview::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 20px;
    background: linear-gradient(to bottom, transparent, var(--gray-900));
  }
  .code-keyword { color: #f472b6; }
  .code-string { color: #86efac; }
  .code-fn { color: #93c5fd; }
  .code-comment { color: #6b7280; }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 48px 24px;
    color: var(--gray-400);
  }
  .empty-state-icon { font-size: 48px; margin-bottom: 12px; }
  .empty-state-text { font-size: 15px; font-weight: 500; color: var(--gray-600); }
  .empty-state-sub { font-size: 13px; color: var(--gray-400); margin-top: 6px; line-height: 1.4; }
</style>
</head>
<body>

<div id="app">

  <!-- ══════════ LOGIN PAGE ══════════ -->
  <div id="page-login" class="page active" style="display:flex;">
    <div class="login-bg-orb login-bg-orb-1"></div>
    <div class="login-bg-orb login-bg-orb-2"></div>
    <div class="login-card">
      <div class="login-logo">
        <div class="login-logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <path d="M12 2v20M4 7l8 5 8-5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="login-logo-text">Polarix</span>
      </div>
      <button class="btn-google" onclick="loginWith('google')">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <div class="login-divider">
        <div class="login-divider-line"></div>
        <span>or</span>
        <div class="login-divider-line"></div>
      </div>
      <div class="input-group">
        <input type="email" class="input-field" placeholder="Email address">
      </div>
      <div class="input-group">
        <input type="password" class="input-field" placeholder="Password">
      </div>
      <button class="btn-primary" onclick="loginWith('email')">Sign in</button>
      <div class="login-footer">
        Don't have an account? <a href="#">Create one</a>
      </div>
    </div>
  </div>

  <!-- ══════════ HOME PAGE ══════════ -->
  <div id="page-home" class="page">
    <div class="page-content">
      <div class="home-hero">
        <div class="home-hero-orb"></div>
        <div class="home-greeting">Good morning 👋</div>
        <div class="home-username">Alex Rivera</div>
        <div class="home-stats">
          <div class="home-stat">
            <div class="home-stat-val">4</div>
            <div class="home-stat-label">Drives</div>
          </div>
          <div class="home-stat">
            <div class="home-stat-val">12</div>
            <div class="home-stat-label">Tables</div>
          </div>
          <div class="home-stat">
            <div class="home-stat-val">7</div>
            <div class="home-stat-label">Scripts</div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-title">Connected Drives</div>
        <button class="section-link" onclick="navigate('add-drive')">+ Add</button>
      </div>
      <div class="drives-scroll">
        <div class="drive-card" onclick="showToast('Opening Google Drive…')">
          <div class="drive-icon" style="background:#e8f0fe;">☁️</div>
          <div class="drive-name">Google Drive</div>
          <div class="drive-used">8.4 / 15 GB</div>
          <div class="drive-bar"><div class="drive-bar-fill" style="width:56%"></div></div>
        </div>
        <div class="drive-card" onclick="showToast('Opening Dropbox…')">
          <div class="drive-icon" style="background:#e8f4fd;">📦</div>
          <div class="drive-name">Dropbox</div>
          <div class="drive-used">2.1 / 5 GB</div>
          <div class="drive-bar"><div class="drive-bar-fill" style="width:42%"></div></div>
        </div>
        <div class="drive-card" onclick="showToast('Opening OneDrive…')">
          <div class="drive-icon" style="background:#e9f0fe;">🔷</div>
          <div class="drive-name">OneDrive</div>
          <div class="drive-used">14.8 / 15 GB</div>
          <div class="drive-bar"><div class="drive-bar-fill" style="width:98%; background: linear-gradient(90deg, #f59e0b, #ef4444);"></div></div>
        </div>
        <div class="drive-card" onclick="showToast('Opening S3 Bucket…')">
          <div class="drive-icon" style="background:#fff7ed;">🗄️</div>
          <div class="drive-name">S3 Bucket</div>
          <div class="drive-used">32 / 100 GB</div>
          <div class="drive-bar"><div class="drive-bar-fill" style="width:32%"></div></div>
        </div>
        <div class="drive-add-card" onclick="navigate('add-drive')">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6ef7" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>Add Drive</span>
        </div>
      </div>

      <div class="section-header">
        <div class="section-title">Recent Activity</div>
        <button class="section-link" onclick="navigate('tables')">View all</button>
      </div>
      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-icon" style="background:#e8f0fe; font-size:18px;">📄</div>
          <div class="activity-info">
            <div class="activity-name">Q3_Report_Final.pdf</div>
            <div class="activity-meta">Added to → Reports Table</div>
          </div>
          <div class="activity-time">2m ago</div>
        </div>
        <div class="activity-item">
          <div class="activity-icon" style="background:#ecfdf5; font-size:18px;">⚡</div>
          <div class="activity-info">
            <div class="activity-name">Auto-Tag Script ran</div>
            <div class="activity-meta">12 files processed</div>
          </div>
          <div class="activity-time">1h ago</div>
        </div>
        <div class="activity-item">
          <div class="activity-icon" style="background:#fff7ed; font-size:18px;">🖼️</div>
          <div class="activity-info">
            <div class="activity-name">brand_assets_v2.zip</div>
            <div class="activity-meta">Added to → Media Table</div>
          </div>
          <div class="activity-time">3h ago</div>
        </div>
        <div class="activity-item">
          <div class="activity-icon" style="background:#f5f3ff; font-size:18px;">📊</div>
          <div class="activity-info">
            <div class="activity-name">analytics_data.csv</div>
            <div class="activity-meta">Added to → Research Table</div>
          </div>
          <div class="activity-time">Yesterday</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════ TABLES PAGE ══════════ -->
  <div id="page-tables" class="page">
    <div class="header">
      <div class="header-title">Tables</div>
      <button class="header-action" onclick="showToast('New table created!')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
    <div class="page-content">
      <div class="search-bar">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search tables…">
      </div>
      <div class="tables-list">
        <div class="table-card" onclick="navigate('table-detail')">
          <div class="table-card-icon" style="background:#e8f0fe;">📁</div>
          <div class="table-card-name">Project Documents</div>
          <div class="table-card-desc">All project-related files, proposals, and reports organized by client.</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">Google Drive</span>
            <span class="table-tag table-tag-green">Active</span>
            <span class="table-card-rows">48 rows</span>
          </div>
        </div>
        <div class="table-card" onclick="navigate('table-detail')">
          <div class="table-card-icon" style="background:#ecfdf5;">🖼️</div>
          <div class="table-card-name">Media Archive</div>
          <div class="table-card-desc">Brand assets, photos, videos, and design files.</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">Dropbox</span>
            <span class="table-tag table-tag-green">Active</span>
            <span class="table-card-rows">132 rows</span>
          </div>
        </div>
        <div class="table-card" onclick="navigate('table-detail')">
          <div class="table-card-icon" style="background:#fff7ed;">📊</div>
          <div class="table-card-name">Research Data</div>
          <div class="table-card-desc">CSV exports, datasets, and analysis notebooks.</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">S3 Bucket</span>
            <span class="table-tag table-tag-amber">Syncing</span>
            <span class="table-card-rows">27 rows</span>
          </div>
        </div>
        <div class="table-card" onclick="navigate('table-detail')">
          <div class="table-card-icon" style="background:#f5f3ff;">📬</div>
          <div class="table-card-name">Email Attachments</div>
          <div class="table-card-desc">Auto-captured attachments from Gmail, sorted by sender.</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">OneDrive</span>
            <span class="table-tag table-tag-green">Active</span>
            <span class="table-card-rows">89 rows</span>
          </div>
        </div>
        <div class="table-card" onclick="navigate('table-detail')">
          <div class="table-card-icon" style="background:#fef2f2;">🔒</div>
          <div class="table-card-name">Private Vault</div>
          <div class="table-card-desc">Encrypted documents, contracts, and legal files.</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">Google Drive</span>
            <span class="table-tag" style="background:#fef2f2;color:#b91c1c;">Locked</span>
            <span class="table-card-rows">14 rows</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════ TABLE DETAIL PAGE ══════════ -->
  <div id="page-table-detail" class="page">
    <div class="header">
      <button class="header-back" onclick="navigate('tables')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="header-title">Project Documents</div>
      <button class="header-action" onclick="navigate('add-row')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
    <div class="detail-header-info">
      <div class="detail-meta">
        <div class="detail-meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          48 rows
        </div>
        <div class="detail-meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/></svg>
          Google Drive
        </div>
        <div class="detail-meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Updated 2m ago
        </div>
      </div>
    </div>
    <div class="filter-bar">
      <div class="filter-chip active">All</div>
      <div class="filter-chip">Active</div>
      <div class="filter-chip">Pending</div>
      <div class="filter-chip">Archived</div>
      <div class="filter-chip">PDF</div>
      <div class="filter-chip">Spreadsheet</div>
    </div>
    <div style="flex:1; overflow-y:auto; padding-bottom: calc(var(--nav-h) + 16px);">
      <div class="rows-list">
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-thumb">📄</div>
            <div class="row-title">Q3 Report Final</div>
            <span class="row-badge badge-active">Active</span>
          </div>
          <div class="row-fields">
            <div class="row-field"><div class="row-field-label">Type</div><div class="row-field-val">PDF</div></div>
            <div class="row-field"><div class="row-field-label">Size</div><div class="row-field-val">4.2 MB</div></div>
            <div class="row-field"><div class="row-field-label">Client</div><div class="row-field-val">Acme Corp</div></div>
            <div class="row-field"><div class="row-field-label">Added</div><div class="row-field-val">Today</div></div>
          </div>
        </div>
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-thumb">📊</div>
            <div class="row-title">Budget Breakdown 2024</div>
            <span class="row-badge badge-active">Active</span>
          </div>
          <div class="row-fields">
            <div class="row-field"><div class="row-field-label">Type</div><div class="row-field-val">XLSX</div></div>
            <div class="row-field"><div class="row-field-label">Size</div><div class="row-field-val">1.8 MB</div></div>
            <div class="row-field"><div class="row-field-label">Client</div><div class="row-field-val">Globex</div></div>
            <div class="row-field"><div class="row-field-label">Added</div><div class="row-field-val">3 days ago</div></div>
          </div>
        </div>
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-thumb">📋</div>
            <div class="row-title">Contract v2 – Initech</div>
            <span class="row-badge badge-pending">Pending</span>
          </div>
          <div class="row-fields">
            <div class="row-field"><div class="row-field-label">Type</div><div class="row-field-val">DOCX</div></div>
            <div class="row-field"><div class="row-field-label">Size</div><div class="row-field-val">820 KB</div></div>
            <div class="row-field"><div class="row-field-label">Client</div><div class="row-field-val">Initech</div></div>
            <div class="row-field"><div class="row-field-label">Added</div><div class="row-field-val">1 week ago</div></div>
          </div>
        </div>
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-thumb">🗺️</div>
            <div class="row-title">Roadmap Slides Q4</div>
            <span class="row-badge badge-active">Active</span>
          </div>
          <div class="row-fields">
            <div class="row-field"><div class="row-field-label">Type</div><div class="row-field-val">PPTX</div></div>
            <div class="row-field"><div class="row-field-label">Size</div><div class="row-field-val">12.4 MB</div></div>
            <div class="row-field"><div class="row-field-label">Client</div><div class="row-field-val">Internal</div></div>
            <div class="row-field"><div class="row-field-label">Added</div><div class="row-field-val">2 weeks ago</div></div>
          </div>
        </div>
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-thumb">📦</div>
            <div class="row-title">Vendor Proposal 2023</div>
            <span class="row-badge badge-archived">Archived</span>
          </div>
          <div class="row-fields">
            <div class="row-field"><div class="row-field-label">Type</div><div class="row-field-val">PDF</div></div>
            <div class="row-field"><div class="row-field-label">Size</div><div class="row-field-val">6.1 MB</div></div>
            <div class="row-field"><div class="row-field-label">Client</div><div class="row-field-val">TechVend</div></div>
            <div class="row-field"><div class="row-field-label">Added</div><div class="row-field-val">3 months ago</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════ ADD ROW PAGE ══════════ -->
  <div id="page-add-row" class="page">
    <div class="header">
      <button class="header-back" onclick="navigate('table-detail')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="header-title">Add Row</div>
    </div>
    <div class="page-content">
      <div class="form-body">
        <div class="form-group">
          <label class="form-label">Table</label>
          <select class="form-select">
            <option>Project Documents</option>
            <option>Media Archive</option>
            <option>Research Data</option>
            <option>Email Attachments</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">File Name</label>
          <input type="text" class="form-input" placeholder="e.g. Q3_Report_Final.pdf">
        </div>
        <div class="form-group">
          <label class="form-label">Drive</label>
          <select class="form-select">
            <option>Google Drive</option>
            <option>Dropbox</option>
            <option>OneDrive</option>
            <option>S3 Bucket</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Client / Tag</label>
          <input type="text" class="form-input" placeholder="e.g. Acme Corp">
        </div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-select">
            <option>Active</option>
            <option>Pending</option>
            <option>Archived</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea class="form-input" rows="3" placeholder="Optional notes…" style="resize:none; line-height:1.5;"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Upload File</label>
          <div class="upload-zone" onclick="showToast('File picker opened')">
            <div class="upload-zone-icon">📎</div>
            <div class="upload-zone-text">Tap to upload</div>
            <div class="upload-zone-sub">PDF, DOCX, XLSX, images…</div>
          </div>
        </div>
        <button class="btn-submit" onclick="addRowSubmit()">Add Row →</button>
      </div>
    </div>
  </div>

  <!-- ══════════ SCRIPTS PAGE ══════════ -->
  <div id="page-scripts" class="page">
    <div class="header">
      <div class="header-title">Scripts</div>
      <button class="header-action" onclick="showToast('New script editor opened')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
    <div class="page-content">
      <div class="search-bar">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search scripts…">
      </div>
      <div class="scripts-list">
        <div class="script-card">
          <div class="script-card-header">
            <div class="script-icon" style="background:#ecfdf5;">⚡</div>
            <div>
              <div class="script-name">Auto-Tag Files</div>
              <div class="script-trigger">trigger: on_upload</div>
            </div>
            <div class="script-toggle" style="margin-left:auto;">
              <div class="toggle on" onclick="toggleScript(this)"></div>
            </div>
          </div>
          <div class="code-preview">
            <span class="code-comment"># Runs on every upload</span><br>
            <span class="code-keyword">def</span> <span class="code-fn">auto_tag</span>(file):<br>
            &nbsp;&nbsp;tags = <span class="code-fn">detect_tags</span>(file)<br>
            &nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-fn">apply</span>(file, tags)
          </div>
          <div class="script-footer">
            <div class="script-status">
              <div class="status-dot status-dot-green"></div>
              <span class="status-active">Active · ran 1h ago</span>
            </div>
            <button class="script-run-btn" onclick="showToast('Script running…')">▶ Run</button>
          </div>
        </div>

        <div class="script-card">
          <div class="script-card-header">
            <div class="script-icon" style="background:#eff6ff;">📧</div>
            <div>
              <div class="script-name">Email Attachment Sync</div>
              <div class="script-trigger">trigger: cron 0 9 * * *</div>
            </div>
            <div class="script-toggle" style="margin-left:auto;">
              <div class="toggle on" onclick="toggleScript(this)"></div>
            </div>
          </div>
          <div class="code-preview">
            <span class="code-comment"># Daily at 9AM</span><br>
            <span class="code-keyword">for</span> mail <span class="code-keyword">in</span> <span class="code-fn">fetch_unread</span>():<br>
            &nbsp;&nbsp;<span class="code-fn">extract_attachments</span>(mail)<br>
            &nbsp;&nbsp;<span class="code-fn">save_to_table</span>(<span class="code-string">"Email"</span>)
          </div>
          <div class="script-footer">
            <div class="script-status">
              <div class="status-dot status-dot-green"></div>
              <span class="status-active">Active · ran 3h ago</span>
            </div>
            <button class="script-run-btn" onclick="showToast('Script running…')">▶ Run</button>
          </div>
        </div>

        <div class="script-card">
          <div class="script-card-header">
            <div class="script-icon" style="background:#fef9c3;">🗃️</div>
            <div>
              <div class="script-name">Archive Old Files</div>
              <div class="script-trigger">trigger: cron 0 0 1 * *</div>
            </div>
            <div class="script-toggle" style="margin-left:auto;">
              <div class="toggle" onclick="toggleScript(this)"></div>
            </div>
          </div>
          <div class="code-preview">
            <span class="code-comment"># Monthly cleanup</span><br>
            files = <span class="code-fn">query</span>(<span class="code-string">"age > 90d"</span>)<br>
            <span class="code-keyword">for</span> f <span class="code-keyword">in</span> files:<br>
            &nbsp;&nbsp;<span class="code-fn">move_to_archive</span>(f)
          </div>
          <div class="script-footer">
            <div class="script-status">
              <div class="status-dot status-dot-gray"></div>
              <span class="status-inactive">Inactive</span>
            </div>
            <button class="script-run-btn" onclick="showToast('Script running…')">▶ Run</button>
          </div>
        </div>

        <div class="script-card">
          <div class="script-card-header">
            <div class="script-icon" style="background:#fdf4ff;">🔔</div>
            <div>
              <div class="script-name">Storage Alert</div>
              <div class="script-trigger">trigger: on_threshold (90%)</div>
            </div>
            <div class="script-toggle" style="margin-left:auto;">
              <div class="toggle on" onclick="toggleScript(this)"></div>
            </div>
          </div>
          <div class="code-preview">
            <span class="code-keyword">if</span> <span class="code-fn">usage</span>() &gt; <span class="code-string">0.9</span>:<br>
            &nbsp;&nbsp;<span class="code-fn">notify</span>(<span class="code-string">"Storage almost full"</span>)<br>
            &nbsp;&nbsp;<span class="code-fn">suggest_cleanup</span>()
          </div>
          <div class="script-footer">
            <div class="script-status">
              <div class="status-dot status-dot-green"></div>
              <span class="status-active">Active · watching</span>
            </div>
            <button class="script-run-btn" onclick="showToast('Script running…')">▶ Run</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════ PROFILE PAGE ══════════ -->
  <div id="page-profile" class="page">
    <div class="profile-hero">
      <div class="profile-hero-orb"></div>
      <div class="profile-avatar">👤</div>
      <div class="profile-name">Alex Rivera</div>
      <div class="profile-email">alex.rivera@example.com</div>
    </div>
    <div class="profile-content">
      <div class="profile-section" style="margin-top: 0;">
        <div class="profile-section-title">Account</div>
        <div class="profile-item" onclick="showToast('Edit profile')">
          <div class="profile-item-icon" style="background:#e8f0fe;">👤</div>
          <div class="profile-item-label">Edit Profile</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profile-item" onclick="showToast('Security settings')">
          <div class="profile-item-icon" style="background:#ecfdf5;">🔒</div>
          <div class="profile-item-label">Security</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profile-item" onclick="showToast('Notification settings')">
          <div class="profile-item-icon" style="background:#fff7ed;">🔔</div>
          <div class="profile-item-label">Notifications</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
      <div class="profile-section">
        <div class="profile-section-title">Storage</div>
        <div class="profile-item">
          <div class="profile-item-icon" style="background:#f5f3ff;">☁️</div>
          <div class="profile-item-label">Total Used</div>
          <div class="profile-item-val">57.3 GB</div>
        </div>
        <div class="profile-item" onclick="showToast('Upgrade plan')">
          <div class="profile-item-icon" style="background:#eff6ff;">⭐</div>
          <div class="profile-item-label">Plan</div>
          <div class="profile-item-val">Free</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profile-item" onclick="navigate('add-drive')">
          <div class="profile-item-icon" style="background:#ecfdf5;">🔗</div>
          <div class="profile-item-label">Connected Drives</div>
          <div class="profile-item-val">4</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
      <div class="profile-section">
        <div class="profile-section-title">Support</div>
        <div class="profile-item" onclick="showToast('Opening help center')">
          <div class="profile-item-icon" style="background:#fef9c3;">❓</div>
          <div class="profile-item-label">Help Center</div>
          <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profile-item" onclick="showToast('Polarix v1.2.0')">
          <div class="profile-item-icon" style="background:#f1f5f9;">ℹ️</div>
          <div class="profile-item-label">App Version</div>
          <div class="profile-item-val">v1.2.0</div>
        </div>
      </div>
      <button class="profile-logout" onclick="logout()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Sign Out
      </button>
    </div>
  </div>

  <!-- ══════════ ADD DRIVE PAGE ══════════ -->
  <div id="page-add-drive" class="page">
    <div class="header">
      <button class="header-back" onclick="navigate('home')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="header-title">Add Drive</div>
    </div>
    <div class="page-content">
      <div style="padding: 16px 20px 4px;">
        <div style="font-size:13px; color:var(--gray-500); line-height:1.5;">Choose a cloud storage provider to connect to your Polarix account.</div>
      </div>
      <div class="drive-options" id="drive-options">
        <div class="drive-option selected" onclick="selectDrive(this)">
          <div class="drive-option-icon" style="background:#e8f0fe;">☁️</div>
          <div class="drive-option-info">
            <div class="drive-option-name">Google Drive</div>
            <div class="drive-option-desc">Connect via OAuth 2.0</div>
          </div>
          <div class="drive-option-check">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div class="drive-option" onclick="selectDrive(this)">
          <div class="drive-option-icon" style="background:#e8f4fd;">📦</div>
          <div class="drive-option-info">
            <div class="drive-option-name">Dropbox</div>
            <div class="drive-option-desc">Connect via Dropbox API</div>
          </div>
          <div class="drive-option-check"></div>
        </div>
        <div class="drive-option" onclick="selectDrive(this)">
          <div class="drive-option-icon" style="background:#e9f0fe;">🔷</div>
          <div class="drive-option-info">
            <div class="drive-option-name">Microsoft OneDrive</div>
            <div class="drive-option-desc">Connect via Microsoft SSO</div>
          </div>
          <div class="drive-option-check"></div>
        </div>
        <div class="drive-option" onclick="selectDrive(this)">
          <div class="drive-option-icon" style="background:#fff7ed;">🗄️</div>
          <div class="drive-option-info">
            <div class="drive-option-name">AWS S3</div>
            <div class="drive-option-desc">Use access key + secret</div>
          </div>
          <div class="drive-option-check"></div>
        </div>
        <div class="drive-option" onclick="selectDrive(this)">
          <div class="drive-option-icon" style="background:#f0fdf4;">📂</div>
          <div class="drive-option-info">
            <div class="drive-option-name">FTP / SFTP</div>
            <div class="drive-option-desc">Manual server credentials</div>
          </div>
          <div class="drive-option-check"></div>
        </div>
      </div>
      <div class="connect-form">
        <div class="form-group">
          <label class="form-label">Drive Label (optional)</label>
          <input type="text" class="form-input" placeholder="e.g. Work Drive, Personal…">
        </div>
        <button class="btn-submit" onclick="connectDrive()">Connect Drive →</button>
      </div>
    </div>
  </div>

  <!-- ══════════ BOTTOM NAV ══════════ -->
  <nav id="bottom-nav">
    <button class="nav-item active" onclick="navigate('home')" id="nav-home">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span>Home</span>
    </button>
    <button class="nav-item" onclick="navigate('tables')" id="nav-tables">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
      <span>Tables</span>
    </button>
    <button class="nav-add" onclick="navigate('add-row')">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <button class="nav-item" onclick="navigate('scripts')" id="nav-scripts">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      <span>Scripts</span>
    </button>
    <button class="nav-item" onclick="navigate('profile')" id="nav-profile">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>Profile</span>
    </button>
  </nav>

</div>

<!-- TOAST -->
<div id="toast"></div>

<script>
  const pages = ['home','tables','table-detail','add-row','scripts','profile','add-drive'];
  const navMap = { home:'nav-home', tables:'nav-tables', scripts:'nav-scripts', profile:'nav-profile' };
  let currentPage = 'login';

  function navigate(to) {
    // hide all
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // show target
    const el = document.getElementById('page-' + to);
    if (el) el.classList.add('active');

    // show/hide nav
    const nav = document.getElementById('bottom-nav');
    const noNav = ['login','add-drive','add-row','table-detail'];
    nav.style.display = noNav.includes(to) ? 'none' : 'flex';

    // update nav active state
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (navMap[to]) {
      document.getElementById(navMap[to])?.classList.add('active');
    }

    currentPage = to;
  }

  function loginWith(method) {
    // Show loading state on button
    const btns = document.querySelectorAll('.btn-google, .btn-primary');
    btns.forEach(b => {
      b.disabled = true;
      b._orig = b.innerHTML;
      b.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    });

    setTimeout(() => {
      const loginPage = document.getElementById('page-login');
      const homePage  = document.getElementById('page-home');

      // Pre-show home page below login
      homePage.classList.add('active');
      homePage.style.position = 'absolute';
      homePage.style.inset = '0';
      homePage.style.zIndex = '0';

      // Animate login out
      loginPage.classList.add('logging-in');
      loginPage.style.zIndex = '1';
      loginPage.style.position = 'absolute';
      loginPage.style.inset = '0';

      setTimeout(() => {
        // Proper navigate after animation
        loginPage.classList.remove('active', 'logging-in');
        loginPage.style = '';
        homePage.style = '';
        homePage.classList.add('entering');

        // Show nav
        const nav = document.getElementById('bottom-nav');
        nav.style.display = 'flex';
        document.getElementById('nav-home')?.classList.add('active');

        currentPage = 'home';

        // Clean up entering class
        setTimeout(() => homePage.classList.remove('entering'), 500);

        btns.forEach(b => {
          b.disabled = false;
          b.innerHTML = b._orig;
        });
      }, 480);
    }, 900);
  }

  function logout() {
    const loginPage = document.getElementById('page-login');
    navigate('login');
    loginPage.style.animation = 'appIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both';
    setTimeout(() => loginPage.style.animation = '', 400);
  }

  function addRowSubmit() {
    showToast('Row added successfully! ✓');
    setTimeout(() => navigate('table-detail'), 600);
  }

  function connectDrive() {
    showToast('Drive connected successfully! ✓');
    setTimeout(() => navigate('home'), 600);
  }

  function selectDrive(el) {
    document.querySelectorAll('.drive-option').forEach(o => {
      o.classList.remove('selected');
      const check = o.querySelector('.drive-option-check');
      check.innerHTML = '';
    });
    el.classList.add('selected');
    el.querySelector('.drive-option-check').innerHTML =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>';
  }

  function toggleScript(el) {
    el.classList.toggle('on');
    const isOn = el.classList.contains('on');
    showToast(isOn ? 'Script enabled' : 'Script disabled');
  }

  function filterChip(el) {
    el.closest('.filter-bar').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }

  // filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => filterChip(chip));
  });

  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // Scroll reveal for rows list
  document.querySelectorAll('.row-card, .table-card, .script-card, .activity-item').forEach((el, i) => {
    el.style.animationDelay = (i * 0.05) + 's';
  });
</script>
</body>
</html>