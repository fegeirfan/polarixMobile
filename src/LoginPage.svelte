<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate, showToast } from './store';
  import { supabase } from './lib/supabaseClient';

  let email = '';
  let password = '';
  
  let isAuthenticating = false;
  let lastAuthAttempt = 0;

  onMount(async () => {
    // Check if user is already logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      navigate('/home');
    }
    
    // Listen for auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/home');
      }
    });
  });

  async function login(type: 'google' | 'email') {
    if (type === 'google') {
      const now = Date.now();
      // Block repeated clicks within 3 seconds
      if (isAuthenticating || (now - lastAuthAttempt < 3000)) {
        showToast('Please wait a moment before trying again.');
        return;
      }
      
      isAuthenticating = true;
      lastAuthAttempt = now;

      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin, // You might need to adjust this depending on your setup
          }
        });

        if (error) throw error;
      } catch (error: any) {
        showToast(error.message || 'Failed to sign in with Google');
      } finally {
        isAuthenticating = false;
      }
    } else {
      showToast('Email sign in coming soon!');
    }
  }
</script>

<div id="page-login" class="page active">
  <!-- Desktop decorative side -->
  <div class="login-desktop-panel">
    <div class="login-desktop-content">
      <div class="login-desktop-logo">
        <img src="/pols.jpeg" alt="Polarix" class="login-desktop-logo-img" />
        <span>Polarix</span>
      </div>
      <h1 class="login-desktop-heading">Welcome to Polarix</h1>
      <p class="login-desktop-text">Manage your data drives and tables with powerful automation tools.</p>
      <div class="login-desktop-features">
        <div class="login-feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span>Secure Drive Management</span>
        </div>
        <div class="login-feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
          <span>Powerful Table Editor</span>
        </div>
        <div class="login-feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          <span>Automated Scripts</span>
        </div>
      </div>
    </div>
    <div class="login-desktop-orb login-desktop-orb-1"></div>
    <div class="login-desktop-orb login-desktop-orb-2"></div>
    <div class="login-desktop-orb login-desktop-orb-3"></div>
  </div>

  <!-- Mobile & Login Card Container -->
  <div class="login-container">
    <div class="login-bg-orb login-bg-orb-1"></div>
    <div class="login-bg-orb login-bg-orb-2"></div>

    <div class="login-card">
      <div class="login-logo">
        <div class="login-logo-icon">
          <img src="/pols.jpeg" alt="Polarix logo" class="login-logo-image" />
        </div>
        <span class="login-logo-text">Polarix</span>
      </div>

      <button class="btn-google" on:click={() => login('google')}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
        Continue with Google
      </button>

      <div class="login-divider">
        <div class="login-divider-line"></div>
        <span>or</span>
        <div class="login-divider-line"></div>
      </div>

      <div class="input-group">
        <input bind:value={email} type="email" class="input-field" placeholder="Email address" />
      </div>
      <div class="input-group">
        <input bind:value={password} type="password" class="input-field" placeholder="Password" />
      </div>

      <button class="btn-primary" on:click={() => login('email')}>Sign in</button>

      <button class="btn-admin" type="button" on:click={() => navigate('/admin')}>
        Admin
      </button>

      <div class="login-footer">
        Don't have an account? <a href="/signup">Create one</a>
      </div>
    </div>
  </div>
</div>
