<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import AdminStatCard from './components/AdminStatCard.svelte';
  import { showToast } from '../store';

  const drives = [
    { initials:'JD', grad:'#2e6ef7,#38bdf8', user:'James Doel',  email:'james.d@gmail.com',    provider:'Google Drive', label:'Work',     used:8.4,  capacity:15,  usedPercent:56, lastSync:'2m ago',  status:'Active',   stCls:'adm-badge-green' },
    { initials:'MK', grad:'#10b981,#34d399', user:'Michael K.',  email:'michael.k@startup.co',  provider:'OneDrive',     label:'Personal', used:14.8, capacity:15,  usedPercent:98, lastSync:'1h ago',  status:'Critical', stCls:'adm-badge-red'   },
    { initials:'SR', grad:'#8b5cf6,#ec4899', user:'Sara Rivera', email:'sara.r@company.io',     provider:'Dropbox',      label:'Archive',  used:2.1,  capacity:5,   usedPercent:42, lastSync:'30m ago', status:'Active',   stCls:'adm-badge-green' },
    { initials:'AL', grad:'#f59e0b,#ef4444', user:'Amy Liu',     email:'amy.liu@design.co',      provider:'AWS S3',       label:'Media',    used:32,   capacity:100, usedPercent:32, lastSync:'Now',     status:'Syncing',  stCls:'adm-badge-amber' },
  ];

  const providerColors: Record<string, string> = {
    'Google Drive': 'var(--adm-blue-400)',
    'OneDrive':     'var(--adm-red)',
    'Dropbox':      'var(--adm-accent)',
    'AWS S3':       'var(--adm-amber)',
  };
</script>

<AdminLayout title="Drives">
  <!-- Stat row -->
  <div class="adm-grid-3">
    <AdminStatCard label="Total Drives" value="4,392" deltaText="↑ 8%" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-blue-400), var(--adm-accent))"
      iconBg="var(--adm-blue-100)" iconStroke="var(--adm-blue-300)">
      <svelte:fragment slot="icon">
        <path d="M22 12H2"/>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Data Stored" value="2.4 TB" deltaText="↑ 14%" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-green), #34d399)"
      iconBg="var(--adm-green-dim)" iconStroke="var(--adm-green)">
      <svelte:fragment slot="icon">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Over 90% Full" value="128" deltaText="↑ 23 this week" deltaType="down"
      accentGradient="linear-gradient(90deg, var(--adm-red), #f87171)"
      iconBg="var(--adm-red-dim)" iconStroke="var(--adm-red)">
      <svelte:fragment slot="icon">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svelte:fragment>
    </AdminStatCard>
  </div>

  <!-- Drives + Provider breakdown -->
  <div class="adm-grid-2">
    <!-- Drives table -->
    <div class="adm-card">
      <div class="adm-sec-header"><div class="adm-sec-title">All Drives</div></div>
      <table class="adm-data-table">
        <thead>
          <tr><th>User</th><th>Provider</th><th>Label</th><th>Usage</th><th>Last Sync</th><th>Status</th></tr>
        </thead>
        <tbody>
          {#each drives as d}
            <tr>
              <td>
                <div class="adm-av-row">
                  <div class="adm-av" style="background:linear-gradient(135deg,{d.grad});">{d.initials}</div>
                  <div>
                    <div class="cell-primary">{d.user}</div>
                    <div style="font-size:11px; color:var(--adm-t3);">{d.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="adm-badge adm-badge-blue" style="font-size:10px;">{d.provider}</span>
              </td>
              <td style="color:var(--adm-t2);">{d.label}</td>
              <td>
                <div class="cell-mono" style="font-size:11px;">{d.used} / {d.capacity} GB</div>
                <div class="adm-prog-bar" style="width:70px;">
                  <div class="adm-prog-fill" style="width:{d.usedPercent}%; background:{d.usedPercent >= 90 ? 'var(--adm-red)' : 'var(--adm-blue-400)'};"></div>
                </div>
              </td>
              <td class="cell-mono" style="font-size:11px; color:var(--adm-t3);">{d.lastSync}</td>
              <td><span class="adm-badge {d.stCls}">{d.status}</span></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <!-- Provider breakdown -->
    <div class="adm-card">
      <div class="adm-sec-header" style="margin-bottom:20px;">
        <div class="adm-sec-title">Provider Breakdown</div>
      </div>
      <div class="provider-list">
        {#each [
          { provider:'Google Drive', drives:1842, share:42, color:'var(--adm-blue-400)' },
          { provider:'Dropbox',      drives:1102, share:25, color:'var(--adm-accent)'   },
          { provider:'OneDrive',     drives:880,  share:20, color:'var(--adm-red)'      },
          { provider:'AWS S3',       drives:568,  share:13, color:'var(--adm-amber)'    },
        ] as p}
          <div class="provider-item">
            <div class="provider-top">
              <div style="display:flex; align-items:center; gap:8px;">
                <div class="provider-dot" style="background:{p.color};"></div>
                <span style="color:var(--adm-t1); font-weight:500; font-size:13px;">{p.provider}</span>
              </div>
              <span class="cell-mono" style="font-size:12px; color:var(--adm-t1);">{p.drives}</span>
            </div>
            <div class="adm-prog-bar" style="height:6px; margin-top:8px;">
              <div class="adm-prog-fill" style="width:{p.share}%; background:{p.color};"></div>
            </div>
            <div style="font-size:11px; color:var(--adm-t3); margin-top:4px;">{p.share}% of all drives</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</AdminLayout>

<style>
  .provider-list  { display: flex; flex-direction: column; gap: 16px; }
  .provider-item  { }
  .provider-top   { display: flex; justify-content: space-between; align-items: center; }
  .provider-dot   { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
</style>