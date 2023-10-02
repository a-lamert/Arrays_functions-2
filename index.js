function func() {
    let array = [];

    array.push(1,2,3);
    console.log(array);
   
    let popped = array.pop();
    console.log(array);
    
    const numbers = [1,2,3];
    const newNumbers = [0,...numbers];
    console.log(newNumbers);
    
    const randomNumber = Math.floor(Math.random() * (999 - 99 + 1)) + 99;
    console.log(randomNumber);
    
    const myArray =[0,1,2,3];
    myArray.unshift(randomNumber);
    console.log(myArray);
   
}
func();




 



