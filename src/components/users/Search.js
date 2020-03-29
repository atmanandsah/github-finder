/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: ''
	};

	static PropTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
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
		const { clearUsers, showClear } = this.props;
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
				{showClear && (
					<button
						onClick={clearUsers}
						className='btn btn-block btn-light'>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;
