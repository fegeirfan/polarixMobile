<script lang="ts">
  import { toastMessage, toastVisible } from '../store';
</script>

<div id="toast" class:show={$toastVisible}>{$toastMessage}</div>
