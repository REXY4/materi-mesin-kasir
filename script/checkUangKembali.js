var result = {
    message: "",
    uangKembali: 0,
}

const CheckUangKembalian = (totalHarga, pembayaran) => {
    const valueRefund = pembayaran - totalHarga;
    if (pembayaran < totalHarga) {
        return result = {
            message: `Pembayaran Gagal karena jumlah uang anda bayar di bawah harga ${convertIdr(totalHarga)}`,
            uangKembali: 0,
        }
    } else if (pembayaran > totalHarga) {
        return result = {
            message: `Berikan uang kembali sebesar ${convertIdr(valueRefund)}`,
            uangKembali: valueRefund,
        }
    } else if (pembayaran == totalHarga) {
        return result = {
            message: `Pembayaran Berhasil !`,
            uangKembali: 0,
        }
    } else {
        return result = {
            message: "Mesin Kasir Bermasalah",
            uangKembali: 0
        }
    }
}

module.exports = { CheckUangKembalian }