<script lang="ts">
  import PageHeader from './components/PageHeader.svelte';
  import { showToast, navigate } from './store';

  const submit = () => {
    showToast('Row added successfully!');
    navigate('/table-detail');
  };
</script>

<div class="page active">
  <PageHeader title="Add Row" backRoute="/table-detail" />

  <div class="page-content">
    <div class="form-body">
      <div class="form-group">
        <label class="form-label" for="row-table">Table</label>
        <select id="row-table" class="form-select">
          <option>Project Documents</option>
          <option>Media Archive</option>
          <option>Research Data</option>
          <option>Email Attachments</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-file-name">File Name</label>
        <input id="row-file-name" type="text" class="form-input" placeholder="e.g. Q3_Report_Final.pdf" />
      </div>

      <div class="form-group">
        <label class="form-label" for="row-drive">Drive</label>
        <select id="row-drive" class="form-select">
          <option>Google Drive</option>
          <option>Dropbox</option>
          <option>OneDrive</option>
          <option>S3 Bucket</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-client">Client / Tag</label>
        <input id="row-client" type="text" class="form-input" placeholder="e.g. Acme Corp" />
      </div>

      <div class="form-group">
        <label class="form-label" for="row-status">Status</label>
        <select id="row-status" class="form-select">
          <option>Active</option>
          <option>Pending</option>
          <option>Archived</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="row-notes">Notes</label>
        <textarea id="row-notes" class="form-input" rows="3" placeholder="Optional notes..." style="resize:none; line-height:1.5;"></textarea>
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
