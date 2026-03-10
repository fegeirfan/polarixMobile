<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import AdminStatCard from './components/AdminStatCard.svelte';

  let growthTab = 'Monthly';
  const monthlyData = [30, 42, 38, 55, 60, 74, 68, 82, 79, 88, 92, 100];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
</script>

<AdminLayout title="Analytics">
  <!-- Stat row -->
  <div class="adm-grid-4">
    <AdminStatCard label="MAU" value="847" deltaText="↑ 18% MoM" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-blue-400), var(--adm-accent))"
      iconBg="var(--adm-blue-100)" iconStroke="var(--adm-blue-300)">
      <svelte:fragment slot="icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Retention Rate" value="94.2%" deltaText="↑ 2.1%" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-green), #34d399)"
      iconBg="var(--adm-green-dim)" iconStroke="var(--adm-green)">
      <svelte:fragment slot="icon">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="Avg Session" value="7.4m" deltaText="↑ 0.8m" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-amber), #fbbf24)"
      iconBg="var(--adm-amber-dim)" iconStroke="var(--adm-amber)">
      <svelte:fragment slot="icon">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svelte:fragment>
    </AdminStatCard>

    <AdminStatCard label="MRR" value="$8,240" deltaText="↑ 9%" deltaType="up"
      accentGradient="linear-gradient(90deg, var(--adm-purple), #a78bfa)"
      iconBg="var(--adm-purple-dim)" iconStroke="var(--adm-purple)">
      <svelte:fragment slot="icon">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svelte:fragment>
    </AdminStatCard>
  </div>

  <!-- Growth chart + Plan split -->
  <div class="adm-grid-3-1">
    <div class="adm-card">
      <div class="adm-sec-header">
        <div class="adm-sec-title">User Growth</div>
        <div class="adm-tabs">
          {#each ['Monthly', 'Weekly'] as t}
            <button class="adm-tab-btn" class:active={growthTab === t} on:click={() => (growthTab = t)}>{t}</button>
          {/each}
        </div>
      </div>
      <div class="adm-bar-chart" style="height:140px;">
        {#each monthlyData as h, i}
          <div class="adm-bar-chart-col">
            <div class="adm-bar-chart-bar" style="height:{h}%;"></div>
            <div class="adm-bar-chart-label">{months[i]}</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="adm-card">
      <div class="adm-sec-title" style="margin-bottom:16px;">Plan Split</div>
      <div class="plan-split">
        {#each [
          { label: 'Free', val: '62% · 774', w: 62, color: 'var(--adm-t3)' },
          { label: 'Pro',  val: '28% · 349', w: 28, color: 'var(--adm-blue-400)' },
          { label: 'Team', val: '10% · 125', w: 10, color: 'var(--adm-purple)' },
        ] as p}
          <div>
            <div class="plan-row">
              <span style="color:var(--adm-t2);">{p.label}</span>
              <span style="color:var(--adm-t1); font-family:var(--adm-f-mono);">{p.val}</span>
            </div>
            <div class="adm-prog-bar" style="height:7px;">
              <div class="adm-prog-fill" style="width:{p.w}%; background:{p.color};"></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Feature usage table -->
  <div class="adm-card">
    <div class="adm-sec-header"><div class="adm-sec-title">Top Feature Usage</div></div>
    <table class="adm-data-table">
      <thead>
        <tr><th>Feature</th><th>Calls (30d)</th><th>Unique Users</th><th>Avg / User</th><th>Trend</th></tr>
      </thead>
      <tbody>
        {#each [
          { name:'File Upload',    calls:'482,912', users:'1,102', avg:'438', bars:[40,60,55,80,70,100] },
          { name:'Script Runs',    calls:'98,241',  users:'644',   avg:'152', bars:[30,45,42,60,58,75] },
          { name:'Table Creation', calls:'24,880',  users:'891',   avg:'27',  bars:[50,55,48,65,60,80] },
          { name:'Drive Connect',  calls:'9,122',   users:'1,248', avg:'7',   bars:[80,65,70,55,60,70] },
        ] as f}
          <tr>
            <td class="cell-primary">{f.name}</td>
            <td class="cell-mono">{f.calls}</td>
            <td class="cell-mono">{f.users}</td>
            <td class="cell-mono">{f.avg}</td>
            <td>
              <div class="adm-spark">
                {#each f.bars as h}
                  <div class="adm-spark-bar" style="height:{h}%;"></div>
                {/each}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</AdminLayout>

<style>
  .plan-split { display: flex; flex-direction: column; gap: 14px; }
  .plan-row   { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px; }
</style>
