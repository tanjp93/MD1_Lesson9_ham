function checkInteger(a) {
    let checkNumber = false
    let b = Math.round(a)
    if (Number.isInteger(b)) {
        checkNumber = true;
        return checkNumber;
    } else return checkNumber;
}