import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pagas/Home';
import { User } from '../pagas/User';
import { Maps } from '../pagas/Maps';


const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <stackRoutes.Screen
            name='home'
            component={Home}

        />

        <stackRoutes.Screen
            name='user'
            component={User}
        />

        <stackRoutes.Screen
            name='maps'
            component={Maps}
        />
    </stackRoutes.Navigator>
)


export default AppRoutes;