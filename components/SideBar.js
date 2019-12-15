import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, AsyncStorage , Image, Button } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";



export default SideBar = props => (

    
    <ScrollView>
         <Image source={require("../assets/logo.png")} style={styles.profile} />
        <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <Text style={styles.name1}>Hello! </Text>
         <Text style={styles.name}>{pho123} </Text>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        marginLeft:60, 
        width: 200,
        height: 200,
        borderRadius: 40,
        
        borderColor: "#FFF"
    },
    name: {
        color: "black",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8,
        textAlign: 'center',
    },
    name1: {
        color: "black",
        fontSize: 35,
        marginVertical: 8,
        textAlign: 'center',
        fontFamily: 'open-find'

    },


});
