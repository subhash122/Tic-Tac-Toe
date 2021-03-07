import React from "react";
import "./index.css";

class GridItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        // console.log(this.props)
        return (
            <div onClick={()=>this.props.handleClick(this.props.row,this.props.column)} 
                className="cell"  row={this.props.row} column={this.props.column}>
                {this.props.gameState[this.props.row][this.props.column]}
            </div>
        )
    }
} 
export default GridItem;