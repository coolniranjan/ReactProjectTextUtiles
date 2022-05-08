import React from 'react'

export default function Alert(props) {
    return (

        <div style={{ height: "0px" }}>

            {props.alertmsg && <div className={`alert alert-${props.alertmsg.msgtype}`} role="alert">
                {props.alertmsg.msgtype}  {props.alertmsg.msg}
            </div>}
        </div>


    )
}
