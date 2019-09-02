function biodataSaya(nama){
    this.nama = nama
    this.panggilSaya = function(){
        console.log('hi ' + this.nama)
    }
    this.hitungUmur = function(tahun_lahir){
        console.log('umur saya : ' + (2019 - tahun_lahir) + ' tahun')
    }

    return this
}

const contoh1 = new biodataSaya('Dadi')
contoh1.warnaFav = 'biru'
// delete contoh1.warnaFav
// delete contoh1.nama
console.log(contoh1);
console.log(contoh1.hitungUmur(1999));

const tambahWarnaFav = { warnaFav: 'biru' }
const salin_contoh1 = { ...contoh1, ...tambahWarnaFav }
console.log(salin_contoh1)