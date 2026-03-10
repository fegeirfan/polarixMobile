<script lang="ts">
  import AdminLayout from './AdminLayout.svelte';
  import { showToast } from '../store';

  type UserStatus = 'Active' | 'Suspended' | 'Pending';
  type AdminUser = {
    initials: string; grad: string;
    name: string; email: string;
    plan: string; planCls: string;
    drives: number; storage: string; storagePercent: number;
    joined: string; status: UserStatus; statusCls: string;
  };

  const allUsers: AdminUser[] = [
    { initials:'JD', grad:'#2e6ef7,#38bdf8', name:'James Doel',  email:'james.d@gmail.com',       plan:'Pro',  planCls:'adm-badge-blue',   drives:4, storage:'8.4 GB',  storagePercent:56, joined:'2 Jan 2025',  status:'Active',    statusCls:'adm-badge-green' },
    { initials:'SR', grad:'#8b5cf6,#ec4899', name:'Sara Rivera', email:'sara.r@company.io',        plan:'Free', planCls:'adm-badge-gray',   drives:1, storage:'2.1 GB',  storagePercent:21, joined:'15 Jan 2025', status:'Active',    statusCls:'adm-badge-green' },
    { initials:'MK', grad:'#10b981,#34d399', name:'Michael K.',  email:'michael.k@startup.co',     plan:'Team', planCls:'adm-badge-purple', drives:7, storage:'14.8 GB', storagePercent:98, joined:'3 Feb 2025',  status:'Pending',   statusCls:'adm-badge-amber' },
    { initials:'AL', grad:'#f59e0b,#ef4444', name:'Amy Liu',     email:'amy.liu@design.co',         plan:'Pro',  planCls:'adm-badge-blue',   drives:3, storage:'5.6 GB',  storagePercent:37, joined:'20 Feb 2025', status:'Active',    statusCls:'adm-badge-green' },
    { initials:'DK', grad:'#ef4444,#f97316', name:'Dan K.',      email:'dan.k@personal.me',         plan:'Free', planCls:'adm-badge-gray',   drives:2, storage:'1.2 GB',  storagePercent:12, joined:'5 Mar 2025',  status:'Suspended', statusCls:'adm-badge-red'   },
  ];

  type Filter = 'All' | UserStatus;
  let activeFilter: Filter = 'All';

  $: filteredUsers = activeFilter === 'All'
    ? allUsers
    : allUsers.filter(u => u.status === activeFilter);
</script>

<AdminLayout title="Users">
  <!-- Alert -->
  <div class="adm-alert adm-alert-amber">
    <div class="adm-alert-icon">🔔</div>
    <div>
      <div class="adm-alert-title">3 pending user verifications</div>
      <div class="adm-alert-text">Users waiting for email verification or manual review.</div>
    </div>
  </div>

  <!-- Users table card -->
  <div class="adm-card">
    <div class="adm-sec-header">
      <div class="adm-tabs">
        {#each ['All', 'Active', 'Suspended', 'Pending'] as f}
          <button class="adm-tab-btn" class:active={activeFilter === f} on:click={() => (activeFilter = f as Filter)}>{f}</button>
        {/each}
      </div>
      <button class="adm-btn adm-btn-primary" on:click={() => showToast('Invite modal opened')}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Invite
      </button>
    </div>

    <table class="adm-data-table">
      <thead>
        <tr>
          <th>User</th><th>Email</th><th>Plan</th><th>Drives</th>
          <th>Storage</th><th>Joined</th><th>Status</th><th></th>
        </tr>
      </thead>
      <tbody>
        {#each filteredUsers as u}
          <tr>
            <td>
              <div class="adm-av-row">
                <div class="adm-av" style="background:linear-gradient(135deg,{u.grad});">{u.initials}</div>
                <span class="cell-primary">{u.name}</span>
              </div>
            </td>
            <td style="color:var(--adm-t3);font-size:12px;">{u.email}</td>
            <td><span class="adm-badge {u.planCls}">{u.plan}</span></td>
            <td class="cell-mono">{u.drives}</td>
            <td>
              <div style="font-size:12px; font-family:var(--adm-f-mono); color:var(--adm-t1);">{u.storage}</div>
              <div class="adm-prog-bar" style="width:80px;">
                <div class="adm-prog-fill" style="width:{u.storagePercent}%; background:{u.storagePercent >= 90 ? 'var(--adm-red)' : u.storagePercent >= 50 ? 'var(--adm-blue-400)' : 'var(--adm-green)'};"></div>
              </div>
            </td>
            <td class="cell-mono" style="font-size:11px; color:var(--adm-t3);">{u.joined}</td>
            <td><span class="adm-badge {u.statusCls}">{u.status}</span></td>
            <td>
              <div style="display:flex; gap:4px;">
                <button class="adm-icon-btn" on:click={() => showToast(`Viewing ${u.name}`)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
                <button class="adm-icon-btn" on:click={() => showToast(`Editing ${u.name}`)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                {#if u.status === 'Suspended'}
                  <button class="adm-icon-btn" on:click={() => showToast(`Restored ${u.name}`)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                    </svg>
                  </button>
                {:else}
                  <button class="adm-icon-btn-danger" on:click={() => showToast(`${u.name} suspended`)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</AdminLayout>
