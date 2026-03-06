<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="add-drive-container">
  <div class="header">
    <button class="back-btn" on:click={() => dispatchNavigate('/home')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <h2>Add Drive</h2>
  </div>

  <div class="card">
    <p>Connect a new cloud drive to start archiving your files.</p>
    <button class="connect-btn">Connect Google Drive</button>
  </div>
</div>

<style>
  .add-drive-container {
    padding: var(--space-md);
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .back-btn {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: var(--space-md);
  }

  p {
    margin-bottom: var(--space-lg);
  }

  .connect-btn {
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
