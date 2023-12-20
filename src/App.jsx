import React from 'react' //rfce
import card from './components/card'

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
    return<card carddata={e} key={i}/>
  })
  } 
  </div>
{/* <!-- /.row --> */}



</div>
  </>
}

export default App
