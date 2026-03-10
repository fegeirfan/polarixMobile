<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Polarix Admin</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  /* Dark base */
  --bg:        #0b0e14;
  --bg-2:      #10141d;
  --bg-3:      #161c28;
  --bg-4:      #1c2333;
  --border:    rgba(255,255,255,0.07);
  --border-2:  rgba(255,255,255,0.12);

  /* Brand */
  --blue-400:  #2e6ef7;
  --blue-500:  #1a52cc;
  --blue-300:  #5d91ff;
  --blue-100:  rgba(46,110,247,0.12);
  --blue-glow: rgba(46,110,247,0.25);
  --accent:    #38bdf8;
  --accent-dim:rgba(56,189,248,0.12);

  /* Status */
  --green:     #10b981;
  --green-dim: rgba(16,185,129,0.12);
  --amber:     #f59e0b;
  --amber-dim: rgba(245,158,11,0.12);
  --red:       #ef4444;
  --red-dim:   rgba(239,68,68,0.12);
  --purple:    #8b5cf6;
  --purple-dim:rgba(139,92,246,0.12);

  /* Text */
  --t1: #f0f4ff;
  --t2: #8892a4;
  --t3: #4a5568;

  /* Fonts */
  --f-main: 'DM Sans', sans-serif;
  --f-mono: 'DM Mono', monospace;

  /* Layout */
  --sidebar-w: 228px;
  --header-h:  56px;

  /* Radius */
  --r-sm: 6px;
  --r-md: 10px;
  --r-lg: 14px;
  --r-xl: 18px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  height: 100%;
  font-family: var(--f-main);
  background: var(--bg);
  color: var(--t1);
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  overflow: hidden;
}

/* ═══════════════════════════════════
   LAYOUT SHELL
═══════════════════════════════════ */
#shell {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* ═══════════════════════════════════
   SIDEBAR
═══════════════════════════════════ */
#sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  background: var(--bg-2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.sidebar-glow {
  position: absolute;
  width: 180px; height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(46,110,247,0.12), transparent 70%);
  top: -40px; left: -40px;
  pointer-events: none;
}

/* Logo */
.sidebar-logo {
  height: var(--header-h);
  display: flex; align-items: center; gap: 10px;
  padding: 0 18px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.sidebar-logo-icon {
  width: 30px; height: 30px;
  background: linear-gradient(135deg, var(--blue-300), var(--accent));
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.sidebar-logo-text {
  font-size: 16px; font-weight: 700;
  color: var(--t1); letter-spacing: -0.3px;
}
.sidebar-logo-badge {
  font-size: 9px; font-weight: 700;
  background: var(--blue-100);
  color: var(--blue-300);
  padding: 2px 7px; border-radius: 99px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-left: auto;
}

/* Nav */
.sidebar-nav {
  flex: 1;
  padding: 12px 10px;
  overflow-y: auto;
  display: flex; flex-direction: column; gap: 2px;
}
.sidebar-nav::-webkit-scrollbar { display: none; }

.nav-section-label {
  font-size: 10px; font-weight: 600;
  color: var(--t3);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 8px 4px;
  margin-top: 6px;
}

.nav-link {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 10px;
  border-radius: var(--r-md);
  cursor: pointer;
  transition: all 0.15s;
  color: var(--t2);
  border: none; background: none;
  width: 100%; text-align: left;
  font-family: var(--f-main);
  font-size: 13.5px;
  font-weight: 500;
  position: relative;
}
.nav-link:hover { background: var(--bg-3); color: var(--t1); }
.nav-link.active {
  background: var(--blue-100);
  color: var(--blue-300);
}
.nav-link.active svg { stroke: var(--blue-300); }
.nav-link:not(.active) svg { stroke: var(--t2); }
.nav-link svg { flex-shrink: 0; transition: stroke 0.15s; }
.nav-badge {
  margin-left: auto;
  font-size: 10px; font-weight: 700;
  padding: 2px 6px; border-radius: 99px;
  background: var(--red-dim);
  color: var(--red);
  font-family: var(--f-mono);
}
.nav-badge.green { background: var(--green-dim); color: var(--green); }
.nav-badge.amber { background: var(--amber-dim); color: var(--amber); }

/* Sidebar footer */
.sidebar-footer {
  padding: 12px 10px;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}
.sidebar-user {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 10px;
  border-radius: var(--r-md);
  cursor: pointer;
  transition: background 0.15s;
}
.sidebar-user:hover { background: var(--bg-3); }
.sidebar-user-av {
  width: 32px; height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--blue-400), var(--purple));
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.sidebar-user-info { flex: 1; min-width: 0; }
.sidebar-user-name { font-size: 13px; font-weight: 600; color: var(--t1); }
.sidebar-user-role { font-size: 11px; color: var(--t3); }

/* ═══════════════════════════════════
   MAIN AREA
═══════════════════════════════════ */
#main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
}

/* Top header */
#topbar {
  height: var(--header-h);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 12px;
  padding: 0 24px;
  flex-shrink: 0;
}
.topbar-title {
  font-size: 15px; font-weight: 700;
  color: var(--t1); letter-spacing: -0.2px;
  flex: 1;
}
.topbar-search {
  display: flex; align-items: center; gap: 8px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 7px 12px;
  width: 220px;
  transition: border-color 0.15s;
}
.topbar-search:focus-within { border-color: var(--blue-400); }
.topbar-search svg { stroke: var(--t3); flex-shrink: 0; }
.topbar-search input {
  background: none; border: none; outline: none;
  font-family: var(--f-main); font-size: 13px;
  color: var(--t1); width: 100%;
}
.topbar-search input::placeholder { color: var(--t3); }
.topbar-btn {
  height: 34px;
  display: flex; align-items: center; gap: 7px;
  padding: 0 14px;
  border-radius: var(--r-md);
  border: 1px solid var(--border);
  background: var(--bg-3);
  color: var(--t2);
  font-family: var(--f-main); font-size: 13px; font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.topbar-btn:hover { border-color: var(--border-2); color: var(--t1); }
.topbar-btn.primary {
  background: var(--blue-400);
  border-color: transparent;
  color: #fff;
}
.topbar-btn.primary:hover { background: var(--blue-500); }
.topbar-notif {
  width: 34px; height: 34px;
  border-radius: var(--r-md);
  border: 1px solid var(--border);
  background: var(--bg-3);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.15s;
}
.topbar-notif:hover { border-color: var(--border-2); }
.topbar-notif svg { stroke: var(--t2); }
.notif-dot {
  position: absolute; top: 7px; right: 7px;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--red);
  border: 1.5px solid var(--bg);
}

/* ═══════════════════════════════════
   PAGE CONTENT
═══════════════════════════════════ */
#content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}
#content::-webkit-scrollbar { width: 4px; }
#content::-webkit-scrollbar-track { background: transparent; }
#content::-webkit-scrollbar-thumb { background: var(--bg-4); border-radius: 99px; }

.page { display: none; }
.page.active { display: block; }

/* ═══════════════════════════════════
   CARDS & GRIDS
═══════════════════════════════════ */
.card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 20px;
}
.card-sm { padding: 16px; }

.grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 20px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
.grid-3-1 { display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-bottom: 20px; }

/* Stat card */
.stat-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s;
}
.stat-card:hover { border-color: var(--border-2); }
.stat-card-accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
}
.stat-icon {
  width: 38px; height: 38px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
.stat-val {
  font-size: 26px; font-weight: 700;
  letter-spacing: -0.8px; color: var(--t1);
  font-family: var(--f-mono);
  margin-bottom: 4px;
}
.stat-label { font-size: 12px; color: var(--t2); font-weight: 500; }
.stat-delta {
  font-size: 11px; font-weight: 600;
  margin-top: 8px;
  display: flex; align-items: center; gap: 4px;
}
.delta-up { color: var(--green); }
.delta-down { color: var(--red); }

/* ═══════════════════════════════════
   TABLE
═══════════════════════════════════ */
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th {
  text-align: left;
  font-size: 11px; font-weight: 600;
  color: var(--t3);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
}
.data-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
  color: var(--t2);
  vertical-align: middle;
}
.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: var(--bg-3); }
.data-table td .cell-primary { color: var(--t1); font-weight: 500; }
.data-table td .cell-mono { font-family: var(--f-mono); font-size: 12px; }

/* Badges */
.badge {
  display: inline-flex; align-items: center;
  font-size: 11px; font-weight: 600;
  padding: 3px 8px; border-radius: 99px;
}
.badge-green { background: var(--green-dim); color: var(--green); }
.badge-amber { background: var(--amber-dim); color: var(--amber); }
.badge-red   { background: var(--red-dim);   color: var(--red); }
.badge-blue  { background: var(--blue-100);  color: var(--blue-300); }
.badge-purple{ background: var(--purple-dim);color: var(--purple); }
.badge-gray  { background: var(--bg-4);      color: var(--t2); }

/* Avatar */
.av {
  width: 30px; height: 30px; border-radius: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700;
  flex-shrink: 0;
}
.av-row { display: flex; align-items: center; gap: 10px; }

/* Icon btn */
.icon-btn {
  width: 28px; height: 28px;
  border-radius: 7px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--t2);
  display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}
.icon-btn:hover { background: var(--bg-3); border-color: var(--border-2); color: var(--t1); }
.icon-btn svg { stroke: currentColor; }

/* Section header */
.sec-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 14px;
}
.sec-title {
  font-size: 14px; font-weight: 700;
  color: var(--t1); letter-spacing: -0.2px;
}
.sec-link {
  font-size: 12px; color: var(--blue-300);
  cursor: pointer; background: none; border: none;
  font-family: var(--f-main); font-weight: 500;
}
.sec-link:hover { text-decoration: underline; }

/* Progress bar */
.prog-bar {
  height: 5px; border-radius: 99px;
  background: var(--bg-4);
  overflow: hidden; margin-top: 6px;
}
.prog-fill {
  height: 100%; border-radius: 99px;
}

/* Sparkline (CSS only) */
.spark {
  display: flex; align-items: flex-end; gap: 3px;
  height: 28px;
}
.spark-bar {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: var(--blue-400);
  opacity: 0.35;
  transition: opacity 0.15s;
  min-width: 4px;
}
.spark-bar:last-child { opacity: 1; }

/* Tabs */
.tabs {
  display: flex; gap: 2px;
  background: var(--bg-3);
  border-radius: var(--r-md);
  padding: 3px;
}
.tab-btn {
  padding: 6px 14px;
  border-radius: 8px;
  border: none; background: none;
  font-family: var(--f-main); font-size: 12.5px; font-weight: 500;
  color: var(--t2);
  cursor: pointer;
  transition: all 0.15s;
}
.tab-btn.active {
  background: var(--bg-2);
  color: var(--t1);
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

/* Log/timeline item */
.log-item {
  display: flex; gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.log-item:last-child { border-bottom: none; }
.log-dot-wrap {
  display: flex; flex-direction: column; align-items: center;
  padding-top: 4px;
}
.log-dot {
  width: 8px; height: 8px; border-radius: 50%;
  flex-shrink: 0;
}
.log-line {
  flex: 1;
  width: 1px;
  background: var(--border);
  margin-top: 4px;
  min-height: 16px;
}
.log-body { flex: 1; }
.log-action { font-size: 13px; color: var(--t1); font-weight: 500; }
.log-detail { font-size: 12px; color: var(--t2); margin-top: 2px; }
.log-time { font-size: 11px; color: var(--t3); white-space: nowrap; font-family: var(--f-mono); }

/* Form elements */
.form-row { display: flex; gap: 12px; margin-bottom: 14px; }
.form-group { flex: 1; }
.form-label { font-size: 11px; font-weight: 600; color: var(--t3); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; display: block; }
.form-input {
  width: 100%; padding: 9px 12px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--t1);
  font-family: var(--f-main); font-size: 13px;
  outline: none; transition: border-color 0.15s;
}
.form-input:focus { border-color: var(--blue-400); }
.form-input::placeholder { color: var(--t3); }
.form-select {
  width: 100%; padding: 9px 12px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--t1);
  font-family: var(--f-main); font-size: 13px;
  outline: none; appearance: none; cursor: pointer;
}

/* Toggle switch */
.toggle-wrap { display: flex; align-items: center; gap: 10px; }
.toggle-sw {
  width: 38px; height: 22px;
  border-radius: 99px;
  background: var(--bg-4);
  border: none;
  position: relative; cursor: pointer;
  transition: background 0.2s; flex-shrink: 0;
}
.toggle-sw.on { background: var(--blue-400); }
.toggle-sw::after {
  content: '';
  position: absolute;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--t1);
  top: 3px; left: 3px;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.toggle-sw.on::after { transform: translateX(16px); }
.toggle-label { font-size: 13px; color: var(--t1); font-weight: 500; }
.toggle-sub { font-size: 11px; color: var(--t3); }

