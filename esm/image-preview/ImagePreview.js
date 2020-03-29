import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

import React, { useEffect, useRef, useState } from 'react';
import './ImagePreview.less';
import ImagePreviewOperator from './ImagePreviewOperator';

/* Component */
var emptyImageProps = {
  w: 0,
  h: 0,
  r: 0,
  l: 0,
  t: 0,
  translate: '-50%',
};
var defaultOperator = ['zoom-in', 'zoom-out', 'free-rotate', 'free-drag', 'reset'];
export function ImagePreview(props) {
  var url = props.url,
    onClose = props.onClose,
    visible = props.visible,
    _props$simpleMode = props.simpleMode,
    simpleMode = _props$simpleMode === void 0 ? false : _props$simpleMode,
    _props$getImageLoaded = props.getImageLoadedSize,
    getImageLoadedSize = _props$getImageLoaded === void 0 ? undefined : _props$getImageLoaded;
  var operatorBar = simpleMode ? null : props.operatorBar === 'default' ? defaultOperator : props.operatorBar;
  var fixedOnScreen = simpleMode ? true : props.fixedOnScreen !== undefined ? props.fixedOnScreen : true;
  var Operator = ImagePreviewOperator;

  var _useState = useState(emptyImageProps),
    _useState2 = _slicedToArray(_useState, 2),
    imageLoadedState = _useState2[0],
    setImageLoadedState = _useState2[1];

  var _useState3 = useState(emptyImageProps),
    _useState4 = _slicedToArray(_useState3, 2),
    imageState = _useState4[0],
    setImageState = _useState4[1];

  var image = useRef(null);
  var imageStyle = {
    left: ''.concat(imageState.l, 'px'),
    top: ''.concat(imageState.t, 'px'),
    width: ''.concat(imageState.w, 'px'),
    height: ''.concat(imageState.h, 'px'),
    transform: 'translate('
      .concat(imageState.translate, ', ')
      .concat(imageState.translate, ') rotate(')
      .concat(imageState.r, 'deg)'),
  };
  var imageStaticStyle = {
    cursor: 'move',
    width: ''.concat(imageLoadedState.w, 'px'),
    height: ''.concat(imageLoadedState.h, 'px'),
    position: 'relative',
    overflow: 'hidden',
  }; // 禁用document滚轮防止意外滚动

  useEffect(
    function() {
      var prevent = function prevent(e) {
        return e.preventDefault();
      };

      var disablePassiveWheelEvent = function disablePassiveWheelEvent() {
        return document.addEventListener('wheel', prevent, {
          passive: false,
        });
      };

      var enablePassiveWheelEvent = function enablePassiveWheelEvent() {
        return document.removeEventListener('wheel', prevent);
      };

      if (!simpleMode && visible && fixedOnScreen) {
        disablePassiveWheelEvent();
      } else {
        enablePassiveWheelEvent();
      }

      return enablePassiveWheelEvent;
    },
    [visible, fixedOnScreen, simpleMode],
  );
  /**
   * @param {HTMLImageElement} node
   * @returns
   */

  var sizing = function sizing(node) {
    var l = fixedOnScreen ? window.innerWidth / 2 : 0; // 非固定时初始为0

    var t = fixedOnScreen ? window.innerHeight / 2 : 0; // 非固定时初始为0

    var wMax = window.innerWidth * 0.9;
    var hMax = window.innerHeight * 0.9 - 100; // 100为底部功能栏高度保留

    var wOrigin = node.naturalWidth; // 初始的图片宽

    var hOrigin = node.naturalHeight; // 初始的图片高度

    var wRatio = wOrigin / wMax;
    var hRatio = hOrigin / hMax;
    var size =
      wRatio < 1 && hRatio < 1
        ? {
            w: wOrigin,
            h: hOrigin,
          }
        : wRatio > hRatio
        ? {
            w: wMax,
            h: hOrigin / wRatio,
          }
        : {
            w: wOrigin / hRatio,
            h: hMax,
          };
    var translate = fixedOnScreen ? '-50%' : '0';
    var changedState = {
      t: t,
      l: l,
      w: size.w,
      h: size.h,
      translate: translate,
    };

    var state = _objectSpread({}, imageState, {}, changedState);

    setImageLoadedState(state);
    setImageState(state);
    return state;
  };
  /* 初始化容器大小 */

  var handleImageLoaded = function handleImageLoaded() {
    console.log('%c image loaded', 'color:red');

    if (image.current) {
      var _state = sizing(image.current);

      if (getImageLoadedSize) {
        getImageLoadedSize(_state);
      }
    }
  };
  /* 放大 */

  var zoomIn = function zoomIn() {
    setImageState(function(state) {
      return _objectSpread({}, state, {
        w: imageState.w * 1.05,
        h: imageState.h * 1.05,
      });
    });
  };
  /* 缩小 */

  var zoomOut = function zoomOut() {
    setImageState(function(state) {
      return _objectSpread({}, state, {
        w: imageState.w * 0.95,
        h: imageState.h * 0.95,
      });
    });
  };
  /* 旋转 */

  var rotate = function rotate() {
    setImageState(function(s) {
      return _objectSpread({}, s, {
        r: s.r + 90,
      });
    });
  };
  /* 重置 */

  var reset = function reset() {
    setControlMode('free-drag');
    setRotatable(false);
    setDraggable(false);
    setImageState(imageLoadedState);
  };
  /* 关闭预览 */

  var close = function close() {
    reset();

    if (onClose) {
      onClose();
    }
  };
  /* 特殊行为 */

  /* 滚轮缩放 */

  var toScale = function toScale(e) {
    var scaleDelta = e.deltaY < 0 ? +0.05 : -0.05; // 捕获鼠标在图片位置

    var relativePoint = {
      x: e.clientX - imageState.l,
      y: e.clientY - imageState.t,
    }; // 缩放宽高

    var w = imageState.w * (1 + scaleDelta);
    var h = imageState.h * (1 + scaleDelta); // 原有的偏移量

    var lastLeft = imageState.l;
    var lastTop = imageState.t; // 保持缩放后坐标点与鼠标坐标点重合

    var l = lastLeft - scaleDelta * relativePoint.x;
    var t = lastTop - scaleDelta * relativePoint.y;
    setImageState(function(s) {
      var updateState = _objectSpread({}, s, {
        w: w,
        h: h,
        l: l,
        t: t,
      });

      return updateState;
    });
  };

  var _useState5 = useState('free-drag'),
    _useState6 = _slicedToArray(_useState5, 2),
    controlMode = _useState6[0],
    setControlMode = _useState6[1];

  var changeMode = function changeMode(mode) {
    return setControlMode(mode);
  };
  /* 拖拽 */

  var _useState7 = useState({
      x: 0,
      y: 0,
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    distToImageBoundary = _useState8[0],
    setDistToImageBoundary = _useState8[1];

  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    draggable = _useState10[0],
    setDraggable = _useState10[1]; // 拖拽开始

  var startMove = function startMove(e) {
    e.preventDefault();
    setDraggable(true);
    setDistToImageBoundary({
      x: e.clientX - image.current.offsetLeft,
      y: e.clientY - image.current.offsetTop,
    });
  }; // 拖拽移动

  var dragging = function dragging(e) {
    if (!draggable) {
      return;
    }

    var l = e.clientX - distToImageBoundary.x;
    var t = e.clientY - distToImageBoundary.y;
    setImageState(function(s) {
      return _objectSpread({}, s, {
        l: l,
        t: t,
      });
    });
  }; // 拖拽结束

  var endMove = function endMove() {
    setDraggable(false);
  };
  /* 自由旋转 */

  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    rotatable = _useState12[0],
    setRotatable = _useState12[1];

  var _useState13 = useState({
      x: 0,
      y: 0,
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    pointA = _useState14[0],
    setPointA = _useState14[1];

  var startRotate = function startRotate(e) {
    e.preventDefault();
    setPointA({
      x: e.clientX,
      y: e.clientY,
    });
    setRotatable(true);
  };

  var rotating = function rotating(e) {
    if (!rotatable) {
      return;
    }

    var pointB = {
      x: e.clientX,
      y: e.clientY,
    };

    var getLine = function getLine(point1, point2) {
      return Math.sqrt(Math.pow(Math.abs(point1.x - point2.x), 2) + Math.pow(Math.abs(point1.y - point2.y), 2));
    };

    var _getBoundingClientRec = image.current.getBoundingClientRect(),
      left = _getBoundingClientRec.left,
      right = _getBoundingClientRec.right,
      top = _getBoundingClientRec.top,
      bottom = _getBoundingClientRec.bottom;

    var pointO = {
      x: (left + right) / 2,
      y: (top + bottom) / 2,
    };
    var a = getLine(pointB, pointA);
    var b = getLine(pointB, pointO);
    var c = getLine(pointA, pointO);
    var cosO = (b * b + c * c - a * a) / (2 * b * c);
    var degree = (Math.acos(cosO) * 180) / 3.1415; // 求向量积

    var matrix = [
      [pointA.x - pointO.x, pointB.x - pointO.x],
      [pointA.y - pointO.y, pointB.y - pointO.y],
    ];
    var direct = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0] >= 0 ? +1 : -1;
    setImageState(function(s) {
      return _objectSpread({}, s, {
        r: s.r + direct * degree,
      });
    });
    setPointA(pointB);
  };

  var endRotate = function endRotate(e) {
    setPointA({
      x: e.clientX,
      y: e.clientY,
    });
    setRotatable(false);
  };

  var handleMouseDown = function handleMouseDown(e) {
    controlMode === 'free-drag' ? startMove(e) : startRotate(e);
  };

  var handleMouseMove = function handleMouseMove(e) {
    controlMode === 'free-drag' ? dragging(e) : rotating(e);
  };

  var handleMouseUp = function handleMouseUp(e) {
    controlMode === 'free-drag' ? endMove() : endRotate(e);
  };
  /* 图片操作 */

  var imageOperations = {
    'zoom-in': zoomIn,
    'zoom-out': zoomOut,
    rotate: rotate,
    'free-drag': function freeDrag() {
      return changeMode('free-drag');
    },
    'free-rotate': function freeRotate() {
      return changeMode('free-rotate');
    },
    reset: reset,
  };
  /* 右键菜单: 终止当前进行的行为 */

  var disableActions = function disableActions() {
    setControlMode('free-drag');
    setDraggable(false);
    setRotatable(false);
  };
  /* 渲染 */

  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    fullScreenFlag = _useState16[0],
    setFullScreenFlag = _useState16[1];

  var easyCursorStyle = {
    cursor: fullScreenFlag ? 'zoom-out' : 'zoom-in',
  };

  var toggleFullScreen = function toggleFullScreen(e) {
    e.preventDefault();
    e.stopPropagation();
    var l = window.innerWidth / 2; // 非固定时初始为0

    var t = window.innerHeight / 2; // 非固定时初始为0

    var wMax = window.innerWidth * 0.9 - 48; // 安全边界

    var hMax = window.innerHeight * 0.9 - 48;
    var wRatio = imageLoadedState.w / wMax;
    var hRatio = imageLoadedState.h / hMax;
    var size =
      wRatio > hRatio
        ? {
            w: wMax,
            h: imageLoadedState.h / wRatio,
          }
        : {
            w: imageLoadedState.w / hRatio,
            h: hMax,
          };
    var translate = fixedOnScreen ? '-50%' : '0';
    setImageState(function(s) {
      return fullScreenFlag
        ? imageLoadedState
        : _objectSpread({}, s, {
            l: l,
            t: t,
            w: size.w,
            h: size.h,
            translate: translate,
          });
    });
    setFullScreenFlag(function(s) {
      return !s;
    });
  };

  if (!visible) {
    return /*#__PURE__*/ React.createElement(React.Fragment, null);
  }

  if (simpleMode) {
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'g-image-preview-wrapper g-fixed',
        onClick: close,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'g-image-preview-icon-close',
          onClick: close,
        },
        'X',
      ),
      /*#__PURE__*/ React.createElement('img', {
        className: 'g-image-preview-image',
        onContextMenu: disableActions,
        onClick: toggleFullScreen,
        style: _objectSpread({}, imageStyle, {}, easyCursorStyle),
        onLoad: handleImageLoaded,
        ref: image,
        src: url,
        alt: '\u56FE\u7247',
      }),
    );
  }

  var interceptOperatorClick = function interceptOperatorClick(e) {
    e.stopPropagation();

    if (e.target.className === 'g-image-preview-action-toolbar') {
      return;
    }

    var methodName = e.target.dataset['gearImageMethod'];

    if (!methodName) {
      return console.warn("Method name on attribute 'data-gear-image-method' is required");
    }

    var method = imageOperations[methodName];

    if (!method) {
      return console.warn("can't find method which refers ".concat(methodName));
    }

    return method();
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'g-image-preview-wrapper '.concat(fixedOnScreen ? 'g-fixed' : ''),
      style: fixedOnScreen ? {} : imageStaticStyle,
      onClick: fixedOnScreen ? close : void 0,
    },
    fixedOnScreen &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'g-image-preview-icon-close',
          onClick: close,
        },
        'X',
      ),
    /*#__PURE__*/ React.createElement('img', {
      className: 'g-image-preview-image',
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onContextMenu: disableActions,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: imageStyle,
      onLoad: handleImageLoaded,
      ref: image,
      src: url,
      alt: '\u56FE\u7247',
      onWheel: toScale,
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'g-image-preview-action-toolbar',
        onClick: interceptOperatorClick,
      },
      /*#__PURE__*/ React.createElement(Operator, {
        toolbar: operatorBar || null,
        operations: imageOperations,
      }),
    ),
  );
}
