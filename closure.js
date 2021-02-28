var makeClosure = function() {
    var name = 'zero';
    return function () {
      console.log(name);
    }
  };
  var closure = makeClosure(); // function () { console.log(name); }
  closure(); // 'zero';
  