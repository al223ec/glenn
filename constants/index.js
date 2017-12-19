import { Constants } from 'expo'; 
import { Dimensions } from 'react-native'; 

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const GLENN_COLORS = {
    defaultGrey: '#e6e6e6',
    regularGrey: '#cfcfcf',
    darkGrey: '#bbbbbb',
    orange: 'orange',
    regularOrange: '#ff6d3b',
    defaultOrange: '#e66235',
    darkOrange: '#cf5830',
    darkerOrange: '#bb4f2b',
    defaultGreyBackground: '#e6e6e6',
    defaultFontColor: '#333',
    darkBlue: '#22364b',
    defaultBlue: '#2a445e',
    lightYellow: '#ffd968',
    defaultYellow: '#e6c665',
    darkYellow: '#cfb360',
    darkerYellow: '#bba763'
};
