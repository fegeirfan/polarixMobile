<script lang="ts">
  import PageHeader from './components/PageHeader.svelte';
  import { drives } from './lib/data';
  import { navigate, selectedDriveType, showToast } from './store';

  let label = '';

  const selectableDrives = drives.filter((drive) => drive.description);

  const connect = () => {
    showToast('Drive connected successfully!');
    navigate('/home');
  };
</script>

<div class="page active">
  <PageHeader title="Add Drive" backRoute="/home" />

  <div class="page-content">
    <div class="add-drive-info">
      <div class="add-drive-caption">Choose a cloud storage provider to connect to your Polarix account.</div>
    </div>

    <div class="drive-options">
      {#each selectableDrives as drive}
        <button class="drive-option" class:selected={$selectedDriveType === drive.name} on:click={() => selectedDriveType.set(drive.name)}>
          <div class="drive-option-icon" style={`background:${drive.iconBackground};`}>{drive.icon}</div>
          <div class="drive-option-info">
            <div class="drive-option-name">{drive.name}</div>
            <div class="drive-option-desc">{drive.description}</div>
          </div>
          <div class="drive-option-check">
            {#if $selectedDriveType === drive.name}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            {/if}
          </div>
        </button>
      {/each}
    </div>

    <div class="connect-form">
      <div class="form-group">
        <label class="form-label" for="drive-label">Drive Label (optional)</label>
        <input id="drive-label" bind:value={label} type="text" class="form-input" placeholder="e.g. Work Drive, Personal..." />
      </div>
      <button class="btn-submit" on:click={connect}>Connect Drive -&gt;</button>
    </div>
  </div>
</div>
