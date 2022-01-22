import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const RootDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <NavigationContainer>
            <RootDrawer.Navigator initialRouteName='Home' >
                <RootDrawer.Screen name='Home' component={HomeStack} />
                <RootDrawer.Screen name='About' component={AboutStack} />
            </RootDrawer.Navigator>
        </NavigationContainer>
    );
};

export default Drawer;
