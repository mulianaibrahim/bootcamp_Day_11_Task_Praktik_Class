class mobil {
    //properti class 
warna = 'merah';
merk = 'toyota';
tipe = 'supra';
ukuran = [1000,2000,3000];

getDataMobil(){
    const obj ={
        warnaMobil : this.warna,
        merkDariMobil : this.merk,
        tipeMobilTersebut : this.tipe,
       ukuranMobilnya : this.ukuran,
    };
    return obj;
}

setDataMobil(warna,merk,tipe,ukuran){
    this.warna = warna;
    this.merk = merk;
    this.tipe = tipe;
    this.ukuran = ukuran;
}
}

// instansiasi sebuah class
// instansiasi- pembuatan objek dari sebuah class
const m = new mobil();
let dataMobil = m.getDataMobil();
console.log(dataMobil);
m.setDataMobil('hijau','lambo','haracun',[1500,2500,3200])
dataMobil = m.getDataMobil();
console.log (dataMobil);