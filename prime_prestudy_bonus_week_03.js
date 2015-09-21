function functionA(num) {
    return  num * 3
}
function functionB(num) {
    return num * 5
}
function functionC(num) {
    return num + 3
}

functionA(functionB(functionC(2)));