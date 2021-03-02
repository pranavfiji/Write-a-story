import React from 'react';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import TransactionScreen from './screens/bookTransaction';
import SearchScreen from './screens/search';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class WriteStory extends React.Component{
    render(){
        return(
            <View>
            <Header style={stlyes.header}>Write and Share</Header>
                <TextInput 
                placeholder="Your Dope Story Title"
                styles={styles.input}
                ></TextInput>
                <TextInput
                 placeholder="Author"
                 styles={styles.input}
                >
                </TextInput>
                <TextInput
                placeholder="Story Here"
                styles={styles.input}
                
                >

                </TextInput>
                <TouchableOpacity >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style=StyleSheet.create({
    input:{
        flexDirection:"row",
        margin:20,
        width:200,
        height:40,
        borderWidth:2,
        fontSize:20,
    },
    story:{
        flexDirection:"row",
        margin:20,
         multiline: "true",
         width:200,
         height:100,
         borderWidth:2,
         fontSize:20,
    },
    header:{
        borderWidth:2,
        backgroundColor:"grey"
    }
})
export default WriteStory