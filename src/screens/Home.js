
import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying]= useState(null);
  const item ={
      id:1,
      title:"Highway to hell",
      group: "AC/DC",
      album_image: "https://www.acdcbrasil.net/wp-content/uploads/capa-acdc-highway-to-hell.jpg",
      year:2022,
      genre: "rock"
  };

  return (
    <View style={ styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem 
      isPlaying={()=> currentPlaying == item.id} 
      music={item} 
      navigation={navigation} 
      onPlayPause={() => {}} />

    </View>
  );
}

const styles = StyleSheet.create ({
    container:{
      flex:1,
      backgroundColor:"#121212",
      paddingTop:16,
    },
      title:{
        fontSize:36,
        fontWeight:"bold",
        color:"#fff",
        marginTop:20,
        marginLeft:20,
      },
})