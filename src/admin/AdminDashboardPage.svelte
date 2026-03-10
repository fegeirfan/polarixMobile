<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import AdminStatCard from './components/AdminStatCard.svelte';
  import { navigate, showToast } from '../store';

  let activeTab = '7d';
  const chartData = [45, 62, 38, 80, 55, 30, 22];
  const chartDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
</script>

<AdminLayout title="Dashboard">
  <!-- Alert -->
  <div class="adm-alert adm-alert-red">
    <div class="adm-alert-icon">⚠️</div>
    <div>
      <div class="adm-alert-title">OneDrive storage critical — 3 users</div>
      <div class="adm-alert-text">3 users have drives above 95% capacity. Consider cleanup or plan upgrades.</div>
    </div>
    <button class="adm-btn" style="margin-left:auto; flex-shrink:0;" on:click={() => navigate('/admin/drives')}>
      View Drives
    </button>
  </div>

  <!-- Stat row -->
  <div class="adm-grid-4">
    <AdminStatCard
      label="Total Users"
      value="1,248"
      deltaText="↑ 12% vs last month"
      deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-blue-400), var(--adm-accent))"
      iconBg="var(--adm-blue-100)"
      iconStroke="var(--adm-blue-300)"
    >
      <svelte:fragment slot="icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard
      label="Connected Drives"
      value="4,392"
      deltaText="↑ 8% vs last month"
      deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-green), #34d399)"
      iconBg="var(--adm-green-dim)"
      iconStroke="var(--adm-green)"
    >
      <svelte:fragment slot="icon">
        <path d="M22 12H2"/>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard
      label="Total Tables"
      value="18,741"
      deltaText="↑ 22% vs last month"
      deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-purple), #a78bfa)"
      iconBg="var(--adm-purple-dim)"
      iconStroke="var(--adm-purple)"
    >
      <svelte:fragment slot="icon">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard
      label="Scripts Run Today"
      value="3,214"
      deltaText="↓ 3% vs yesterday"
      deltaType="down"
      accentGradient="linear-gradient(90deg, var(--adm-amber), #fbbf24)"
      iconBg="var(--adm-amber-dim)"
      iconStroke="var(--adm-amber)"
    >
      <svelte:fragment slot="icon">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svelte:fragment>
    </AdminStatCard>
  </div>

  <!-- Chart + Storage -->
  <div class="adm-grid-3-1">
    <!-- Activity chart -->
    <div class="adm-card">
      <div class="adm-sec-header">
        <div>
          <div class="adm-sec-title">Platform Activity</div>
          <div class="chart-sub"><span class="adm-live-dot"></span>Live data · Updated now</div>
        </div>
        <div class="adm-tabs">
          {#each ['7d', '30d', '90d'] as t}
            <button class="adm-tab-btn" class:active={activeTab === t} on:click={() => (activeTab = t)}>{t}</button>
          {/each}
        </div>
      </div>
      <div class="adm-bar-chart" style="height:120px;">
        {#each chartData as h, i}
          <div class="adm-bar-chart-col">
            <div class="adm-bar-chart-bar" class:secondary={i >= 5} style="height:{h}%;"></div>
            <div class="adm-bar-chart-label">{chartDays[i]}</div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Storage -->
    <div class="adm-card">
      <div class="adm-sec-header" style="margin-bottom:16px;">
        <div class="adm-sec-title">Storage</div>
      </div>
      <div class="storage-donut-row">
        <svg class="donut-svg" viewBox="0 0 80 80">
          <circle class="donut-track" cx="40" cy="40" r="30"/>
          <circle class="donut-fill" cx="40" cy="40" r="30" stroke="var(--adm-blue-400)" stroke-dasharray="188.5" stroke-dashoffset="65"/>
        </svg>
        <div>
          <div class="storage-val">2.4 TB</div>
          <div class="storage-sub">of 4 TB used (65%)</div>
        </div>
      </div>
      <div class="storage-lines">
        {#each [
          { label: 'Google Drive', val: '980 GB', w: 58, color: 'var(--adm-blue-400)', err: false },
          { label: 'Dropbox',      val: '440 GB', w: 36, color: 'var(--adm-accent)',   err: false },
          { label: 'OneDrive',     val: '980 GB', w: 95, color: 'var(--adm-red)',      err: true  },
          { label: 'AWS S3',       val: '120 GB', w: 18, color: 'var(--adm-amber)',    err: false },
        ] as d}
          <div class="storage-row">
            <span class="storage-lbl">{d.label}</span>
            <span class="storage-num" style={d.err ? 'color:var(--adm-red);' : ''}>{d.val}</span>
          </div>
          <div class="adm-prog-bar"><div class="adm-prog-fill" style="width:{d.w}%; background:{d.color};"></div></div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Users + Audit -->
  <div class="adm-grid-2">
    <!-- Recent signups -->
    <div class="adm-card">
      <div class="adm-sec-header">
        <div class="adm-sec-title">Recent Signups</div>
        <button class="adm-sec-link" on:click={() => navigate('/admin/users')}>View all →</button>
      </div>
      <table class="adm-data-table">
        <thead>
          <tr><th>User</th><th>Plan</th><th>Joined</th><th>Status</th></tr>
        </thead>
        <tbody>
          {#each [
            { initials:'JD', grad:'#2e6ef7,#38bdf8', name:'James Doel',  plan:'Pro',  planCls:'adm-badge-blue',   joined:'2h ago',  status:'Active',  stCls:'adm-badge-green' },
            { initials:'SR', grad:'#8b5cf6,#ec4899', name:'Sara R.',     plan:'Free', planCls:'adm-badge-gray',   joined:'5h ago',  status:'Active',  stCls:'adm-badge-green' },
            { initials:'MK', grad:'#10b981,#34d399', name:'Michael K.',  plan:'Team', planCls:'adm-badge-purple', joined:'1d ago',  status:'Pending', stCls:'adm-badge-amber' },
            { initials:'AL', grad:'#f59e0b,#ef4444', name:'Amy Liu',     plan:'Pro',  planCls:'adm-badge-blue',   joined:'2d ago',  status:'Active',  stCls:'adm-badge-green' },
          ] as u}
            <tr>
              <td>
                <div class="adm-av-row">
                  <div class="adm-av" style="background:linear-gradient(135deg,{u.grad});">{u.initials}</div>
                  <span class="cell-primary">{u.name}</span>
                </div>
              </td>
              <td><span class="adm-badge {u.planCls}">{u.plan}</span></td>
              <td class="cell-mono" style="font-size:11px;color:var(--adm-t3);">{u.joined}</td>
              <td><span class="adm-badge {u.stCls}">{u.status}</span></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <!-- Audit log -->
    <div class="adm-card">
      <div class="adm-sec-header">
        <div class="adm-sec-title">Recent Audit Events</div>
        <button class="adm-sec-link" on:click={() => navigate('/admin/audit')}>View log →</button>
      </div>
      {#each [
        { color: 'var(--adm-red)',      action: 'User suspended — @dan_k',        detail: 'Reason: ToS violation · by super_admin', time: '3m' },
        { color: 'var(--adm-blue-400)', action: 'Drive connected — Google Drive',  detail: 'User: james.doel@gmail.com',              time: '2h' },
        { color: 'var(--adm-green)',    action: 'Script approved — Auto-Tag v2',   detail: 'Reviewed by: admin',                     time: '4h' },
        { color: 'var(--adm-amber)',    action: 'Storage alert triggered',          detail: 'OneDrive · user: michael.k · 97%',       time: '6h' },
        { color: 'var(--adm-t3)',       action: 'Backup completed',                 detail: 'Full snapshot · 2.4 TB',                  time: '12h' },
      ] as e, i}
        <div class="adm-log-item" style={i === 4 ? 'border:none;' : ''}>
          <div class="adm-log-dot-wrap">
            <div class="adm-log-dot" style="background:{e.color};"></div>
            {#if i < 4}<div class="adm-log-line"></div>{/if}
          </div>
          <div class="adm-log-body">
            <div class="adm-log-action">{e.action}</div>
            <div class="adm-log-detail">{e.detail}</div>
          </div>
          <div class="adm-log-time">{e.time}</div>
        </div>
      {/each}
    </div>
  </div>
</AdminLayout>

<style>
  .chart-sub { font-size: 11px; color: var(--adm-t3); margin-top: 3px; }

  .storage-donut-row {
    display: flex; align-items: center; gap: 14px; margin-bottom: 16px;
  }
  .donut-svg { width: 80px; height: 80px; transform: rotate(-90deg); flex-shrink: 0; }
  .donut-track { fill: none; stroke: var(--adm-bg-4); stroke-width: 8; }
  .donut-fill  { fill: none; stroke-width: 8; stroke-linecap: round; }

  .storage-val { font-size: 20px; font-weight: 700; font-family: var(--adm-f-mono); color: var(--adm-t1); }
  .storage-sub { font-size: 11px; color: var(--adm-t3); margin-top: 2px; }
  .storage-lines { display: flex; flex-direction: column; gap: 8px; }
  .storage-row {
    display: flex; justify-content: space-between;
    font-size: 12px; margin-bottom: 2px;
  }
  .storage-lbl { color: var(--adm-t2); }
  .storage-num { color: var(--adm-t1); font-family: var(--adm-f-mono); }
</style>
