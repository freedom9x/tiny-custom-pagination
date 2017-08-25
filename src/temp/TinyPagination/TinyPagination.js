import React from 'react'
import './TinyPagination.css'
import PropTypes from 'prop-types';

class TinyPagination extends React.Component {

  renderIndexFromTo(total, selectedPageId, itemPerPage){
    let startIndex = (selectedPageId - 1) * itemPerPage + 1;
    let endIndex = 1;
    if((selectedPageId * itemPerPage) >  total){
      endIndex = total;
    }else{
      endIndex = selectedPageId * itemPerPage;
    }

    return(
      <span>
        {startIndex}-{endIndex} of {total}
      </span>
    );
  }

  renderPreBtn(totalBtns, selectedPageId){
    if(selectedPageId > 1){
      return this.props.renderBtnNumber('PRE');
    }
  }

  renderNextBtn(totalBtns, selectedPageId){
    if(selectedPageId !== totalBtns){
      return this.props.renderBtnNumber('NEXT');
    }
  }

  renderBtnNumbers(totalBtns, selectedPageId, maxBtnNumbers, maxBtnPerSide){
    let btns = [];
    if(totalBtns < maxBtnNumbers){
      for(let i = 1; i <= totalBtns; i++){
        btns.push(i);
      }
    }else{
      let betweenArray = [];
      let first = (selectedPageId - maxBtnPerSide > 1? selectedPageId - maxBtnPerSide : 1);
      let last = (selectedPageId + maxBtnPerSide > totalBtns? totalBtns: selectedPageId + maxBtnPerSide);
      for(let i = first; i <= last; i++){
        betweenArray.push(i);
      }
      if(first !== 1){
        btns.push(1);
      }
      if(first > 2){
        btns.push(-1);
      }
      btns = [...btns,...betweenArray];
      if(last < totalBtns){
        btns.push(-2);
      }
      if(last !== totalBtns){
        btns.push(totalBtns);
      }
    }
    return btns.map((number)=> {
      if(number > 0 ){
        return this.props.renderBtnNumber(number)
      }else{
        return <span key = {number}>...</span>
      }
    });
  }

  render() {
    let {total, selectedPageId, itemPerPage, maxBtnNumbers} = this.props;
    let totalBtns = parseInt(total / itemPerPage, 0);
    totalBtns = (totalBtns * itemPerPage) < total ? totalBtns + 1: totalBtns;
    const maxBtnPerSide = 2;
    return (
      <div className = 'tiny-pagination-container'>
        <div>
          {this.renderIndexFromTo(total, selectedPageId, itemPerPage)}
        </div>
        <div className = 'btns-number-container'>
          {this.renderPreBtn(totalBtns, selectedPageId)}
          {this.renderBtnNumbers(totalBtns, selectedPageId, maxBtnNumbers, maxBtnPerSide)}
          {this.renderNextBtn(totalBtns, selectedPageId)}
        </div>
      </div>
    )
  }
}
TinyPagination.propTypes = {
  total: PropTypes.number.isRequired,
  selectedPageId: PropTypes.number.isRequired,
  itemPerPage: PropTypes.number.isRequired,
  renderBtnNumber: PropTypes.func.isRequired,
  maxBtnNumbers: PropTypes.number.isRequired
};

export default TinyPagination