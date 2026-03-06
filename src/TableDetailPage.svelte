<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="table-detail-container">
  <div class="header">
    <h2>My Documents</h2>
    <button class="add-btn" on:click={() => dispatchNavigate('/add-row')}>Add Row</button>
  </div>

  <div class="table-card-list">
    <!-- Row 1 -->
    <div class="card data-row-card">
      <div class="row-main-info">
        <div class="file-name">Passport.pdf</div>
        <div class="file-category">IDs</div>
      </div>
      <div class="row-secondary-info">
        <div class="file-year">2023</div>
        <div class="actions">📎</div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="card data-row-card">
      <div class="row-main-info">
        <div class="file-name">Birth_Certificate.pdf</div>
        <div class="file-category">Official</div>
      </div>
      <div class="row-secondary-info">
        <div class="file-year">2023</div>
        <div class="actions">📎</div>
      </div>
    </div>
  </div>

</div>

<style>
  .table-detail-container {
    padding: var(--space-md);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .add-btn {
    background-color: var(--color-accent);
    color: white;
    border: none;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 500;
  }
  
  .data-row-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .file-name {
    font-weight: 500;
    margin-bottom: var(--space-xs);
  }

  .file-category {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    background-color: var(--color-background);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    display: inline-block;
  }
  
  .row-secondary-info {
      text-align: right;
  }

  .file-year {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-xs);

  }
  
  .actions {
      cursor: pointer;
      font-size: 1.2rem;
  }
</style>
