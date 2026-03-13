# Google Auth Authentication Integration Guide

This guide walks you through setting up Google Sign-in with your Supabase backend to allow users to authenticate securely in Polarix Mobile.

## 1. Google Cloud Console Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., "Polarix Auth") or select an existing one.
3. In the sidebar, navigate to **APIs & Services > OAuth consent screen**.
    - Choose **External** (or Internal if you're restricting to a Workspace domain).
    - Fill in the required fields (App name, User support email, Developer contact email).
    - Under Scopes, you can leave it at default (email, profile, openid).
    - Save and continue.
4. Navigate to **APIs & Services > Credentials**.
    - Click **+ CREATE CREDENTIALS** and select **OAuth client ID**.
    - For Application type, choose **Web application**.
    - Name your client (e.g., "Polarix Web Client").
    - **Authorized JavaScript origins**: Add your production and local URLs (e.g., `http://localhost:5173` if running Vite locally).
    - **Authorized redirect URIs**: You will get this URL from Supabase in the next step. (Leave this tab open).

## 2. Supabase Setup
1. Log in to your [Supabase Dashboard](https://app.supabase.com) and navigate to your project.
2. In the sidebar, click on **Authentication > Providers**.
3. Locate **Google** in the list and click to expand it.
4. Toggle **Enable Google ID**.
5. You will see a **Callback URL** (e.g., `https://<project-ref>.supabase.co/auth/v1/callback`). Copy this URL.
6. Return to your Google Cloud Console tab from Step 1, and paste the Supabase Callback URL into the **Authorized redirect URIs** section. Save the Google credentials.
7. Google will now show you a **Client ID** and **Client Secret**.
8. Return to Supabase:
    - Paste the **Client ID** from Google.
    - Paste the **Client Secret** from Google.
    - Click **Save**.

## 3. Client Implementation (Svelte)
In the application, we implement this in `src/LoginPage.svelte`. Ensure you have `@supabase/supabase-js` installed.

```typescript
// Important concept to avoid spam clicks (Rate Limiting)
let isAuthenticating = false;
let lastAuthAttempt = 0;

async function loginWithGoogle() {
  const now = Date.now();
  // 5 seconds cooldown
  if (isAuthenticating || now - lastAuthAttempt < 5000) {
    showToast('Please wait before trying again');
    return;
  }

  isAuthenticating = true;
  lastAuthAttempt = now;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/home'
    }
  });

  if (error) {
    showToast('Login Failed: ' + error.message);
  }
  isAuthenticating = false;
}
```

By adding a timestamp and boolean check, we limit users from smashing the login button and triggering mass redirects or hitting 429 Too Many Requests errors from Google/Supabase.
