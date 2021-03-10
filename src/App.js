import React from "react";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";

import Main from "./components/main/main";
import Aside from "./components/aside/aside";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.cantainer}>
        <Header />
        <div className={styles.wrap}>
          <Aside className={styles.aside} />
          <Main className={styles.main} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
