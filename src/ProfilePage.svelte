<script lang="ts">
  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="profile-container">
  <div class="user-info card">
    <div class="avatar"></div>
    <div class="user-name">User Name</div>
    <div class="user-email">user@example.com</div>
  </div>

  <div class="settings-menu">
    <div class="card menu-item" on:click={() => dispatchNavigate('/home')}>
      <span>Connected Drives</span>
      <span>&gt;</span>
    </div>
    <div class="card menu-item" on:click={() => dispatchNavigate('/scripts')}>
      <span>Manage Scripts</span>
      <span>&gt;</span>
    </div>
    <div class="card menu-item" on:click={() => dispatchNavigate('/')}>
      <span>Logout</span>
      <span>&gt;</span>
    </div>
  </div>

</div>

<style>
  .profile-container {
    padding: var(--space-md);
  }

  .user-info {
    text-align: center;
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--color-border);
    margin: 0 auto var(--space-md);
  }

  .user-name {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .user-email {
    color: var(--color-text-secondary);
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    cursor: pointer;
  }
</style>
