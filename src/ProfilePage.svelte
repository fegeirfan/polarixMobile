<script lang="ts">
  import { profileSections } from './lib/data';
  import { navigate, showToast } from './store';

  const handleItem = (label: string) => {
    if (label === 'Connected Drives') {
      navigate('/add-drive');
      return;
    }

    showToast(label);
  };
</script>

<div class="page active">
  <div class="profile-hero">
    <div class="profile-hero-orb"></div>
    <div class="profile-avatar">👤</div>
    <div class="profile-name">Alex Rivera</div>
    <div class="profile-email">alex.rivera@example.com</div>
  </div>

  <div class="profile-content">
    {#each profileSections as section, index}
      <div class="profile-section" style={index === 0 ? 'margin-top:0;' : ''}>
        <div class="profile-section-title">{section.title}</div>

        {#each section.items as item}
          <button class="profile-item" on:click={() => handleItem(item.label)}>
            <div class="profile-item-icon" style={`background:${item.iconBackground};`}>{item.icon}</div>
            <div class="profile-item-label">{item.label}</div>
            {#if item.value}
              <div class="profile-item-val">{item.value}</div>
            {/if}
            {#if item.label !== 'Total Used' && item.label !== 'App Version'}
              <svg class="profile-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            {/if}
          </button>
        {/each}
      </div>
    {/each}

    <button class="profile-logout" on:click={() => navigate('/')}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
      Sign Out
    </button>
  </div>
</div>
