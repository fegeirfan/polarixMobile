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
  import BottomNav from './components/BottomNav.svelte';
  import Toast from './components/Toast.svelte';
  import { currentRoute } from './store';

  const routes = {
    '/': LoginPage,
    '/home': HomePage,
    '/add-drive': AddDrivePage,
    '/tables': TablesPage,
    '/table-detail': TableDetailPage,
    '/add-row': AddRowPage,
    '/scripts': ScriptsPage,
    '/profile': ProfilePage,
  } as const;

  $: activeRoute = $currentRoute;
  $: shouldShowNav = !['/', '/add-drive', '/add-row', '/table-detail'].includes(activeRoute);
</script>

<div class="app-shell">
  <svelte:component this={routes[activeRoute]} />
  {#if shouldShowNav}
    <BottomNav />
  {/if}
</div>

<Toast />
