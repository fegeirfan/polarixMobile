<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import { showToast } from '../store';

  type EventKind = 'security' | 'drive' | 'script' | 'storage' | 'login' | 'backup' | 'user';

  const events: { title: string; detail: string; time: string; kind: EventKind }[] = [
    { title:'User suspended — @dan_k',          detail:'Reason: ToS violation (section 4.2) · Actor: super_admin · IP: 192.168.1.1',  time:'3m',  kind:'security' },
    { title:'Drive connected — Google Drive',    detail:'User: james.doel@gmail.com · Region: us-east-1',                              time:'2h',  kind:'drive'    },
    { title:'Script approved — Auto-Tag v2',     detail:'Reviewed & approved by: admin · runs_allowed: unlimited',                     time:'4h',  kind:'script'   },
    { title:'Storage alert triggered',           detail:'OneDrive · user: michael.k · 97% capacity',                                  time:'6h',  kind:'storage'  },
    { title:'Admin login',                       detail:'super_admin · IP: 203.0.113.42 · Chrome / MacOS',                            time:'8h',  kind:'login'    },
    { title:'Backup completed',                  detail:'Full snapshot · 2.4 TB · duration: 14m 22s',                                 time:'12h', kind:'backup'   },
    { title:'Failed login attempt',              detail:'Unknown user · IP: 45.33.32.156 · 3 attempts',                               time:'1d',  kind:'security' },
    { title:'New user registered — Amy Liu',     detail:'amy.liu@design.co · Plan: Pro · Region: ap-southeast',                       time:'2d',  kind:'user'     },
  ];

  const dotColor: Record<EventKind, string> = {
    security: 'var(--adm-red)',
    drive:    'var(--adm-blue-400)',
    script:   'var(--adm-green)',
    storage:  'var(--adm-amber)',
    login:    'var(--adm-purple)',
    backup:   '#22c55e',
    user:     'var(--adm-accent)',
  };

  const breakdown = [
    { label:'User actions',      val:'1,284', critical: false },
    { label:'Drive events',      val:'892',   critical: false },
    { label:'Script executions', val:'3,214', critical: false },
    { label:'Security events',   val:'7',     critical: true  },
    { label:'Admin actions',     val:'42',    critical: false },
  ];
</script>

<AdminLayout title="Audit Log">
  <div class="adm-grid-2">
    <!-- Events list -->
    <div class="adm-card" style="grid-column: span 1;">
      <div class="adm-sec-header">
        <div class="adm-sec-title">Recent Events</div>
        <button class="adm-btn" on:click={() => showToast('Exported audit log')}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Export
        </button>
      </div>
      {#each events as e, i}
        <div class="adm-log-item" style={i === events.length - 1 ? 'border:none;' : ''}>
          <div class="adm-log-dot-wrap">
            <div class="adm-log-dot" style="background:{dotColor[e.kind]};"></div>
            {#if i < events.length - 1}<div class="adm-log-line"></div>{/if}
          </div>
          <div class="adm-log-body">
            <div class="adm-log-action">{e.title}</div>
            <div class="adm-log-detail">{e.detail}</div>
          </div>
          <div class="adm-log-time">{e.time}</div>
        </div>
      {/each}
    </div>

    <!-- Right column -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      <!-- Breakdown -->
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">Event Breakdown</div></div>
        {#each breakdown as b, i}
          <div class="breakdown-row" class:critical={b.critical} style={i === breakdown.length - 1 ? 'border:none;' : ''}>
            <span class="breakdown-label" style={b.critical ? 'color:var(--adm-red);' : ''}>{b.label}</span>
            <span class="breakdown-val cell-mono" style={b.critical ? 'color:var(--adm-red);' : ''}>{b.val}</span>
          </div>
        {/each}
      </div>

      <!-- Event types legend -->
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">Event Types</div></div>
        <div class="legend-grid">
          {#each Object.entries(dotColor) as [kind, color]}
            <div class="legend-item">
              <div class="legend-dot" style="background:{color};"></div>
              <span style="color:var(--adm-t2); font-size:12px; text-transform:capitalize;">{kind}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Security alert -->
      <div class="adm-alert adm-alert-red" style="margin-bottom:0;">
        <div class="adm-alert-icon">🛡️</div>
        <div>
          <div class="adm-alert-title">7 security events this week</div>
          <div class="adm-alert-text">Including 1 failed login from an unrecognized IP. Review recommended.</div>
        </div>
      </div>
    </div>
  </div>
</AdminLayout>

<style>
  .breakdown-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--adm-border);
    font-size: 13px;
  }
  .breakdown-label { color: var(--adm-t2); }
  .breakdown-val   { color: var(--adm-t1); }
  .breakdown-row.critical { background: var(--adm-red-dim); padding: 10px 8px; border-radius: 6px; }

  .legend-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .legend-item { display: flex; align-items: center; gap: 8px; }
  .legend-dot  { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
</style>
