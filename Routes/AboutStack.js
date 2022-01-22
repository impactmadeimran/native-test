// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Reviews from "../screens/Reviews";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
    return (
            <Stack.Navigator screenOptions = {{headerStyle:{backgroundColor:'#ddd'},headerTintColor:'#333'}}>
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
    )
}
export default AboutStack;

