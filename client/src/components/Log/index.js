import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
	const [signUpModal, setSignUpModal] = useState(props.signup);
	const [signInModal, setSignInModal] = useState(props.signin);

	const handleModals = (e) => {
		if (e.target.id === "register") {
			setSignInModal(false);
			setSignUpModal(true);
		} else if (e.target.id === "login") {
			setSignUpModal(false);
			setSignInModal(true);
		}
	};

	return (
		<div className="connection-form">
			<div className="form-container">
				{signUpModal && <SignUpForm />}
				{signInModal && <SignInForm />}
				<ul>
					{signUpModal && (
						<li onClick={handleModals} id="login" className="forgoted-password">
							Vous avez déjà un compte ?
						</li>
					)}
					{signInModal && (
						<li onClick={handleModals} id="register" className="green-btn">
							Créer nouveau compte
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Log;
