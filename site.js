const games = {
  luma: { name: 'Islas de Luma', genre: 'Aventura de supervivencia · Windows PC', description: 'Recorre un archipiélago suspendido entre nubes, reúne materiales, fabrica equipo y devuelve la luz al faro.', screenshots: ['Bosques flotantes', 'Una noche entre guardianes', 'Tu refugio en las alturas'], download: 'https://github.com/Gracianoo15/graciano-games/releases/download/v1.0.0/Islas-de-Luma-Windows.zip', store: '#' },
  football: { name: 'Rivera Football', genre: 'Deportes · Windows PC', description: 'Vive partidos rápidos, penaltis y entrenamientos en un fútbol original creado para jugar una y otra vez.', screenshots: ['Partido bajo las luces', 'El momento del gol', 'El equipo listo'], download: 'https://github.com/Gracianoo15/graciano-games/releases/download/v1.0.0/Rivera-Football-Evolution-Windows.zip', store: '#' },
  chispa: { name: 'Chispa: Islas Secretas', genre: 'Plataformas · Windows PC', description: 'Una aventura de plataformas, monedas e islas secretas lista para jugar en Windows.', screenshots: ['Descubre el mundo Chispa', 'Retos de luz', 'Una aventura propia'], download: 'https://github.com/Gracianoo15/graciano-games/releases/download/v1.0.0/Chispa-Islas-Secretas-Windows.zip', store: 'https://apps.microsoft.com/detail/9NBPL2MBGK60?hl=es-ES&gl=CO' }
};

const dialog = document.querySelector('#game-modal');
const content = document.querySelector('#modal-content');
const esc = (text) => text.replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
function showGame(id, gameplay = false) {
  const game = games[id];
  const shots = game.screenshots.map((shot, index) => `<figure class="shot shot-${index + 1}">${id === 'football' ? `<img src="media/rivera/${['replay-tv','stadium-3d','greeting'][index]}.png" alt="${esc(shot)}" style="width:100%;height:auto" loading="lazy">` : ''}<div><span>${index === 0 ? '✦' : index === 1 ? '◒' : '⌁'}</span></div><figcaption>${esc(shot)}</figcaption></figure>`).join('');
  content.innerHTML = `<p class="eyebrow">${gameplay ? 'GAMEPLAY' : 'DETALLES DEL JUEGO'}</p><h2>${esc(game.name)}</h2><p class="modal-genre">${esc(game.genre)}</p><p class="modal-description">${esc(game.description)}</p>${gameplay ? `${id === 'football' ? '<video controls playsinline preload="metadata" poster="media/rivera/replay-tv.png" style="width:100%;border-radius:12px"><source src="media/rivera/gameplay.mp4" type="video/mp4">Tu navegador no admite video HTML5.</video><p>Gameplay real · partido entre equipos controlados por la IA · sin audio.</p>' : '<div class="video-placeholder"><strong>Gameplay próximamente</strong></div>'}` : `<div class="screenshots">${shots}</div>`}<div class="download-row"><a class="button primary" href="${game.download}" download>Descargar juego completo (.zip) <span>↓</span></a><a class="store-button" href="${game.store}" ${id !== 'chispa' ? 'data-unavailable="true"' : ''}>⊞ Microsoft Store</a></div><div class="install-note"><strong>Cómo jugar</strong><span>1. Descarga el archivo .zip · 2. Extrae todo en una carpeta · 3. Abre el .exe sin moverlo de esa carpeta.</span></div><p class="download-note">El paquete incluye el ejecutable, UnityPlayer.dll, la carpeta de datos y todos los archivos necesarios para abrir el juego.</p>`;
  dialog.showModal();
}
document.querySelectorAll('[data-game]').forEach(button => button.addEventListener('click', () => showGame(button.dataset.game, button.classList.contains('play-button'))));
document.querySelector('.close-modal').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.addEventListener('click', event => { if (event.target.matches('[data-unavailable]')) { event.preventDefault(); alert('Este enlace se activará cuando la versión esté publicada.'); } });
document.querySelector('.menu-toggle').addEventListener('click', event => { const header = document.querySelector('.site-header'); const open = header.classList.toggle('menu-open'); event.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.site-header').classList.remove('menu-open')));
document.querySelector('#year').textContent = new Date().getFullYear();



