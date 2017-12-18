import { Constants } from 'expo'; 
import { Dimensions } from 'react-native'; 

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const GLENN_COLORS = {
    orange: 'orange',
    defaultGreyBackground: '#ddd',
    defaultFontColor: '#333'
};
