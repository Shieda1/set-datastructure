function set() {

  var collection = [];

  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };

  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }

    return false;
  };

  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }

    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(otherSet) {
    var unionSet = new set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      unionSet.add(e);
    });

    secondSet.forEach(function(e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  this.intersection = function(otherSet) {
    var intersectSet = new set();
    var firstSet = this.values();

    firstSet.forEach(function(e) {
      if(otherSet.has(e))
        intersectSet.add(e);
    });

    return intersectSet;
  };

  this.difference = function(otherSet) {
    var differenceSet = new set();
    var firstSet = this.values();

    firstSet.forEach(function(e) {
      if(! otherSet.has(e)) 
        differenceSet.add(e);
    });

    return differenceSet;
  };

  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
};

var setA = new set();
var setB = new set();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.subset(setB));
console.log(setB.intersection(setA));
console.log(setB.difference(setA));
console.log(setA.add("b"));
console.log(setB.remove("a"));
console.log(setB.has("a"));