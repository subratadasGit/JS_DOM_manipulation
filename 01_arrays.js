// arrays

const myarr = [0,1,2,3,4]
myheros=["shaktiman","naagraaj"]

const myarr2 = new Array(1,2,3,4)

console.log(myarr[2]);
console.log(myarr2);


// arrays method

myarr.push(6)
console.log(myarr);

myarr.pop()
console.log(myarr);

console.log(myarr.includes(2));

console.log(myarr.indexOf(2));

console.log(myarr);

console.log("A ", myarr);

const newarr = myarr.slice(1,3)
console.log(newarr); // not extract from original array  
console.log("A ", myarr); 

const newarr2 = myarr.splice(1,3)
console.log(newarr2);
console.log("B ", myarr);  //extract from original array 


