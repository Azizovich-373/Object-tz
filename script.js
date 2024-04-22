let user = {
    name: "Damir",
    age: 13,
    status: true,
    wifes: ["Malika", "Amina", "Jasmina", "Farzod","Samir"],
}

let passport =  {
    serries: "AC",
    number: 1244512,
    date: "2015-01-01",
    date_exp: "2025-01-01",
    localtion: {
        country: "Uzbekistan",
        city: "Samarkand",
        region: "Samarakand shaxar",
        zipcode: 140000 
    },
}


// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов

let newObj = Object.assign({},user, {passport})
let newKeys = Object.keys(newObj)
let newValues = Object.values(newObj)
let newEntries = newKeys.concat(newValues)

console.log(newObj);
console.log(newKeys);
console.log(newValues);
console.log(newEntries);

let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}
newEntries.forEach(item => {
    if (typeof item === 'string') {
        types.string++
    } else if (typeof item === 'number') {
        types.number++
    } else if (typeof item === 'boolean') {
        types.boolean++
    } else if (typeof item === 'object') {
        types.object++
    }
});
console.log(types);