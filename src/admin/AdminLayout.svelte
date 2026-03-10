<script lang="ts">
  import './admin.css';
  import { currentRoute, navigate, showToast } from '../store';
  import type { Route } from '../store';

  export let title = '';
  // Keep for backwards compat (unused — derive from $currentRoute)
  export let activeRoute: Route = '/admin';
  export let subtitle: string | null = null;
  export let backRoute: Route = '/home';

  let showModal = false;
  let activeTab = '7d';

  const pageTitles: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/analytics': 'Analytics',
    '/admin/users': 'Users',
    '/admin/drives': 'Drives',
    '/admin/tables': 'Tables',
    '/admin/scripts': 'Scripts',
    '/admin/audit': 'Audit Log',
    '/admin/settings': 'Settings',
  };

  $: pageTitle = pageTitles[$currentRoute] || title || 'Admin';

  type NavGroup = { section: string; items: NavItem[] };
  type NavItem  = { label: string; route: Route; badge?: string; badgeClass?: string };

  const navGroups: NavGroup[] = [
    {
      section: 'Overview',
      items: [
        { label: 'Dashboard', route: '/admin' },
        { label: 'Analytics', route: '/admin/analytics' },
      ],
    },
    {
      section: 'Management',
      items: [
        { label: 'Users',   route: '/admin/users',   badge: '3' },
        { label: 'Drives',  route: '/admin/drives' },
        { label: 'Tables',  route: '/admin/tables' },
        { label: 'Scripts', route: '/admin/scripts', badge: '1', badgeClass: 'amber' },
      ],
    },
    {
      section: 'System',
      items: [
        { label: 'Audit Log', route: '/admin/audit' },
        { label: 'Settings',  route: '/admin/settings' },
      ],
    },
  ];

  function submitInvite() {
    showModal = false;
    showToast('Invite sent successfully!');
  }

  function onOverlayClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('adm-modal-overlay')) {
      showModal = false;
    }
  }
</script>

