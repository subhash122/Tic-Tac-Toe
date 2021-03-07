import React from 'react';
import './App.css';
import Footer from'./Component/Footer';
import GridRow from './Component/GridRow';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      gameActive:true,
      playerTurn:'X',
      gameState :[["","",""],["","",""],["","",""] ],
      winningCodition: [
                          [{0:0,1:0},{0:0,1:1},{0:0,1:2}],
                          [{0:1,1:0},{0:1,1:1},{0:1,1:2}],
                          [{0:2,1:0},{0:2,1:1},{0:2,1:2}],
                          [{0:0,1:0},{0:1,1:0} ,{0:2,1:0} ],
                          [{0:0,1:1},{0:1,1:1} ,{0:2,1:1}],
                          [{0:0,1:2},{0:1,1:2},{0:2,1:2}],
                          [{0:0,1:0},{0:1,1:1},{0:2,1:2}],
                          [{0:0,1:2},{0:1,1:1},{0:2,1:0}],
                        ],
    }
  }
  changePlayer=()=>{
    this.setState({
        playerTurn:this.state.playerTurn==='X'?'O':'X',
      })
  }
  handleCellPlayed=(rowIndex,columnIndex)=>{
    let changedGameState=[...this.state.gameState];
    changedGameState[rowIndex][columnIndex]=this.state.playerTurn
    this.setState({
      gameState:changedGameState,
    })
    let gameWon=false;
    for(let i=0;i<=7;i++){
      const reqCondition=this.state.winningCodition[i];
      const a=this.state.gameState[reqCondition[0][0]][reqCondition[0][1]]
      const b=this.state.gameState[reqCondition[1][0]][reqCondition[1][1]]
      const c=this.state.gameState[reqCondition[2][0]][reqCondition[2][1]]
      if(a==='' && b==='' && c==='')
        continue;
      if(a===b && b===c){
        gameWon=true;
        break;
      }
    }
    if(gameWon===true){
      alert( `player ${this.state.playerTurn} won`)
      this.setState({
        gameActive:false,
      })
      return;
    }

    // DRAW CONDITION
    if(!this.state.gameState[0].includes('') && !this.state.gameState[1].includes('')&& !this.state.gameState[2].includes('')){
      alert(`Draw`)
      this.setState({
        gameActive:false,
      })
      return;
    }

    this.changePlayer();
  }
  handleClick=(rowIndex,columnIndex)=>{
    if(this.state.gameActive===true){
      if(this.state.gameState[rowIndex][columnIndex]===""){
        this.handleCellPlayed(rowIndex,columnIndex)
      }
    }
  }
  render(){
    let column=[<GridRow handleClick={this.handleClick} gameState={this.state.gameState} row={0}/>,
    <GridRow handleClick={this.handleClick}  gameState={this.state.gameState} row={1}/>,
    <GridRow handleClick={this.handleClick}  gameState={this.state.gameState} row={2}/>];
    return (
      <div className="section">
        <div className="header">Tic-Tac-Toe</div>
        <div className="game--container">
          {column}
        </div>
        <Footer playerTurn={this.state.playerTurn}/> 
      </div>
    )
  }
}

export default App;
