import React, {Component} from 'react';

class NavLink extends Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render(){
        return (
            <a onClick={this.handleClick}>
             {this.props.children}
            </a>
        );
    }
}

export default NavLink;