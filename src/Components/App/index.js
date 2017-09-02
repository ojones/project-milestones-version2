import React, { Component } from 'react';
import './App.css';
import Home from '../Home';
import ReviewMilestones from '../ReviewMilestones';
import PageSlider from '../react-page-slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 1,
    };
    this.homeView = this.homeView.bind(this);
    this.reviewMilestones = this.reviewMilestones.bind(this);
    this.findMilestones = this.findMilestones.bind(this);
    this.createNewMilestone = this.createNewMilestone.bind(this);
    this.myMilestones = this.myMilestones.bind(this);
  }

  homeView() {
    this.setState({ currentView: 0 });
  }

  reviewMilestones() {
    this.setState({ currentView: 1 });
  }

  findMilestones() {
    this.setState({ currentView: 2 });
  }

  createNewMilestone() {
    this.setState({ currentView: 3 });
  }

  myMilestones() {
    this.setState({ currentView: 4 });
  }

  render() {

    return (
      <div className="App">
        <PageSlider show={this.state.currentView === 0} slideFrom={'left'}>
          <Home
            reviewMilestones={this.reviewMilestones}
            findMilestones={this.findMilestones}
            createNewMilestone={this.createNewMilestone}
            myMilestones={this.myMilestones}
          />
        </PageSlider>
        <PageSlider show={this.state.currentView === 1} slideFrom={'right'}>
          <ReviewMilestones
            homeView={this.homeView}
          />
        </PageSlider>
      </div>
    );
  }
}

export default App;
