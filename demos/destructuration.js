// on crée un objet
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// on procéde à une assignation par destructuration
// en partant de obj, on crée une variable a valant la propriété a,
// une variable c valant la propriété c, et une variable obj2 qui vaut
// un objet ayant toute les autres propriétés (b et d)
const { a, c, ...obj2 } = obj;

console.log(obj2); // { b: 2, d: 4 }
