// ==UserScript==
// @name     Youtube Playlist Fixer (+time)
// @version  1
// @grant    none
// @include	https://www.youtube.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
function stuff() {
  var reAnd = /&/;
  var time = /&t=\d*s/;
  var vidlist = document.getElementsByTagName('ytd-playlist-video-renderer');
  for (i=0; i<vidlist.length; i++) {
  var vidurl = vidlist[i].getElementsByTagName('a')[0].href.split(reAnd);
  var timeCode = vidlist[i].getElementsByTagName('a')[0].href.match(time);
  	if (timeCode != null){
  		vidlist[i].getElementsByTagName('a')[0].href = vidurl[0]+timeCode;
    }else{
      vidlist[i].getElementsByTagName('a')[0].href = vidurl[0]
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
waitForKeyElements ('ytd-grid-playlist-renderer', thing);
waitForKeyElements ('ytd-playlist-video-renderer', stuff);
waitForKeyElements ('ytd-compact-playlist-renderer', whatsit);
