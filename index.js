/* function fakeBin(x) {
    let result = '';
    let l = x.length;
    console.log (l);
    for (i = 0; i<=l; i++ ) {
      if ((x[i]) < '5') {
        result = result + '0'; 
        } else if (x[i] >= '5') {result = result + '1'};
    }
    return result;
  } */


/*   function areaLargestSquare(r) {
    let a = (2 * r) / Math.sqrt(2);
    let result = a** 2;
    return Math.round(result); //code here
  } */

/* function digits(n) {
    let text = n.toString();
    console.log (text);
    let result = text.length;
    return result;
    // TODO
    }  */

  /*   function removeChar(str){
      let result ='';
      let l = str.length;
      for (i=1; i <= (l-2); i++) {
        result = result + str[i];
      };
    return result;
    };
 */
    /* function noSpace(x){
      let result = '';
      for (i = 0; i <= (x.length-1); i++){
        if (x[i] === ' ') {
          result = result;
        } else {
            result = result + x[i];
          };
      };
      return result;
    };
 */


/* function solution(str, ending){
  return str.endsWith(ending);
} 
 */

/* function repeatStr (n, s) {
  return s.repeat(n);
} */
/* 
  function finalGrade (exam, projects) {
    if (exam>90 || projects>10) {return 100};
    if (exam>75 || projects>=5) {return 90};
    if (exam>50 && projects>=2) {return 75};
    return 0;
  } 
 */
/* 
  function switchItUp(number){
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    };
  } */



/* function rentalCarCost(d){
  if (d < 3) { 
    return  d * 40;
    } else if (d < 7) {
      return d * 40 - 20;
      } else {
        return d * 40 - 50;
      };
};
 */
/* 
function typeOfSum(a, b) {
  console.log ('a'*'b');
  return typeof (a * b);

} */

