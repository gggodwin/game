import React, { Component } from "react";
import { View,Text } from "react-native";

export default function Greetings (props){
    return(
        <View>
        <Text> blank {props.name} </Text>  
        </View>
    )
    
}