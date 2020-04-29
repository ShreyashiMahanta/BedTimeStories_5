import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Stylesheet,  
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config.js';

export default class ReadScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            search : '',
            storyName :'',
            allStories : '',
        }
    }

    updateSearch = search => {
        this.setState({ search });
      };    
      retrieveStories =() =>{
        db.collection("stories").where("storyName", "==", true).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error finding the story : ", error);
    });
      }
      searchFilterFunction(text){
          const newData = this.arrayholder.filter(function(allStories) {
            const allStoriesData = allStories.title ? allStories.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return 
            allStoriesData.indexOf(textData) > -1;
          });
          this.setState({
            dataSource: newData,
            text: text,
          });
      }
        render(){
            return(
            <View style = {styles.view}>
            <Text style = {styles.read}>Read Stories</Text>
            <SearchBar
            style = {{
                borderWidth : 4,
                borderRadius : 8,
                borderColor : '#1C4670',
                width : 600,
                height : 80,
            }}

            placeholder="Search Your Favourite Story Here...."
            onChangeText={ text => this.SearchFilterFunction(text)}
           // onChangeText={this.updateSearch(text)}
            value={search}
      />
            </View>
         );         
           }}

var styles = Stylesheet.create({
    view : {
        backgroundColor: '#0C1446',
        flex : 1,
        justifContent : 'center',
        alignItem : 'center'
    },
    read : {
        color : '#145DA0',
        backgroundColor : '#B1D4E0',
        borderWidth : 5,
        borderColor : '#0C2D48',
        textAlign : 'center',
        width : 800,
        height : 200,
        fontSize : 20,
    },
})
