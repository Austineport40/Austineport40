// let name = 'Austine'
// console.log(name);

// let array = [1, 2, 3, 4, 5]
// console.log(array[1]);


// for (let index = 0; index <Array.length; index++) {
//     console.log(index);
//     console.log(array[index]);
// }

console.log(document);

console.log(document.body);

console.log(document.getElementsByClassName('h1'));

let listItems = document.getElementsByClassName('list-items')

for(let index = 0; index < listItems.length; index++) {
    console.log(listItems[index]);
}

// listItems.array.forEach((eachItem) => {
//     console.log(eachItem);
    
// });
console.log(listItems[0])
console.log(listItems[1])
console.log(listItems[2])
console.log(listItems[3])



let something = document.getElementsByTagName
console.log(something[0]);


//Getting an element by QuerySelector

let firstH1 =document.querySelector('.firstheader')
console.log(firstH1);

//Getting an element by QuerySelectorAll

// let firstH1 = document.querySelectorAll('.firstheader')

document.body.style.backgroundColor = 'red'
document.body.style.color = 'white'
// document.body.style.animation = '2s'd
// document.body.style.display = 'flex'

// document.getElementsByTagName('div')[0].style.display ='flex'


console.log(document.body)

//  let btn = document.getElementsByTagName('button')[0]
//  let header = document.getElementById('h1')
//  header.innerText = 'hello Austine'
//  btn.addEventListener('click', ()=>{
//     console.log('i was clicked')
//     btn.style.backgroundColor = 'yellow'
//  })

 
// let inp = document.getElementsByTagName('input'[0])
// inp.addEventlistener('change', (e)=>){
//     console.log('i was changed')
// }

let  number1 = 5
let number2 = 3
let patrick = [1, 2, 3, 'wale', {name: 'steven', occupation: 'snr Dev'}]
console.log(patrick[4].occupation);

let Igwe = [true, 59, "Austin",[23, "patrick", {name: "wale", occupation: "baby dev"}],
];

//let obj = {
//     name: 'steven',
//     location: 'Onipanu',
//     age: 33
// }

// console.log(obj.age);




