import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import { addScore } from './../redux'
import { connect } from 'react-redux'


const Square = () =>{
    
   const [moleActive, setMoleActive] = useState(false)
   const [isGameOver, setGameOver] = useState(false)

   const randomTime = Math.random() * 20000
   let timerId
    useEffect (() => {
        const timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {setMoleActive(false)}, 800);
        },randomTime)
        setTimeout( endGame, 60 * 1000)
    },[])
    
    function endGame(){
      clearInterval(timerId)
      setGameOver(true)
    }
    

    return(
      <TouchableOpacity onPress={moleActive? props.addScore : null}>
            <View style ={moleActive? styles.mole:styles.square}>
          {isGameOver &&  <Text> X  </Text>}
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    square: {
      flex: 1,
      minHeight: 80,
      minWidth: 80,
      margin: 10,
      backgroundColor: 'blue',
    },

    mole:{
      flex: 1,
      minHeight: 80,
      minWidth: 80,
      margin: 10,
      backgroundColor: 'red',
    }

  });

  const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Square)