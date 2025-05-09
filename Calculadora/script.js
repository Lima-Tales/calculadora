const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
      return;
    }

    if (value === '=') {
      try {
        // Calcula a expressão atual
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = 'Erro';
        currentInput = '';
      }
      return;
    }

    // Adiciona o valor do botão ao input atual
    currentInput += value;
    display.value = currentInput;
  });
});
