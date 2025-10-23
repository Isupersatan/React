import { Fragment } from "react";
import Employee from "./components/Employee";
import { Student } from "./components/Student";

function app(){
    return (
        <Fragment>
        <div>
        <div>This is first child component</div>
        <h1>This is second child component</h1>
        </div>
        <Student/>
        <Employee/>
        </Fragment>
    );
}

export default app;