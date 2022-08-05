import React,{ useEffect, useState } from "react";
import { StyleSheet,View, Text, } from "react-native";
import Square from './Square'
import { connect } from 'react-redux'
import props from 'prop-types';


const GameBoard = (props) => {
// Declare a new state variable, which we'll call "timeLeft"
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (!timeLeft) return
        const timerId = setInterval(()=>{
        // 1000 means in Miliseconds
        setTimeLeft(timeLeft -1)
        },1000)
        return () => clearInterval(timerId)
    }, [timeLeft])

    return(
    <View style = {styles.container}> 
        <Text>Whack A Mole</Text>
        <Text>{timeLeft}</Text>
        <Text>{props.score} Moles whacked!</Text>
            <View style = {styles.game}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    game:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        paddingTop: 10,
    }
  });

  const mapStateToProps = state => {
    return {
      score: state.score
    }
  }

export default connect(mapStateToProps)(GameBoard)