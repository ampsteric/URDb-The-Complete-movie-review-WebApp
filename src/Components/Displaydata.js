import React from 'react'

export default function Displaydata(props) {

    return (


        <div class="container">

         <div class="left">
            <div><img src={props.img} alt="" /> </div>
            </div>

        <div class="right">
            <div><h1 class="heading">{props.name}</h1></div>
            <div>
            <h1>{`Plot:`}</h1>
            <p>{props.plt}</p>
            </div>
            <div class="flexi">
            <div class="card"><h1>{props.rat}</h1></div>
            <div class="card"><h1>{props.dat}</h1></div>
            <div class="card"><h1>{props.gen}</h1></div>
            <div class="card"><h1>{props.dir}</h1></div>
            </div>
        </div> 

           
       
              </div>
    )
}


 