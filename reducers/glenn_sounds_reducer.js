import data from './glenn_sounds'; 
/** 
 * OUHHÖÖP
 * HÖÖÖÄÄJ
 * HÖÖÖÖÄÄHH
 * HEUÖÖÖPP */

export default () => data.map((glennSound) => {
    const _glennSound = glennSound;
    switch (glennSound.fileName) {
        case 'whooa.wav':
            _glennSound.soundAsset = require('../assets/sounds/whooa.wav');
            break; 
        case 'ugh.wav':
            _glennSound.soundAsset = require('../assets/sounds/ugh.wav');
            break; 
        case 'gerard_corner.wav':
            _glennSound.soundAsset = require('../assets/sounds/gerard_corner.wav');
            break; 
        case 'stolpen.wav':
            _glennSound.soundAsset = require('../assets/sounds/stolpen.wav');
            break; 
        case 'utmarkt_inlagg.wav':
            _glennSound.soundAsset = require('../assets/sounds/utmarkt_inlagg.wav');
            break; 
        default:
            _glennSound.soundAsset = require('../assets/sounds/utmarkt_inlagg.wav');        
    }

    return _glennSound; 
});
