import React from "react";

class Vote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [
				{ name: "PHP", votes: 0 },
				{ name: "Python", votes: 0 },
				{ name: "Go", votes: 0 },
				{ name: "Java", votes: 0 }
			]
		}
	}

	vote(i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({ languages: newLanguages });
	}

	render() {
		return (
			<div>
				<h1>Vote Your Language!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) =>
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)}
				</div>
			</div>
		);
	}
}

export default Vote;