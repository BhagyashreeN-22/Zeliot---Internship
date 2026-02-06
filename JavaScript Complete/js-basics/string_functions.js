let str = "Agent";
console.log(str.length);

str.toUpperCase(); //toconvert stringto uppercase this doesnt change original string.
str = str.toUpperCase(); //here changes are done in original string
console.log(str);

let str2 = "              hello!!             ";
console.log(str2.trim()); //this removes white space

console.log(str.slice(1, 3)); //to get  substring

str = str.concat(str2);
console.log(str);

str3 = str.replace("hello", "hiii");
console.log(str3);

let arr = [90, 20, 70, 90, 50];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Avg = ${sum / arr.length}`);

let price = [200, 780, 900, 120, 340];
for (i = 0; i < price.length; i++) {
  price[i] = price[i] + price[i] * 0.1;
}
console.log(price);

price.push(1000);
console.log(price); //to additmes at end

price.pop();
console.log(price);

let company = [
  "Bloomberg",
  "Microsoft",
  "Google",
  "Zeliot",
  "Ibm",
  "ola",
  "uber",
];
console.log(company);

company.shift(); //pop removes element from end , and shift removes items from front
console.log(company);

company.splice(1, 1, "added_uber"); //splice replaces elements .. from 1 only 1 element deleted nreplaced with added_uber

company.push("Amazon");
console.log(company);

const funsum = (a, b) => {
  //arrow function different way to write functions
  return a + b;
};

console.log(funsum(2, 3));

const vowels = (str3) => {
  let sumvowel = 0;
  for (i = 0; i < str3.length; i++) {
    if (
      str3[i] == "a" ||
      str3[i] == "e" ||
      str3[i] == "i" ||
      str3[i] == "o" ||
      str3[i] == "u"
    ) {
      sumvowel++;
    }
  }
  return sumvowel;
};

console.log(vowels("Bhagya"));

let arr2 = [1, 2, 3, 4, 5];

const print = (num) => {
  console.log(num);
};

arr2.forEach(print);
//both for each n map works same only the difference is wtever changes happens ,the results rstoredin new array in caseof map. in foreach only calculationis done no new array

let newarry = arr2.map((val) => {
  console.log(val * 2);
});

let evenarr = arr2.filter((val) => {
  return val % 2 == 0;
});

console.log(evenarr);

let numbers = [7, 2, 9, 5, 0, 19, 57];
const largenum = numbers.reduce((max, cur) => {
  return cur > max ? cur : max;
}, numbers[0]);

console.log(largenum);

let marks = [100, 90, 98, 99, 70, , 82, 90, 78];

const more90 = marks.filter((val) => {
  return val > 90;
});

console.log(more90);

let n = 10;
let arrays = [];
for (i = 0; i < n; i++) {
  arrays[i] = i + 1;
}

const sumarray = arrays.reduce((sum, cur) => {
  return sum + cur;
}, 0);

console.log(sumarray);
