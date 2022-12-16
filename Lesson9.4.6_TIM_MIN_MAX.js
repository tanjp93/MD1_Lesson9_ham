function checkMax(a) {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= max) {
            max = a[i];
        }
    }
    return max;
}

function checkMin(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= min) {
            min = a[i];
        }
    }
    return min;
}