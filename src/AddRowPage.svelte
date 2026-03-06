<script lang="ts">
  let selectedDrive = '';

  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="add-row-container">
  <h2>Add New Row</h2>

  <div class="form-group">
    <label for="file-name">File Name</label>
    <input type="text" id="file-name" />
  </div>

  <div class="form-group">
    <label for="category">Category</label>
    <input type="text" id="category" />
  </div>

  <div class="form-group">
    <label for="year">Year</label>
    <input type="number" id="year" />
  </div>

  <div class="form-group">
    <label for="upload">Upload File</label>
    <input type="file" id="upload" />
  </div>

  <div class="form-group">
    <label for="drive-select">Upload to Drive</label>
    <select bind:value={selectedDrive}>
      <option disabled value="">Select a drive</option>
      <option value="user@gmail.com">user@gmail.com</option>
      <option value="work@example.com">work@example.com</option>
    </select>
  </div>

  <button class="save-btn" on:click={() => dispatchNavigate('/table-detail')}>Save</button>

</div>

<style>
  .add-row-container {
    padding: var(--space-md);
  }

  h2 {
    margin-bottom: var(--space-lg);
  }

  .form-group {
    margin-bottom: var(--space-lg);
  }

  label {
    display: block;
    margin-bottom: var(--space-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
  }

  input, select {
    width: 100%;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background-color: var(--color-background-secondary);
    box-sizing: border-box;
  }

  .save-btn {
    width: 100%;
    background-color: var(--color-accent);
    color: white;
    border: none;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
  }
</style>
