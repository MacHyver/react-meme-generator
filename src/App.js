import React, { useState } from 'react';
// import Memes from './src/memes.js';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const onChange = (event) => {
    console.log('onChange', event.target.value);
    setText(event.target.value);
  };

  const [textTwo, setTextTwo] = useState('');
  const onChangeTwo = (write) => {
    console.log('onChangeTwo', write.target.value);
    setTextTwo(write.target.value);
  };
  const [url, setUrl] = useState('');

  // const [nameMeme, setNameMeme] = useState('');
  // const onSelect = (event) => {
  //   console.log('onSelect', event.target.value);
  //   setNameMeme(event.target.value);
  const nameMeme = 'buzz';

  return (
    <div className="App">
      <header className="App-header">
        <img src={url} />
        <select
          class="js-meme-selector select2-hidden-accessible"
          name="meme"
          tabindex="-1"
          aria-hidden="true"
        >
          <option
            value="tenguy"
            data-url="/tenguy/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            10 Guy
          </option>
          <option
            value="afraid"
            data-url="/afraid/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Afraid to Ask Andy
          </option>
          <option
            value="apcr"
            data-url="/apcr/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Almost Politically Correct Redneck
          </option>
          <option
            value="older"
            data-url="/older/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            An Older Code Sir, But It Checks Out
          </option>
          <option
            value="aag"
            data-url="/aag/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Ancient Aliens Guy
          </option>
          <option
            value="atis"
            data-url="/atis/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            And Then I Said
          </option>
          <option
            value="tried"
            data-url="/tried/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            At Least You Tried
          </option>
          <option
            value="biw"
            data-url="/biw/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Baby Insanity Wolf
          </option>
          <option
            value="stew"
            data-url="/stew/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Baby, You've Got a Stew Going
          </option>
          <option
            value="blb"
            data-url="/blb/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Bad Luck Brian
          </option>
          <option
            value="bihw"
            data-url="/bihw/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            But It's Honest Work
          </option>
          <option
            value="kermit"
            data-url="/kermit/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            But That's None of My Business
          </option>
          <option
            value="bd"
            data-url="/bd/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Butthurt Dweller
          </option>
          <option
            value="ch"
            data-url="/ch/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Captain Hindsight
          </option>
          <option
            value="cbg"
            data-url="/cbg/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Comic Book Guy
          </option>
          <option
            value="wonka"
            data-url="/wonka/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Condescending Wonka
          </option>
          <option
            value="cb"
            data-url="/cb/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Confession Bear
          </option>
          <option
            value="gandalf"
            data-url="/gandalf/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Confused Gandalf
          </option>
          <option
            value="keanu"
            data-url="/keanu/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Conspiracy Keanu
          </option>
          <option
            value="cryingfloor"
            data-url="/cryingfloor/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Crying on Floor
          </option>
          <option
            value="dsm"
            data-url="/dsm/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Dating Site Murderer
          </option>
          <option
            value="disastergirl"
            data-url="/disastergirl/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Disaster Girl
          </option>
          <option
            value="live"
            data-url="/live/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Do It Live!
          </option>
          <option
            value="ants"
            data-url="/ants/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Do You Want Ants?
          </option>
          <option
            value="doge"
            data-url="/doge/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Doge
          </option>
          <option
            value="trump"
            data-url="/trump/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Donald Trump
          </option>
          <option
            value="drake"
            data-url="/drake/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Drakeposting
          </option>
          <option
            value="ermg"
            data-url="/ermg/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Ermahgerd
          </option>
          <option
            value="facepalm"
            data-url="/facepalm/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Facepalm
          </option>
          <option
            value="feelsgood"
            data-url="/feelsgood/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Feels Good
          </option>
          <option
            value="firsttry"
            data-url="/firsttry/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            First Try!
          </option>
          <option
            value="fwp"
            data-url="/fwp/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            First World Problems
          </option>
          <option
            value="fa"
            data-url="/fa/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Forever Alone
          </option>
          <option
            value="fbf"
            data-url="/fbf/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Foul Bachelor Frog
          </option>
          <option
            value="fmr"
            data-url="/fmr/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Fuck Me, Right?
          </option>
          <option
            value="fry"
            data-url="/fry/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Futurama Fry
          </option>
          <option
            value="ggg"
            data-url="/ggg/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Good Guy Greg
          </option>
          <option
            value="grumpycat"
            data-url="/grumpycat/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Grumpy Cat
          </option>
          <option
            value="harold"
            data-url="/harold/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Hide the Pain Harold
          </option>
          <option
            value="hipster"
            data-url="/hipster/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Hipster Barista
          </option>
          <option
            value="icanhas"
            data-url="/icanhas/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Can Has Cheezburger?
          </option>
          <option
            value="crazypills"
            data-url="/crazypills/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Feel Like I'm Taking Crazy Pills
          </option>
          <option
            value="mw"
            data-url="/mw/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Guarantee It
          </option>
          <option
            value="noidea"
            data-url="/noidea/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Have No Idea What I'm Doing
          </option>
          <option
            value="regret"
            data-url="/regret/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Immediately Regret This Decision!
          </option>
          <option
            value="boat"
            data-url="/boat/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Should Buy a Boat Cat
          </option>
          <option
            value="hagrid"
            data-url="/hagrid/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Should Not Have Said That
          </option>
          <option
            value="sohappy"
            data-url="/sohappy/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I Would Be So Happy
          </option>
          <option
            value="captain"
            data-url="/captain/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I am the Captain Now
          </option>
          <option
            value="bender"
            data-url="/bender/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            I'm Going to Build My Own Theme Park
          </option>
          <option
            value="inigo"
            data-url="/inigo/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Inigo Montoya
          </option>
          <option
            value="iw"
            data-url="/iw/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Insanity Wolf
          </option>
          <option
            value="ackbar"
            data-url="/ackbar/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            It's A Trap!
          </option>
          <option
            value="happening"
            data-url="/happening/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            It's Happening
          </option>
          <option
            value="joker"
            data-url="/joker/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            It's Simple, Kill the Batman
          </option>
          <option
            value="ive"
            data-url="/ive/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Jony Ive Redesigns Things
          </option>
          <option
            value="jd"
            data-url="/jd/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Joseph Ducreux / Archaic Rap
          </option>
          <option
            value="ll"
            data-url="/ll/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Laughing Lizard
          </option>
          <option
            value="lrv"
            data-url="/lrv/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Laundry Room Viking
          </option>
          <option
            value="leo"
            data-url="/leo/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Leo Strutting
          </option>
          <option
            value="away"
            data-url="/away/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Life... Finds a Way
          </option>
          <option
            value="morpheus"
            data-url="/morpheus/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Matrix Morpheus
          </option>
          <option
            value="mb"
            data-url="/mb/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Member Berries
          </option>
          <option
            value="badchoice"
            data-url="/badchoice/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Milk Was a Bad Choice
          </option>
          <option
            value="mini-keanu"
            data-url="/mini-keanu/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Mini Keanu Reeves
          </option>
          <option
            value="mmm"
            data-url="/mmm/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Minor Mistake Marvin
          </option>
          <option
            value="spongebob"
            data-url="/spongebob/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Mocking Spongebob
          </option>
          <option
            value="soup-nazi"
            data-url="/soup-nazi/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            No Soup for You / Soup Nazi
          </option>
          <option
            value="jetpack"
            data-url="/jetpack/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Nothing To Do Here
          </option>
          <option
            value="imsorry"
            data-url="/imsorry/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Oh, I'm Sorry, I Thought This Was America
          </option>
          <option
            value="red"
            data-url="/red/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Oh, Is That What We're Going to Do Today?
          </option>
          <option
            value="mordor"
            data-url="/mordor/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            One Does Not Simply Walk into Mordor
          </option>
          <option
            value="oprah"
            data-url="/oprah/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Oprah You Get a Car
          </option>
          <option
            value="oag"
            data-url="/oag/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Overly Attached Girlfriend
          </option>
          <option
            value="remembers"
            data-url="/remembers/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Pepperidge Farm Remembers
          </option>
          <option
            value="persian"
            data-url="/persian/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Persian Cat Room Guardian
          </option>
          <option
            value="philosoraptor"
            data-url="/philosoraptor/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Philosoraptor
          </option>
          <option
            value="jw"
            data-url="/jw/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Probably Not a Good Idea
          </option>
          <option
            value="patrick"
            data-url="/patrick/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Push it somewhere else Patrick
          </option>
          <option
            value="rollsafe"
            data-url="/rollsafe/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Roll Safe
          </option>
          <option
            value="sad-obama"
            data-url="/sad-obama/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad Barack Obama
          </option>
          <option
            value="sad-clinton"
            data-url="/sad-clinton/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad Bill Clinton
          </option>
          <option
            value="sadfrog"
            data-url="/sadfrog/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad Frog / Feels Bad Man
          </option>
          <option
            value="sad-bush"
            data-url="/sad-bush/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad George Bush
          </option>
          <option
            value="sad-biden"
            data-url="/sad-biden/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad Joe Biden
          </option>
          <option
            value="sad-boehner"
            data-url="/sad-boehner/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sad John Boehner
          </option>
          <option
            value="saltbae"
            data-url="/saltbae/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Salt Bae
          </option>
          <option
            value="sarcasticbear"
            data-url="/sarcasticbear/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sarcastic Bear
          </option>
          <option
            value="dwight"
            data-url="/dwight/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Schrute Facts
          </option>
          <option
            value="sb"
            data-url="/sb/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Scumbag Brain
          </option>
          <option
            value="ss"
            data-url="/ss/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Scumbag Steve
          </option>
          <option
            value="soa"
            data-url="/soa/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Seal of Approval
          </option>
          <option
            value="sf"
            data-url="/sf/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sealed Fate
          </option>
          <option
            value="dodgson"
            data-url="/dodgson/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            See? Nobody Cares
          </option>
          <option
            value="money"
            data-url="/money/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Shut Up and Take My Money!
          </option>
          <option
            value="snek"
            data-url="/snek/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Skeptical Snake
          </option>
          <option
            value="sk"
            data-url="/sk/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Skeptical Third World Kid
          </option>
          <option
            value="sohot"
            data-url="/sohot/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            So Hot Right Now
          </option>
          <option
            value="nice"
            data-url="/nice/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            So I Got That Goin' For Me, Which is Nice
          </option>
          <option
            value="awesome-awkward"
            data-url="/awesome-awkward/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Socially Awesome Awkward Penguin
          </option>
          <option
            value="awesome"
            data-url="/awesome/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Socially Awesome Penguin
          </option>
          <option
            value="awkward-awesome"
            data-url="/awkward-awesome/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Socially Awkward Awesome Penguin
          </option>
          <option
            value="awkward"
            data-url="/awkward/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Socially Awkward Penguin
          </option>
          <option
            value="stop-it"
            data-url="/stop-it/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Stop It, Get Some Help
          </option>
          <option
            value="fetch"
            data-url="/fetch/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Stop Trying to Make Fetch Happen
          </option>
          <option
            value="success"
            data-url="/success/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Success Kid
          </option>
          <option
            value="scc"
            data-url="/scc/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sudden Clarity Clarence
          </option>
          <option
            value="ski"
            data-url="/ski/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Super Cool Ski Instructor
          </option>
          <option
            value="aint-got-time"
            data-url="/aint-got-time/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Sweet Brown / Ain't Nobody Got Time For That
          </option>
          <option
            value="officespace"
            data-url="/officespace/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            That Would Be Great
          </option>
          <option
            value="interesting"
            data-url="/interesting/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            The Most Interesting Man in the World
          </option>
          <option
            value="toohigh"
            data-url="/toohigh/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            The Rent Is Too Damn High
          </option>
          <option
            value="bs"
            data-url="/bs/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            This is Bull, Shark
          </option>
          <option
            value="fine"
            data-url="/fine/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            This is Fine
          </option>
          <option
            value="sparta"
            data-url="/sparta/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            This is Sparta!
          </option>
          <option
            value="ugandanknuck"
            data-url="/ugandanknuck/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Ugandan Knuckles
          </option>
          <option
            value="puffin"
            data-url="/puffin/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Unpopular opinion puffin
          </option>
          <option
            value="whatyear"
            data-url="/whatyear/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            What Year Is It?
          </option>
          <option
            value="center"
            data-url="/center/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            What is this, a Center for Ants?!
          </option>
          <option
            value="both"
            data-url="/both/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Why Not Both?
          </option>
          <option
            value="winter"
            data-url="/winter/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Winter is coming
          </option>
          <option
            value="xy"
            data-url="/xy/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            X all the Y
          </option>
          <option
            value="buzz"
            data-url="/buzz/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            X, X Everywhere
          </option>
          <option
            value="yodawg"
            data-url="/yodawg/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Xzibit Yo Dawg
          </option>
          <option
            value="yuno"
            data-url="/yuno/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Y U NO Guy
          </option>
          <option
            value="yallgot"
            data-url="/yallgot/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            Y'all Got Any More of Them
          </option>
          <option
            value="gears"
            data-url="/gears/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            You Know What Really Grinds My Gears?
          </option>
          <option
            value="bad"
            data-url="/bad/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            You Should Feel Bad
          </option>
          <option
            value="elf"
            data-url="/elf/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            You Sit on a Throne of Lies
          </option>
          <option
            value="chosen"
            data-url="/chosen/_.jpg?preview=true&amp;watermark=none&amp;height=50"
            data-top=""
            data-bottom=""
          >
            You Were the Chosen One!
          </option>
        </select>
        <form>
          <label>
            line 1:
            <input type="text" name="text1" onChange={onChange} value={text} />
          </label>
        </form>
        <form>
          <label>
            line 2:
            <input
              type="text"
              name="text2"
              onChange={onChangeTwo}
              value={textTwo}
            />
          </label>
          <br />
          <input
            type="button"
            value="show text"
            onClick={function insertText() {
              console.log(text);
              console.log(textTwo);
              console.log(url);
              setUrl(
                'https://memegen.link/' +
                  nameMeme +
                  '/' +
                  text +
                  '/' +
                  textTwo +
                  '_.jpg',
              );
            }}
          />
          <p> </p>
          <input type="submit" value="download" />
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
