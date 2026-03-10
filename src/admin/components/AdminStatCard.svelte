<script lang="ts">
  export let label = '';
  export let value = '';
  export let deltaText: string | null = null;
  export let deltaType: 'up' | 'down' | 'neutral' = 'neutral';
  export let accentGradient = 'linear-gradient(90deg, var(--adm-blue-400), var(--adm-accent))';
  export let iconBg = 'var(--adm-blue-100)';
  export let iconStroke = 'var(--adm-blue-300)';
</script>

<div class="stat-card">
  <div class="stat-accent" style="background: {accentGradient};"></div>

  <div class="stat-icon-wrap" style="background: {iconBg};">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconStroke} stroke-width="2" stroke-linecap="round">
      <slot name="icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
      </slot>
    </svg>
  </div>

  <div class="stat-val">{value}</div>
  <div class="stat-label">{label}</div>

  {#if deltaText}
    <div class="stat-delta" class:up={deltaType === 'up'} class:down={deltaType === 'down'}>
      {deltaText}
    </div>
  {/if}
</div>

<style>
  .stat-card {
    background: var(--adm-bg-2);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-r-lg);
    padding: 18px 20px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .stat-card:hover { border-color: var(--adm-border-2); }

  .stat-accent {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
  }

  .stat-icon-wrap {
    width: 38px; height: 38px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px;
    flex-shrink: 0;
  }

  .stat-val {
    font-size: 26px; font-weight: 700;
    letter-spacing: -0.8px;
    color: var(--adm-t1);
    font-family: var(--adm-f-mono);
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: var(--adm-t2);
    font-weight: 500;
  }

  .stat-delta {
    font-size: 11px; font-weight: 600;
    margin-top: 8px;
    color: var(--adm-t3);
  }
  .stat-delta.up   { color: var(--adm-green); }
  .stat-delta.down { color: var(--adm-red); }
</style>
