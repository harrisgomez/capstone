import {
    signInWithGooglePopup,
    createUserDocFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;