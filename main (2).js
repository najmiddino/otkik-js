let str = +prompt('birinci sonni kiriting')
let str2 = +prompt('ikinchi sonni kiriting')

let operation = +prompt(`Amalni tanlang
 1 qo'shish
 2 ayirish
 3 kopaytirish
 4 bolish
 Amalni tanlang (1/2/3/4)
`)

let result;

if (operation === 1) {
    result = str + str2
} else if (operation === 2) {
    result = str - str2
} else if (operation === 3) {
    result = str * str2
} else if (operation === 4) {
    if (str2 !== 0) {
        result = str / str2
    }else {
        result = "hatolik: 0 ga bolish mumkin emas"
    }
} else {
    alert('Xato amal')  
}
console.log(result);