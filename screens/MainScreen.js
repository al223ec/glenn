import React, { Component } from 'react'; 
import { View, Platform, Image } from 'react-native'; 
import { Divider } from 'react-native-elements'; 
import Expo from 'expo';
import icon from '../assets/icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, GLENN_COLORS } from '../constants';
import GlennSoundListning from '../components/GlennSoundListning';

const cacheImages = images => images.map((image) => {
    if (typeof image === 'string') return Image.prefetch(image); 
    return Expo.Asset.fromModule(image).downloadAsync();
}); 

// const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font)); 
  

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Glenn',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 74,
            backgroundColor: GLENN_COLORS.defaultGreyBackground
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: GLENN_COLORS.defaultFont
        },
        headerLeft: (
        <Image
            source={icon}
            style={styles.imageStyle} 
        />)
    });

    state = {
        appIsReady: false 
    }

    componentWillMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([icon]); 
        await Promise.all([...imageAssets]);
        // after 'then'
        this.setState({
            appIsReady: true
        }); 
    }

    render() {
        const { dividerStyle, containerStyle } = styles; 
        return (<View style={{ flex: 1, backgroundColor: '#ddd' }}> 
            <View style={containerStyle}>
                {/* Search */}
                {/* listing of audio */}
                <GlennSoundListning />
                <Divider style={dividerStyle} />
            </View>
        </View>);
    }
}

const styles = {
    imageStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: GLENN_COLORS.orange
    },
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        paddingBottom: 10
    }
};

export default MainScreen; 
