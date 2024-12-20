import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import Aside from './components/Aside';

//import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/reset.css';
import './assets/css/swiper-bundle.css';
import './assets/css/style.css';
import './assets/css/jquery.datetimepicker.min.css';




import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from './connector';

const App = () => {
  const { account, activate } = useWeb3React();

  useEffect(() => {
    const isMetamask = window.localStorage.getItem('wallet') === 'metamask';
    if (!account && isMetamask) {
      activate(injectedConnector);
    }
  }, [account, activate]);

  useEffect(() => {
    window.document.body.classList.add('g-sidenav-show');
    window.document.body.style.backgroundColor = '#f8f9fa !important';
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="../assets/img/meta-img.png"/>
        <meta property="og:url" content="https://dodogocoin.net"/>
        <meta property="og:image:alt" content="DMCK-NFT"/>
        <meta name="twitter:title" content="DMCK-NFT"/>
        <meta name="twitter:description" content="Create, sell, and auction NFTs, digital items, and crypto collectibles. Explore new items everyday."/>
        <meta name="twitter:image" content="../assets/img/meta-img.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="site_name" content="DMCK-NFT"/>

        <title>DMCK-NFT</title>
        {/* <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        /> */}
      </Helmet>

      <Aside />
      
    </div>
  );
};

export default App;
