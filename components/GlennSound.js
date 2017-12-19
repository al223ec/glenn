import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { GLENN_COLORS } from '../constants';

class GlennSound extends Component {
    render() {
        const {
            glennSoundContainerStyle,
            glennSoundItemStyle,
            glennSoundItemHeaderStyle
        } = styles;
        const { glennSound } = this.props; 
    
        return (
            <View style={glennSoundContainerStyle}>
                <Text style={[glennSoundItemStyle, glennSoundItemHeaderStyle]}> 
                    {glennSound.phonetics}
                </Text>
                <Text style={glennSoundItemStyle}> 
                    {glennSound.scoringChanceType}
                </Text>
            </View>
        );
    }
}

const styles = {
    glennSoundContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLENN_COLORS.regularOrange,
        height: 120,
        margin: 10
    },
    glennSoundItemStyle: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 12
    },
    glennSoundItemHeaderStyle: {
        fontWeight: '900'
    }
}; 

export default GlennSound; 
