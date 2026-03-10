import { writable } from 'svelte/store';

export type Route =
  | '/'
  | '/home'
  | '/tables'
  | '/table-detail'
  | '/add-row'
  | '/scripts'
  | '/profile'
  | '/add-drive';

export const currentRoute = writable<Route>('/');

export function navigate(route: Route) {
  currentRoute.set(route);
}

export const selectedDriveType = writable('Google Drive');

export const toastMessage = writable('');
export const toastVisible = writable(false);

let toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(message: string) {
  toastMessage.set(message);
  toastVisible.set(true);

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toastVisible.set(false);
  }, 2200);
}
