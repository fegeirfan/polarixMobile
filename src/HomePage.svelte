<script lang="ts">
  import { onMount } from 'svelte';
  import { activities, drives, fetchActivities, fetchDrives } from './lib/data';
  import { navigate, showToast } from './store';

  onMount(() => {
    fetchDrives();
    fetchActivities();
  });
</script>

<div class="page active">
  <div class="page-content">
    <div class="home-hero">
      <div class="home-hero-orb"></div>
      <div class="home-greeting">Good morning 👋</div>
      <div class="home-username">Alex Rivera</div>
      <div class="home-stats">
        <div class="home-stat">
          <div class="home-stat-val">4</div>
          <div class="home-stat-label">Drives</div>
        </div>
        <div class="home-stat">
          <div class="home-stat-val">12</div>
          <div class="home-stat-label">Tables</div>
        </div>
        <div class="home-stat">
          <div class="home-stat-val">7</div>
          <div class="home-stat-label">Scripts</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">Connected Drives</div>
      <button class="section-link" on:click={() => navigate('/add-drive')}>+ Add</button>
    </div>

    <div class="drives-scroll">
      {#each $drives.slice(0, 4) as drive}
        <button class="drive-card" on:click={() => showToast(`Opening ${drive.name}...`)}>
          <div class="drive-name">{drive.name}</div>
          <div class="drive-used">{drive.usage}</div>
          <div class="drive-bar">
            <div
              class="drive-bar-fill"
              style={`width:${drive.percent}%;${drive.gradient ? 'background: linear-gradient(90deg, #f59e0b, #ef4444);' : ''}`}
            ></div>
          </div>
        </button>
      {/each}

      <button class="drive-add-card" on:click={() => navigate('/add-drive')}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6ef7" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        <span>Add Drive</span>
      </button>
    </div>

    <div class="section-header">
      <div class="section-title">Recent Activity</div>
      <button class="section-link" on:click={() => navigate('/tables')}>View all</button>
    </div>

    <div class="activity-list">
      {#each $activities as activity}
        <div class="activity-item">
          <div class="activity-info">
            <div class="activity-name">{activity.name}</div>
            <div class="activity-meta">{activity.meta}</div>
          </div>
          <div class="activity-time">{activity.time}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
