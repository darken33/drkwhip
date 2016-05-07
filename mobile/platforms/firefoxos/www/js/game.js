/**
 * game.js : script du jeu drkWhip
 * 
 * @author : Philippe Bousquet <darken33@free.fr>
 * @date   : 11/2013
 * @version: 1.0
 * 
 * This software is under GNU General Public License
 */
var game_version  = "1.3";
var ready = false;

function isFirefoxOS() {
	return (device.platform == "firefoxos");
}

/**
 * onBackButton() - bouton back pressé
 */ 
function onBackButton() {
	if ($("#menu").is(':visible')) {
		$("#menu").hide();
	}
	else if ($('#game').css('display') != 'block') {
		$.mobile.changePage('#game', 'none', true, true);
	}
	else {
		quit();
	}
}
/**
 * onMenuButton() - bouton menu pressé
 */ 
function onMenuButton() {
	if ($('#game').css('display') == 'block' && !$("#splash").is(':visible')) {
		if ($("#menu").is(':visible')) {
			$("#menu").hide();
		} 
		else {
			$('#menu').show();
		}
	}
}    

/**
 * closeMenu() - fermer le menu
 */     
function  closeMenu() {
	if ($("#menu").is(':visible')) {
		$("#menu").hide();
	}
	else {
		$("#menu").show();
	}
}

function whip() {
	if (!b_whip) m_whip.play();
	else m_whip2.play();
	b_whip = !b_whip;	
}

/**
 * quit() - quitter le jeu
 */ 
function quit() {
	if ($("#menu").is(':visible')) {
		$("#menu").hide();
	}
	navigator.notification.confirm(
		"Voulez vous quitter ?",
		quitConfirm,
		'Exit',
		['Ok','Cancel']
	);
}

function quitConfirm(btnIdx) {
	if (btnIdx == 1) {
		if (isFirefoxOS()) window.close();
		else navigator.app.exitApp();
		
	}
}

/**
 * aide() - afficher la page d'aide
 */ 
function aide() {
	$.mobile.changePage('#aide-1', 'none', true, true);
}

/**
 * bindMenu() - gestion des evenements du menu
 */ 
function bindMenu() {
	$("#mhelp").on("tap", function(event) {
		event.preventDefault();
		event.stopPropagation();
		aide(); 
		closeMenu();
	});
	$("#mquit").on("tap", function(event) {
		event.preventDefault();
		event.stopPropagation();
		quit(); 
	});
	$("#hlp_back").on("tap",  function(event) {
		event.preventDefault();
		event.stopPropagation();
		onBackButton();
	});
	$("#menub").on("tap", function(event) {
		event.preventDefault();
		event.stopPropagation();
		onMenuButton();
	});	
}

/**
 * initiailsation du jeu
 */ 
function init() {
	document.addEventListener("deviceready", onDeviceReady, true);		
	// forcer le device ready au bout de 5 secondes
	setTimeout(onDeviceReady, 5000);
}

/**
 * phoneGap ready
 */ 
var onDeviceReady = function() {
	if (!ready) {
		document.addEventListener("backbutton", onBackButton, true);
		document.addEventListener("menubutton", onMenuButton, true);
		loadSounds();
		$.mobile.changePage('#game', 'none', true, true);
		bindMenu();	
		startWatch();
		ready = true;
	}
};

init();
