import React, {Component} from 'react';
import './MilestoneView.css';
import Header from '../Header';
import Content from '../Content';
import Item from '../Item';

function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

const renderRole = (role, i) => {
  return (
    <span className="role" key={i}>{ role }</span>
  )
}

const renderRoles = (roles) => {
  roles = roles.map(renderRole)

  var output = []
  roles.forEach(function(role, i) {
    // if list is more than one item and this is the last item, prefix with 'and '
    if (roles.length > 1 && i === roles.length - 1) output.push('and ')
    // output the item
    output.push(role)
    // if list is more than 2 items, append a comma to all but the last item
    if (roles.length > 2 && i < roles.length - 1) output.push(',')
    // if list is more than 1 item, append a space to all but the last item
    if (roles.length > 1 && i < roles.length - 1) output.push(' ')
  })

  return output
}

class MilestoneView extends Component {

	render() {
		var milestone = this.props.milestone;
		if (milestone === undefined)
			return null;
		return (
			<div>
				<div className="milestoneView">
					<Header title="PM" />
					<Content>
						<div className="goBack" onClick={ this.props.reviewView }>
							{ "< Back to completion requests" }
						</div>
						<div className="pageName">{'Review ' + milestone.name}</div>
						<div className="infoBox">
							<div className="subTitle">Milestone Description:</div>
							<div>{milestone.description}</div>
						</div>
						<div className="infoBox">
							<div className="subTitle">Completion Requirements:</div>
							<div className="reqs">{
								milestone.completion_requirements.map(function(req, index) {
									return <li key={index}>{req}</li>
								})
							}</div>
						</div>
						<div className="infoBox">
							<span className="subTitle">Evidence:</span>
							<div className="reqs">{
								milestone.evidence.map(function(req, index) {
									return <li key={index}>{Object.keys(req)[0]}</li>
								})
							}</div>
						</div>
						<Item
							Icon='fa-balance-scale'
							Title="Make review"
							Details="After reviewing evidence continue on to make review."
							Link="Make review"
							onClick={ this.props.enterReview }
						/>
					</Content>
				</div>
			</div>
		);
	}
}

export default MilestoneView;
