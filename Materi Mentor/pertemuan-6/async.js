
// const second = () => {
//     setTimeout(() => {
//         console.log('hey second')
//     }, 2000)
// }

// const first = () => {
//     console.log('hey there')
//     second();
//     console.log('the end')
// }

// first()

// function getFood() {
//     setTimeout(() => {
//         const foodId = [20, 45, 55, 60];
//         console.log(foodId)
//         setTimeout((id) => {
//             const food = {
//                 title: 'Ayam bakar',
//                 chef: 'Randy'
//             };
//             console.log(`${id}: ${food.title}`);
//             setTimeout((chef) => {
//                 const food2 = {
//                     title: 'Ayam penyet',
//                     chef: 'Putra'
//                 }
//                 console.log(food)
//             }, 1500, food.chef);
//         }, 1500, foodId[2]);
//     }, 1500)
// }

// getFood()

// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([20, 45, 55, 60])
//     }, 1500);
//     setTimeout(() => {
//         reject('id not found')
//     }, 2000)
// })

// const getFood = foodId => {
//     return new Promise((resolve, reject) => {
//         setTimeout((id) => {
//             const food = {
//                 title: 'Ayam bakar',
//                 chef: 'Randy'
//             };
//             resolve(`${id}: ${food.title}`)
//         }, 1500, foodId);

//         setTimeout(() => {
//             reject('key no found')
//         }, 2000)
//     })
// }

// const getChef = chef => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const food = {
//                 title: 'ayam penyet',
//                 chef: 'randy'
//             }
//             resolve(`${chef}: ${food.title}`)
//         }, 1500, chef);
//     })
// }

// getId
// .then(Ids => {
//     console.log(Ids)
//     return getFood(Ids[2])
// })
// .then(food => {
//     console.log(food)
//     return getChef('Randy Vianda')
// })
// .then(chef => {
//     console.log(chef)
// })
// .catch(error => {
//     console.log('Error')
// })

// async await
// async function getFoodAW() {
//     const Ids = await getId
//     const food = await getFood(Ids[2])
//     console.log(food)
//     const chef = await getChef('John Due')

//     return chef;
// }

// getFoodAW()
// .then(res => console.log(`${res}`))

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await response.json();
    console.log(data)
}

getUsers()