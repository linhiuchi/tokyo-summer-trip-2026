document.querySelectorAll('.day button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.day');
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.day').forEach(day => { day.classList.remove('active'); day.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (!isOpen) { item.classList.add('active'); button.setAttribute('aria-expanded', 'true'); }
  });
});
 
