var compose = function (functions) {
  functions.reverse().forEach((fn) => {
    x = fn(x);
  });
  return x;
};

let functions = [],
  x = 42;
console.log(compose(functions));
