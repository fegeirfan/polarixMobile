<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from './components/PageHeader.svelte';
  import { addRowFilters, tableRows, fetchTableRows } from './lib/data';
  import { navigate } from './store';

  export let tableId: string | undefined = undefined;

  let activeFilter = 'All';

  onMount(() => {
    fetchTableRows(tableId);
  });

  $: filteredRows = activeFilter === 'All' ? $tableRows : $tableRows.filter((row) => row.status === activeFilter);
</script>

<div class="page active">
  <PageHeader title="Project Documents" backRoute="/tables" action={{ label: 'Add Row', icon: 'plus', onClick: () => navigate('/add-row') }} />

  <div class="detail-header-info">
    <div class="detail-meta">
      <div class="detail-meta-item">48 rows</div>
      <div class="detail-meta-item">Google Drive</div>
      <div class="detail-meta-item">Updated 2m ago</div>
    </div>
  </div>

  <div class="filter-bar">
    {#each addRowFilters as filter}
      <button class="filter-chip" class:active={activeFilter === filter} on:click={() => (activeFilter = filter)}>{filter}</button>
    {/each}
  </div>

  <div class="detail-scroll-wrap">
    <div class="rows-list">
      {#each filteredRows as row}
        <div class="row-card">
          <div class="row-card-header">
            <div class="row-title">{row.title}</div>
            <span class="row-badge" class:badge-active={row.status === 'Active'} class:badge-pending={row.status === 'Pending'} class:badge-archived={row.status === 'Archived'}>{row.status}</span>
          </div>
          <div class="row-fields">
            {#each row.fields as field}
              <div class="row-field">
                <div class="row-field-label">{field.label}</div>
                <div class="row-field-val">{field.value}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
