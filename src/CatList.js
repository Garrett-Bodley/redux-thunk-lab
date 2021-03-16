import React, { Component } from 'react'

class CatList extends Component{

  renderCats = () => {
    return this.props.catPics.map(cat => {
      return(
        <img key={cat.id} alt={'a floofy cat!'} src={cat.url} />
      )}
    )
  }

  render(){
    // debugger
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }

}

export default CatList
