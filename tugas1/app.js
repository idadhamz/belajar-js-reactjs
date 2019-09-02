function showNumbers(a){
    
    let genap = '"EVEN"'
    let ganjil = '"OOD"'
    
    for(x=0;x<=a;x++){
        // console.log(x)
        if(x % 2 == 0){
            console.log(x + ' ' + genap);
        }else if(x % 2 != 0) {
            console.log(x + ' ' + ganjil);
        }
    }
}

showNumbers(10);

// punya farid
// function showNumbers(a){
//     for( let i = 0; i < a; i++ ){
//         i % 2 == 0 ? console.log(i + ' "EVEN" ') // true
//         : console.log(i + ' "ODD" '); // false
//     }
// }
// showNumbers(10);

const movie = {
    title: 'Captain Marvel',
    releaseYear: 2019,
    rating: 7.5,
    director: 'John Due',
    description: function(){
        let key_movie = Object.keys(movie)
        return `${key_movie[0]} ${movie.title} \n${key_movie[3]} ${movie.director}`
    }
}

console.log(`${movie.description()}`)

// punya farid
// const movie = {
//     title: 'Captain Marvel',
//     releaseYear: 2019,
//     rating: 8.0,
//     director: 'Joe Taslim'
// };

// for(let obj in movie){
//     (obj == 'title' && console.log(obj, movie[obj])) || (obj == 'director' && console.log(obj, movie[obj]));
// }

function arrayFromRange(a, b){
    var array = []
    for( let i = a; i <= b; i++ ){
        array.push(i)
    }
    return array
    // const array = `${x[0]}`
    // const split = array.split(' ')
    // console.log(split)
    // const array = `${x[0]} ${x[1]} ${x[2]} ${x[3]}`
    // const y = [1, 2, 3, 4]
    // const split = y.split(' ')
    // console.log(split)
}

console.log(arrayFromRange(1, 4));
// const angka1 = 1;
// const angka2 = 2;
// const array = `${angka1} ${angka2}`
// const split = array.split(' ')
// console.log(array)