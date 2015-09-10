// ==UserScript==
// @name "101ESPN Clean"
// @version 1.0
// @description "Cleans up the reading experience for 101ESPN.com"
// @match http://*.101sports.com/*
// @run-at document-end
// ==/UserScript==

function injectStyles() {
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    console.log("No head!");
    return;
  }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerText = '#ad-unit-wxos-peelback, #left-wrap-ad, #right-wrap-ad, #expand-o-span, #main-content .sidebar, .single-post-thumb, .ads-post { display: none !important; } .content { width: 100%; }';

  head.appendChild(style);
}


injectStyles();