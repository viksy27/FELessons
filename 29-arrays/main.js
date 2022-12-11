// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
alert('Results in the console')

let productsList = [
    { name: 'coconut', amount: 5, bought: 'yes', price: 12, },
    { name: 'mango', amount: 7, bought: 'yes', price: 54, },
    { name: 'passion fruit', amount: 10, bought: 'yes', price: 34, },
    { name: 'blueberry', amount: 45, bought: 'yes', price: 6, },
    { name: 'pitahaya', amount: 5, bought: 'no', price: 5, },
    { name: 'persimmon', amount: 10, bought: 'no', price: 67, },
    { name: 'pomelo', amount: 3, bought: 'yes', price: 36, },
    { name: 'orange', amount: 15, bought: 'yes', price: 7, },
]

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали
let boughtList = []
let notBoughtList = []

productsList.forEach(el => {
    if (el.bought === 'yes')
        boughtList.push('\n' + el.name)
    }
)

productsList.forEach(el => {
    if (el.bought === 'no')
        notBoughtList.push('\n' + el.name)
    }
)

alert(`You didn't buy: ${notBoughtList}.` + '\n' + '\n' + `You bought: ${boughtList}.`)

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
let isBuyProduct = prompt('Enter the name of the purchased product: ')

productsList.forEach(el => {
    el.productStatusChange = function () {
      if (isBuyProduct === el.name && el.bought === 'no') {
        el.bought = 'yes'
        alert(`${isBuyProduct} - has already been purchased`)
          console.log(`${el.name} bought: 'yes'`)
          console.log(productsList)
    } else if ((isBuyProduct == el.name && el.bought === 'yes')) {
        alert(`${isBuyProduct} - has already been purchased!`)
        }
    }()
})

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
let del = prompt(`Enter the product to be removed: `)
let newProductList = productsList.filter(item => item.name != del)
    
console.log(newProductList)

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
let addName =  prompt('Enter the product to add: ')
let addAmount = +prompt('Enter amount: ', 0)
let addBought = prompt('You bought that product? (yes/no): ')
let addPrice = +prompt('Enter the price of the product: ', 0)

for (el of productsList) {
    if (addName === el.name){
        el.amount += addAmount
    }
    else if (addName != el.name) {
        productsList.push({
            name: addName,
            amount: addAmount,
            bought: addBought,
            price: addPrice,
        });
        break
    }
}
console.log(productsList)

//додаю в об'єкти властивість з сумою:
productsList.forEach(el => {
    let sum = el.amount * el.price;
    el.totalSum = sum;
})
console.log(productsList)    

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let totalPriceAll = 0

for (el of productsList) {
    totalPriceAll += el.totalSum
}
alert(`Total price of products ${totalPriceAll}`)

// Підрахунок суми всіх (не) придбаних продуктів.
let totalPriceNotBought = 0
for (el of productsList) {
    if (el.bought === 'no') {
        totalPriceNotBought += el.totalSum
    }
}
alert(`Total price of not bought products ${totalPriceNotBought}`)

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
const sortMaxList = [...productsList].sort((a,b) => a.totalSum - b.totalSum)
const sortMinList = [...productsList].sort((a, b) => b.totalSum - a.totalSum)

console.log(sortMaxList)
console.log(sortMinList)