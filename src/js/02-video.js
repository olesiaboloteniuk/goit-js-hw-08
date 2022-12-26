import Player from "@vimeo/player"
import throttle from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let KEY = "videoplayer-current-time";

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)) || 0)
player.on(`timeupdate`,throttle(({ seconds }) => {
	localStorage.setItem(KEY, JSON.stringify(seconds));
  }, 1000))

