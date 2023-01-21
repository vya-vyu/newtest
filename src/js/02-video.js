import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log('test');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStoregeKey = 'videoplayer-current-time';

player.on('timeupdate', function() {
    console.log('played the video!');
    localStorage.setItem(localStoregeKey, 'test');
});
player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
