import React from 'react'

function card(props) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{props.carddata.title}</a>
        </h4>
        <p className="card-text">{props.carddata.description}</p>
      </div>
    </div>
  </div>
  )
}

export default card