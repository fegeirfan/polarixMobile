<script lang="ts">
  import { currentRoute, navigate } from '../store';

  const isActive = (route: string, current: string) => route === current;
</script>

<nav id="bottom-nav">
  <button class="nav-item" class:active={isActive('/home', $currentRoute)} on:click={() => navigate('/home')}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    <span>Home</span>
  </button>

  <button class="nav-item" class:active={isActive('/tables', $currentRoute)} on:click={() => navigate('/tables')}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
    <span>Tables</span>
  </button>

  <button class="nav-add" on:click={() => navigate('/add-row')} aria-label="Add Row">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
  </button>

  <button class="nav-item" class:active={isActive('/scripts', $currentRoute)} on:click={() => navigate('/scripts')}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    <span>Scripts</span>
  </button>

  <button class="nav-item" class:active={isActive('/profile', $currentRoute)} on:click={() => navigate('/profile')}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    <span>Profile</span>
  </button>
</nav>
