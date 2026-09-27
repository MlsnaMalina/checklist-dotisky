/* Optional personal export. Local visibility preference, not access control. */
'use strict';
const WALLPAPER_EXPORT_KEY = 'redakcni-wallpaper-export-v1';
let wallpaperExportEnabled = false;
try {
  if (location.hash === '#osobni-plocha') {
    localStorage.setItem(WALLPAPER_EXPORT_KEY, '1');
    history.replaceState(null, '', location.pathname + location.search);
  }
  wallpaperExportEnabled = localStorage.getItem(WALLPAPER_EXPORT_KEY) === '1';
} catch (_) {
  wallpaperExportEnabled = location.hash === '#osobni-plocha';
}

function createWallpaperSnapshot() {
  const events = [];
  for (const date of Object.keys(getDeliveryDates()).sort()) events.push({ date, kind: 'delivery' });
  for (const date of Object.keys(getTodoReminderDates()).sort()) events.push({ date, kind: 'todo' });
  return {
    schema: 'redakcni-plocha', version: 1, exportedAt: new Date().toISOString(),
    books: state.books.filter(book => !book.cancelled).map(book => ({
      id: String(book.id), title: String(book.title || 'Bez názvu'),
      progress: calcProgress(book).pct, published: Boolean(book.archivedAt)
    })),
    events
  };
}

function exportWallpaperSnapshot() {
  if (!wallpaperExportEnabled) return;
  const snapshot = createWallpaperSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'redakcni-plocha-' + snapshot.exportedAt.slice(0, 10) + '.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

function mountWallpaperExport() {
  if (!wallpaperExportEnabled || document.getElementById('wallpaperExportSettings')) return;
  const editor = document.getElementById('structEditor');
  if (!editor) return;
  const section = document.createElement('div');
  section.id = 'wallpaperExportSettings';
  section.style.cssText = 'border-top:1px solid var(--border,#ddd);margin-top:20px;padding-top:16px;display:flex;flex-wrap:wrap;gap:8px;align-items:center';
  const exportButton = document.createElement('button');
  exportButton.type = 'button'; exportButton.className = 'btn btn-secondary';
  exportButton.textContent = 'Export pro pracovní plochu';
  exportButton.addEventListener('click', exportWallpaperSnapshot);
  const hideButton = document.createElement('button');
  hideButton.type = 'button'; hideButton.className = 'btn btn-ghost';
  hideButton.textContent = 'Skrýt osobní export';
  hideButton.addEventListener('click', () => {
    try { localStorage.removeItem(WALLPAPER_EXPORT_KEY); } catch (_) { /* remains hidden this session */ }
    wallpaperExportEnabled = false; section.remove();
  });
  section.append(exportButton, hideButton);
  editor.insertAdjacentElement('afterend', section);
}
mountWallpaperExport();
