document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.querySelector('form');
  terminal.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.querySelector('#terminal').value;
    document.querySelector('#terminal').value = '';
    document.querySelector('#console').value = eval(code);
  });
});
