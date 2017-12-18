import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 

class GlennSoundListning extends Component {
    render() {
        const { glennSounds } = this.props;

        return (
        <View style={{ alignItems: 'center' }}> 
            <Text h3> Sounds listing </Text> 

            {glennSounds.map((glennSound) => (<Text>{glennSound.scoringChanceType}</Text>))}  
        </View>);
    }
}

const mapStateToProps = ({ glennSounds }) => ({ glennSounds }); 
export default connect(mapStateToProps)(GlennSoundListning); 
