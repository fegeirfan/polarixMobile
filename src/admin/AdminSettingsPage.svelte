<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import { showToast } from '../store';

  type Perm = { key: string; label: string; desc: string; emoji: string; enabled: boolean };

  let perms: Perm[] = [
    { key:'user',    label:'User Mgmt',       desc:'Create, edit, suspend',   emoji:'👤', enabled: true  },
    { key:'drive',   label:'Drive Access',    desc:'View all drives',          emoji:'☁️', enabled: true  },
    { key:'script',  label:'Script Approval', desc:'Review & approve',         emoji:'⚡', enabled: true  },
    { key:'billing', label:'Billing',         desc:'View invoices',            emoji:'💳', enabled: false },
    { key:'audit',   label:'Audit Log',       desc:'Full access',              emoji:'📋', enabled: true  },
    { key:'delete',  label:'Delete Data',     desc:'Permanent delete',         emoji:'🗑️', enabled: false },
  ];

  let notifs = [
    { label:'Storage alerts',  sub:'Notify when any drive is above 90%.', on: true  },
    { label:'New signups',     sub:'Daily digest of new users.',           on: true  },
    { label:'Script errors',   sub:'Immediate alert for failures.',        on: false },
    { label:'Security events', sub:'All failed logins and suspicious events.', on: true },
  ];

  function togglePerm(key: string) {
    perms = perms.map(p => p.key === key ? { ...p, enabled: !p.enabled } : p);
    showToast('Permission updated');
  }
  function toggleNotif(i: number) {
    notifs[i] = { ...notifs[i], on: !notifs[i].on };
    notifs = [...notifs];
    showToast(notifs[i].on ? 'Notification enabled' : 'Notification disabled');
  }
  function saveSettings() { showToast('Settings saved successfully'); }
</script>

<AdminLayout title="Settings">
  <div class="adm-grid-2">
    <!-- General settings -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">General</div></div>
        {#each [
          { label:'Platform Name',       placeholder:'Polarix',             val:'Polarix'           },
          { label:'Support Email',       placeholder:'support@polarix.io',  val:'support@polarix.io' },
        ] as f}
          <div class="adm-form-row" style="margin-bottom:0;">
            <div class="adm-form-group">
              <label class="adm-form-label">{f.label}</label>
              <input class="adm-form-input" value={f.val} placeholder={f.placeholder} />
            </div>
          </div>
          <div style="margin-bottom:14px;"></div>
        {/each}
        <div class="adm-form-row">
          <div class="adm-form-group">
            <label class="adm-form-label">Default Storage Limit</label>
            <select class="adm-form-select">
              <option>15 GB</option><option>50 GB</option><option>100 GB</option>
            </select>
          </div>
          <div class="adm-form-group">
            <label class="adm-form-label">Default Plan</label>
            <select class="adm-form-select">
              <option>Free</option><option>Pro</option>
            </select>
          </div>
        </div>
        <button class="adm-btn adm-btn-primary" style="width:100%; justify-content:center;" on:click={saveSettings}>
          Save Changes
        </button>
      </div>

      <!-- System info -->
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">System</div></div>
        {#each [
          { label:'Version',     val:'v1.2.0',   color:'var(--adm-t1)' },
          { label:'Last Backup', val:'12h ago',  color:'var(--adm-t1)' },
          { label:'Uptime',      val:'99.98%',   color:'var(--adm-green)' },
          { label:'Region',      val:'us-east-1', color:'var(--adm-t1)' },
          { label:'DB Size',     val:'2.4 TB',   color:'var(--adm-t1)' },
        ] as row, i}
          <div class="sys-row" style={i === 4 ? 'border:none;' : ''}>
            <span style="color:var(--adm-t2);">{row.label}</span>
            <span class="cell-mono" style="color:{row.color};">{row.val}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Right column -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      <!-- Admin permissions -->
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">Admin Permissions</div></div>
        <div class="perm-grid">
          {#each perms as p}
            <button class="perm-card" class:on={p.enabled} on:click={() => togglePerm(p.key)}>
              <div class="perm-emoji">{p.emoji}</div>
              <div class="perm-name">{p.label}</div>
              <div class="perm-desc">{p.desc}</div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Notifications -->
      <div class="adm-card">
        <div class="adm-sec-header"><div class="adm-sec-title">Notifications</div></div>
        {#each notifs as n, i}
          <div class="notif-row" style={i === notifs.length - 1 ? 'border:none; padding-bottom:0;' : ''}>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:500; color:var(--adm-t1);">{n.label}</div>
              <div style="font-size:11px; color:var(--adm-t3); margin-top:2px;">{n.sub}</div>
            </div>
            <button class="adm-toggle" class:on={n.on} on:click={() => toggleNotif(i)}></button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</AdminLayout>

<style>
  .sys-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 0; font-size: 13px;
    border-bottom: 1px solid var(--adm-border);
  }
  .perm-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
  }
  .perm-card {
    background: var(--adm-bg-3); border: 1px solid var(--adm-border);
    border-radius: var(--adm-r-md); padding: 12px; cursor: pointer;
    transition: all 0.15s; text-align: left; font-family: var(--adm-f-main);
  }
  .perm-card:hover { border-color: var(--adm-border-2); }
  .perm-card.on { border-color: var(--adm-blue-400); background: var(--adm-blue-100); }
  .perm-emoji { font-size: 18px; margin-bottom: 6px; }
  .perm-name  { font-size: 12px; font-weight: 600; color: var(--adm-t1); }
  .perm-desc  { font-size: 11px; color: var(--adm-t3); margin-top: 2px; }

  .notif-row {
    display: flex; align-items: center; gap: 14px;
    padding: 10px 0; border-bottom: 1px solid var(--adm-border);
  }
</style>
