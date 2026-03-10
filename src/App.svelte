<script lang="ts">
  import './styles.css';
  import LoginPage from './LoginPage.svelte';
  import HomePage from './HomePage.svelte';
  import AddDrivePage from './AddDrivePage.svelte';
  import TablesPage from './TablesPage.svelte';
  import TableDetailPage from './TableDetailPage.svelte';
  import ScriptsPage from './ScriptsPage.svelte';
  import ProfilePage from './ProfilePage.svelte';
  import AddRowPage from './AddRowPage.svelte';
  import AdminDashboardPage from './admin/AdminDashboardPage.svelte';
  import AdminAnalyticsPage from './admin/AdminAnalyticsPage.svelte';
  import AdminUsersPage from './admin/AdminUsersPage.svelte';
  import AdminDrivesPage from './admin/AdminDrivesPage.svelte';
  import AdminTablesPage from './admin/AdminTablesPage.svelte';
  import AdminScriptsPage from './admin/AdminScriptsPage.svelte';
  import AdminAuditPage from './admin/AdminAuditPage.svelte';
  import AdminSettingsPage from './admin/AdminSettingsPage.svelte';
  import BottomNav from './components/BottomNav.svelte';
  import DesktopSidebar from './components/DesktopSidebar.svelte';
  import Toast from './components/Toast.svelte';
  import { currentRoute, isAdminRoute } from './store';

  const routes = {
    '/': LoginPage,
    '/home': HomePage,
    '/add-drive': AddDrivePage,
    '/tables': TablesPage,
    '/table-detail': TableDetailPage,
    '/add-row': AddRowPage,
    '/scripts': ScriptsPage,
    '/profile': ProfilePage,
    '/admin': AdminDashboardPage,
    '/admin/analytics': AdminAnalyticsPage,
    '/admin/users': AdminUsersPage,
    '/admin/drives': AdminDrivesPage,
    '/admin/tables': AdminTablesPage,
    '/admin/scripts': AdminScriptsPage,
    '/admin/audit': AdminAuditPage,
    '/admin/settings': AdminSettingsPage,
  } as const;

  $: activeRoute = $currentRoute;
  $: isAdmin = isAdminRoute(activeRoute);
  $: shouldShowBottomNav =
    !['/', '/add-drive', '/add-row', '/table-detail'].includes(activeRoute) &&
    !isAdmin;
</script>

{#if isAdmin}
  <!-- Admin: full-screen dark desktop layout (AdminLayout handles the shell) -->
  <div class="admin-wrapper">
    <svelte:component this={routes[activeRoute]} />
  </div>
{:else}
  <!-- User: mobile-first layout + desktop sidebar on wide screens -->
  {#if shouldShowBottomNav}
    <DesktopSidebar />
  {/if}
  <div class="app-shell">
    <svelte:component this={routes[activeRoute]} />
    {#if shouldShowBottomNav}
      <BottomNav />
    {/if}
  </div>
{/if}

<Toast />

<style>
  .admin-wrapper {
    width: 100%;
    height: 100dvh;
    overflow: hidden;
  }
</style>
