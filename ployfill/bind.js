if (!Function.prototype.bind) {
  Function.prototype._bind = function (obj) {
    let _this = this
    return function () {
      _this.apply(obj, arguments)
    }
  }
}

// bind
// apply
// call

obj.myFun.call(db,'成都','上海');　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();     // 德玛 年龄 99  来自 成都, 上海去往 undefined

// 同： 更改this的指向问题
// 异： apply 接受参数时以数组的形式；bind返回的是一个函数，传参形式和call保持一致；call使用通用的形式传递参数