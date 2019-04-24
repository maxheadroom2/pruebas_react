import React from 'react';
import Header from './header.js';

const Body = (props) => {
  let {handleClick} = props

  return(
    <div>
      <Header handleClick={handleClick} />
      <div>
        <p>
          Body
        </p>
      </div>
    </div>
  )
}
export default Body;
