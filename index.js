let sum = 0;
let i = 1;

while (i <= 30) {
    let number = i;

    if (number % 3 === 0) {
        sum += number;
    }

    i++;
}

console.log("Сума парних чисел з перших 30 ітерацій:", sum);