/* Permission grid */
.perm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.perm-card {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.perm-card:hover { border-color: var(--border-2); }
.perm-card.on { border-color: var(--blue-400); background: var(--blue-100); }
.perm-icon { font-size: 18px; margin-bottom: 6px; }
.perm-name { font-size: 12px; font-weight: 600; color: var(--t1); }
.perm-desc { font-size: 11px; color: var(--t3); margin-top: 2px; }

/* Gauge (donut) */
.donut-wrap { display: flex; align-items: center; gap: 16px; }
.donut { width: 80px; height: 80px; position: relative; flex-shrink: 0; }
.donut svg { transform: rotate(-90deg); }
.donut-track { fill: none; stroke: var(--bg-4); stroke-width: 8; }
.donut-fill { fill: none; stroke-width: 8; stroke-linecap: round; transition: stroke-dashoffset 0.8s; }
.donut-label {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.donut-val { font-size: 16px; font-weight: 700; font-family: var(--f-mono); color: var(--t1); }
.donut-unit { font-size: 9px; color: var(--t3); }

/* Notification bell badge */
.topbar-notif-count {
  position: absolute; top: -4px; right: -4px;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--red);
  font-size: 9px; font-weight: 700; color: #fff;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--bg);
}

/* Empty section gap */
.mb-20 { margin-bottom: 20px; }

/* Alert / notice */
.alert {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px 16px;
  border-radius: var(--r-md);
  margin-bottom: 16px;
}
.alert-red { background: var(--red-dim); border: 1px solid rgba(239,68,68,0.2); }
.alert-amber { background: var(--amber-dim); border: 1px solid rgba(245,158,11,0.2); }
.alert-blue { background: var(--blue-100); border: 1px solid rgba(46,110,247,0.2); }
.alert-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
.alert-body .alert-title { font-size: 13px; font-weight: 600; color: var(--t1); }
.alert-body .alert-text { font-size: 12px; color: var(--t2); margin-top: 2px; }

/* Tooltip tag */
.tag {
  display: inline-flex; align-items: center;
  font-size: 11px; font-weight: 500;
  background: var(--bg-4);
  color: var(--t2);
  border-radius: 5px;
  padding: 2px 7px;
  font-family: var(--f-mono);
}

/* Chart placeholder with bar simulation */
.bar-chart {
  display: flex; align-items: flex-end; gap: 6px;
  height: 120px; padding: 0 4px;
}
.bar-chart-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.bar-chart-bar {
  width: 100%; border-radius: 5px 5px 0 0;
  background: linear-gradient(180deg, var(--blue-400), var(--blue-500));
  transition: opacity 0.2s;
  min-height: 4px;
}
.bar-chart-bar:hover { opacity: 0.75; }
.bar-chart-bar.secondary { background: var(--bg-4); }
.bar-chart-label { font-size: 10px; color: var(--t3); font-family: var(--f-mono); }

/* Line chart (SVG-based) */
.chart-container { position: relative; height: 150px; }

/* ═══════════════════════════════════
   ANIMATIONS
═══════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page.active > * {
  animation: fadeUp 0.22s ease both;
}
.page.active > *:nth-child(1) { animation-delay: 0.02s; }
.page.active > *:nth-child(2) { animation-delay: 0.06s; }
.page.active > *:nth-child(3) { animation-delay: 0.10s; }
.page.active > *:nth-child(4) { animation-delay: 0.14s; }
.page.active > *:nth-child(5) { animation-delay: 0.18s; }

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}
.live-dot {
  display: inline-block;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s infinite;
  margin-right: 5px;
}

/* Modal overlay */
#modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: none;
  align-items: center; justify-content: center;
}
#modal-overlay.open { display: flex; }
.modal {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  width: 480px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  animation: fadeUp 0.2s ease;
}
.modal-header {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--border);
}
.modal-title { font-size: 15px; font-weight: 700; color: var(--t1); }
.modal-body { padding: 20px 24px; }
.modal-footer {
  display: flex; justify-content: flex-end; gap: 8px;
  padding: 16px 24px 20px;
  border-top: 1px solid var(--border);
}

/* Toast */
#toast {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--bg-4);
  border: 1px solid var(--border-2);
  color: var(--t1);
  padding: 10px 16px;
  border-radius: var(--r-md);
  font-size: 13px; font-weight: 500;
  z-index: 9999;
  display: flex; align-items: center; gap: 8px;
  opacity: 0; transform: translateY(8px);
  transition: all 0.2s;
  pointer-events: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
#toast.show { opacity: 1; transform: translateY(0); }
</style>
</head>
<body>

