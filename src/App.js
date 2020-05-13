import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://memegen.link/buzz/_.jpg" />
        <form>
          <label>
            line 1:
            <input type="text" name="text1" />
          </label>

          {/* <input type="submit" value="Submit" /> */}
        </form>
        <form>
          <label>
            line 2:
            <input type="text" name="text2" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

// function (error, response, body) {
//   //console.log('body:', body);
//   //console.log('body:', body); // Print the HTML for the XYZ homepage.
//   //getUrls(body);
//   //console.log(getUrls(body));

//   var re = /<img[^>]+src="([^">]+)/g;
//   var results = body.match(re);

//   // somehow https://memegen.link/examples + everything after src=" until'

//   //.TrimStart("<img class="meme-img" src=") <-- didnt work because its the wrong language!

//   results.forEach((tooLongThing, index) => {
//     //var str = '<img class="meme-img" src='; //was useless for our purpose
//     var shortLink = tooLongThing.replace(
//       /<img class="meme-img" src="/g,
//       'https://memegen.link',
//     );