/* 
const toReadable = (number) => {
  let result = '';
  let l = number.toString().length;
  let digit = Array(); //* разряд
  let remain = 0; //* остаток 
  let numMidl = number;

  let digitWords = {
    0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        1000000: 'million'
  };

  let k = 0;   //* для перевода разрядов с 11-19

  for (i=l-1; i >= 0; i--){
    remain = numMidl % Math.pow (10, i);
    digit[i] = (numMidl-remain) / Math.pow (10, i);
    numMidl = remain;
  }

  for (i=l-1; i >= 0; i=i-1-k) {                    //* 10.000.000 - 99.000.000
    if (i === 7) {
      k = 0;
      if (digit[i] === 9) { result = result + (`${digitWords[90]}`)};
      if (digit[i] === 8) { result = result + (`${digitWords[80]}`)};
      if (digit[i] === 7) { result = result + (`${digitWords[70]}`)};
      if (digit[i] === 6) { result = result + (`${digitWords[60]}`)};
      if (digit[i] === 5) { result = result + (`${digitWords[50]}`)};
      if (digit[i] === 4) { result = result + (`${digitWords[40]}`)};
      if (digit[i] === 3) { result = result + (`${digitWords[30]}`)};
      if (digit[i] === 2) { result = result + (`${digitWords[20]}`)};
      if (digit[i] === 1) {
        if (10*digit[i]+digit[i-1] === 19) { result = result + (`${digitWords[19]}`)};
        if (10*digit[i]+digit[i-1] === 18) { result = result + (`${digitWords[18]}`)};
        if (10*digit[i]+digit[i-1] === 17) { result = result + (`${digitWords[17]}`)};
        if (10*digit[i]+digit[i-1] === 16) { result = result + (`${digitWords[16]}`)};
        if (10*digit[i]+digit[i-1] === 15) { result = result + (`${digitWords[15]}`)};
        if (10*digit[i]+digit[i-1] === 14) { result = result + (`${digitWords[14]}`)};
        if (10*digit[i]+digit[i-1] === 13) { result = result + (`${digitWords[13]}`)};
        if (10*digit[i]+digit[i-1] === 12) { result = result + (`${digitWords[12]}`)};
        if (10*digit[i]+digit[i-1] === 11) { result = result + (`${digitWords[11]}`)};
        if (10*digit[i]+digit[i-1] === 10) { result = result + (`${digitWords[10]}`)};
        k = 1;
        result = result + (` ${digitWords[1000000]}`)
      }
    };

    if (i === 6) {                    //* 1.000.000 - 9.000.000
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
      result = result + (` ${digitWords[1000000]}`)
    };

    if (i === 5) {                    //* 100.000
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
        result = result + (` ${digitWords[100]}`)
    };

    if (i === 4) {                    //* 10.000 - 99.000
      k = 0;
      if (digit[i] === 9) { result = result + (` ${digitWords[90]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[80]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[70]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[60]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[50]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[40]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[30]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[20]}`)};
      if (digit[i] === 1) {
        if (10*digit[i]+digit[i-1] === 19) { result = result + (` ${digitWords[19]}`)};
        if (10*digit[i]+digit[i-1] === 18) { result = result + (` ${digitWords[18]}`)};
        if (10*digit[i]+digit[i-1] === 17) { result = result + (` ${digitWords[17]}`)};
        if (10*digit[i]+digit[i-1] === 16) { result = result + (` ${digitWords[16]}`)};
        if (10*digit[i]+digit[i-1] === 15) { result = result + (` ${digitWords[15]}`)};
        if (10*digit[i]+digit[i-1] === 14) { result = result + (` ${digitWords[14]}`)};
        if (10*digit[i]+digit[i-1] === 13) { result = result + (` ${digitWords[13]}`)};
        if (10*digit[i]+digit[i-1] === 12) { result = result + (` ${digitWords[12]}`)};
        if (10*digit[i]+digit[i-1] === 11) { result = result + (` ${digitWords[11]}`)};
        if (10*digit[i]+digit[i-1] === 10) { result = result + (` ${digitWords[10]}`)};
        k = 1;
        result = result + (` ${digitWords[1000]}`)
      }
    };

    if (i === 3) {                    //* 1.000 - 9.000
      console.log (i);
      console.log (digit[i]);
      numMidlWord = numMidlWord + digit[i];
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
      result = result + (` ${digitWords[1000]}`)
    };

    if (i === 2) {                    //* 999
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
        result = result + (` ${digitWords[100]}`)
    };

    if (i === 1) {                    //* 99
       k = 0;
       if (digit[i] === 9) { result = result + (` ${digitWords[90]}`)};
       if (digit[i] === 8) { result = result + (` ${digitWords[80]}`)};
       if (digit[i] === 7) { result = result + (` ${digitWords[70]}`)};
       if (digit[i] === 6) { result = result + (` ${digitWords[60]}`)};
       if (digit[i] === 5) { result = result + (` ${digitWords[50]}`)};
       if (digit[i] === 4) { result = result + (` ${digitWords[40]}`)};
       if (digit[i] === 3) { result = result + (` ${digitWords[30]}`)};
       if (digit[i] === 2) { result = result + (` ${digitWords[20]}`)};
       if (digit[i] === 1) {
         if (10*digit[i]+digit[i-1] === 19) { result = result + (` ${digitWords[19]}`)};
         if (10*digit[i]+digit[i-1] === 18) { result = result + (` ${digitWords[18]}`)};
         if (10*digit[i]+digit[i-1] === 17) { result = result + (` ${digitWords[17]}`)};
         if (10*digit[i]+digit[i-1] === 16) { result = result + (` ${digitWords[16]}`)};
         if (10*digit[i]+digit[i-1] === 15) { result = result + (` ${digitWords[15]}`)};
         if (10*digit[i]+digit[i-1] === 14) { result = result + (` ${digitWords[14]}`)};
         if (10*digit[i]+digit[i-1] === 13) { result = result + (` ${digitWords[13]}`)};
         if (10*digit[i]+digit[i-1] === 12) { result = result + (` ${digitWords[12]}`)};
         if (10*digit[i]+digit[i-1] === 11) { result = result + (` ${digitWords[11]}`)};
         if (10*digit[i]+digit[i-1] === 10) { result = result + (` ${digitWords[10]}`)};
         k = 1;
       }
     };
     
     if (i === 0) {                    //* 1 - 9
       console.log (i);
       console.log (digit[i]);
       numMidlWord = numMidlWord + digit[i];
       if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
       if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
       if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
       if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
       if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
       if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
       if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
       if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
       if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
     };
  }

  console.log (result);
  return result; */
/* } */


/* reverse = (number)  => {
  console.log (number);
  let reverNumber = Array;
  let result = '';
  let midleNumber;
  let negativeNumber;

  if (number < 0) {
    negativeNumber = -1;
  } else {
    negativeNumber = 1;
    };

  midleNumber = Math.abs (number)
  let numberLeter = midleNumber.toString();  
  for ( i = numberLeter.length; i > 0; i--) {
    reverNumber[i-1] = (`${numberLeter[i-1]}`);
    result = result + reverNumber[i-1]
  }
  return Number(result) * negativeNumber;
} */


