function factory(lastname) {
  return (firstname) => {
    console.log(firstname, lastname);
  };
}

factory('Dalton')('Joe');
