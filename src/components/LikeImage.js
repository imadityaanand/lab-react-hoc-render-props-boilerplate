import React, { useState } from 'react'
import withLike from './withLikeFunction';

function LikeImage(props) {
  
  return (
    <div>
      <button onClick={props.click}>Like Image {props.count}</button>
    </div>
  )
}

export default withLike(LikeImage);