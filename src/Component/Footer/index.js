import React from 'react';
import './index.css'
class Footer extends React.Component{
    constructor(props){
        super(props);   
    }
    render(){
        return  <div className="footer"> player {this.props.playerTurn}'s turn</div>
    }
}

export default Footer;