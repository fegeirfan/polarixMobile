<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import { showToast } from '../store';

  type ScriptStatus = 'Active' | 'Pending Review' | 'Disabled';

  const scripts = [
    { name:'Auto-Tag Files',      owner:'James Doel',  trigger:'on_upload',         runs:'12,841', lastRun:'1h ago',  status:'Active'         as ScriptStatus },
    { name:'Email Sync',          owner:'Sara Rivera', trigger:'cron 0 9 * * *',    runs:'30',     lastRun:'3h ago',  status:'Active'         as ScriptStatus },
    { name:'Bulk Mover v2',       owner:'Michael K.',  trigger:'manual',            runs:'—',      lastRun:'—',       status:'Pending Review' as ScriptStatus },
    { name:'Archive Old Files',   owner:'Amy Liu',     trigger:'cron 0 0 1 * *',   runs:'3',      lastRun:'30d ago', status:'Disabled'       as ScriptStatus },
  ];

  const statusBadge: Record<ScriptStatus, string> = {
    'Active':         'adm-badge-green',
    'Pending Review': 'adm-badge-amber',
    'Disabled':       'adm-badge-gray',
  };
</script>

<AdminLayout title="Scripts">
  <!-- Alert -->
  <div class="adm-alert adm-alert-amber">
    <div class="adm-alert-icon">⚠️</div>
    <div style="flex:1;">
      <div class="adm-alert-title">1 script pending review</div>
      <div class="adm-alert-text">User-submitted script "Bulk Mover v2" is awaiting admin approval.</div>
    </div>
    <button class="adm-btn adm-btn-primary adm-btn-sm" on:click={() => showToast('Script approved')}>Approve</button>
  </div>

  <!-- Scripts table -->
  <div class="adm-card">
    <div class="adm-sec-header">
      <div class="adm-sec-title">All Scripts</div>
      <button class="adm-btn" on:click={() => showToast('Exported scripts list')}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Export
      </button>
    </div>
    <table class="adm-data-table">
      <thead>
        <tr><th>Script</th><th>Owner</th><th>Trigger</th><th>Runs (30d)</th><th>Last Run</th><th>Status</th><th></th></tr>
      </thead>
      <tbody>
        {#each scripts as s}
          <tr>
            <td>
              <div style="display:flex; align-items:center; gap:8px;">
                <div class="script-icon-wrap">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--adm-blue-300)" stroke-width="2" stroke-linecap="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <span class="cell-primary">{s.name}</span>
              </div>
            </td>
            <td style="color:var(--adm-t2);">{s.owner}</td>
            <td>
              <span class="script-trigger">{s.trigger}</span>
            </td>
            <td class="cell-mono">{s.runs}</td>
            <td class="cell-mono" style="color:var(--adm-t3); font-size:11px;">{s.lastRun}</td>
            <td><span class="adm-badge {statusBadge[s.status]}">{s.status}</span></td>
            <td>
              <div style="display:flex; gap:4px;">
                <button class="adm-icon-btn" on:click={() => showToast(`Viewing ${s.name}`)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
                {#if s.status === 'Pending Review'}
                  <button class="adm-btn adm-btn-primary adm-btn-sm" on:click={() => showToast(`${s.name} approved`)}>
                    Approve
                  </button>
                {:else if s.status === 'Active'}
                  <button class="adm-btn adm-btn-sm" style="color:var(--adm-red); border-color:rgba(239,68,68,0.2);"
                    on:click={() => showToast(`${s.name} disabled`)}>
                    Disable
                  </button>
                {:else}
                  <button class="adm-btn adm-btn-sm" on:click={() => showToast(`${s.name} enabled`)}>Enable</button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Stats row -->
  <div class="adm-grid-3" style="margin-top:20px;">
    {#each [
      { label:'Total Runs (30d)', val:'12,874', color:'var(--adm-blue-400)' },
      { label:'Active Scripts',   val:'2',       color:'var(--adm-green)'   },
      { label:'Pending Review',   val:'1',       color:'var(--adm-amber)'   },
    ] as s}
      <div class="adm-card" style="display:flex; align-items:center; gap:14px;">
        <div class="stat-mini-dot" style="background:{s.color};"></div>
        <div>
          <div style="font-size:20px; font-weight:700; font-family:var(--adm-f-mono); color:var(--adm-t1);">{s.val}</div>
          <div style="font-size:12px; color:var(--adm-t2); margin-top:2px;">{s.label}</div>
        </div>
      </div>
    {/each}
  </div>
</AdminLayout>

<style>
  .script-icon-wrap {
    width: 28px; height: 28px; border-radius: 7px;
    background: var(--adm-blue-100);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .script-trigger {
    font-family: var(--adm-f-mono);
    font-size: 11px;
    color: var(--adm-t3);
    background: var(--adm-bg-3);
    padding: 2px 7px;
    border-radius: 5px;
  }
  .stat-mini-dot {
    width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
  }
</style>
