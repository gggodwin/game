import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';



export default class App extends React.Component {

  constructor (props){
    super(props);
    this.state ={
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  /*for resetting the game*/
  initializeGame = () => {
    this.setState({
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ],
      currentPlayer: 1,
    });
  }

  getWinner =() => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;

   /* check rows */
   
    var i;

    for (i = 0; i < NUM_TILES; i++){
      sum = arr[i][0] + arr[i][1] + arr[i][2]; // 0,0 + 0,1 + 1,2
      if (sum == 3){
        return 1;
      }else if (sum == -3){
        return -1;
      } 
    }
    
    /* check column*/
    for (i = 0; i < NUM_TILES; i++){
      sum = arr[0][i] + arr[1][i] + arr[2][i]; // 0,0 + 1,1 + 2,2
      if (sum == 3){
        return 1;
      }else if (sum == -3){
        return -1;
      } 
    }
    
    /* check diagonal*/
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if(sum ==3){return 1;}
    else if (sum == -3){return -1;}

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if(sum ==3){return 1;}
    else if (sum == -3){return -1;}

  }


  onTilePress = (row, col) => {
    var value = this.state.gameState[row][col];
    if(value !==0){return;}

    var currentPlayer = this.state.gameState[row][col];
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    var winner = this.getWinner();
    console.log(winner);
    if (winner == 1){
      alert('player 1 WINS');
      this.initializeGame();
    }else if(winner == -1){
      alert('player 2 WINS');
      this.initializeGame();
    }
  }

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch(value){
      case 1: return <Icon name="close" style={styles.tileX}/>;
      case -1: return <Icon name="circle-outline" style={styles.tile0}/>;
      default: return <View/>;
    }
  }

  render (){

  return(
    <View style = {styles.container}>

      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(0,0)}>{this.renderIcon(0,0)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(0,1)}>{this.renderIcon(0,1)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(0,2)}>{this.renderIcon(0,2)}</TouchableOpacity>
      </View>

      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(1,0)}>{this.renderIcon(1,0)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(1,1)}>{this.renderIcon(1,1)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(1,2)}>{this.renderIcon(1,2)}</TouchableOpacity>
      </View>

      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(2,0)}>{this.renderIcon(2,0)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(2,1)}>{this.renderIcon(2,1)}</TouchableOpacity>
      <TouchableOpacity style = {styles.tile} onPress={()=>this.onTilePress(2,2)}>{this.renderIcon(2,2)}</TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},

tile:{
borderWidth: 2,
width: 100,
height: 100,
alignItems: 'center',
justifyContent: 'center'
},

tileX:{
color: 'red',
fontSize: 100
},

tile0:{
color: 'black',
fontSize: 80,
}
});
