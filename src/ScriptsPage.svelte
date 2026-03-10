<script lang="ts">
  import PageHeader from './components/PageHeader.svelte';
  import { scripts } from './lib/data';
  import { showToast } from './store';

  let search = '';
  let localStates = scripts.map((script) => script.active);

  $: filteredScripts = scripts
    .map((script, index) => ({ ...script, index }))
    .filter((script) => script.name.toLowerCase().includes(search.toLowerCase()));

  function toggleScript(index: number) {
    localStates[index] = !localStates[index];
    localStates = [...localStates];
    showToast(localStates[index] ? 'Script enabled' : 'Script disabled');
  }
</script>

<div class="page active">
  <PageHeader title="Scripts" action={{ label: 'Add Script', icon: 'plus', onClick: () => showToast('New script editor opened') }} />

  <div class="page-content">
    <div class="search-bar">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      <input bind:value={search} type="text" placeholder="Search scripts..." />
    </div>

    <div class="scripts-list">
      {#each filteredScripts as script}
        <div class="script-card">
          <div class="script-card-header">
            <div class="script-icon" style={`background:${script.iconBackground};`}>{script.icon}</div>
            <div>
              <div class="script-name">{script.name}</div>
              <div class="script-trigger">{script.trigger}</div>
            </div>
            <div class="script-toggle" style="margin-left:auto;">
              <button class="toggle" class:on={localStates[script.index]} on:click={() => toggleScript(script.index)} aria-label="Toggle Script"></button>
            </div>
          </div>

          <div class="code-preview">
            {#each script.preview as line, idx}
              {line}{idx < script.preview.length - 1 ? '\n' : ''}
            {/each}
          </div>

          <div class="script-footer">
            <div class="script-status">
              <div class="status-dot" class:status-dot-green={localStates[script.index]} class:status-dot-gray={!localStates[script.index]}></div>
              <span class:status-active={localStates[script.index]} class:status-inactive={!localStates[script.index]}>{localStates[script.index] ? script.statusText : 'Inactive'}</span>
            </div>
            <button class="script-run-btn" on:click={() => showToast('Script running...')}>▶ Run</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