<div class="admin-shell">
  <!-- ════ SIDEBAR ════ -->
  <aside class="adm-sidebar">
    <div class="adm-sidebar-glow"></div>

    <!-- Logo -->
    <div class="adm-logo">
      <div class="adm-logo-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
          <path d="M12 2v20M4 7l8 5 8-5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="adm-logo-text">Polarix</span>
      <span class="adm-logo-badge">Admin</span>
    </div>

    <!-- Nav -->
    <nav class="adm-nav">
      {#each navGroups as group}
        <span class="adm-nav-section">{group.section}</span>
        {#each group.items as item}
          <button
            class="adm-nav-link"
            class:active={$currentRoute === item.route}
            on:click={() => navigate(item.route)}
          >
            <!-- Icons per route -->
            {#if item.route === '/admin'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
              </svg>
            {:else if item.route === '/admin/analytics'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            {:else if item.route === '/admin/users'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            {:else if item.route === '/admin/drives'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                <line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>
              </svg>
            {:else if item.route === '/admin/tables'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            {:else if item.route === '/admin/scripts'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            {:else if item.route === '/admin/audit'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            {:else if item.route === '/admin/settings'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07m14.14 0A10 10 0 0 0 4.93 4.93"/>
              </svg>
            {/if}

            {item.label}

            {#if item.badge}
              <span class="adm-nav-badge" class:amber={item.badgeClass === 'amber'}>
                {item.badge}
              </span>
            {/if}
          </button>
        {/each}
      {/each}
    </nav>

    <!-- User footer -->
    <div class="adm-sidebar-footer">
      <button class="adm-user-card" on:click={() => showToast('Profile settings')}>
        <div class="adm-user-av">SA</div>
        <div class="adm-user-info">
          <div class="adm-user-name">Super Admin</div>
          <div class="adm-user-role">admin@polarix.io</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--adm-t3)" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>
    </div>
  </aside>

  <!-- ════ MAIN ════ -->
  <div class="adm-main">

    <!-- Topbar -->
    <header class="adm-topbar">
      <div class="adm-topbar-title">{pageTitle}</div>

      <div class="adm-topbar-search">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" placeholder="Search users, tables, scripts…" />
      </div>

      <button class="adm-btn" on:click={() => showToast('Report exported')}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Export
      </button>

      <button class="adm-btn adm-btn-primary" on:click={() => (showModal = true)}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Invite User
      </button>

      <button class="adm-notif-btn" on:click={() => showToast('3 new notifications')}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span class="adm-notif-count">3</span>
      </button>
    </header>

    <!-- Page content -->
    <div class="adm-content">
      <div class="adm-page-content">
        <slot />
      </div>
    </div>
  </div>
</div>

<!-- ════ INVITE MODAL ════ -->
{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="adm-modal-overlay" on:click={onOverlayClick}>
    <div class="adm-modal">
      <div class="adm-modal-header">
        <div class="adm-modal-title">Invite User</div>
        <button class="adm-icon-btn" on:click={() => (showModal = false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="adm-modal-body">
        <div class="adm-form-row">
          <div class="adm-form-group">
            <label class="adm-form-label">Email Address</label>
            <input class="adm-form-input" placeholder="user@example.com" />
          </div>
        </div>
        <div class="adm-form-row">
          <div class="adm-form-group">
            <label class="adm-form-label">Role</label>
            <select class="adm-form-select">
              <option>User</option><option>Admin</option><option>Viewer</option>
            </select>
          </div>
          <div class="adm-form-group">
            <label class="adm-form-label">Plan</label>
            <select class="adm-form-select">
              <option>Free</option><option>Pro</option><option>Team</option>
            </select>
          </div>
        </div>
        <div class="adm-form-row">
          <div class="adm-form-group">
            <label class="adm-form-label">Personal Note (optional)</label>
            <input class="adm-form-input" placeholder="Welcome to Polarix…" />
          </div>
        </div>
      </div>
      <div class="adm-modal-footer">
        <button class="adm-btn" on:click={() => (showModal = false)}>Cancel</button>
        <button class="adm-btn adm-btn-primary" on:click={submitInvite}>Send Invite →</button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* ── Shell ── */
  .admin-shell {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    font-family: var(--adm-f-main);
    background: var(--adm-bg);
    color: var(--adm-t1);
    font-size: 14px;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Sidebar ── */
  .adm-sidebar {
    width: var(--adm-sidebar-w);
    flex-shrink: 0;
    background: var(--adm-bg-2);
    border-right: 1px solid var(--adm-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
  .adm-sidebar-glow {
    position: absolute;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(46, 110, 247, 0.12), transparent 70%);
    top: -40px; left: -40px;
    pointer-events: none;
  }

  /* ── Logo ── */
  .adm-logo {
    height: var(--adm-header-h);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 18px;
    border-bottom: 1px solid var(--adm-border);
    flex-shrink: 0;
  }
  .adm-logo-icon {
    width: 30px; height: 30px;
    background: linear-gradient(135deg, var(--adm-blue-300), var(--adm-accent));
    border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .adm-logo-text {
    font-size: 16px; font-weight: 700;
    color: var(--adm-t1); letter-spacing: -0.3px;
  }
  .adm-logo-badge {
    font-size: 9px; font-weight: 700;
    background: var(--adm-blue-100);
    color: var(--adm-blue-300);
    padding: 2px 7px; border-radius: 99px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-left: auto;
  }

  /* ── Nav ── */
  .adm-nav {
    flex: 1;
    padding: 12px 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .adm-nav::-webkit-scrollbar { display: none; }
  .adm-nav-section {
    font-size: 10px; font-weight: 600;
    color: var(--adm-t3);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 8px 4px;
    margin-top: 6px;
  }
  .adm-nav-link {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 10px;
    border-radius: var(--adm-r-md);
    cursor: pointer;
    transition: all 0.15s;
    color: var(--adm-t2);
    border: none; background: none;
    width: 100%; text-align: left;
    font-family: var(--adm-f-main);
    font-size: 13.5px; font-weight: 500;
    position: relative;
  }
  .adm-nav-link:hover { background: var(--adm-bg-3); color: var(--adm-t1); }
  .adm-nav-link.active { background: var(--adm-blue-100); color: var(--adm-blue-300); }
  .adm-nav-link :global(svg) { flex-shrink: 0; stroke: currentColor; }
  .adm-nav-badge {
    margin-left: auto;
    font-size: 10px; font-weight: 700;
    padding: 2px 6px; border-radius: 99px;
    background: var(--adm-red-dim);
    color: var(--adm-red);
    font-family: var(--adm-f-mono);
  }
  .adm-nav-badge.amber { background: var(--adm-amber-dim); color: var(--adm-amber); }

  /* ── Sidebar footer ── */
  .adm-sidebar-footer {
    padding: 12px 10px;
    border-top: 1px solid var(--adm-border);
    flex-shrink: 0;
  }
  .adm-user-card {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 10px;
    border-radius: var(--adm-r-md);
    cursor: pointer; transition: background 0.15s;
    width: 100%; background: none; border: none;
    font-family: var(--adm-f-main);
  }
  .adm-user-card:hover { background: var(--adm-bg-3); }
  .adm-user-av {
    width: 32px; height: 32px; border-radius: 9px;
    background: linear-gradient(135deg, var(--adm-blue-400), var(--adm-purple));
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0;
  }
  .adm-user-info { flex: 1; min-width: 0; text-align: left; }
  .adm-user-name { font-size: 13px; font-weight: 600; color: var(--adm-t1); }
  .adm-user-role { font-size: 11px; color: var(--adm-t3); }

  /* ── Main area ── */
  .adm-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--adm-bg);
  }

  /* ── Topbar ── */
  .adm-topbar {
    height: var(--adm-header-h);
    background: var(--adm-bg);
    border-bottom: 1px solid var(--adm-border);
    display: flex; align-items: center; gap: 10px;
    padding: 0 24px;
    flex-shrink: 0;
  }
  .adm-topbar-title {
    font-size: 15px; font-weight: 700;
    color: var(--adm-t1); letter-spacing: -0.2px;
    flex: 1;
  }
  .adm-topbar-search {
    display: flex; align-items: center; gap: 8px;
    background: var(--adm-bg-3);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-r-md);
    padding: 7px 12px;
    width: 220px;
    transition: border-color 0.15s;
  }
  .adm-topbar-search:focus-within { border-color: var(--adm-blue-400); }
  .adm-topbar-search :global(svg) { stroke: var(--adm-t3); flex-shrink: 0; }
  .adm-topbar-search input {
    background: none; border: none; outline: none;
    font-family: var(--adm-f-main); font-size: 13px;
    color: var(--adm-t1); width: 100%;
  }
  .adm-topbar-search input::placeholder { color: var(--adm-t3); }
  .adm-notif-btn {
    width: 34px; height: 34px;
    border-radius: var(--adm-r-md);
    border: 1px solid var(--adm-border);
    background: var(--adm-bg-3);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    position: relative;
    transition: all 0.15s;
    flex-shrink: 0;
  }
  .adm-notif-btn:hover { border-color: var(--adm-border-2); }
  .adm-notif-btn :global(svg) { stroke: var(--adm-t2); }
  .adm-notif-count {
    position: absolute; top: -4px; right: -4px;
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--adm-red);
    font-size: 9px; font-weight: 700; color: #fff;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid var(--adm-bg);
    font-family: var(--adm-f-mono);
  }

  /* ── Content ── */
  .adm-content {
    flex: 1;
    overflow-y: auto;
  }
  .adm-content::-webkit-scrollbar { width: 4px; }
  .adm-content::-webkit-scrollbar-track { background: transparent; }
  .adm-content::-webkit-scrollbar-thumb { background: var(--adm-bg-4); border-radius: 99px; }

  .adm-page-content {
    padding: 24px;
  }

  /* ── Modal overlay ── */
  .adm-modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 999;
    display: flex; align-items: center; justify-content: center;
  }
  .adm-modal {
    background: var(--adm-bg-2);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-r-xl);
    width: 480px; max-width: 90vw;
    max-height: 80vh; overflow-y: auto;
    animation: adm-fadeUp 0.2s ease;
  }
  .adm-modal-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 24px 16px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-modal-title { font-size: 15px; font-weight: 700; color: var(--adm-t1); }
  .adm-modal-body { padding: 20px 24px; }
  .adm-modal-footer {
    display: flex; justify-content: flex-end; gap: 8px;
    padding: 16px 24px 20px;
    border-top: 1px solid var(--adm-border);
  }
  @keyframes adm-fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
