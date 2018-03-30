'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TinyPagination.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TinyPagination = function (_React$Component) {
  _inherits(TinyPagination, _React$Component);

  function TinyPagination() {
    _classCallCheck(this, TinyPagination);

    return _possibleConstructorReturn(this, (TinyPagination.__proto__ || Object.getPrototypeOf(TinyPagination)).apply(this, arguments));
  }

  _createClass(TinyPagination, [{
    key: 'renderIndexFromTo',
    value: function renderIndexFromTo(total, selectedPageId, itemPerPage) {
      var startIndex = 0;
      if (total > 0) {
        startIndex = (selectedPageId - 1) * itemPerPage + 1;
      }

      var endIndex = 1;
      if (selectedPageId * itemPerPage > total) {
        endIndex = total;
      } else {
        endIndex = selectedPageId * itemPerPage;
      }

      return _react2.default.createElement(
        'span',
        null,
        startIndex,
        '-',
        endIndex,
        ' of ',
        total
      );
    }
  }, {
    key: 'renderPreBtn',
    value: function renderPreBtn(totalBtns, selectedPageId) {
      if (selectedPageId > 1) {
        return this.props.renderBtnNumber('PRE');
      }
    }
  }, {
    key: 'renderNextBtn',
    value: function renderNextBtn(totalBtns, selectedPageId) {
      if (selectedPageId !== totalBtns) {
        return this.props.renderBtnNumber('NEXT');
      }
    }
  }, {
    key: 'renderBtnNumbers',
    value: function renderBtnNumbers(totalBtns, selectedPageId, maxBtnNumbers, maxBtnPerSide) {
      var _this2 = this;

      var _props = this.props,
          spreadClass = _props.spreadClass,
          spreadStyle = _props.spreadStyle;

      var btns = [];
      if (totalBtns < maxBtnNumbers) {
        for (var i = 1; i <= totalBtns; i++) {
          btns.push(i);
        }
      } else {
        var betweenArray = [];
        var first = selectedPageId - maxBtnPerSide > 1 ? selectedPageId - maxBtnPerSide : 1;
        var last = selectedPageId + maxBtnPerSide > totalBtns ? totalBtns : selectedPageId + maxBtnPerSide;
        for (var _i = first; _i <= last; _i++) {
          betweenArray.push(_i);
        }
        if (first !== 1) {
          btns.push(1);
        }
        if (first > 2) {
          btns.push(-1);
        }
        btns = [].concat(_toConsumableArray(btns), betweenArray);
        if (last < totalBtns) {
          btns.push(-2);
        }
        if (last !== totalBtns) {
          btns.push(totalBtns);
        }
      }
      return btns.map(function (number) {
        if (number > 0) {
          return _this2.props.renderBtnNumber(number);
        } else {
          return _react2.default.createElement(
            'div',
            { key: number,
              className: 'spread ' + (spreadClass ? spreadClass : ''),
              style: spreadStyle
            },
            '...'
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          total = _props2.total,
          selectedPageId = _props2.selectedPageId,
          itemPerPage = _props2.itemPerPage,
          maxBtnNumbers = _props2.maxBtnNumbers,
          wrapStyle = _props2.wrapStyle,
          wrapClass = _props2.wrapClass,
          counterClass = _props2.counterClass,
          counterStyle = _props2.counterStyle,
          btnsClass = _props2.btnsClass,
          btnsStyle = _props2.btnsStyle,
          _props2$maxBtnPerSide = _props2.maxBtnPerSide,
          maxBtnPerSide = _props2$maxBtnPerSide === undefined ? 2 : _props2$maxBtnPerSide;

      var totalBtns = parseInt(total / itemPerPage, 0);
      totalBtns = totalBtns * itemPerPage < total ? totalBtns + 1 : totalBtns;
      if (total === 0) {
        return null;
      } else return _react2.default.createElement(
        'div',
        { className: 'tiny-pagination-container ' + (wrapClass ? wrapClass : ''),
          style: wrapStyle
        },
        _react2.default.createElement(
          'div',
          { className: 'counter-container ' + (counterClass ? counterClass : ''),
            style: counterStyle
          },
          this.renderIndexFromTo(total, selectedPageId, itemPerPage)
        ),
        _react2.default.createElement(
          'div',
          { className: 'btns-number-container ' + btnsClass,
            style: btnsStyle
          },
          this.renderPreBtn(totalBtns, selectedPageId),
          this.renderBtnNumbers(totalBtns, selectedPageId, maxBtnNumbers, maxBtnPerSide),
          this.renderNextBtn(totalBtns, selectedPageId)
        )
      );
    }
  }]);

  return TinyPagination;
}(_react2.default.Component);

TinyPagination.propTypes = {
  total: _propTypes2.default.number.isRequired,
  selectedPageId: _propTypes2.default.number.isRequired,
  itemPerPage: _propTypes2.default.number.isRequired,
  renderBtnNumber: _propTypes2.default.func.isRequired,
  maxBtnNumbers: _propTypes2.default.number.isRequired,
  wrapStyle: _propTypes2.default.object,
  wrapClass: _propTypes2.default.string,
  counterClass: _propTypes2.default.string,
  counterStyle: _propTypes2.default.object,
  btnsClass: _propTypes2.default.string,
  btnsStyle: _propTypes2.default.object,
  spreadClass: _propTypes2.default.string,
  spreadStyle: _propTypes2.default.object

};

exports.default = TinyPagination;