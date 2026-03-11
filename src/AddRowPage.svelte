<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from './components/PageHeader.svelte';
  import { showToast, navigate } from './store';
  import { tables, fetchTables } from './lib/data';
  import { supabase } from './lib/supabaseClient';

  let selectedTableName = '';
  let fileName = '';
  let clientTag = '';
  let status = 'Active';
  let notes = '';

  onMount(() => {
    fetchTables();
  });

  const submit = async () => {
    const table = $tables.find(t => t.name === selectedTableName);
    if (!table) return showToast('Please select a table.');

    const { error } = await supabase.from('table_rows').insert([{
      table_id: table.id,
      title: fileName,
      status: status,
      fields: [
        { label: 'Client', value: clientTag },
        { label: 'Notes', value: notes }
      ]
    }]);

    if (error) {
       showToast('Error adding row');
    } else {
       showToast('Row added successfully!');
       navigate('/table-detail');
    }
  };
</script>

<div class="page active">
  <PageHeader title="Add Row" backRoute="/table-detail" />

  <div class="page-content">
    <div class="form-body">
      <div class="form-group">
        <label class="form-label" for="row-table">Table</label>
        <select id="row-table" class="form-select" bind:value={selectedTableName}>
          {#each $tables as tbl}
            <option value={tbl.name}>{tbl.name}</option>
          {/each}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-file-name">File Name</label>
        <input id="row-file-name" type="text" class="form-input" bind:value={fileName} placeholder="e.g. Q3_Report_Final.pdf" />
      </div>

      <div class="form-group">
        <label class="form-label" for="row-client">Client / Tag</label>
        <input id="row-client" type="text" class="form-input" bind:value={clientTag} placeholder="e.g. Acme Corp" />
      </div>

      <div class="form-group">
        <label class="form-label" for="row-status">Status</label>
        <select id="row-status" class="form-select" bind:value={status}>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-notes">Notes</label>
        <textarea id="row-notes" bind:value={notes} class="form-input" rows="3" placeholder="Optional notes..." style="resize:none; line-height:1.5;"></textarea>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-upload">Upload File</label>
        <button id="row-upload" type="button" class="upload-zone" on:click={() => showToast('File picker opened')}>
          <div class="upload-zone-icon">📎</div>
          <div class="upload-zone-text">Tap to upload</div>
          <div class="upload-zone-sub">PDF, DOCX, XLSX, images...</div>
        </button>
      </div>

      <button class="btn-submit" on:click={submit}>Add Row -&gt;</button>
    </div>
  </div>
</div>
