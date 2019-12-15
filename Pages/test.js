import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

class test extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  /*fetchData = async () => {
    const response = await fetch("https://api.myjson.com/bins/1cfq3w");
    const data = await response.json();
    this.setState({ data: data });
  };*/

  fetchData = async () => {
      const url = 'https://api.myjson.com/bins/1cfq3w';
      fetch(url).then((response) => response.json())
      .then((responseJason)=> {
          this.setState({
              data: this.state.data.concat(responseJason)
          })
      }
      )

  }

  render() {
    return (
      <View >
          <View style={styles.container2}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity> 
                </SafeAreaView>
          </View>
          <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
            <View style={styles.listing}>
                <Image source ={{uri:item.image}}
                        style ={{width: '100%', height: 100, borderRadius: 30}}
                        
                />
                <Text style={styles.text1}>
                    {`${item.name} \n`}
                </Text>
                <Text style={styles.text2}>
                    {`$${item.price}/Day`}
                </Text>
            </View>
            }
           
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#efefef', 
      paddingTop: 20,

  },

  container2: {
    flex: 1,
    backgroundColor: "#FFF"
},

  listing:{
    padding:10,
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 30,
    
  },

  text1:{
    textAlign:'center',
    fontWeight:"bold",
    marginBottom: -10,
  },
  text2:{
    textAlign:'center',
    backgroundColor:'#0000FF',
    color: '#ffff',
    marginLeft: 130,
    marginRight:130,
    borderRadius:40,
  },


});

export default test;