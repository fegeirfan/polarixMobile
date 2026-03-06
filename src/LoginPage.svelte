<script lang="ts">
  import logo from './lib/assets/logo.png';

  function dispatchNavigate(route: string) {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { route } }));
  }
</script>

<div class="login-container">
  <div class="login-content card">
    <img src="{logo}" alt="Polarix Logo" class="logo" />
    <p class="tagline">Your personal archive manager.</p>

    <button class="google-btn" on:click={() => dispatchNavigate('/home')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56,12.25C22.56,11.47,22.49,10.72,22.36,10H12.27V14.45H18.06C17.76,16.03,16.76,17.3,15.1,18.23V20.84H18.91C21.07,18.96,22.56,15.9,22.56,12.25Z" style="fill: #4285F4;" /><path d="M12.27,23C15.14,23,17.57,22.09,19.33,20.57L15.49,17.96C14.59,18.57,13.51,18.91,12.27,18.91C9.88,18.91,7.83,17.31,7.03,15.09H3.06V17.79C4.8,20.91,8.22,23,12.27,23Z" style="fill: #34A853;" /><path d="M7.03,15.09C6.79,14.39,6.65,13.66,6.65,12.91C6.65,12.16,6.79,11.43,7.03,10.73V8.04H3.06C2.26,9.65,1.77,11.33,1.77,13C1.77,14.67,2.26,16.35,3.06,17.96L7.03,15.09Z" style="fill: #FBBC05;" /><path d="M12.27,6.91C13.62,6.91,14.73,7.38,15.63,8.24L18.91,5.16C17.15,3.55,14.81,2.5,12.27,2.5C8.22,2.5,4.8,4.59,3.06,7.71L7.03,10.41C7.83,8.19,9.88,6.91,12.27,6.91Z" style="fill: #EA4335;" /></svg>
      <span>Continue with Google</span>
    </button>

    <div class="divider"></div>

    <div class="email-login">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button on:click={() => dispatchNavigate('/home')}>Login with Email</button>
    </div>
  </div>
</div>

<style>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-background);
  }
  .login-content {
    width: 100%;
    max-width: 320px;
    padding: var(--space-xl);
    text-align: center;
  }
  .logo {
    max-width: 150px;
    margin-bottom: var(--space-md);
    margin-left: auto;
    margin-right: auto;
  }
  .tagline {
    margin-bottom: var(--space-xl);
  }
  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--space-md);
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-sm);
  }
  .google-btn svg {
      margin-right: var(--space-sm);
  }

  .divider {
    border-bottom: 1px solid var(--color-border);
    margin-bottom: var(--space-lg);
  }

  .email-login input {
    width: 100%;
    padding: var(--space-md);
    margin-bottom: var(--space-md);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-sizing: border-box;
  }

  .email-login button {
    width: 100%;
    padding: var(--space-md);
    background-color: var(--color-accent);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
  }
</style>
