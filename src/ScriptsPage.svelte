<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="scripts-container">
  <div class="header">
    <h2>Scripts</h2>
    <button class="add-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      <span>Add Script</span>
    </button>
  </div>

  <div class="card script-card">
    <div class="script-info">
      <div class="script-name">Auto-categorize Invoices</div>
      <div class="script-target">Target: work@example.com</div>
    </div>
    <button class="run-btn">Run</button>
  </div>

  <div class="card script-card">
    <div class="script-info">
      <div class="script-name">Backup Personal Docs</div>
      <div class="script-target">Target: user@gmail.com</div>
    </div>
    <button class="run-btn">Run</button>
  </div>

</div>

<style>
  .scripts-container {
    padding: var(--space-md);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .add-btn {
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

  .add-btn svg {
    margin-right: var(--space-sm);
  }

  .script-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
  }

  .script-name {
    font-weight: 500;
    margin-bottom: var(--space-xs);
  }

  .script-target {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  .run-btn {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 500;
  }
</style>
