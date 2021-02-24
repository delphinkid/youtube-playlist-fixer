// ==UserScript==
// @name     Youtube Playlist Fixer
// @version  1
// @grant    none
// @include	*://www.youtube.com/*
// ==/UserScript==
function stuff() {
  var reAnd = /&/;
  var time = /&t=\d*s/;
  //var vidlist = document.getElementsByTagName('ytd-playlist-video-renderer');
  var vidlist = document.querySelectorAll('[id="video-title"]');
  for (i=0; i<vidlist.length; i++) {
  //var vidurl = vidlist[i].getElementsByTagName('a')[0].href.split(reAnd);
  var vidurl = vidlist[i].href.split(reAnd);
  //var timeCode = vidlist[i].getElementsByTagName('a')[0].href.match(time);
  var timeCode = vidlist[i].href.match(time);
  	if (timeCode != null){
  		//vidlist[i].getElementsByTagName('a')[0].href = vidurl[0]+timeCode;
      vidlist[i].href = vidurl[0]+timeCode;
    }else{
      //vidlist[i].getElementsByTagName('a')[0].href = vidurl[0]
      vidlist[i].href = vidurl[0]
    }
  }
}
function thing() {
  var re = /&list/;
  var playlists = document.getElementsByTagName('ytd-grid-playlist-renderer')
  for (i=0; i<playlists.length; i++) {
    var listbit = playlists[i].getElementsByTagName('a')[0].href.split(re)[1]
    document.getElementsByTagName('ytd-grid-playlist-renderer')[i].getElementsByTagName('a')[1].href = 'https://youtube.com/playlist?list' + listbit
  }
}
function whatsit() {
  var re = /&list/;
  var playlists = document.getElementsByTagName('ytd-compact-playlist-renderer')
  for (i=0; i<playlists.length; i++) {
    var listbit = playlists[i].getElementsByTagName('a')[0].href.split(re)[1]
    document.getElementsByTagName('ytd-compact-playlist-renderer')[i].getElementsByTagName('a')[1].href = 'https://youtube.com/playlist?list' + listbit
  }
}

function checkEm() {
  stuff();
  thing();
  whatsit();
}

function beeper(){
	setTimeout(checkEm, 1000);
}

function besto(){
  //document.addEventListener("mousedown", beeper);
  document.addEventListener("mouseup", beeper);
}

besto();
setTimeout(checkEm, 1000);
window.onpopstate = beeper;
