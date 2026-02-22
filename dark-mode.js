(function () {
  var btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;

  function update(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      btn.innerHTML = '&#9728;';
      btn.setAttribute('aria-label', 'Passer en mode clair');
      btn.setAttribute('title', 'Mode clair');
    } else {
      document.documentElement.classList.remove('dark-mode');
      btn.innerHTML = '&#9790;';
      btn.setAttribute('aria-label', 'Passer en mode sombre');
      btn.setAttribute('title', 'Mode sombre');
    }
  }

  // Sync bouton avec l'état actuel (déjà appliqué depuis le <head>)
  update(document.documentElement.classList.contains('dark-mode'));

  btn.addEventListener('click', function () {
    var isDark = !document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'on' : 'off');
    update(isDark);
  });
})();
