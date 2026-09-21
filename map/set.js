 let a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add(2);
console.log(a);

a.delete(2);
console.log(a);

// has ( to check value is avaible or not )
a.has(1);

console.log(a.size)