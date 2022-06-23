// Nguyên class này được xem là một componment

import React from "react";
class Greeting extends React.Component {
    // Xay dung phuong thuc tra ve JSX cua component
    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily:"Arial"
        };
        return (
            <div style={mystyle}>
                <h3>Hello {this.props.fullName} </h3>
            </div>
        );
    }
}

Greeting.defaultProps = {fullName: "Hi YOU!"}
export default Greeting;
 