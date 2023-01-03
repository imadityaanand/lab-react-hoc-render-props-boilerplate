import React, { useState } from 'react'
import withLike from './withLikeFunction';

function LikePost(props) {

  return (
    <div>
      <button onClick={props.click}>Like Post {props.count}</button>
    </div>
  )
}

export default withLike(LikePost);