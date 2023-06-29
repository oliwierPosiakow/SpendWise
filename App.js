import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons/';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ManageScreen from "./screens/ManageScreen";
import RecentScreen from "./screens/RecentScreen";
import AllScreen from "./screens/AllScreen";
import {COLORS} from "./constants/COLORS";
import IconButton from "./UI/IconButton";

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function ExpensesOverview(){
    return (
        <Tabs.Navigator screenOptions={{
            headerStyle: {backgroundColor: COLORS.primary},
            headerTintColor: COLORS.secondary,
            tabBarStyle: {backgroundColor: COLORS.primary},
            tabBarActiveTintColor: COLORS.accent2,
            headerRight: ({tintColor}) => <IconButton name={'add-to-list'} size={30} color={tintColor} onPress={() => {}}/>,
        }} >
            <Tabs.Screen name={'RecentScreen'} component={RecentScreen} options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => (<Entypo name="back-in-time" size={24} color={color} />)
            }}/>
            <Tabs.Screen name={'AllScreen'} component={AllScreen} options={{
                title: 'All Expenses',
                tabBarLabel: 'All Expenses',
                tabBarIcon: ({color, size}) => (<Entypo name="grid" size={24} color={color} />)
            }}/>
        </Tabs.Navigator>
    )
}
export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"ExpensesOverview"} component={ExpensesOverview} options={{headerShown:false}}/>
                    <Stack.Screen name={"ManageScreen"} component={ManageScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
