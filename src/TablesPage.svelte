<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from './components/PageHeader.svelte';
  import { tables, fetchTables, drives, fetchDrives, addTable, deleteTable } from './lib/data';
  import { navigate, showToast } from './store';

  onMount(() => {
    fetchTables();
    fetchDrives();
  });

  let search = '';
  let showAddModal = false;
  let newTableName = '';
  let selectedDriveId = '';
  let isSubmitting = false;

  $: filteredTables = $tables.filter((table) => table.name.toLowerCase().includes(search.toLowerCase()));

  async function handleAddTable() {
    if (!newTableName || !selectedDriveId) {
      showToast('Please fill all fields');
      return;
    }
    
    isSubmitting = true;
    const selectedDrive = $drives.find(d => d.id === selectedDriveId);
    const providerName = selectedDrive ? selectedDrive.name : 'Unknown Drive';

    const success = await addTable({
      name: newTableName,
      description: 'New custom table',
      provider: providerName,
      status: 'Active',
      rows_count: 0
    });

    isSubmitting = false;

    if (success) {
      showToast('Table created successfully');
      showAddModal = false;
      newTableName = '';
      selectedDriveId = '';
    } else {
      showToast('Failed to create table');
    }
  }

  async function handleDelete(e: Event, id: string) {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this table?')) {
      const success = await deleteTable(id);
      if (success) {
        showToast('Table deleted');
      } else {
        showToast('Failed to delete table');
      }
    }
  }
</script>

<div class="page active">
  <PageHeader title="Tables" action={{ label: 'Create Table', icon: 'plus', onClick: () => (showAddModal = true) }} />

  <div class="page-content">
    <div class="search-bar">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      <input bind:value={search} type="text" placeholder="Search tables..." />
    </div>

    <div class="tables-list">
      {#each filteredTables as table}
        <a href="/table-detail" class="table-card" style="text-decoration: none; display: block;" on:click|preventDefault={() => navigate('/table-detail')}>
          <div class="table-card-name" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span>{table.name}</span>
            <button class="delete-btn" on:click={(e) => handleDelete(e, table.id)} aria-label="Delete Table">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
          <div class="table-card-desc">{table.description}</div>
          <div class="table-card-footer">
            <span class="table-tag table-tag-blue">{table.provider}</span>
            <span class="table-tag" class:table-tag-green={table.status === 'Active'} class:table-tag-amber={table.status === 'Syncing'} class:table-tag-red={table.status === 'Locked'}>{table.status}</span>
            <span class="table-card-rows">{table.rows_count} rows</span>
          </div>
        </a>
      {/each}
    </div>
  </div>

  {#if showAddModal}
    <div class="modal-backdrop" on:click={() => (showAddModal = false)}>
      <div class="modal-content" on:click|stopPropagation>
        <h2>Create New Table</h2>
        
        <div class="form-group">
          <label for="tableName">Table Name</label>
          <input id="tableName" type="text" bind:value={newTableName} placeholder="Enter table name..." />
        </div>

        <div class="form-group">
          <label for="driveSelect">Select Drive</label>
          <select id="driveSelect" bind:value={selectedDriveId}>
            <option value="" disabled selected>Select a drive</option>
            {#each $drives as drive}
              <option value={drive.id}>{drive.name}</option>
            {/each}
          </select>
        </div>

        <div class="modal-actions">
          <button class="btn btn-secondary" on:click={() => (showAddModal = false)}>Cancel</button>
          <button class="btn btn-primary" on:click={handleAddTable} disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create Table'}
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .delete-btn {
    background: none;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .delete-btn:hover {
    color: var(--danger-color, #ef4444);
    background: rgba(239, 68, 68, 0.1);
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  .modal-content {
    background: var(--bg-primary);
    padding: 24px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid var(--border-color);
  }
  .modal-content h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
  }
  .form-group input, .form-group select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 0.95rem;
  }
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 8px;
  }
  .btn {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
  }
  .btn-secondary {
    background: transparent;
    color: var(--text-secondary);
  }
  .btn-secondary:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
  .btn-primary {
    background: var(--accent-color);
    color: white;
  }
  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
