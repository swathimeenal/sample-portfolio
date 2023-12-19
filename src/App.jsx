import React from 'react' //rfce

function App() {
  let data = 
  [{title:"Project One",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum. Delectus nobis, aperiam facilis eaque aliquam eum ipsam nam pariatur harum, in tenetur ullam. Quibusdam explicabo perspiciatis fugit. Minima, illum."},
     {title:"Project Two",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum. Delectus nobis, aperiam facilis eaque aliquam eum ipsam nam pariatur harum, in tenetur ullam. "},
     {title:"Project Three",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum. "},
     {title:"Project Four",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum. Delectus nobis, aperiam facilis eaque aliquam eum ipsam nam pariatur harum, in tenetur ullam."},
     {title:"Project Five",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum. Delectus nobis, aperiam facilis eaque aliquam eum ipsam nam pariatur harum."},
     {title:"Project Six",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.."}]
  return <>
  <div className="container">
{/* <!-- Page Heading --> */}
    <h1 className="my-4">Page Heading
      <small>Secondary Text</small>
    </h1>

<div className="row">
 {
  data.map((e,i)=>{
    return<div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{e.title}</a>
        </h4>
        <p className="card-text">{e.description}</p>
      </div>
    </div>
  </div>
  })
  } 
  </div>
{/* <!-- /.row --> */}



</div>
  </>
}

export default App
