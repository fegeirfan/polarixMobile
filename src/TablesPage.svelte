<script lang="ts">
  import PageHeader from './components/PageHeader.svelte';
  import { tables } from './lib/data';
  import { navigate, showToast } from './store';

  let search = '';

  $: filteredTables = tables.filter((table) => table.name.toLowerCase().includes(search.toLowerCase()));
</script>

<div class="page active">
  <PageHeader title="Tables" action={{ label: 'Create Table', icon: 'plus', onClick: () => showToast('New table created!') }} />

  <div class="page-content">
    <div class="search-bar">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      <input bind:value={search} type="text" placeholder="Search tables..." />
    </div>

    <div class="tables-list">
      {#each filteredTables as table}
        <button class="table-card" on:click={() => navigate('/table-detail')}>
          <div class="table-card-icon" style={`background:${table.iconBackground};`}>{table.icon}</div>
          <div class="table-card-name">{table.name}</div>
          <div class="table-card-desc">{table.description}</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">{table.provider}</span>
            <span class="table-tag" class:table-tag-green={table.status === 'Active'} class:table-tag-amber={table.status === 'Syncing'} class:table-tag-red={table.status === 'Locked'}>{table.status}</span>
            <span class="table-card-rows">{table.rows} rows</span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
