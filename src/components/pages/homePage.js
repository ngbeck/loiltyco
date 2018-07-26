import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className='container-fluid'>

          <h1>
              Welcome to Loilty Co.!
        </h1>

        <p>
        Loilty Co. is intended to be a provider of stats, advanced analytics, and insight for the Edmonton Oilers and Edmonton Oil Kings. My intention is to improve on advanced stats that already exist and push the conversation past Corsi-based analytics.</p>

       <p> The newest advanced stats and micro stats will be incorporated into the Oilers and Oil Kings 2018-19 season. Specifically, I'll focus on tracking data around the impact of passing metrics and zone enteries. Game-by-game I will be able to identify which players help create or give up scoring chances by maintaining possession with effective passing and zone enteries or zone exits. From a descriptive standpoint this kind of data will help us truly understand how involved players are in shot generation, which is significantly more valuable than calculating TOI for SF vs SA.</p>

        <p>You'll see how effective each player's passing was, how much offence they contributed to, as well as how often they contributed to generating offence.</p>

       <p>This project would not be possible without help from the folks at hockey-graphs.com and the Tape to Tape project so a huge shout out to them. Be sure to check out the work they're doing around the NHL.
        </p>


    
        </div>
    );
  }
}

export default Home;
