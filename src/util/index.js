/*
  * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
  * @param fn {function}  需要调用的函数
  * @param delay  {number}    延迟时间，单位毫秒
  * @param mustRunDelay  {bool} 是否延迟执行，给mustRunDelay参数传递false 绑定的函数先执行，而不是delay后后执行。
  * @return {function}实际调用函数
  */
export function throttle(fn, delay, mustRunDelay = true, debounce) {
  let curr = +new Date(),//当前事件
      last_call = 0,
      last_exec = 0,
      timer = null,
      diff, //时间差
      context,//上下文
      args,
      exec = function () {
        last_exec = curr;
        fn.apply(context, args);
      }
  ;

  // if (mustRunDelay == undefined) {
  //   mustRunDelay = true;
  // }
  return function () {
    curr = +new Date();
    context = this;
    args = arguments;
    diff = curr - (debounce ? last_call : last_exec) - delay;
    clearTimeout(timer);
    if (debounce) {
      if (mustRunDelay) {
        timer = setTimeout(exec, delay);
      } else if (diff >= 0) {
        exec();
      }
    } else {
      if (diff >= 0) {
        exec();
      } else if (mustRunDelay) {
        timer = setTimeout(exec, -diff);
      }
    }
    last_call = curr;
  }
}

/**
 * 自定义动画
 * @param cb {Function}
 * @return {number | Function}
 */
export function requestAnimFrame(cb) {
  return window.requestAnimationFrame(cb) ||
    window.webkitRequestAnimationFrame(cb) ||
    function (cb) {
      setTimeout(cb, 1000 / 60);
    }
}


const replaceAll = (str, target, replace) => {
  let reg="/"+target+"/g";    //查找时忽略大小写
  reg=eval(reg);
  return str.replace(reg,replace);
};

/**
 * @param  el 原生element
 * @param className
 * @return
 */
const addClass = (el, className = []) => {
  if (!className.length) return false;
  // className = className.trim('').replace(/\s+/, ' ').split(' ');
  el.className += ' ' + className.join(' ');
  return true;
};

/**
 * @param  el 原生element
 * @param  className 数组
 * @return
 */
const removeClass = (el, className = []) => {
  if (!className.length) return false;
  // className = className.trim('').replace(/\s+/, ' ').split(' ');
  let cls = ' ' + el.className + ' ';
  className.forEach((item) => {
    item = ' ' + item;
    cls = replaceAll(cls,item, ' ');
  });
  el.className = cls.trim();
  return true;
};
