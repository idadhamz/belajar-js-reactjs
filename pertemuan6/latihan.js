let sholatWajib = [];

const sholatJson = localStorage.getItem('sholat')
if( sholatJson !== null ){
    // console.log(sholatWajib)
    sholatWajib = JSON.parse(sholatJson)
    console.log(sholatWajib)
}

const renderSholat = function(sholatWajib){

    document.querySelector('#todos').innerHTML = ''

    sholatWajib.forEach(function(sholat) {
        const h3 = document.createElement('h3')
        h3.textContent = sholat.text
        document.querySelector('#todos').appendChild(h3)
    });
}

renderSholat(sholatWajib)

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    sholatWajib.push({
        text: e.target.elements.text.value,
        completed: false
    })
    sholatWajibStringify = JSON.stringify(sholatWajib)
    console.log(sholatWajibStringify)
    localStorage.setItem('sholat', sholatWajibStringify)
    renderSholat(sholatWajib)
    e.target.elements.text.value = ''
})