const _object = {
    "name": "John",
    "age": 30
};

const proxy = new Proxy(_object, {
    get: function(target, prop) {
      return "404";
    }
});

console.log(proxy.name); 
console.log(proxy.age);