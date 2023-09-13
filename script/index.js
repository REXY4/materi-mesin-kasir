let totalBelanja = document.querySelector("#valueTotalBelanja");
let totalPembayaran = document.querySelector("#valuePembayaran")
let totalUangKembali = document.querySelector("#valueUangKembali");

var result = {
    message: "",
    uangKembali: 0,
}

let form = {
    totalBelanja: 0,
    pembayaran: 0,
}

const inputData = (e) => {
    return form = {
        ...form,
        [e.target.name]: e.target.value
    }
}


function submit() {
    totalBelanja.innerHTML = convertIdr(form.totalBelanja);
    totalPembayaran.innerHTML = convertIdr(form.pembayaran);
    const checkRefund = CheckUangKembalian(parseInt(form.totalBelanja), parseInt(form.pembayaran))
    totalUangKembali.innerHTML = convertIdr(checkRefund.uangKembali);
    window.alert(checkRefund.message)
}

