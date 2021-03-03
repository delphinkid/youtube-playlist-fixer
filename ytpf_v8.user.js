// ==UserScript==
// @name     Youtube Playlist Fixer
// @version  1
// @grant    none
// @include	*://www.youtube.com/*
// ==/UserScript==

function stuff() {
  var reAnd = /&/;
  var time = /&t=\d*s/;
  var vidlist = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-playlist-video-renderer");
  for (let i=0; i<vidlist.length; i++) {
  var vidurl = vidlist[i].href.split(reAnd);
  var timeCode = vidlist[i].href.match(time);
  	if (timeCode != null){
        vidlist[i].href = vidurl[0]+timeCode;
        //vidlist[i].addEventListener("click", function(){window.location = vidlist[i].href});
        vidlist[i].className = "ytd-playlist-video-renderer style-scope"
    }else{
        vidlist[i].href = vidurl[0]
        //vidlist[i].addEventListener("click", function(){window.location = vidlist[i].href});
        vidlist[i].className = "ytd-playlist-video-renderer style-scope"
    }
  }
}
function thing() {
  var re = /&list/;
  var playlists = document.getElementsByTagName('ytd-grid-playlist-renderer')
  for (let i=0; i<playlists.length; i++) {
    var listbit = playlists[i].getElementsByTagName('a')[0].href.split(re)[1]
    document.getElementsByTagName('ytd-grid-playlist-renderer')[i].getElementsByTagName('a')[1].href = 'https://youtube.com/playlist?list' + listbit
  }
}
function doodad() {
  var re = /&list/;
  var playlists = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-rich-grid-media')
  for (let i=0; i<playlists.length; i++) {
    var listbit = playlists[i].href.split(re)[1]
    if (listbit != undefined){
        playlists[i].href = 'https://youtube.com/playlist?list' + listbit
    }
  }
}
function whatsit() {
  var re = /&list/;
  var playlists = document.getElementsByTagName('ytd-compact-playlist-renderer')
  for (let i=0; i<playlists.length; i++) {
    var listbit = playlists[i].getElementsByTagName('a')[0].href.split(re)[1]
    document.getElementsByTagName('ytd-compact-playlist-renderer')[i].getElementsByTagName('a')[1].href = 'https://youtube.com/playlist?list' + listbit
  }
}

function checkEm() {
  stuff();
  thing();
  whatsit();
  //doodad();
}

function beeper(){
	setTimeout(checkEm, 1000);
}

function besto(){
  document.addEventListener("mouseup", beeper);
}

besto();
setTimeout(checkEm, 1000);
window.onpopstate = beeper;
window.onscroll = beeper;
