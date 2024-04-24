const calc = (a, b, p) => {
    if (!(a || b || p)) {
        return "Podaj wszystkie argumenty!"
    }
    switch (p) {
        case '+': {
            return a + b
        }
        case '-': {
            return a - b
        }
        case '*': {
            return a * b
        }
        case '/': {
            return a / b
        }
        default: { return }
    }
}
// punkt 1
exports.calc = calc

// punkt 2
// const _calc = calc
// export { _calc as calc }
// do tego punktu jeszcze trzeba dodać plik package.json który będzie zawierał taki text:
// {
//     "type": "module"
// }

// punkt 3
// export default calc
// tu tez ten plik package.json z tą zawartością będzie potrzebny
