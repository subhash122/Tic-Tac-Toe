import React from 'react';
import GridItem from '../GridItem/index'
class GridRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let gridrow=[<GridItem handleClick={this.props.handleClick}  gameState={this.props.gameState} row={this.props.row} column={0}/>,
        <GridItem handleClick={this.props.handleClick}  gameState={this.props.gameState} row={this.props.row} column={1}/>,
        <GridItem handleClick={this.props.handleClick}  gameState={this.props.gameState} row={this.props.row} column={2}/>];
        return(
            < >{gridrow}</>
        )
    }
}
export default GridRow