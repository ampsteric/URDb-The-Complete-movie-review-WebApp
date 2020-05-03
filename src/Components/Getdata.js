import React from 'react'

export default function Getdata(props) {
    return (
        <div>
            <div class="flexi">
                <div class="head">URDb</div>
                <div> <input type="text" onChange={props.change} /> </div>
            </div>
        </div>
    )
}
