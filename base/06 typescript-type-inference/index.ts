// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/

// Базовый вывод типа
function setCounter(max = 100) {}

function increment(counter: number): number {
  return counter++;
}

// Лучший алгоритм общего типа
let items1: = [1, 2, 3, 'cookie'];
let items: (number | string)[] = [1, 2, 3, 'cookie'];

// Контекстная типизация

document.addEventListener('click', function(event) {
  console.log(event.button)
})

// В этом примере TypeScript знает, что eventпараметр является экземпляром MouseEventиз-за clickсобытия.
// Однако при изменении clickсобытия на scrollсобытие TypeScript выдаст ошибку:

// ---

// Вывод типа против аннотаций типа
// Вывод типа = TypeScript угадывает тип
// Тип аннотаций = Вы явно указываете TypeScript тип