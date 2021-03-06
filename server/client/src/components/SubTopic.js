import React, { Component } from "react";
import PropTypes from "prop-types";
import Resource from "./Resource";
import NoResource from "./NoResource";

class SubTopic extends Component {
	constructor(props){
		super(props);
		this.state = props;
	}
	render() {
		const subtopics = this.props.subtopic;
		return(
			subtopics.map(function (subtopic) {
				if (subtopic.resources.length === 0){
					return (
						<div className="card-body">
							<h4 className="card-title">{subtopic.title}</h4>
							<NoResource/>
						</div>
					);
				}else {
					return (
						<div className="card-body">
							<h4 className="card-title">{subtopic.title}</h4>
							<Resource resource={subtopic.resources}/>
						</div>
					);
				}
			})

		);
	}
}

SubTopic.propTypes = {
	subtopic: PropTypes.object.isRequired,
};

export default SubTopic;