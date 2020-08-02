import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {  //  we can change the props in the () for the name of the props object and then not use props."  " like { index, score, changeScore }
  
    let index = props.index;  

    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => props.changeScore(index,-1)}> - </button>
          <span className="counter-score">{ props.score }</span>
          <button className="counter-action increment" onClick={() => props.changeScore(index,+1)}> + </button>
        </div>
      
      );
    }
Counter.propTypes = {
  inddex: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};


export default Counter;