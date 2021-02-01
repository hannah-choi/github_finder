import React, { Component } from "react";

export default class Nav extends Component {
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github",
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}></i> {this.props.title}
                </h1>
            </nav>
        );
    }
}