<div id="shell">

  <!-- ═══════════ SIDEBAR ═══════════ -->
  <aside id="sidebar">
    <div class="sidebar-glow"></div>

    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
          <path d="M12 2v20M4 7l8 5 8-5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="sidebar-logo-text">Polarix</span>
      <span class="sidebar-logo-badge">Admin</span>
    </div>

    <nav class="sidebar-nav">
      <span class="nav-section-label">Overview</span>
      <button class="nav-link active" onclick="goTo('dashboard', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
        Dashboard
      </button>
      <button class="nav-link" onclick="goTo('analytics', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Analytics
      </button>

      <span class="nav-section-label">Management</span>
      <button class="nav-link" onclick="goTo('users', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Users
        <span class="nav-badge">3</span>
      </button>
      <button class="nav-link" onclick="goTo('drives', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>
        Drives
      </button>
      <button class="nav-link" onclick="goTo('tables', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
        Tables
      </button>
      <button class="nav-link" onclick="goTo('scripts', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        Scripts
        <span class="nav-badge amber">1</span>
      </button>

      <span class="nav-section-label">System</span>
      <button class="nav-link" onclick="goTo('audit', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Audit Log
      </button>
      <button class="nav-link" onclick="goTo('settings', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07m14.14 0A10 10 0 0 0 4.93 4.93"/></svg>
        Settings
      </button>
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-user" onclick="showToast('Profile settings')">
        <div class="sidebar-user-av">SA</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">Super Admin</div>
          <div class="sidebar-user-role">admin@polarix.io</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      </div>
    </div>
  </aside>

  <!-- ═══════════ MAIN ═══════════ -->
  <div id="main">

    <!-- Topbar -->
    <header id="topbar">
      <div class="topbar-title" id="topbar-title">Dashboard</div>
      <div class="topbar-search">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search users, tables, scripts…">
      </div>
      <button class="topbar-btn" onclick="showToast('Exported report')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Export
      </button>
      <button class="topbar-btn primary" onclick="openModal('invite')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Invite User
      </button>
      <div class="topbar-notif" onclick="showToast('3 new notifications')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <div class="topbar-notif-count">3</div>
      </div>
    </header>

    <!-- Content -->
    <div id="content">

      <!-- ════════ DASHBOARD PAGE ════════ -->
      <div id="page-dashboard" class="page active">

        <div class="alert alert-red mb-20">
          <div class="alert-icon">⚠️</div>
          <div class="alert-body">
            <div class="alert-title">OneDrive storage critical — 3 users</div>
            <div class="alert-text">3 users have drives above 95% capacity. Consider cleanup or plan upgrades.</div>
          </div>
          <button class="topbar-btn" style="margin-left:auto; flex-shrink:0;" onclick="goTo('drives', null)">View Drives</button>
        </div>

        <!-- Stat row -->
        <div class="grid-4">
          <div class="stat-card">
            <div class="stat-card-accent" style="background: linear-gradient(90deg, var(--blue-400), var(--accent));"></div>
            <div class="stat-icon" style="background:var(--blue-100);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="stat-val">1,248</div>
            <div class="stat-label">Total Users</div>
            <div class="stat-delta delta-up">↑ 12% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-accent" style="background: linear-gradient(90deg, var(--green), #34d399);"></div>
            <div class="stat-icon" style="background:var(--green-dim);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
            </div>
            <div class="stat-val">4,392</div>
            <div class="stat-label">Connected Drives</div>
            <div class="stat-delta delta-up">↑ 8% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-accent" style="background: linear-gradient(90deg, var(--purple), #a78bfa);"></div>
            <div class="stat-icon" style="background:var(--purple-dim);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </div>
            <div class="stat-val">18,741</div>
            <div class="stat-label">Total Tables</div>
            <div class="stat-delta delta-up">↑ 22% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-accent" style="background: linear-gradient(90deg, var(--amber), #fbbf24);"></div>
            <div class="stat-icon" style="background:var(--amber-dim);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="stat-val">3,214</div>
            <div class="stat-label">Scripts Run Today</div>
            <div class="stat-delta delta-down">↓ 3% vs yesterday</div>
          </div>
        </div>

        <div class="grid-3-1">
          <!-- Activity chart -->
          <div class="card">
            <div class="sec-header">
              <div>
                <div class="sec-title">Platform Activity</div>
                <div style="font-size:11px; color:var(--t3); margin-top:3px;"><span class="live-dot"></span>Live data · Updated now</div>
              </div>
              <div class="tabs">
                <button class="tab-btn active" onclick="switchTab(this)">7d</button>
                <button class="tab-btn" onclick="switchTab(this)">30d</button>
                <button class="tab-btn" onclick="switchTab(this)">90d</button>
              </div>
            </div>
            <div class="bar-chart">
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:45%"></div><div class="bar-chart-label">M</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:62%"></div><div class="bar-chart-label">T</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:38%"></div><div class="bar-chart-label">W</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:80%"></div><div class="bar-chart-label">T</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:55%"></div><div class="bar-chart-label">F</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar secondary" style="height:30%"></div><div class="bar-chart-label">S</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar secondary" style="height:22%"></div><div class="bar-chart-label">S</div></div>
            </div>
          </div>

          <!-- Storage summary -->
          <div class="card">
            <div class="sec-header mb-20"><div class="sec-title">Storage</div></div>
            <div class="donut-wrap" style="flex-direction:column; align-items:flex-start; gap:20px;">
              <div style="display:flex; align-items:center; gap:14px; width:100%;">
                <svg class="donut" viewBox="0 0 80 80">
                  <circle class="donut-track" cx="40" cy="40" r="30"/>
                  <circle class="donut-fill" cx="40" cy="40" r="30" stroke="var(--blue-400)" stroke-dasharray="188.5" stroke-dashoffset="65"/>
                </svg>
                <div>
                  <div style="font-size:20px; font-weight:700; font-family:var(--f-mono); color:var(--t1);">2.4 TB</div>
                  <div style="font-size:11px; color:var(--t3); margin-top:2px;">of 4 TB used (65%)</div>
                </div>
              </div>
              <div style="width:100%; display:flex; flex-direction:column; gap:10px;">
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span style="color:var(--t2);">Google Drive</span><span style="color:var(--t1); font-family:var(--f-mono);">980 GB</span></div>
                  <div class="prog-bar"><div class="prog-fill" style="width:58%; background:var(--blue-400);"></div></div>
                </div>
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span style="color:var(--t2);">Dropbox</span><span style="color:var(--t1); font-family:var(--f-mono);">440 GB</span></div>
                  <div class="prog-bar"><div class="prog-fill" style="width:36%; background:var(--accent);"></div></div>
                </div>
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span style="color:var(--t2);">OneDrive</span><span style="color:var(--red); font-family:var(--f-mono);">980 GB</span></div>
                  <div class="prog-bar"><div class="prog-fill" style="width:95%; background:var(--red);"></div></div>
                </div>
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span style="color:var(--t2);">AWS S3</span><span style="color:var(--t1); font-family:var(--f-mono);">120 GB</span></div>
                  <div class="prog-bar"><div class="prog-fill" style="width:18%; background:var(--amber);"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-2">
          <!-- Recent users -->
          <div class="card">
            <div class="sec-header">
              <div class="sec-title">Recent Signups</div>
              <button class="sec-link" onclick="goTo('users', null)">View all →</button>
            </div>
            <table class="data-table">
              <thead><tr><th>User</th><th>Plan</th><th>Joined</th><th>Status</th></tr></thead>
              <tbody>
                <tr>
                  <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#2e6ef7,#38bdf8);">JD</div><span class="cell-primary">James Doel</span></div></td>
                  <td><span class="badge badge-blue">Pro</span></td>
                  <td class="cell-mono" style="font-size:11px;color:var(--t3);">2h ago</td>
                  <td><span class="badge badge-green">Active</span></td>
                </tr>
                <tr>
                  <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#8b5cf6,#ec4899);">SR</div><span class="cell-primary">Sara R.</span></div></td>
                  <td><span class="badge badge-gray">Free</span></td>
                  <td class="cell-mono" style="font-size:11px;color:var(--t3);">5h ago</td>
                  <td><span class="badge badge-green">Active</span></td>
                </tr>
                <tr>
                  <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#10b981,#34d399);">MK</div><span class="cell-primary">Michael K.</span></div></td>
                  <td><span class="badge badge-purple">Team</span></td>
                  <td class="cell-mono" style="font-size:11px;color:var(--t3);">1d ago</td>
                  <td><span class="badge badge-amber">Pending</span></td>
                </tr>
                <tr>
                  <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#f59e0b,#ef4444);">AL</div><span class="cell-primary">Amy Liu</span></div></td>
                  <td><span class="badge badge-blue">Pro</span></td>
                  <td class="cell-mono" style="font-size:11px;color:var(--t3);">2d ago</td>
                  <td><span class="badge badge-green">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Audit log -->
          <div class="card">
            <div class="sec-header">
              <div class="sec-title">Recent Audit Events</div>
              <button class="sec-link" onclick="goTo('audit', null)">View log →</button>
            </div>
            <div class="log-item">
              <div class="log-dot-wrap"><div class="log-dot" style="background:var(--red);"></div><div class="log-line"></div></div>
              <div class="log-body"><div class="log-action">User suspended — <span style="color:var(--t2)">@dan_k</span></div><div class="log-detail">Reason: ToS violation · by super_admin</div></div>
              <div class="log-time">3m</div>
            </div>
            <div class="log-item">
              <div class="log-dot-wrap"><div class="log-dot" style="background:var(--blue-400);"></div><div class="log-line"></div></div>
              <div class="log-body"><div class="log-action">Drive connected — Google Drive</div><div class="log-detail">User: james.doel@gmail.com</div></div>
              <div class="log-time">2h</div>
            </div>
            <div class="log-item">
              <div class="log-dot-wrap"><div class="log-dot" style="background:var(--green);"></div><div class="log-line"></div></div>
              <div class="log-body"><div class="log-action">Script approved — Auto-Tag v2</div><div class="log-detail">Reviewed by: admin</div></div>
              <div class="log-time">4h</div>
            </div>
            <div class="log-item">
              <div class="log-dot-wrap"><div class="log-dot" style="background:var(--amber);"></div><div class="log-line"></div></div>
              <div class="log-body"><div class="log-action">Storage alert triggered</div><div class="log-detail">OneDrive · user: michael.k · 97%</div></div>
              <div class="log-time">6h</div>
            </div>
            <div class="log-item" style="border:none;">
              <div class="log-dot-wrap"><div class="log-dot" style="background:var(--t3);"></div></div>
              <div class="log-body"><div class="log-action">Backup completed</div><div class="log-detail">Full snapshot · 2.4 TB</div></div>
              <div class="log-time">12h</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ════════ ANALYTICS PAGE ════════ -->
      <div id="page-analytics" class="page">
        <div class="grid-4">
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--blue-100);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <div class="stat-val">847</div>
            <div class="stat-label">MAU</div>
            <div class="stat-delta delta-up">↑ 18% MoM</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--green-dim);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <div class="stat-val">94.2%</div>
            <div class="stat-label">Retention Rate</div>
            <div class="stat-delta delta-up">↑ 2.1%</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--amber-dim);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div class="stat-val">7.4m</div>
            <div class="stat-label">Avg Session</div>
            <div class="stat-delta delta-up">↑ 0.8m</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--purple-dim);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <div class="stat-val">$8,240</div>
            <div class="stat-label">MRR</div>
            <div class="stat-delta delta-up">↑ 9%</div>
          </div>
        </div>
        <div class="grid-3-1">
          <div class="card">
            <div class="sec-header">
              <div class="sec-title">User Growth</div>
              <div class="tabs"><button class="tab-btn active" onclick="switchTab(this)">Monthly</button><button class="tab-btn" onclick="switchTab(this)">Weekly</button></div>
            </div>
            <div class="bar-chart" style="height:140px;">
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:30%"></div><div class="bar-chart-label">Jan</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:42%"></div><div class="bar-chart-label">Feb</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:38%"></div><div class="bar-chart-label">Mar</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:55%"></div><div class="bar-chart-label">Apr</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:60%"></div><div class="bar-chart-label">May</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:74%"></div><div class="bar-chart-label">Jun</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:68%"></div><div class="bar-chart-label">Jul</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:82%"></div><div class="bar-chart-label">Aug</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:79%"></div><div class="bar-chart-label">Sep</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:88%"></div><div class="bar-chart-label">Oct</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:92%"></div><div class="bar-chart-label">Nov</div></div>
              <div class="bar-chart-col"><div class="bar-chart-bar" style="height:100%"></div><div class="bar-chart-label">Dec</div></div>
            </div>
          </div>
          <div class="card">
            <div class="sec-title mb-20" style="margin-bottom:16px;">Plan Split</div>
            <div style="display:flex; flex-direction:column; gap:14px;">
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px;"><span style="color:var(--t2);">Free</span><span style="color:var(--t1); font-family:var(--f-mono);">62% · 774</span></div>
                <div class="prog-bar" style="height:7px;"><div class="prog-fill" style="width:62%; background:var(--t3);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px;"><span style="color:var(--t2);">Pro</span><span style="color:var(--t1); font-family:var(--f-mono);">28% · 349</span></div>
                <div class="prog-bar" style="height:7px;"><div class="prog-fill" style="width:28%; background:var(--blue-400);"></div></div>
              </div>
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px;"><span style="color:var(--t2);">Team</span><span style="color:var(--t1); font-family:var(--f-mono);">10% · 125</span></div>
                <div class="prog-bar" style="height:7px;"><div class="prog-fill" style="width:10%; background:var(--purple);"></div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="sec-header"><div class="sec-title">Top Feature Usage</div></div>
          <table class="data-table">
            <thead><tr><th>Feature</th><th>Calls (30d)</th><th>Unique Users</th><th>Avg / User</th><th>Trend</th></tr></thead>
            <tbody>
              <tr><td class="cell-primary">File Upload</td><td class="cell-mono">482,912</td><td class="cell-mono">1,102</td><td class="cell-mono">438</td><td><div class="spark"><div class="spark-bar" style="height:40%"></div><div class="spark-bar" style="height:60%"></div><div class="spark-bar" style="height:55%"></div><div class="spark-bar" style="height:80%"></div><div class="spark-bar" style="height:70%"></div><div class="spark-bar" style="height:100%"></div></div></td></tr>
              <tr><td class="cell-primary">Script Runs</td><td class="cell-mono">98,241</td><td class="cell-mono">644</td><td class="cell-mono">152</td><td><div class="spark"><div class="spark-bar" style="height:30%"></div><div class="spark-bar" style="height:45%"></div><div class="spark-bar" style="height:42%"></div><div class="spark-bar" style="height:60%"></div><div class="spark-bar" style="height:58%"></div><div class="spark-bar" style="height:75%"></div></div></td></tr>
              <tr><td class="cell-primary">Table Creation</td><td class="cell-mono">24,880</td><td class="cell-mono">891</td><td class="cell-mono">27</td><td><div class="spark"><div class="spark-bar" style="height:50%"></div><div class="spark-bar" style="height:55%"></div><div class="spark-bar" style="height:48%"></div><div class="spark-bar" style="height:65%"></div><div class="spark-bar" style="height:60%"></div><div class="spark-bar" style="height:80%"></div></div></td></tr>
              <tr><td class="cell-primary">Drive Connect</td><td class="cell-mono">9,122</td><td class="cell-mono">1,248</td><td class="cell-mono">7</td><td><div class="spark"><div class="spark-bar" style="height:80%"></div><div class="spark-bar" style="height:65%"></div><div class="spark-bar" style="height:70%"></div><div class="spark-bar" style="height:55%"></div><div class="spark-bar" style="height:60%"></div><div class="spark-bar" style="height:70%"></div></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ════════ USERS PAGE ════════ -->
      <div id="page-users" class="page">
        <div class="alert alert-amber mb-20">
          <div class="alert-icon">🔔</div>
          <div class="alert-body">
            <div class="alert-title">3 pending user verifications</div>
            <div class="alert-text">Users waiting for email verification or manual review.</div>
          </div>
        </div>
        <div class="card">
          <div class="sec-header">
            <div style="display:flex; gap:8px; align-items:center;">
              <div class="tabs">
                <button class="tab-btn active" onclick="switchTab(this)">All</button>
                <button class="tab-btn" onclick="switchTab(this)">Active</button>
                <button class="tab-btn" onclick="switchTab(this)">Suspended</button>
                <button class="tab-btn" onclick="switchTab(this)">Pending</button>
              </div>
            </div>
            <button class="topbar-btn primary" onclick="openModal('invite')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Invite
            </button>
          </div>
          <table class="data-table">
            <thead>
              <tr><th>User</th><th>Email</th><th>Plan</th><th>Drives</th><th>Storage</th><th>Joined</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#2e6ef7,#38bdf8);">JD</div><span class="cell-primary">James Doel</span></div></td>
                <td style="color:var(--t3);font-size:12px;">james.d@gmail.com</td>
                <td><span class="badge badge-blue">Pro</span></td>
                <td class="cell-mono">4</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1);">8.4 GB</div><div class="prog-bar" style="width:80px;"><div class="prog-fill" style="width:56%; background:var(--blue-400);"></div></div></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">2 Jan 2025</td>
                <td><span class="badge badge-green">Active</span></td>
                <td><div style="display:flex; gap:4px;">
                  <button class="icon-btn" onclick="showToast('Viewing James Doel')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                  <button class="icon-btn" onclick="showToast('Editing user')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="icon-btn" style="color:var(--red);" onclick="showToast('User suspended')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button>
                </div></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#8b5cf6,#ec4899);">SR</div><span class="cell-primary">Sara Rivera</span></div></td>
                <td style="color:var(--t3);font-size:12px;">sara.r@company.io</td>
                <td><span class="badge badge-gray">Free</span></td>
                <td class="cell-mono">1</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1);">2.1 GB</div><div class="prog-bar" style="width:80px;"><div class="prog-fill" style="width:21%; background:var(--green);"></div></div></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">15 Jan 2025</td>
                <td><span class="badge badge-green">Active</span></td>
                <td><div style="display:flex; gap:4px;">
                  <button class="icon-btn" onclick="showToast('Viewing Sara Rivera')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                  <button class="icon-btn" onclick="showToast('Editing user')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="icon-btn" style="color:var(--red);" onclick="showToast('User suspended')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button>
                </div></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#10b981,#34d399);">MK</div><span class="cell-primary">Michael K.</span></div></td>
                <td style="color:var(--t3);font-size:12px;">michael.k@startup.co</td>
                <td><span class="badge badge-purple">Team</span></td>
                <td class="cell-mono">7</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--red);">14.8 GB</div><div class="prog-bar" style="width:80px;"><div class="prog-fill" style="width:98%; background:var(--red);"></div></div></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">3 Feb 2025</td>
                <td><span class="badge badge-amber">Pending</span></td>
                <td><div style="display:flex; gap:4px;">
                  <button class="icon-btn" onclick="showToast('Viewing Michael K.')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                  <button class="icon-btn" onclick="showToast('Editing user')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="icon-btn" style="color:var(--red);" onclick="showToast('User suspended')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button>
                </div></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#f59e0b,#ef4444);">AL</div><span class="cell-primary">Amy Liu</span></div></td>
                <td style="color:var(--t3);font-size:12px;">amy.liu@design.co</td>
                <td><span class="badge badge-blue">Pro</span></td>
                <td class="cell-mono">3</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1);">5.6 GB</div><div class="prog-bar" style="width:80px;"><div class="prog-fill" style="width:37%; background:var(--blue-400);"></div></div></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">20 Feb 2025</td>
                <td><span class="badge badge-green">Active</span></td>
                <td><div style="display:flex; gap:4px;">
                  <button class="icon-btn" onclick="showToast('Viewing Amy Liu')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                  <button class="icon-btn" onclick="showToast('Editing user')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="icon-btn" style="color:var(--red);" onclick="showToast('User suspended')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button>
                </div></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#ef4444,#f97316);">DK</div><span class="cell-primary">Dan K.</span></div></td>
                <td style="color:var(--t3);font-size:12px;">dan.k@personal.me</td>
                <td><span class="badge badge-gray">Free</span></td>
                <td class="cell-mono">2</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1);">1.2 GB</div><div class="prog-bar" style="width:80px;"><div class="prog-fill" style="width:12%; background:var(--t3);"></div></div></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">5 Mar 2025</td>
                <td><span class="badge badge-red">Suspended</span></td>
                <td><div style="display:flex; gap:4px;">
                  <button class="icon-btn" onclick="showToast('Viewing Dan K.')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                  <button class="icon-btn" onclick="showToast('Restored user')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></button>
                </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ════════ DRIVES PAGE ════════ -->
      <div id="page-drives" class="page">
        <div class="grid-3">
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--green-dim);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></div>
            <div class="stat-val">4,392</div><div class="stat-label">Total Drives</div><div class="stat-delta delta-up">↑ 8%</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--blue-100);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
            <div class="stat-val">2.4 TB</div><div class="stat-label">Data Stored</div><div class="stat-delta delta-up">↑ 14%</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:var(--red-dim);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
            <div class="stat-val">128</div><div class="stat-label">Over 90% Full</div><div class="stat-delta delta-down">↑ 23 this week</div>
          </div>
        </div>
        <div class="card">
          <div class="sec-header">
            <div class="sec-title">All Connected Drives</div>
            <div style="display:flex; gap:8px;">
              <div class="tabs">
                <button class="tab-btn active" onclick="switchTab(this)">All</button>
                <button class="tab-btn" onclick="switchTab(this)">Critical</button>
                <button class="tab-btn" onclick="switchTab(this)">Disconnected</button>
              </div>
            </div>
          </div>
          <table class="data-table">
            <thead><tr><th>User</th><th>Provider</th><th>Label</th><th>Used</th><th>Capacity</th><th>Status</th><th>Last Sync</th><th></th></tr></thead>
            <tbody>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#2e6ef7,#38bdf8);">JD</div>James Doel</div></td>
                <td><span class="tag">Google Drive</span></td>
                <td style="color:var(--t2);">Work</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1); margin-bottom:4px;">8.4 / 15 GB</div><div class="prog-bar" style="width:100px;"><div class="prog-fill" style="width:56%; background:var(--blue-400);"></div></div></td>
                <td class="cell-mono">15 GB</td>
                <td><span class="badge badge-green">Active</span></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">2m ago</td>
                <td><button class="icon-btn" onclick="showToast('Drive details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#10b981,#34d399);">MK</div>Michael K.</div></td>
                <td><span class="tag">OneDrive</span></td>
                <td style="color:var(--t2);">Personal</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--red); margin-bottom:4px;">14.8 / 15 GB</div><div class="prog-bar" style="width:100px;"><div class="prog-fill" style="width:98%; background:var(--red);"></div></div></td>
                <td class="cell-mono">15 GB</td>
                <td><span class="badge badge-red">Critical</span></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">1h ago</td>
                <td><button class="icon-btn" onclick="showToast('Drive details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#8b5cf6,#ec4899);">SR</div>Sara Rivera</div></td>
                <td><span class="tag">Dropbox</span></td>
                <td style="color:var(--t2);">Archive</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1); margin-bottom:4px;">2.1 / 5 GB</div><div class="prog-bar" style="width:100px;"><div class="prog-fill" style="width:42%; background:var(--accent);"></div></div></td>
                <td class="cell-mono">5 GB</td>
                <td><span class="badge badge-green">Active</span></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">30m ago</td>
                <td><button class="icon-btn" onclick="showToast('Drive details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr>
                <td><div class="av-row"><div class="av" style="background:linear-gradient(135deg,#f59e0b,#ef4444);">AL</div>Amy Liu</div></td>
                <td><span class="tag">AWS S3</span></td>
                <td style="color:var(--t2);">Media</td>
                <td><div style="font-size:12px; font-family:var(--f-mono); color:var(--t1); margin-bottom:4px;">32 / 100 GB</div><div class="prog-bar" style="width:100px;"><div class="prog-fill" style="width:32%; background:var(--amber);"></div></div></td>
                <td class="cell-mono">100 GB</td>
                <td><span class="badge badge-amber">Syncing</span></td>
                <td class="cell-mono" style="font-size:11px; color:var(--t3);">Now</td>
                <td><button class="icon-btn" onclick="showToast('Drive details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ════════ TABLES PAGE ════════ -->
      <div id="page-tables" class="page">
        <div class="card">
          <div class="sec-header">
            <div class="sec-title">All Tables</div>
            <div style="display:flex; gap:8px;">
              <div class="tabs"><button class="tab-btn active" onclick="switchTab(this)">All</button><button class="tab-btn" onclick="switchTab(this)">Active</button><button class="tab-btn" onclick="switchTab(this)">Archived</button></div>
            </div>
          </div>
          <table class="data-table">
            <thead><tr><th>Table</th><th>Owner</th><th>Drive</th><th>Rows</th><th>Size</th><th>Created</th><th>Status</th><th></th></tr></thead>
            <tbody>
              <tr><td class="cell-primary">📁 Project Documents</td><td>James Doel</td><td><span class="tag">G. Drive</span></td><td class="cell-mono">48</td><td class="cell-mono">620 MB</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">Jan 5</td><td><span class="badge badge-green">Active</span></td><td><button class="icon-btn" onclick="showToast('Table details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td></tr>
              <tr><td class="cell-primary">🖼️ Media Archive</td><td>Amy Liu</td><td><span class="tag">Dropbox</span></td><td class="cell-mono">132</td><td class="cell-mono">4.2 GB</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">Feb 12</td><td><span class="badge badge-green">Active</span></td><td><button class="icon-btn" onclick="showToast('Table details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td></tr>
              <tr><td class="cell-primary">📊 Research Data</td><td>Sara Rivera</td><td><span class="tag">AWS S3</span></td><td class="cell-mono">27</td><td class="cell-mono">1.1 GB</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">Mar 2</td><td><span class="badge badge-amber">Syncing</span></td><td><button class="icon-btn" onclick="showToast('Table details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td></tr>
              <tr><td class="cell-primary">🔒 Private Vault</td><td>Michael K.</td><td><span class="tag">OneDrive</span></td><td class="cell-mono">14</td><td class="cell-mono">280 MB</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">Mar 10</td><td><span class="badge badge-gray">Locked</span></td><td><button class="icon-btn" onclick="showToast('Table details')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ════════ SCRIPTS PAGE ════════ -->
      <div id="page-scripts" class="page">
        <div class="alert alert-amber mb-20">
          <div class="alert-icon">⚠️</div>
          <div class="alert-body"><div class="alert-title">1 script pending review</div><div class="alert-text">User-submitted script "Bulk Mover v2" is awaiting admin approval.</div></div>
          <button class="topbar-btn primary" style="margin-left:auto; flex-shrink:0;" onclick="showToast('Script approved!')">Approve</button>
        </div>
        <div class="card">
          <div class="sec-header"><div class="sec-title">All Scripts</div><div class="tabs"><button class="tab-btn active" onclick="switchTab(this)">All</button><button class="tab-btn" onclick="switchTab(this)">Active</button><button class="tab-btn" onclick="switchTab(this)">Pending</button></div></div>
          <table class="data-table">
            <thead><tr><th>Script</th><th>Owner</th><th>Trigger</th><th>Runs (30d)</th><th>Last Run</th><th>Status</th><th></th></tr></thead>
            <tbody>
              <tr><td class="cell-primary">⚡ Auto-Tag Files</td><td>James Doel</td><td><span class="tag">on_upload</span></td><td class="cell-mono">12,841</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">1h ago</td><td><span class="badge badge-green">Active</span></td><td><div style="display:flex; gap:4px;"><button class="icon-btn" onclick="showToast('Viewing script')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button><button class="icon-btn" style="color:var(--red);" onclick="showToast('Script disabled')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button></div></td></tr>
              <tr><td class="cell-primary">📧 Email Sync</td><td>Sara Rivera</td><td><span class="tag">cron 0 9 * * *</span></td><td class="cell-mono">30</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">3h ago</td><td><span class="badge badge-green">Active</span></td><td><div style="display:flex; gap:4px;"><button class="icon-btn" onclick="showToast('Viewing script')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button><button class="icon-btn" style="color:var(--red);" onclick="showToast('Script disabled')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></button></div></td></tr>
              <tr style="background:var(--amber-dim);"><td class="cell-primary">🔀 Bulk Mover v2</td><td>Michael K.</td><td><span class="tag">manual</span></td><td class="cell-mono">—</td><td class="cell-mono" style="font-size:11px;color:var(--t3);">—</td><td><span class="badge badge-amber">Pending Review</span></td><td><div style="display:flex; gap:4px;"><button class="icon-btn" onclick="showToast('Viewing script')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button><button class="icon-btn" style="color:var(--green);" onclick="showToast('Script approved!')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></button><button class="icon-btn" style="color:var(--red);" onclick="showToast('Script rejected')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ════════ AUDIT LOG PAGE ════════ -->
      <div id="page-audit" class="page">
        <div class="grid-2">
          <div class="card">
            <div class="sec-header"><div class="sec-title">Full Audit Log</div>
            <div style="display:flex; gap:8px; align-items:center;"><div class="tabs"><button class="tab-btn active" onclick="switchTab(this)">All</button><button class="tab-btn" onclick="switchTab(this)">Security</button><button class="tab-btn" onclick="switchTab(this)">System</button></div><button class="topbar-btn" onclick="showToast('Exported audit log')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Export</button></div></div>
            <div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--red);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">User suspended — <span style="color:var(--red)">@dan_k</span></div><div class="log-detail">Reason: ToS violation (section 4.2) · Actor: super_admin · IP: 192.168.1.1</div></div><div class="log-time">3m</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--blue-400);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Drive connected — Google Drive</div><div class="log-detail">User: james.doel@gmail.com · Region: us-east-1</div></div><div class="log-time">2h</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--green);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Script approved — Auto-Tag v2</div><div class="log-detail">Reviewed & approved by: admin · runs_allowed: unlimited</div></div><div class="log-time">4h</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--amber);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Storage alert triggered</div><div class="log-detail">OneDrive · user: michael.k · 97% capacity</div></div><div class="log-time">6h</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--purple);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Admin login</div><div class="log-detail">super_admin · IP: 203.0.113.42 · Chrome / MacOS</div></div><div class="log-time">8h</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--t3);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Backup completed</div><div class="log-detail">Full snapshot · 2.4 TB · duration: 14m 22s</div></div><div class="log-time">12h</div></div>
              <div class="log-item"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--red);"></div><div class="log-line"></div></div><div class="log-body"><div class="log-action">Failed login attempt</div><div class="log-detail">Unknown user · IP: 45.33.32.156 · 3 attempts</div></div><div class="log-time">1d</div></div>
              <div class="log-item" style="border:none;"><div class="log-dot-wrap"><div class="log-dot" style="background:var(--green);"></div></div><div class="log-body"><div class="log-action">New user registered — Amy Liu</div><div class="log-detail">amy.liu@design.co · Plan: Pro · Region: ap-southeast</div></div><div class="log-time">2d</div></div>
            </div>
          </div>
          <div class="card">
            <div class="sec-title" style="margin-bottom:16px;">Event Breakdown</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-3); border-radius:var(--r-md);"><span style="color:var(--t2); font-size:13px;">User actions</span><span style="font-family:var(--f-mono); color:var(--t1);">1,284</span></div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-3); border-radius:var(--r-md);"><span style="color:var(--t2); font-size:13px;">Drive events</span><span style="font-family:var(--f-mono); color:var(--t1);">892</span></div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-3); border-radius:var(--r-md);"><span style="color:var(--t2); font-size:13px;">Script executions</span><span style="font-family:var(--f-mono); color:var(--t1);">3,214</span></div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--red-dim); border-radius:var(--r-md);"><span style="color:var(--red); font-size:13px;">⚠ Security events</span><span style="font-family:var(--f-mono); color:var(--red);">7</span></div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-3); border-radius:var(--r-md);"><span style="color:var(--t2); font-size:13px;">Admin actions</span><span style="font-family:var(--f-mono); color:var(--t1);">42</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ════════ SETTINGS PAGE ════════ -->
      <div id="page-settings" class="page">
        <div class="grid-3-1">
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="card">
              <div class="sec-title" style="margin-bottom:16px;">General Settings</div>
              <div class="form-row"><div class="form-group"><label class="form-label">Platform Name</label><input class="form-input" value="Polarix"></div><div class="form-group"><label class="form-label">Support Email</label><input class="form-input" value="support@polarix.io"></div></div>
              <div class="form-row"><div class="form-group"><label class="form-label">Default Storage Limit</label><select class="form-select"><option>15 GB</option><option>50 GB</option><option>100 GB</option></select></div><div class="form-group"><label class="form-label">Default Plan</label><select class="form-select"><option>Free</option><option>Pro</option></select></div></div>
              <div style="display:flex; justify-content:flex-end; margin-top:4px;"><button class="topbar-btn primary" onclick="showToast('Settings saved')">Save Changes</button></div>
            </div>
            <div class="card">
              <div class="sec-title" style="margin-bottom:16px;">Admin Permissions</div>
              <div class="perm-grid">
                <div class="perm-card on" onclick="togglePerm(this)"><div class="perm-icon">👥</div><div class="perm-name">User Mgmt</div><div class="perm-desc">Create, edit, suspend</div></div>
                <div class="perm-card on" onclick="togglePerm(this)"><div class="perm-icon">💾</div><div class="perm-name">Drive Access</div><div class="perm-desc">View all drives</div></div>
                <div class="perm-card on" onclick="togglePerm(this)"><div class="perm-icon">⚡</div><div class="perm-name">Script Approval</div><div class="perm-desc">Review & approve</div></div>
                <div class="perm-card" onclick="togglePerm(this)"><div class="perm-icon">💳</div><div class="perm-name">Billing</div><div class="perm-desc">View invoices</div></div>
                <div class="perm-card on" onclick="togglePerm(this)"><div class="perm-icon">📋</div><div class="perm-name">Audit Log</div><div class="perm-desc">Full access</div></div>
                <div class="perm-card" onclick="togglePerm(this)"><div class="perm-icon">🗑️</div><div class="perm-name">Delete Data</div><div class="perm-desc">Permanent delete</div></div>
              </div>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="card">
              <div class="sec-title" style="margin-bottom:14px;">Notifications</div>
              <div style="display:flex; flex-direction:column; gap:14px;">
                <div class="toggle-wrap"><button class="toggle-sw on" onclick="this.classList.toggle('on')"></button><div><div class="toggle-label">Storage Alerts</div><div class="toggle-sub">Notify when >90%</div></div></div>
                <div class="toggle-wrap"><button class="toggle-sw on" onclick="this.classList.toggle('on')"></button><div><div class="toggle-label">New Signups</div><div class="toggle-sub">Daily digest</div></div></div>
                <div class="toggle-wrap"><button class="toggle-sw" onclick="this.classList.toggle('on')"></button><div><div class="toggle-label">Script Errors</div><div class="toggle-sub">Immediate alert</div></div></div>
                <div class="toggle-wrap"><button class="toggle-sw on" onclick="this.classList.toggle('on')"></button><div><div class="toggle-label">Security Events</div><div class="toggle-sub">All failed logins</div></div></div>
              </div>
            </div>
            <div class="card">
              <div class="sec-title" style="margin-bottom:14px;">System</div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; font-size:13px; padding:8px 0; border-bottom:1px solid var(--border);"><span style="color:var(--t2);">Version</span><span style="font-family:var(--f-mono); color:var(--t1);">v1.2.0</span></div>
                <div style="display:flex; justify-content:space-between; font-size:13px; padding:8px 0; border-bottom:1px solid var(--border);"><span style="color:var(--t2);">Last Backup</span><span style="font-family:var(--f-mono); color:var(--t1);">12h ago</span></div>
                <div style="display:flex; justify-content:space-between; font-size:13px; padding:8px 0;"><span style="color:var(--t2);">Uptime</span><span style="font-family:var(--f-mono); color:var(--green);">99.98%</span></div>
                <button class="topbar-btn" style="width:100%; justify-content:center; margin-top:6px;" onclick="showToast('Backup started')">🔄 Run Backup Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div><!-- end #content -->
  </div><!-- end #main -->
