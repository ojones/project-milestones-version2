import React, { Component } from 'react';
import './Home.css';
import Header from '../Header';
import Content from '../Content';
import Item from '../Item';

class Home extends Component {
  render() {
    return (
			<div className="home">
				<Header title="PM" />
				<Content>
					<Item
						Icon='fa-heart'
						Title="Review milestones"
						Details="These milestones you have volunteered to review."
						Link="See List"
						onClick={this.props.reviewMilestones}
						isMilestone={false}
					/>
					<Item
						Icon='fa-heart'
						Title="Find milestones"
						Details="Discover milestones created by others."
						Link="See List"
						onClick={this.props.findMilestones}
						isMilestone={false}
					/>
					<Item
						Icon='fa-heart'
						Title="Create a new milestone"
						Details="Create your own milestone."
						Link="Create milestone"
						onClick={this.props.createNewMilestone}
						isMilestone={false}
					/>
					<Item
						Icon='fa-heart'
						Title="My milestones"
						Details="Manage milestones you have created."
						Link="See List"
						onClick={this.props.myMilestones}
						isMilestone={false}
					/>
				</Content>
			</div>
    );
  }
}

export default Home;
