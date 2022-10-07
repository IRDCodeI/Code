import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './show_message.js'

const $signupForm = document.querySelector("#signup-form");

$signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = $signupForm['singup-email'].value
    const password = $signupForm['singup-password'].value

    try{

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        const $modalSignUp = document.getElementById("singUpModal");
        const modal = bootstrap.Modal.getInstance(singUpModal);
        modal.hide();

        showMessage(`Welcome ${userCredentials.user.email}`);
    }catch(err){

        /*
        console.log(err.message);
        console.log(err.code); // Identificador unico del error
        */

        if(err.code === 'auth/email-already-in-use'){
            showMessage('Email already in use', 'error')
        }else if(err.code === 'auth/invalid-email'){
            showMessage('Invalid Email', 'error')
        }else if(err.code === 'auth/weak-password'){
            showMessage('Weak Password', 'error')
        }else if (err.code){
            showMessage('Something went wrong', 'error')
        }
    }

});