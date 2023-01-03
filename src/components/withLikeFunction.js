import React, { Component } from 'react'

const withLike = (Original) => {
    class NewComponent extends Component {
        constructor(){
            super()
            this.state = {
                likeCounter: 0
            }
        }

        handleLikeCount = ()=>{
            this.setState({likeCounter: this.state.likeCounter+1});
        }

        render() {
            return <Original click={this.handleLikeCount} count={this.state.likeCounter} text="24" />
        }
    }
    return NewComponent
}

export default withLike
