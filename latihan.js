class BankAccount {
    nomorRek;
    saldo;

    constructor(nomorRek, saldo) {
        this.nomorRek = nomorRek
        this.saldo = saldo
        console.log('pertama di panggil', nomorRek, saldo)
    }

    Deposit() {
        return this.nomorRek = this.saldo;
    }

    TarikSaldo() {
        return this.nomorRek + this.saldo;
    }

    CekSaldo() {
        return this.nomorRek = this.saldo;
    }
}

const rekening1 = new BankAccount(178371492, 5000000000);
const rekening1Deposit = rekening1.Deposit();
const rekening1TarikSaldo = rekening1.TarikSaldo();
const rekening1CekSaldo = rekening1.CekSaldo();
console.log('deposit', rekening1Deposit);
console.log('tarik saldo', rekening1TarikSaldo);
console.log('cek saldo', rekening1CekSaldo);

console.log('=========================================')

const rekening2 = new BankAccount(1110000, 8000000000);
const rekening2Deposit = rekening2.Deposit();
const rekening2TarikSaldo = rekening2.TarikSaldo();
const rekening2CekSaldo = rekening2.CekSaldo();
console.log('deposit', rekening2Deposit);
console.log('tarik saldo', rekening2TarikSaldo);
console.log('cek saldo', rekening2CekSaldo);
