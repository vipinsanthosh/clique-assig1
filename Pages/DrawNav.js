import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions , AsyncStorage } from "react-native";

import { Feather } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";

import test from "../Pages/test";

import SideBar from "../components/SideBar";
import Page1 from "./Page1";


const DrawerNavigator = createDrawerNavigator(
    {
        Requests: {
            screen: test,
            navigationOptions: {
                title: "Requests ",
                drawerIcon: ({ tintColor }) => <Feather name="arrow-down-circle" size={16} color={tintColor} />
            }
        },
        Reviews: {
            screen: test,
            navigationOptions: {
                title: "Reviews ",
                drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
            }
        },
        Payment: {
            screen: test,
            navigationOptions: {
                title: "Payment ",
                drawerIcon: ({ tintColor }) => <MaterialIcons name="payment" size={16} color={tintColor} />
            }
        },
        Setting: {
            screen: test,
            navigationOptions: {
                title: "Settings ",
                drawerIcon: ({ tintColor }) => <Feather name="settings" size={16} color={tintColor} />
            }
        },

        SignOut: {
            screen: test,
            navigationOptions: {
                title: "Sign Out ",
                drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
            }
        }
    },
    {
        contentComponent: props => <SideBar {...props} />,

        drawerWidth: Dimensions.get("window").width * 0.85,
        hideStatusBar: true,

        contentOptions: {
            

            itemsContainerStyle: {
                marginTop: 16,
                marginHorizontal: 8,
                
            },
            itemStyle: {
                borderRadius: 4
            }
        }

        
    }
);

export default createAppContainer(DrawerNavigator);