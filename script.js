/* Задание: (База пользователей)
            Создаёте пустой объект.
            В цикле от 1 до 3 при помощи prompt заполняете объект на 3 человек с именем и возрастом
            Значение итератора это id пользователя | id не может быть равен 0
            В этот id записываются данные пользователя: имя и возраст

            По окончанию сделать вывод в console Например
                Пользователь 3
                Имя Иван
                Возрост 36
                Пользователь 4
                Имя Елена
                Возрост 24
            А также вывести в консоль весь объект

 */
var data = {}
for (let i = 1; i < 4; i++) {
    b = prompt('Введите ваше имя');
    c = prompt('Введите ваш возраст')
    data[i] = {
        name: b,
        age: c
    }
}

for (const key in data) {
    console.log(`Пользователь ${key}; Ваше имя ${data[key]["name"]}; Ваш возраст ${data[key]["age"]}`);
}
console.log(data);

/* Задание: (Корзина товаров)
           Вам дается ссылка на js файл ее вы подключете перед вашим script.js:
   -->
           <script src="https://proweb.uz/javaScript/receipt.js"></script>
          <!-- которая отдает function receipt() а эта функция отдает вам случайный объект
           Например:
           {
               'Lavash': {
                   info: 'Big Cheese',
                   price: 15000
               },
               'Hot-dog': {
                   info: 'mini',
                   price: 8500
               },
               'Cola': {
                   info: '1.5 L',
                   price: 9000
               }
           }
Вы должны при помощи цикла взять данные из этой ссылки и вывести конечную строку в console:
Где будет выведен список заказа и в конце общая стоимость заказа сразу c доставкой.
Должно выглядеть так
Вы заказали Lavash Big Cheese, Hot-dog mini, Cola 1.5 L,  | Общая стоимость 41500 сумм с доставкой (9000) */

var menu = receipt();
var text = "";
var totalPrice = 0;

for (const key in menu) {
        text += `${key} ${menu[key]["info"]}, `
        totalPrice += menu[key]["price"] + 9000;
} 
console.log(`Вы заказали: ${text}| Общая стоимость заказа ${totalPrice} сум с доставкой (9000)`);


