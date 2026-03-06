<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<nav>
  <button on:click={() => dispatchNavigate('/home')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  </button>
  <button on:click={() => dispatchNavigate('/tables')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
  </button>
  <button on:click={() => dispatchNavigate('/scripts')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  </button>
  <button on:click={() => dispatchNavigate('/profile')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  </button>
</nav>

<style>
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background-color: var(--color-background-secondary);
    border-top: 1px solid var(--color-border);
    box-shadow: 0 -2px 10px var(--color-shadow);
    padding: var(--space-sm) 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);
    color: var(--color-text-secondary);
  }

  button:focus, button:hover {
      color: var(--color-accent);
      outline: none;
  }
</style>
