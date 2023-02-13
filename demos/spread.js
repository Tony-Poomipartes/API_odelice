const obj = {
  firstname: 'John',
  lastname: 'Coltrane',
  style: 'Jazz',
};

const arr = [1, 2, 3, 4, 5];

// arr = arr.map(() => 1);

function test(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}

test(...arr);

const { style, ...person } = obj;

console.log(style);
console.log(person);

const [v1, ...arr2] = arr;

console.log(v1);
console.log(arr2);
