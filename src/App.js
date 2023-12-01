import React, { useState } from "react";
// AOS Import
//import Scss
// import "./assets/scss/themes.scss";
// import "./assets/scss/themesRTL.scss";

//imoprt Route
import Route from "./Routes";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend
import { useEffect } from "react";

function App() {
  const [isReady, setIsReady] = useState(false);
  // useEffect(() => {
  //   const isRtl = localStorage.getItem("I18N_LANGUAGE") === "ar";
  //   if (isRtl) {
  //     import("./assets/scss/themesRTL.scss")
  //       .then(() => {
  //         // The Sass file has been loaded
  //         setIsReady(true);
  //       })
  //       .catch((error) => {
  //         // Handle the error if the Sass file failed to load
  //       });
  //   } else {
  //     // import("./assets/scss/themes.scss")
  //       // .then(() => {
  //       //   // The Sass file has been loaded
  //       //   setIsReady(true);
  //       // })
  //       // .catch((error) => {
  //       //   // Handle the error if the Sass file failed to load
  //       // });
  //   }
  //   // Fetch your data or update the state as needed
  // }, []);
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
