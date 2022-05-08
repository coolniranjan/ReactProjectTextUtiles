import React from 'react'
import './st.css'
export default function AboutUs(props) {
    return (<>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className='my-1'>ABOUT US</h2>
            <hr />
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis excepturi voluptate necessitatibus deserunt veritatis sint, quibusdam voluptatibus voluptatum obcaecati, quae nesciunt possimus natus non vel atque praesentium libero tempora. Quibusdam, perferendis! Quod, officia.</b>
        </div>
    </>
    )
}
