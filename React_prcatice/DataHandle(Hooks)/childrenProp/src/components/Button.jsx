import React from "react";

export default function Button(props){
    let{children,fun} = props;

    return (
        <>
            <div className="btn btn-danger me-2" onClick={fun}>{children}</div>
        </>
    );
}