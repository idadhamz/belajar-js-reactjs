
// contoh sync
// const second = () => {
//     console.log('hey second')
// }

// const first = () => {
//     console.log('hey there')
//     second()
//     console.log('hey first')
// }

// first()

// contoh async 
// const second = () => {
//     setTimeout (() => {
//         console.log('hey second')
//     }, 2000)
// }

// const first = () => {
//     console.log('hey there')
//     second()
//     console.log('hey first')
// }

// first()

// contoh kasus
// function getFood(){
//     setTimeout(() => {
//         const foodId = [1, 2, 3, 4]
//         console.log(foodId)
//         setTimeout((id) => {
//             const food = {
//                 namaFood : 'ayam bakar',
//                 chef : 'Dadi'
//             };
//             console.log(`${id}: ${food.namaFood}`)
//             setTimeout((chef) => {
//                 const food2 = {
//                     namaFood : 'ayam goreng',
//                     chef : 'Ilham'
//                 };
//                 console.log(food)
//             }, 1500, food.chef)
//         }, 1500, foodId[2])
//     }, 1500)
// }

// getFood()

// promise
// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 2, 3, 4])
//     }, 1500)
//     setTimeout(() => {
//         reject('id not found')
//     }, 2000)
// })

// const getFood = foodId => {
//     return new Promise((resolve, reject) => {
//         setTimeout((id) => {
//             const food = {
//                 nama: 'Ayam bakar',
//                 chef: 'Dadi'
//             };
//             resolve(`${id}: ${food.nama}`)
//         }, 1500, foodId); 
//     })
// }

// const getChef = chef => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const food = {
//                 nama: 'Ayam penyet',
//                 chef: 'ilham'
//             }
//             resolve(`${chef}: ${food.nama}`)
//         }, 1500, chef)
//     })
// }

// getId
// .then(Ids => {
//     console.log(Ids)
//     return getFood(Ids[2])
// })
// .then( food => {
//     console.log(food)
//     return getChef('Dadi Ilham')
// })
// .then( chef => {
//     console.log(chef)
// })
// .catch ( error => {
//     console.log('Error')
// })

// async await
// async function getFoodAW(){
//     const Ids = await getId
//     console.log(Ids)
//     const food = await getFood(Ids[2])
//     console.log(food)
//     const chef = await getChef('Dadi Ilham')
//     console.log(chef)

//     return chef;
// }

// getFoodAW()
// .then(res => console.log(`${res}`))

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => console.log(json))
}

// async function getUsers(){
//     const response = await 
//     fetch('https://jsonplaceholder.typicode.com/users/')
//     const data = await response.json();
//     console.log(data);
// }

getUsers()