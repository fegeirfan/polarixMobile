<script lang="ts">
  import "./styles.css";
  import LoginPage from './LoginPage.svelte';
  import HomePage from './HomePage.svelte';
  import AddDrivePage from './AddDrivePage.svelte';
  import TablesPage from './TablesPage.svelte';
  import TableDetailPage from './TableDetailPage.svelte';
  import ScriptsPage from './ScriptsPage.svelte';
  import ProfilePage from './ProfilePage.svelte';
  import BottomNav from './BottomNav.svelte';
  import AddRowPage from './AddRowPage.svelte';

  let currentRoute = '/';

  const routes = {
    '/': LoginPage,
    '/home': HomePage,
    '/add-drive': AddDrivePage,
    '/tables': TablesPage,
    '/table-detail': TableDetailPage,
    '/add-row': AddRowPage,
    '/scripts': ScriptsPage,
    '/profile': ProfilePage,
  };

  function navigate(event: CustomEvent) {
    currentRoute = event.detail.route;
  }

  window.addEventListener('navigate', navigate);

</script>

<main>
  <svelte:component this={routes[currentRoute]} />
</main>

{#if currentRoute !== '/' && currentRoute !== '/add-drive'}
  <BottomNav />
{/if}
