import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Stylesheet,  
    Text,
    TextInput,
    KeyboardAvoidingView,
    ToastAndroid,
} from 'react-native';
import db from '../config.js';
import Constants from "expo-constants";
const App = () => {
    const Toast = () => {
        ToastAndroid.show("Congratulations! You have submitted  your story!", ToastAndroid.SHORT);
      };
    
}

export default class WriteScreen extends React.Component {
constructor(){
    super();
    this.state = {
        author : '',
        title : '',
        storyText : '',
    }
}
  
    submitStory = async()=>{
        const authorRef = await db.collection("stories").where("author","==",this.state.author).get()
        authorRef.docs.map((doc)=>{
            var author = doc.data();
        })
        const titleRef = await db.collection("stories").where("title","==",this.state.title).get()
        titleRef.docs.map((doc)=>{
            var title = doc.data();
        })

        const storyTextRef = await db.collection("stories").where("storyText","==",this.state.storyText).get()
        storyTextRef.docs.map((doc)=>{
            var storyText = doc.data();
        })
    }
     
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style = {styles.view}>
            <Text style = {styles.writeStories}>Write Stories</Text>
            <View style = {styles.view}>
            <TextInput
            style =  {{
                height : 30,
                borderWidth  : 2,
                borderColor : '#FCC0C5',
                color : '#E1E2E7',
                width : 60,
                padding : 5,
                margin : 10,
            }}
            placeholder =  "Title Of The Story..."
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <TextInput
            style =  {{
                height : 30,
                borderWidth  : 2,
                borderColor : '#FCC0C5',
                color : '#E1E2E7',
                width : 60,
                padding : 5,
                margin : 10,
            }}
            placeholder =  "Author..."
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <TextInput
            style = {{
                height : 100,
                borderWidth  : 2,
                borderColor : '#E57F84',
                color : '#E1E2E7',
                width : 80,
                padding : 5,
                margin : 10,
            }}
            placeholder =  "Write your dream story here...."
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            </View>
            <TouchableOpacity style = {styles.submit}
             onPress={()=>{
                this.submitStory()
                Toast();
              }}>
            >Submit</TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
   }
}
var styles = Stylesheet.create({
    view : {
        backgroundColor: '#0C1446',
        flex : 1,
        justifContent : 'center',
        alignItem : 'center'
    },
    writeStories : {
        fontSize : 25,
        fontWeight : "bold",
        color : '#4297A0',
        textAlign : 'center',
    },
    submit : {
        color : '#F7E7CE',
        backgroundColor : '#CB9A9F',
        fontSize : 18,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#F7E7CE',
    },
    container : {
     flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
})