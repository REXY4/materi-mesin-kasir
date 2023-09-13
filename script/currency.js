const convertIdr = (value) => {
    const convert = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return convert.format(value).replace("IDR", "Rp")
}

module.exports = { convertIdr }