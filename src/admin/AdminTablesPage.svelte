<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import AdminStatCard from './components/AdminStatCard.svelte';
  import { showToast } from '../store';

  type TableStatus = 'Active' | 'Syncing' | 'Locked';

  const tables = [
    { name:'Project Documents', owner:'James Doel',  drive:'Google Drive', rows:48,  size:'620 MB', created:'Jan 5',  status:'Active'  as TableStatus },
    { name:'Media Archive',     owner:'Amy Liu',     drive:'Dropbox',      rows:132, size:'4.2 GB', created:'Feb 12', status:'Active'  as TableStatus },
    { name:'Research Data',     owner:'Sara Rivera', drive:'AWS S3',       rows:27,  size:'1.1 GB', created:'Mar 2',  status:'Syncing' as TableStatus },
    { name:'Email Attachments', owner:'James Doel',  drive:'OneDrive',     rows:89,  size:'780 MB', created:'Mar 5',  status:'Active'  as TableStatus },
    { name:'Private Vault',     owner:'Michael K.',  drive:'OneDrive',     rows:14,  size:'280 MB', created:'Mar 10', status:'Locked'  as TableStatus },
  ];

  const statusBadge: Record<TableStatus, string> = {
    Active:  'adm-badge-green',
    Syncing: 'adm-badge-amber',
    Locked:  'adm-badge-gray',
  };
</script>

<AdminLayout title="Tables">
  <!-- Stats -->
  <div class="adm-grid-3">
    <AdminStatCard label="Total Tables" value="18,741" deltaText="↑ 22% vs last month" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-purple), #a78bfa)"
      iconBg="var(--adm-purple-dim)" iconStroke="var(--adm-purple)">
      <svelte:fragment slot="icon">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Active Tables" value="16,204" deltaText="↑ 18%" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-green), #34d399)"
      iconBg="var(--adm-green-dim)" iconStroke="var(--adm-green)">
      <svelte:fragment slot="icon">
        <polyline points="20 6 9 17 4 12"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Locked Tables" value="312" deltaText="↓ 4% this week" deltaType="down"
      accentGradient="linear-gradient(90deg, var(--adm-red), #f87171)"
      iconBg="var(--adm-red-dim)" iconStroke="var(--adm-red)">
      <svelte:fragment slot="icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svelte:fragment>
    </AdminStatCard>
  </div>

  <!-- Tables data -->
  <div class="adm-card">
    <div class="adm-sec-header">
      <div class="adm-sec-title">All Tables</div>
      <button class="adm-btn" on:click={() => showToast('Exported table list')}>
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
        <tr>
          <th>Table Name</th><th>Owner</th><th>Drive</th>
          <th>Rows</th><th>Size</th><th>Created</th><th>Status</th><th></th>
        </tr>
      </thead>
      <tbody>
        {#each tables as t}
          <tr>
            <td>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:16px;">📁</span>
                <span class="cell-primary">{t.name}</span>
              </div>
            </td>
            <td style="color:var(--adm-t2);">{t.owner}</td>
            <td>
              <span class="adm-badge adm-badge-blue" style="font-size:10px;">{t.drive}</span>
            </td>
            <td class="cell-mono">{t.rows}</td>
            <td class="cell-mono" style="color:var(--adm-t2);">{t.size}</td>
            <td style="color:var(--adm-t3); font-size:12px; font-family:var(--adm-f-mono);">{t.created}</td>
            <td><span class="adm-badge {statusBadge[t.status]}">{t.status}</span></td>
            <td>
              <div style="display:flex; gap:4px;">
                <button class="adm-icon-btn" on:click={() => showToast(`Viewing ${t.name}`)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
                <button class="adm-icon-btn" on:click={() => showToast(`Editing ${t.name}`)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</AdminLayout>
