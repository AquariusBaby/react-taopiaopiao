class SlideBox {
  constructor(options = {
    index: 0,
    isInit: true,
    calcExcludeHeight: 0,
    Duration: 200,
    onChangeTab: null,
    // onScroll: null,
    isDisableMove: false,
    isNeedTranstion: true,
    // resistance: 0.25
  }) {
    let $el = this.$el = options.el;                          //盒子容器

    this.index = Number(options.index);                  //当前被选中的项
    this.isInit = options.isInit;                     //盒子是否初始化完成
    this.calcExcludeHeight = options.calcExcludeHeight;  //空余的高度
    this.Duration = options.duration;                  //切换时的过渡时间（ms为单位）
    this.onChangeTab = options.onChangeTab;           //盒子切换的方法
    // this.onScroll = options.onScroll;
    this.isDisableMove = options.isDisableMove;      //是否禁用滑动
    this.isNeedTranstion = options.isNeedTranstion;           //是否需要过渡效果
    // this.resistance = options.resistance;             //边界阻力

    this.BoxCount = $el.children.length;                     //子元素个数
    this.BoxHeight = 1;                                   //盒子最小高度
    this.BoxWidth = 0;                                       //盒子的宽度
    this.requestAnimFrame = function (cb) {                  //切换动画
      return window.requestAnimationFrame(cb) ||
        window.webkitRequestAnimationFrame(cb) ||
        function (cb) {
          window.setTimeout(cb, 1000 / 60);
        };
    };

    this.isTouch = false;       //点击是否开始
    this.moveDirection = null;  //滑动方向（横向/竖向）
    this._StartX = 0;           //点击开始时的X坐标
    this._StartY = 0;           //点击开始时的Y坐标
    this._MoveX = 0;            //横向移动距离
    this._MoveY = 0;            //竖向移动距离
    this._StartTime = 0;
    this._EndTime = 0;
    this._ValidRange = 50;      //有效的滑动距离
    this._ValidTime = 200;      //有效的滑动时间
    this._ValidDistance = 150;  //忽略掉"有效的滑动时间"的滑动距离

    // new一个事件用于主动触发盒子的切换
    this.changeEvent = new CustomEvent('tab_changed');
    // new一个事件用于主动触发盒子的切换
    this.changeMoveEvent = new CustomEvent('tab_change_move', {
      detail: {
        moveX: 0,
        needMoveX: 0,
        requestAnimFrame: this.requestAnimFrame,
        duration: this.Duration
      }
    });
    // new一个事件用于主动触发盒子的切换
    // this.changeEndEvent = new CustomEvent('tab_change_end');
    // new一个事件用于主动触发盒子的切换
    // this.changeEvent = new CustomEvent('tab_changed');

    // 执行初始化
    this._init();
  }

  // 初始化方法
  _init () {
    if (!this.isInit) return;
    let _this = this;

    // resize盒子
    _this._fnResize();
    // 监听resize事件
    window.addEventListener('resize', () => {
      _this._fnResize();
    });
    // 监听tab栏点击切换事件
    _this.$el.addEventListener('tab_changed', () => {
      _this.setAnimate(- this.BoxWidth * this.index, this.Duration, 1);
    });
    // 给盒子容器绑定touch事件
    if (!_this.isDisableMove) {
      _this._bindTouchEvent();
    }
  }

  // 重置盒子大小
  _fnResize () {
    if (this.calcExcludeHeight) {
      this.BoxHeight = document.documentElement.clientHeight - this.calcExcludeHeight;
      this.$el.style.minHeight = this.BoxHeight + 'px';
      this.$el.style.overflowY = 'hidden';
    }

    this.$el.parentElement.style.overflowX = 'hidden';

    this.BoxWidth = document.documentElement.clientWidth;

    this.$el.style.width = (this.BoxWidth * this.BoxCount) + 'px';
    this.$el.style.webkitTransform = `translate3d(${this.BoxWidth * this.index}px, 0px, 0px)`;
    this.$el.style.transform = `translate3d(${this.BoxWidth * this.index}px, 0px, 0px)`;
    this.$el.style.webkitTransition = "-webkit-transform "+ this.Duration +"ms linear";
    this.$el.style.transition = "transform "+ this.Duration +"ms linear";

    Array.from(this.$el.children).forEach((child) => {
      child.style.width = (100 / this.BoxCount) + '%';
      child.style.minHeight = this.BoxHeight + 'px';
      child.style.height = this.BoxHeight + 'px';
      child.style.float = 'left';
      child.style.position = 'relative';
      child.style.overflowY = 'auto';
    });
  }

  /**
   * 绑定左右滑动的功能
   */
  _bindTouchEvent () {
    let _this = this;

    this.$el.addEventListener('touchstart', _fnTouchStart);
    this.$el.addEventListener('touchmove', _fnTouchMove);
    this.$el.addEventListener('touchend', _fnTouchEnd);

    /*
    * 开始事件
    */
    function _fnTouchStart (e) {
      let {pageX, pageY} = getTouchPosition(e);
      _this.isTouch = true;
      _this.moveDirection = null;

      _this._StartX = pageX;
      _this._StartY = pageY;

      _this._StartTime = new Date().getTime();
    }
    /*
    * 移动中事件
    */
    function _fnTouchMove(e) {
      if (!_this.isTouch) {
        return false;
      }

      let {pageX, pageY} = getTouchPosition(e);

      //手指离开之后，手开始到结束的距离
      _this._MoveX = pageX - _this._StartX;
      _this._MoveY = pageY - _this._StartY;

      let nMoveXYCompare = Math.abs(_this._MoveX) - (Math.abs(_this._MoveY) * 2);
      // 判断滑动方向
      if (!_this.moveDirection) {
        _this.moveDirection = nMoveXYCompare > 0 ? 'horizontal' : 'vertical';
      }
      // 如果是水平切换，阻止默认行为以及冒泡
      if (_this.moveDirection === 'horizontal') {
        e.stopPropagation && e.stopPropagation();
        e.preventDefault && e.preventDefault();

        //禁用掉过渡
        if (!_this.isNeedTranstion) return false;
        //边界加上阻力
        if (_this.index === 0 && _this._MoveX > 0) {
          let elastic = 100 / (100 + Math.abs(_this._MoveX));
          _this.setAnimate(- _this.BoxWidth * _this.index + _this._MoveX * elastic, 0);
          return false;
        }
        if (_this.index === (_this.BoxCount - 1) && _this._MoveX < 0) {
          let elastic = 100 / (100 + Math.abs(_this._MoveX));
          _this.setAnimate(- _this.BoxWidth * _this.index + _this._MoveX * elastic, 0);
          return false;
        }
        _this.setAnimate(- _this.BoxWidth * _this.index + _this._MoveX, 0);
      }
    }
    /*
    * 结束事件
    */
    function _fnTouchEnd(e) {
      let {pageX, pageY} = getTouchPosition(e);

      //手指离开之后，手开始到结束的距离
      _this._MoveX = pageX - _this._StartX;
      _this._MoveY = pageY - _this._StartY;

      _this._EndTime = new Date().getTime();
      let moveTime = _this._EndTime - _this._StartTime;

      if (_this.moveDirection === 'horizontal') {
        if (_this._MoveX > 0) {
          // 手指向右滑动
          // if (_this.index === 0 || Math.abs(_this._MoveX) < _this._ValidRange) {
          if (_this.index === 0) {
            //当前是最后一页，或者横向移动小于50
            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
          else if (moveTime > _this._ValidTime && Math.abs(_this._MoveX) <= (_this.BoxWidth / 2)) {
            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
          else {
            let nIndex = _this.index - 1;

            _this.index = nIndex;
            _this.onChangeTab(nIndex);

            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
        } else {
          // 手指向左滑动
          // if (_this.index === (_this.BoxCount - 1) || Math.abs(_this._MoveX) < _this._ValidRange) {
          if (_this.index === (_this.BoxCount - 1)) {
            //当前是最后一页，或者横向移动小于50
            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
          else if (moveTime > _this._ValidTime && Math.abs(_this._MoveX) <= (_this.BoxWidth / 2)) {
            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
          else {
            let nIndex = _this.index + 1;

            _this.index = nIndex;
            _this.onChangeTab(nIndex);

            _this.setAnimate(- _this.BoxWidth * _this.index, _this.Duration);
          }
        }
      }
    }
  }

  /*
  * 移动切换动画
  * @param  {Float} moveX   X轴位移
  * @param  {Integer} duration 动画时间
  * @param  {Integer} type 针对点击处理（0为使用动画，1为不使用动画）对于点击用1会更好些
  * @return {void}
  */
  setAnimate (moveX, duration = this.Duration, type = 0) {
    let _this = this;
    if (type === 1) {
      duration = 0;
    }
    _this.requestAnimFrame(() => {
      _this.$el.style.transitionDuration = duration + 'ms';
      _this.$el.style.webkitTransitionDuration = duration + 'ms';
      _this.$el.style.transform = `translate3d(${moveX}px, 0px, 0px)`;
      _this.$el.style.webkitTransform = `translate3d(${moveX}px, 0px, 0px)`;
    });

    // 给事件带入的参数赋值当前的滑动距离
    _this.changeMoveEvent.detail.moveX = moveX;
    _this.changeMoveEvent.detail.moveXRatio = moveX / (_this.BoxWidth * _this.BoxCount);
    // 派发移动中的事件
    _this.$el.dispatchEvent(_this.changeMoveEvent);

    Array.from(_this.$el.children).forEach((child) => {
      child.style.opacity = '1';
      child.style.filter = 'alpha(opacity=100)';
      // child.style.overflow = 'visible';
    });

    if (duration > 0) {
      setTimeout(() => {
        Array.from(_this.$el.children).map((child, index) => {
          if (_this.index === index) {
            return false;
          }
          // child.style.height = this.BoxHeight + 'px';
          child.style.opacity = '0';
          child.style.filter = 'alpha(opacity=0)';
          // child.style.overflow = 'hidden';
        })
      }, duration, false);
    }
  }

  // 重新初始化盒子容器
  reflesh () {
    this._init();
  }

  // 卸载盒子
  destroy () {

  }
}

const getTouchPosition = (e) => {
  let event = e.originalEvent || e;
  let point = (event.touches && event.touches.length) ? event.touches[0] : (event.changedTouches && event.changedTouches.length) ? event.changedTouches[0] : event;
  return {
    x: point.pageX || 0,
    y: point.pageY || 0,
    pageX: point.pageX || 0,
    pageY: point.pageY || 0,
    touches: event.touches || [],
    changedTouches: event.changedTouches
  };
};

export default SlideBox;






