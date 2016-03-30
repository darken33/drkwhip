var whip_snd = "/android_asset/www/sound/whip.wav";
var m_whip;

function soundLoaded() {
	console.log('play sound.');
}

function soundErr(err) {
//	alert(err);
}

function loadSounds() {
	m_whip = new Media(whip_snd, soundLoaded, soundErr);
}
