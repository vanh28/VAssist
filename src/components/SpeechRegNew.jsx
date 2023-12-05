// import 'regenerator-runtime/runtime';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter,Route,Link,redirect} from 'react-router-dom';
// import Redirect from 'react-router-dom';
// import SpeechRecognition ,{ useSpeechRecognition } from 'react-speech-recognition';

// import './SpeechReg.css'; // Import the CSS file

// const SpeechReg = () => {
//   const navigate = useNavigate();
  
//   const commands = [
//     {
//       command: ["Go To *"],
//       callback: (redirectPage: string) => setRedirectUrl(redirectPage),
//     },
//   ];

//   const { transcript } = useSpeechRecognition({ commands });
//   const [redirectUrl, setRedirectUrl] = useState('');
//   const pages = ['home', 'news','profile'];
//   const urls = {
//       home:"/home-page",
//       news:"/news",
//       profile:"/profile",
//   };

//   function removeDotAtEnd(sentence) {
//     if (sentence.endsWith('.')) {
//       return sentence.slice(0, -1);
//     }
//     return sentence;
//   }

//   let string = removeDotAtEnd(redirectUrl.toLowerCase());
//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null;
//   }
//   let message ="";
//   if (pages.includes(string)) {
//     navigate(urls[string]);
//   }else{
//     // message = "Page not found";
//   }
//   return (
//     <div className="card"> {/* Add the "card" class */}
//       <p id="transcript">Transcript: {transcript}</p>
//       <button onClick={() => SpeechRecognition.startListening()}> Start</button>
//       <div>{message}</div>
//     </div>
//   );
// };

// export default SpeechReg;




import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Route,Link,redirect} from 'react-router-dom';
import Redirect from 'react-router-dom';
import SpeechRecognition ,{ useSpeechRecognition } from 'react-speech-recognition';

import './SpeechReg.css'; // Import the CSS file

const SpeechReg = () => {

  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  const commands = [
    {
      command: ["Go To *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['home', 'news', 'profile','call','music'];
  const urls = {
    home: "/home-page",
    news: "/news",
    profile: "/protected",
    call: "/Videocall",
    music: "/music"
  };

  function removeDotAtEnd(sentence) {
    if (sentence.endsWith('.')) {
      return sentence.slice(0, -1);
    }
    return sentence;
  }

  const handleRightClick = () => {
    
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const rightClickHandler = () => {
      handleRightClick();
    };

    window.addEventListener('contextmenu', rightClickHandler);

    return () => {
      window.removeEventListener('contextmenu', rightClickHandler);
    };
  }, [clickCount]);

  useEffect(() => {
    if (clickCount === 2) {
      disableRightClick();
    }
    if (clickCount === 3) {
      setShowComponent(true);
      setClickCount(0);
      disableRightClick();
    }
  }, [clickCount]);
  const disableRightClick = () => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  let string = "";

  if (showComponent) {
    
    string = removeDotAtEnd(redirectUrl.toLowerCase());
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return;
    }
    if (pages.includes(string)) {
      setShouldRedirect(true);

    } else {
      
    }
  }
  const handleSaveClick = () => {
    setShowComponent(false); // Ẩn component khi nút "Save" được nhấn
  };

  return (
    <>
      {showComponent && (
        <div className="card">
          <p id="transcript">Transcript: {transcript}</p>
          <p><button onClick={() => SpeechRecognition.startListening()}> Start</button> </p>
          <button  onClick={handleSaveClick}> Close</button>
        </div>
      )}
      {shouldRedirect && navigate(urls[string])}
    </>
  );
};

export default SpeechReg;