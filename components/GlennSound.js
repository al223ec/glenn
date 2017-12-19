import React, { Component } from 'react'; 
import { View, TouchableOpacity } from 'react-native'; 
import { Text } from 'react-native-elements'; 
import { connect } from 'react-redux'; 
import { GLENN_COLORS } from '../constants';
import { selectGlennSound } from '../actions'; 

class GlennSound extends Component {
    render() {
        const {
            glennSoundContainerStyle,
            glennSoundItemStyle,
            glennSoundItemHeaderStyle
        } = styles;
        const { glennSound } = this.props;
        
        return (
            <TouchableOpacity 
                style={glennSoundContainerStyle} 
                onPress={() => this.props.selectGlennSound(glennSound)}
            >
                <View>
                    <Text style={[glennSoundItemStyle, glennSoundItemHeaderStyle]}> 
                        {glennSound.phonetics}
                    </Text>
                    <Text style={glennSoundItemStyle}> 
                        {glennSound.scoringChanceType}
                    </Text>
                </View>
            </TouchableOpacity>
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
        fontWeight: '900',
        fontSize: 14
    }
}; 

const mapStateToProps = ({ selectedValues }) => ({ selectedValues }); 
export default connect(mapStateToProps, { selectGlennSound })(GlennSound); 
