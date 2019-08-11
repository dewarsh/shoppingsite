import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
NavLink.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    index: PropTypes.number.isRequired
}

export default NavLink;