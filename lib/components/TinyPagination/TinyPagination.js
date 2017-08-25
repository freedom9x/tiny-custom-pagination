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
    value: function renderIndexFromTo(total, pageID, itemPerPage) {
      var startIndex = (pageID - 1) * itemPerPage + 1;
      var endIndex = 1;
      if (pageID * itemPerPage > total) {
        endIndex = total;
      } else {
        endIndex = pageID * itemPerPage;
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
    value: function renderPreBtn(totalBtns, pageID) {
      if (pageID > 1) {
        return this.props.renderBtnNumber('PRE');
      }
    }
  }, {
    key: 'renderNextBtn',
    value: function renderNextBtn(totalBtns, pageID) {
      if (pageID !== totalBtns) {
        return this.props.renderBtnNumber('NEXT');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          total = _props.total,
          pageID = _props.pageID,
          itemPerPage = _props.itemPerPage;

      var totalBtns = parseInt(total / itemPerPage, 0);
      return _react2.default.createElement(
        'div',
        { className: 'tiny-pagination-container' },
        _react2.default.createElement(
          'div',
          null,
          this.renderIndexFromTo(total, pageID, itemPerPage)
        ),
        _react2.default.createElement(
          'div',
          { className: 'btns-number-container' },
          this.renderPreBtn(totalBtns, pageID),
          this.props.renderBtnNumber(1),
          this.renderNextBtn(totalBtns, pageID)
        )
      );
    }
  }]);

  return TinyPagination;
}(_react2.default.Component);

TinyPagination.propTypes = {
  total: _propTypes2.default.number.isRequired,
  pageID: _propTypes2.default.number.isRequired,
  changePage: _propTypes2.default.func.isRequired,
  itemPerPage: _propTypes2.default.number.isRequired,
  renderBtnNumber: _propTypes2.default.func.isRequired
};

exports.default = TinyPagination;