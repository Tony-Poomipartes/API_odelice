class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`woof, je suis ${this.name}`);
  }
}

const medor = new Dog('medor');
const rex = new Dog('rex');

/*
rex vaut :
{
  name: 'rex'
  bark: function(){
    console.log(`woof, je suis ${this.name}`);
  }
}
*/

// on déclare une nouvelle fonction bark sur l'objet rex
// en faisant cela, on surcharge la méthode originale
// Désormais, si j'appelle rex.bark, c'est cette nouvelle fonction
// qui sera exécutée

rex.bark = function () {
  console.log(`miaow, je suis ${this.name}`);
};
/*
maintenant rex vaut :
{
  name: 'rex'
  bark: function(){
    console.log(`miaow, je suis ${this.name}`);
  }
}
*/

medor.bark(); // woof, je suis medor
rex.bark(); // miaow, je suis rex
