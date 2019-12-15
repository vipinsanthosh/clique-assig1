import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Page1 from '../Pages/Page1';
import OtpInputs from '../Pages/OtpInputs';
import DrawerNavigator  from '../Pages/DrawNav';

const ApNavigator = createStackNavigator({
    Pagefirst: Page1,
    Page2: OtpInputs,
    Page3: DrawerNavigator,
});

export default createAppContainer(ApNavigator);