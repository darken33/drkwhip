var whip_snd = "/android_asset/www/sound/whip.wav";
var m_whip;
var m_whip2;
var b_whip = false;
function soundLoaded() {
	console.log('play sound.');
}

function soundErr(err) {
//	alert(err);
}

function loadSounds() {
		if (isFirefoxOS()) {
			m_whip = document.getElementById("whip_snd");
			m_whip2 = document.getElementById("whip_snd2");
		} 
		else {
			m_whip = new Media(whip_snd, soundLoaded, soundErr);
			m_whip2 = new Media(whip_snd, soundLoaded, soundErr);
		}
}
