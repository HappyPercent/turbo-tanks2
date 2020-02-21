import React, { Component } from 'react';
import { connect } from 'react-redux';

import './authForm.css';
import { Validation, errors, compose } from '../../utils';
import { withApi } from '../hoc';
import { authorize, updateFormValues } from '../../actions'

const validation = new Validation(errors);

class AuthForm extends Component {

	constructor() {
		super();
		this.validation = validation;
		this.handleFormChange = this.handleFormChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	submit(event) {
		event.preventDefault();
		let { api, authorize } = this.props;
		api.post(event).then(res => authorize(true));
	}

	handleFormChange(ev) {
		this.props.updateFormValues(ev.target.name, ev.target.value);
	}

    render() {

		const { validation, submit, handleFormChange } = this;
		const { nickname, password, avatarLink } = this.props.form;

		return (
			<form
				onSubmit={ event => { submit(event) }}
				onChange={ event => { validation.validate(event) }}
				className="form"
			>
				<div className="row">
				<label>Nickname</label>
				<input
					name="nickname"
					value = { nickname }
					type="text"
					minLength="2"
					maxLength="30"
					required
					onChange={ ev => { handleFormChange(ev) }}
				/>
				<p id="nickname" className="error"></p>
				</div>
				<div className="row">
				<label>Password</label>
				<input
					name="password"
					value = { password }
					type="password"
					minLength="8"
					maxLength="30"
					required
					onChange={ ev => { handleFormChange(ev) }}
				/>
				<p id="password" className="error"></p>
				</div>
				<div className="row">
				<label>Avatar url</label>
				<input
					name="link"
					value = { avatarLink }
					type="url"
					required
					onChange={ ev => { handleFormChange(ev) }}
				/>
				<p id="link" className="error"></p>
				</div>
				<button className="button button_disabled" type="submit">
				Submit
				</button>
			</form>
		);
    }
}

const mapStateToProps = (state) => {
	return {
		form: state.form
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		authorize: () => dispatch(authorize()),
		updateFormValues: (key, value) => dispatch(updateFormValues(key, value)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withApi()
)(AuthForm);