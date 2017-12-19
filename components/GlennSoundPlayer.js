import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 
import { Audio } from 'expo';

class GlennSoundPlayer extends Component {
    async _loadAndPlayAudio() {
        const soundObject = new Audio.Sound();
        try {
            const audioSource = require('../assets/sounds/utrmarkt_inlagg.wav'); 
            await soundObject.loadAsync(audioSource);
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
            console.log('an error', error);
        }
    }

    render() {
        const {
            glennSoundPlayerContainerStyle,
            soundPlayerItem,
            soundPlayerItemHeader
        } = styles;
        const { selectedValues: { selectedGlennSound } } = this.props;
        if (selectedGlennSound === null) return (<View />);
        this._loadAndPlayAudio(); 

        return (
            <View style={glennSoundPlayerContainerStyle}>
                <Text style={[soundPlayerItem, soundPlayerItemHeader]}> 
                    {selectedGlennSound.phonetics}
                </Text>
                <Text style={soundPlayerItem}> 
                    {selectedGlennSound.scoringChanceType}
                </Text>
            </View>
        );
    }
}

const styles = {
    glennSoundPlayerContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    soundPlayerItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    soundPlayerItemHeader: {
        fontWeight: '900',
        fontSize: 16
    }
}; 

const mapStateToProps = ({ selectedValues }) => ({ selectedValues }); 
export default connect(mapStateToProps)(GlennSoundPlayer); 
