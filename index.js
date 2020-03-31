//1. Counting Sheep
//Input: 3

let total = 3;

function countSheep(num){
  if(num === 0){
    console.log('All sheep jumped over the fence')
    return ;     
  }
  console.log(`${num}: Another sheep jumps over the fence`)
  countSheep(num-1);

}

countSheep(total);

// 2. Power Calculator

function powerCalculator (base, exp) {

  if (exp === 0) {
    return 1
  }

  if (exp < 0) {
    return 'exp must be greater or equal to 0';
  }

  if (exp >= 0) {
    return base * powerCalculator(base, exp-1);
  }
}

console.log(powerCalculator(10, 2));

//3. Reverse String

function reverse(str){
  if(str===''){
    return '';
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('abc'));

//4.nth Triangular Number

function triangular(n){
  if (n === 0) {
    return 0;
  }
  return n + triangular(n-1);
}

console.log(triangular(2));

//5.String Splitter
function stringsplitter(string){
  let final =[];
  if (string.length === 0) {
    return final;
  }  
  if(string[string.length-1] === '/'){
    return stringsplitter(string.slice(0,string.length-1));
  }
  final.push(string[string.length-1]);
  console.log(final)

  return stringsplitter(string.slice(0,string.length-1))+final;
  
} 
 
let test= '11/20/2020'

console.log(stringsplitter(test))

// PAUL #5 SOLUTION

function stringSplitter(string, split){
  if (!string.length) {
    return [""];
  }
  
  let result = "";
  if (string[0] !== '/') {
    result += string[0];
  } else {
    result += " ";
  }
  return [result + stringSplitter(string.slice(1), split)];

}

console.log(stringSplitter('12/12/2020', '/'));

// 6 FIBONACCI

function fibonacci (num) {
  if (num <= 1) { return 1; }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(7)

// 7 FACTORIAL

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}

//8.Find a way out of the maze


//9.

//10. Anagrams

function anagrams(str, prefix) {
  if (str.length <= 1) {
          console.log(str + prefix)
      return ;
  }

  for (let i = 0; i < str.length; i++) {
     let char = str[i]
     let lettersAfterChar = str.substring(i + 1)
     let lettersBeforeChar = str.substring(0, i)
     anagrams(lettersAfterChar + lettersBeforeChar, prefix + char)
  }
}

console.log(anagrams('abcd', ''))

//11.Organization Chart

//12. Binary Representation
function binary(num){
  if(num===0){
    return 0;
  }
  if(num === 1){
    return 1;
  }
  let result=[]
    result.push(num%2)
    return binary(Math.floor(num/2))+result;
}
console.log(binary(25));



