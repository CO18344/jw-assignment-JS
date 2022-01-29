let array = [
    {
      name: 'xyz',
      age: 10
    },
     {
      name: 'ert',
      age: 4
    },
      {
      name: 'mvm',
      age: 45
    },
     {
      name: 'rere',
      age: 56
    },
  ]
  
  
  let arraytwo = [
    {
      name: 'fdcd',
      age: 32
    },
     {
      name: 'ter',
      age: 1
    },
      {
      name: 'fdfg',
      age: 3
    },
     {
      name: 'gfdgd',
      age: 15
    },
  ]
  
// it does not modifiy operands. It return new array
let arrayConcatenated = array.concat(arraytwo);
console.log(arrayConcatenated);

console.log("Unsorted array")
console.log(array);


console.log('Sorted array by age in ASC');
array.sort((a,b)=>a.age - b.age);
console.log(array)

console.log('Sorted array by age in DESC');
array.sort((a,b)=>b.age - a.age);
console.log(array)

console.log('Sorted array by name in ASC');
array.sort((a,b)=>{
    if(a.name < b.name){
        return -1;
    }
    else if(a.name > b.name){
        return +1;
    }
    return 0;
});
console.log(array)

console.log('Sorted array by name in DESC');
array.sort((a,b)=>{
    if(a.name < b.name){
        return +1;
    }
    else if(a.name > b.name){
        return -1;
    }
    return 0;
});
console.log(array)