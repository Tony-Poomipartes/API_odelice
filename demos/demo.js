function makeMessager(msg) {
  return function () {
    console.log(msg);
  };
}

const msg = makeMessager('Hello');

msg();