/*   function add(num1, num2) {
    const num1arr = {};
    const num2arr = {};
    const rem = 0;
    const a = 0;
    
    


    for ( i = (num1.toString().length - 1); i >= 0; i--) {
      num1  = num1 - a; 
      rem = num1 % Math.pow(10 , i);
      num1arr[i] = (num1arr - rem) / Math.pow(10,i);
      a = i * Math.pow(10 , i);
      
    }
      console.log ('Num1:', num1);
    
      console.log ('i:', i);
      console.log (num1arr[i]);
      console.log (a);
    return num1 + num2;
  }


 */
/* 

  function dataReverse(data) {
    let  l = data.length;
    let baitStr = '';  
    let baitNumber = l / 8;
    let baitArr = {};
    for (let i = 0; i <= (baitNumber -1); i++) {
      for (let j = 0; j <= 7; j++){
        baitStr = baitStr + data[0];
        data.shift();
      }
      baitArr[i] = baitStr;
      baitStr = '';
    }
    console.log (data);
    console.log (baitArr);
  
    for (let i = (baitNumber -1); i >= 0; i--) {
      console.log (baitArr[i]);
      baitStr = baitArr[i];
      for (let j  = 0; j <= 7; j++) {
        data.push( Number(baitStr[j]));
      }
    }
    console.log (data);
    return data
  } 

function towelSort (matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j])
    }
  }


  return result;
}


let matr = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  ];
 

let arrData = [
    ["red", "energy"],
    ["yellow", "creativity"],
    ["brown" , "friendly"],
    ["green", "growth"],
    ["white", "goodness"],
    ["blue", "tranquility"]]


  function colourAssociation(array){
    let index = '';
    let prop = '';
    let result = [];
    let k = 0;

    for (let i in array) {
      result[i] = {};
      for (let j = 0; j < array[i].length; j++) {
        if (k === 0) {
          index = array[i][j];
          console.log (index);      
          k = k + 1;
        } else {
          prop = array[i][j];
          console.log (prop);
          result[i][index] = prop;
          k = 0;
        }
      }
    }

    console.log (result)
  } 



function combine() {
  let arrKey = [];
  let sumArr = {};
  const result = {};

  if (arguments.length !== 0) {
    
    for (let i = 0; i < arguments.length; i++ ) {
      sumArr = arguments[i];
      console.log (sumArr);

      arrKey = Object.keys(sumArr);
      for (let j in arrKey) {
        if (((arrKey[j] in sumArr) === true) && !(arrKey[j] in result)){
          result[arrKey[j]] = sumArr[arrKey[j]];
              
        } else {
          result[arrKey[j]] = result[arrKey[j]] + sumArr[arrKey[j]];
        }
      } 
      
    }
   
  } else {return sumArr}
  console.log (result);
  return result 
}
   
function toBinary(n){
  let a = '';
  a = n.toString(2);
  n = Number(a);
  return n;
}
  let z = toBinary (5);

  function nbDig(n, d) {
  let counter = 0;

  for (let i = 0; i <= n; i++){
    let multNumber = i*i;
    let multNumberStr = '';

    multNumberStr = multNumber.toString();

    for (let j = 0; j < multNumberStr.length; j++) {
      if (multNumberStr[j] === d.toString()) {

        console.log (`Длинна числа = ${multNumberStr.length}`);
        counter = counter + 1;
      }

      console.log (`Число цифр ${d} в числе ${multNumber} = ${counter}`);
    }
  }
  return counter;
} */


const arr1 = [4, 3, 3, 61, 8, 8];
const arr2 = [8, 61, 8, 3, 4];

function findMissing(arr1, arr2) {
  let result = [];
  let resultX = 0;

  const arrMissing = arr1.reduce((acc, value, item) => {
    console.log (value);
    if (arr2.includes(value)) {
      acc.inputNumber = [...acc.inputNumber, value];



      acc.counterNumber[Number(value)] = +value;
    }

    console.log (acc.inputNumber);
    console.log (acc.counterNumber);
    return acc;
  }, {
    inputNumber: [],
    counterNumber: [],
  })










  /* const arrMissing = arr1.reduce((acc, value, item) => {
    console.log ('Аккумулятор =' + acc);
    console.log ('Значение =' + value);
    console.log ('Свойство =' + item);
    console.log (arr2.includes(value));
    let arrMiss = [];
    let lose = 0;

     if (arr2.includes(value)) {
      arrMiss = [...acc.arrFind, value];
      console.log (arrMiss)
    } else {
      lose = value;
    }
   
    return {
       arrFind:  arrMiss, 
       lose,
    }
      
  }, {
    arrFind: [],
  })
 */
/* 

  arr1.forEach(element => {
    
  });
  
  console.log (`Потеоренная цифра = `+ result);
    */
 
 
}




let z = findMissing(arr1, arr2);


  /* console.log (z); */

