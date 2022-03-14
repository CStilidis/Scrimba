Object.create = function(objectOtDelegateTo) {
  function fn(){};
  fn.prototype = objectOtDelegateTo
  return new fn()
}

