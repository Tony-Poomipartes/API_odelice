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
const { b, d, ...obj2 } = obj;

// eslint-disable-next-line no-console
console.log(obj); // { b: 2, d: 4 }
