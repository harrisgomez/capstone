import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = e => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' name='displayName' onChange={handleChange} value={displayName} required />
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange} value={email} required />
                <label>Password</label>
                <input type='password' name='password' onChange={handleChange} rvalue={password} equired />
                <label>Confirm Password</label>
                <input type='password' name='confirmPassword' onChange={handleChange} value={confirmPassword} required />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;