</div><!-- end #shell -->

<!-- ════════ MODAL ════════ -->
<div id="modal-overlay" onclick="closeModal(event)">
  <div class="modal" id="modal-box">
    <div class="modal-header">
      <div class="modal-title" id="modal-title">Invite User</div>
      <button class="icon-btn" onclick="closeModal()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>
    <div class="modal-body" id="modal-body">
      <div class="form-row"><div class="form-group"><label class="form-label">Email Address</label><input class="form-input" placeholder="user@example.com"></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label">Role</label><select class="form-select"><option>User</option><option>Admin</option><option>Viewer</option></select></div><div class="form-group"><label class="form-label">Plan</label><select class="form-select"><option>Free</option><option>Pro</option><option>Team</option></select></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label">Personal Note (optional)</label><input class="form-input" placeholder="Welcome to Polarix…"></div></div>
    </div>
    <div class="modal-footer">
      <button class="topbar-btn" onclick="closeModal()">Cancel</button>
      <button class="topbar-btn primary" onclick="submitInvite()">Send Invite →</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5" stroke-linecap="round" id="toast-icon"><polyline points="20 6 9 17 4 12"/></svg>
  <span id="toast-msg"></span>
</div>

<script>
  const pages = ['dashboard','analytics','users','drives','tables','scripts','audit','settings'];

  function goTo(id, linkEl) {
    // Switch page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id)?.classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (linkEl) {
      linkEl.classList.add('active');
    } else {
      // find by id
      document.querySelectorAll('.nav-link').forEach(n => {
        if (n.getAttribute('onclick')?.includes("'" + id + "'")) n.classList.add('active');
      });
    }

    // Update topbar title
    const titles = {
      dashboard: 'Dashboard', analytics: 'Analytics', users: 'Users',
      drives: 'Drives', tables: 'Tables', scripts: 'Scripts',
      audit: 'Audit Log', settings: 'Settings'
    };
    document.getElementById('topbar-title').textContent = titles[id] || id;
  }

  function switchTab(el) {
    el.closest('.tabs').querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  function togglePerm(el) { el.classList.toggle('on'); }

  function openModal(type) {
    document.getElementById('modal-overlay').classList.add('open');
  }
  function closeModal(e) {
    if (!e || e.target === document.getElementById('modal-overlay')) {
      document.getElementById('modal-overlay').classList.remove('open');
    }
  }
  function submitInvite() {
    document.getElementById('modal-overlay').classList.remove('open');
    showToast('Invite sent successfully!');
  }

  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }
</script>
</body>
</html>