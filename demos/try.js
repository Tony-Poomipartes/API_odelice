function first() {
  try {
    second();
  } catch (err) {
    console.log(err.message);
  }
}

function second() {
  third();
}

function third() {
  throw new Error('Flute third a émis une erreur');
}

first();
