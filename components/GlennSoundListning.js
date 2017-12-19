import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { connect } from 'react-redux'; 
import GlennSound from './GlennSound';

const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, 
    (v, i) => arr.slice(i * size, (i * size) + size)); 

class GlennSoundListning extends Component {
    render() {
        const { glennSounds } = this.props;
        const {
            contentRowStyle
        } = styles; 

        return (
            <View style={{ alignItems: 'center' }}> 
                { chunk(glennSounds, 2).map((_glennSounds, i) =>
                    (<View key={i} style={contentRowStyle}>
                        <GlennSound glennSound={_glennSounds[0]} />
                        <GlennSound glennSound={_glennSounds[1]} />
                    </View>)
                )}
            </View>);
    }
}

const styles = {
    contentRowStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
}; 

const mapStateToProps = ({ glennSounds }) => ({ glennSounds }); 
export default connect(mapStateToProps)(GlennSoundListning); 
