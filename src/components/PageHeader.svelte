<script lang="ts">
  import type { Route } from '../store';
  import { navigate } from '../store';

  type Action = {
    label: string;
    icon: string;
    onClick: () => void;
  };

  export let title = '';
  export let backRoute: Route | null = null;
  export let action: Action | null = null;
</script>

<div class="header">
  {#if backRoute}
    <button class="header-back" on:click={() => navigate(backRoute)} aria-label="Back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
    </button>
  {/if}

  <div class="header-title">{title}</div>

  {#if action}
    <button class="header-action" on:click={action.onClick} aria-label={action.label}>
      {#if action.icon === 'plus'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
      {/if}
    </button>
  {/if}
</div>
