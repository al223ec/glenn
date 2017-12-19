import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 
import { Audio } from 'expo';
import utmarktInlagg from '../assets/sounds/utmarkt_inlagg.wav';

class GlennSoundPlayer extends Component {
    constructor(props) {
        super(props);
        this.playbackInstance = null; 
    }

    componentDidMount() {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        });
    }

    async _loadAndPlayAudio() {
        if (this.playbackInstance != null) {
			await this.playbackInstance.unloadAsync();
			this.playbackInstance.setOnPlaybackStatusUpdate(null);
			this.playbackInstance = null;
        }
        const initialStatus = {
			shouldPlay: true
        };
        
        try {
            const { soundObject, } = await Audio.Sound.create(
                utmarktInlagg,
                initialStatus,
                this._onPlaybackStatusUpdate
            );
            
            this.playbackInstance = soundObject;

            await soundObject.loadAsync(utmarktInlagg);
            await soundObject.playAsync();
        } catch (error) {
            // An error occurred!
            console.log('an error', error);  
        }
    }

    _onPlaybackStatusUpdate = status => {
        console.log(status);
        if (status.isLoaded) {
            console.log('status is loaded'); 
			if (status.didJustFinish) {
                console.log('set status compelte');
			}
		} if (status.error) {
			console.log('FATAL PLAYER ERROR: ${status.error}');
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

const mapStateToProps = ({ selectedValues, glennSounds }) => ({ selectedValues, glennSounds }); 
export default connect(mapStateToProps)(GlennSoundPlayer); 
