import React from 'react'
import "./styles/pinterest.css";

function Pinterest() {
  return (
    <div>
         <h2>Pinterest Clone</h2>

    <div className="masonry-grid">

        <div className="item item-tall">
            <img src="https://i.pinimg.com/1200x/59/b2/43/59b243f67fe00797558fef8369f37586.jpg" alt="" />
        </div>

        <div className="item item-medium">
            <img src="https://i.pinimg.com/1200x/4c/96/36/4c9636e62edbb0bd8933616597343f17.jpg" alt="" />
        </div>

        <div className="item item-small">
            <img src="https://i.pinimg.com/736x/38/a5/eb/38a5ebc11be1f4a5136455a481cf28ac.jpg" alt="" />
        </div>

        <div className="item item-tall">
            <img src="https://i.pinimg.com/1200x/23/40/e6/2340e67e8ffd5c23ac921ec152f96a54.jpg" alt="" />
        </div>

        <div className="item item-medium">
            <img src="https://i.pinimg.com/1200x/f4/bb/83/f4bb833fde5493ee4866a66940f3f0e4.jpg" alt="" />
        </div>

        <div className="item item-small">
            <img src="https://i.pinimg.com/1200x/e6/4f/c1/e64fc17c0f368e3917da5a54641a30bd.jpg" alt="" />
        </div>

    </div>
    </div>
  )
}

export default Pinterest