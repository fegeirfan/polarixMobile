<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="tables-container">
  <div class="header">
    <h2>Tables</h2>
    <button class="create-btn" on:click={() => dispatchNavigate('/table-detail')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      <span>Create new table</span>
    </button>
  </div>

  <div class="card table-card" on:click={() => dispatchNavigate('/table-detail')}>
    <div>
      <div class="table-name">Personal Documents</div>
      <div class="table-info">125 rows - Last updated: 2 hours ago</div>
    </div>
    <span>&gt;</span>
  </div>

  <div class="card table-card" on:click={() => dispatchNavigate('/table-detail')}>
    <div>
      <div class="table-name">Work Invoices</div>
      <div class="table-info">42 rows - Last updated: 1 day ago</div>
    </div>
    <span>&gt;</span>
  </div>

</div>

<style>
  .tables-container {
    padding: var(--space-md);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .create-btn {
    display: flex;
    align-items: center;
    background-color: var(--color-accent);
    color: white;
    border: none;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 500;
  }

  .create-btn svg {
    margin-right: var(--space-sm);
  }

  .table-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .table-name {
    font-weight: 500;
    margin-bottom: var(--space-xs);
  }

  .table-info {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
</style>
