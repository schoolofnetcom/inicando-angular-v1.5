angular
  .module('app')
  .service('ContactService', function() {
    var list = [];

    this.getList = function() {
      return list;
    };

    this.setList = function(_list) {
      list = _list;
    };

    this.push = function(contact) {
      list.push(contact);
    };


    // var data = {};

    // this.getData = function() {
    //   return data;
    // };

    // this.setData = function(_data) {
    //   data = _data;
    // };

    // this.sumService = MathFactory.sum;
    // this.subService = MathFactory.sub;

    // this.sumService2 = function(num1, num2) {
    //   return MathFactory.sum(num1, num2);
    // };

    // this.subService2 = function(num1, num2) {
    //   return MathFactory.sub(num1, num2);
    // }
  });