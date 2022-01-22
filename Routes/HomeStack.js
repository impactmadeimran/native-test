// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Reviews from "../screens/Reviews";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
            <Stack.Navigator screenOptions = {{headerStyle:{backgroundColor:'#ddd'},headerTintColor:'#333'}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Reviews" component={Reviews} />
            </Stack.Navigator>
    )
}
export default HomeStack;

