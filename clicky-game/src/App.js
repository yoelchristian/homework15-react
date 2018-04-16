import React, { Component } from 'react';
import './App.css';
import teams from "./teams.json";
import Wrapper from "./components/Wrapper";
import TeamCard from "./components/TeamCard";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = {
    teams,
    resetTeams: teams,
    currentScore: 0,
    topScore: 0,
    message: "Click the GIFS to start"
  }

  scrambleOrder = array => {
    for(let i = array.length - 1; i > 0; i --) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  selectTeam = teamName => {
    const findTeam = this.state.teams.find(result => result.team === teamName);
    
    if(!findTeam.selectedStatus) {
      findTeam.selectedStatus = true;
      this.setState({
        message: "Correct choice!",
        currentScore: this.state.currentScore + 1
      })
      return this.scrambleOrder(teams)
    } else {
      const resetTeam = this.state.teams.map(teams => {teams.selectedStatus = false; return teams});
      this.setState({
        team: resetTeam,
        message: "Wrong choice!",
        currentScore: 0,
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore
      })
      return this.scrambleOrder(teams)
    }
    
  }

  render() {
    return (
      <Wrapper>
        <ScoreBoard 
          key={null}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        {this.state.teams.map(teams => (
          <TeamCard 
            key={teams.team}
            team={teams.team}
            gifs={teams.gifs}
            selectTeam={this.selectTeam}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
