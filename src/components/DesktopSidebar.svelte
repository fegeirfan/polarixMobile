<script lang="ts">
  import { currentRoute, navigate } from '../store';

  const navItems = [
    {
      route: '/home' as const,
      label: 'Home',
      icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
    },
    {
      route: '/tables' as const,
      label: 'Tables',
      icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/>`,
    },
    {
      route: '/scripts' as const,
      label: 'Scripts',
      icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    },
    {
      route: '/profile' as const,
      label: 'Profile',
      icon: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
    },
  ];
</script>

<aside class="desktop-sidebar">
  <!-- Logo -->
  <div class="ds-logo">
    <div class="ds-logo-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 2v20M4 7l8 5 8-5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="ds-logo-text">Polarix</span>
  </div>

  <!-- Nav -->
  <nav class="ds-nav">
    {#each navItems as item}
      <button
        class="ds-nav-item"
        class:active={$currentRoute === item.route}
        on:click={() => navigate(item.route)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          {@html item.icon}
        </svg>
        <span>{item.label}</span>
      </button>
    {/each}

    <!-- Add button -->
    <div class="ds-add-wrap">
      <button class="ds-add-btn" on:click={() => navigate('/add-row')} aria-label="Add Row">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <span>Add Row</span>
      </button>
    </div>
  </nav>

  <!-- User -->
  <div class="ds-footer">
    <button class="ds-user" on:click={() => navigate('/profile')}>
      <div class="ds-user-av">AR</div>
      <div class="ds-user-info">
        <div class="ds-user-name">Alex Rivera</div>
        <div class="ds-user-email">alex@example.com</div>
      </div>
    </button>
  </div>
</aside>

<style>
  .desktop-sidebar {
    display: none; /* hidden on mobile */
  }

  @media (min-width: 900px) {
    .desktop-sidebar {
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0; top: 0; bottom: 0;
      width: 220px;
      background: #ffffff;
      border-right: 1px solid #f1f5f9;
      z-index: 50;
      box-shadow: 2px 0 12px rgba(19, 64, 160, 0.06);
    }
  }

  /* ── Logo ── */
  .ds-logo {
    height: 64px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 20px;
    border-bottom: 1px solid #f1f5f9;
    flex-shrink: 0;
  }
  .ds-logo-icon {
    width: 36px; height: 36px;
    background: linear-gradient(135deg, #5d91ff, #38bdf8);
    border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(46, 110, 247, 0.25);
  }
  .ds-logo-text {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.4px;
    font-family: var(--font-main);
  }

  /* ── Nav ── */
  .ds-nav {
    flex: 1;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
  }
  .ds-nav::-webkit-scrollbar { display: none; }

  .ds-nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.15s;
    color: #64748b;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 500;
  }
  .ds-nav-item:hover { background: #f8fafc; color: #0f172a; }
  .ds-nav-item.active {
    background: #eff6ff;
    color: #2e6ef7;
  }
  .ds-nav-item :global(svg) { flex-shrink: 0; }

  .ds-add-wrap {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid #f1f5f9;
  }
  .ds-add-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 12px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #2e6ef7, #1340a0);
    color: white;
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 14px rgba(46, 110, 247, 0.3);
  }
  .ds-add-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(46, 110, 247, 0.38); }

  /* ── Footer ── */
  .ds-footer {
    padding: 12px;
    border-top: 1px solid #f1f5f9;
    flex-shrink: 0;
  }
  .ds-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
    border: none;
    background: none;
    font-family: var(--font-main);
    text-align: left;
  }
  .ds-user:hover { background: #f8fafc; }
  .ds-user-av {
    width: 34px; height: 34px;
    border-radius: 10px;
    background: linear-gradient(135deg, #2e6ef7, #8b5cf6);
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700; color: #fff;
    flex-shrink: 0;
  }
  .ds-user-info { flex: 1; min-width: 0; }
  .ds-user-name { font-size: 13px; font-weight: 600; color: #0f172a; }
  .ds-user-email { font-size: 11px; color: #94a3b8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>
