document.querySelectorAll('.links-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = toggle.nextElementSibling;
    const isOpen = !dropdown.hidden;
    dropdown.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.links-dropdown').forEach(d => { d.hidden = true; });
  document.querySelectorAll('.links-toggle').forEach(t => { t.setAttribute('aria-expanded', 'false'); });
});
