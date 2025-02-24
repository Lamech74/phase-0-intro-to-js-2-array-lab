let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
  }
  function destructivelyPrependCat(name) {
    return cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    return cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    return cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    return [name, ...cats];
  }
  function removeLastCat() {
    const spreadCat = [...cats];
    spreadCat.pop();
    return spreadCat;
  }
  function removeFirstCat() {
    const spreadCat = [...cats];
    spreadCat.shift();
    return spreadCat;
  }