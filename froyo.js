const list = window.prompt("What flavors would you like? (ex. coffee, strawberry, vanilla)");
let array = list.split(', ')

function getFlavor(str){
    const flavors = {};
    for(let i = 0; i < str.length; i++){
        const flavor = str[i]
        if(flavors[flavor]=== undefined){
            flavors[flavor] = 0
        }
        flavors[flavor]++
    }
    return flavors
}
flavors = getFlavor(array)
console.log(flavors)