import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: ''
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};
	onChange = event => {
		this.setState({ text: event.target.value });
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='search user...'
						value={this.state.text}
						onChange={this.onChange}></input>
					<input
						type='submit'
						value='search'
						className='btn btn-dark btn-block'></input>
				</form>
			</div>
		);
	}
}

export default Search;
