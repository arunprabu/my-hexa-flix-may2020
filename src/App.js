import React from 'react';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Program from './components/Program/Program';
import ChannelList from './components/ChannelList/ChannelList';
import TrendingShows from './components/TrendingShows/TrendingShows';

// App Component  -- Setting up Layout
function App() {

  return (
    <div>
      <Header />
      <div style={{marginTop: '80px'}} className="container">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to Hexa Flix App!</h1>
            <p>
              This is a template for a simple marketing or informational website. It
              includes a large callout called a jumbotron and three supporting pieces of
              content. Use it as a starting point to create something more unique.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>
        
        {/* My Program List Comp */}
        <h2>Featured Programs List | Props </h2>
        <Program name='Man vs Mild' 
                time='8PM' 
                category='Adventure'>Wild travel adventure pgm</Program>
        <Program name='Cricket Retro Highlights' 
                time='9PM' 
                category='Sports'>Cricket  Highlights</Program>
        <Program name='Planet Earth by Attenborough' 
                time='10PM' 
                category='Infotainment'>Program on Planet Earth</Program>

        <hr/>

        <ChannelList>Channel List | States Example</ChannelList>

        <hr />

        <TrendingShows></TrendingShows>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
