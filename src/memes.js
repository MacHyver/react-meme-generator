import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function (error, response, body) {
console.log('body:', body);
  //console.log('body:', body); // Print the HTML for the XYZ homepage.
  //getUrls(body);
  //console.log(getUrls(body));

  var re = /<img[^>]+src="([^">]+)/g;
  var results = body.match(re);

  // somehow https://memegen.link/examples + everything after src=" until'

  //.TrimStart("<img class="meme-img" src=") <-- didnt work because its the wrong language!

  results.forEach((tooLongThing, index) => {
    //var str = '<img class="meme-img" src='; //was useless for our purpose
    var shortLink = tooLongThing.replace(
      /<img class="meme-img" src="/g,
      'https://memegen.link',
    );
