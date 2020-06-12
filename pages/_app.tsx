import {AppProps} from "next/app";
import React from "react";

import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({Component, pageProps}: AppProps) =>
  <Component {...pageProps} />