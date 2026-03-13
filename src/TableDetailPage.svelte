<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from './components/PageHeader.svelte';
  import { addRowFilters, tableRows, fetchTableRows, addTableRow, deleteTableRow } from './lib/data';
  import { navigate, showToast } from './store';

  export let tableId: string | undefined = undefined;

  let activeFilter = 'All';
  let showAddModal = false;
  let newFileName = '';
  // Not strongly typed FileList but close enough for UI mockup
  let selectedFile: FileList | null = null;
  let isSubmitting = false;

  onMount(() => {
    fetchTableRows(tableId);
  });

  $: filteredRows = activeFilter === 'All' ? $tableRows : $tableRows.filter((row) => row.status === activeFilter);
  
  async function handleAddRow() {
    if (!tableId) {
      showToast('No table selected');
      return;
    }
    if (!newFileName) {
      showToast('Please enter a file name');
      return;
    }

    isSubmitting = true;

    let fileExtraInfo = '0 KB';
    if (selectedFile && selectedFile.length > 0) {
      const file = selectedFile[0];
      const sizeKB = (file.size / 1024).toFixed(1);
      fileExtraInfo = `${sizeKB} KB - ${file.type || 'Unknown type'}`;
    }

    const success = await addTableRow({
      table_id: tableId,
      title: newFileName,
      status: 'Active',
      fields: [
        { label: 'File Info', value: fileExtraInfo }
      ]
    });

    isSubmitting = false;

    if (success) {
      showToast('Row added successfully');
      showAddModal = false;
      newFileName = '';
      selectedFile = null;
    } else {
      showToast('Failed to add row');
    }
  }

  async function handleDelete(e: Event, id: string) {
    e.stopPropagation();
    if (!tableId) return;
    
    if (confirm('Are you sure you want to delete this row?')) {
      const success = await deleteTableRow(id, tableId);
      if (success) {
        showToast('Row deleted');
      } else {
        showToast('Failed to delete row');
      }
    }
  }
</script>

<div class="page active">
  <PageHeader title="Project Documents" backRoute="/tables" action={{ label: 'Add Row', icon: 'plus', onClick: () => (showAddModal = true) }} />

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
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="row-badge" class:badge-active={row.status === 'Active'} class:badge-pending={row.status === 'Pending'} class:badge-archived={row.status === 'Archived'}>{row.status}</span>
              <button class="delete-btn" on:click={(e) => handleDelete(e, row.id)} aria-label="Delete Row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
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

  {#if showAddModal}
    <div class="modal-backdrop" on:click={() => (showAddModal = false)}>
      <div class="modal-content" on:click|stopPropagation>
        <h2>Add File / Row</h2>
        
        <div class="form-group">
          <label for="fileName">File Name</label>
          <input id="fileName" type="text" bind:value={newFileName} placeholder="Enter file name..." />
        </div>

        <div class="form-group">
          <label for="fileUpload">Upload File</label>
          <input id="fileUpload" type="file" bind:files={selectedFile} />
        </div>

        <div class="modal-actions">
          <button class="btn btn-secondary" on:click={() => (showAddModal = false)}>Cancel</button>
          <button class="btn btn-primary" on:click={handleAddRow} disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save File'}
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
    padding: 2px;
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
  .form-group input {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 0.95rem;
  }
  .form-group input[type="file"] {
    padding: 8px 0;
    border: none;
    background: transparent;
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
