<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="home-container">
  <h2>Connected Drives</h2>

  <div class="card">
    <div class="drive-info">
      <div class="drive-email">user@gmail.com</div>
      <div class="storage-bar">
        <div class="storage-usage" style="width: 60%;"></div>
      </div>
    </div>
    <button class="open-drive-btn">Open</button>
  </div>

  <div class="card">
    <div class="drive-info">
      <div class="drive-email">work@example.com</div>
      <div class="storage-bar">
        <div class="storage-usage" style="width: 30%;"></div>
      </div>
    </div>
    <button class="open-drive-btn">Open</button>
  </div>

  <button class="fab" on:click={() => dispatchNavigate('/add-drive')}>
    +
  </button>
</div>

<style>
  .home-container {
    padding: var(--space-md);
  }

  h2 {
    margin-bottom: var(--space-lg);
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
  }

  .drive-email {
    font-weight: 500;
    margin-bottom: var(--space-sm);
  }

  .storage-bar {
    width: 150px;
    height: 8px;
    background-color: var(--color-border);
    border-radius: var(--radius-sm);
    overflow: hidden;
  }

  .storage-usage {
    height: 100%;
    background-color: var(--color-accent);
    border-radius: var(--radius-sm);
  }

  .open-drive-btn {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 500;
  }
</style>
