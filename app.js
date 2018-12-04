(function() {
    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');

    //Add login event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            if(errorCode === 'auth/wrong-password'){
                window.alert('Senha incorreta!');
            } else if(errorCode === 'auth/user-not-found'){
                window.alert('Email inválido');
            }
        });

        //Add realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                if(firebaseUser.email === 'admin@t20funcional.com') {
                  window.location = 'adminPage.html';
                } else if (firebaseUser.email === 'developer@dev.com'){
                  window.location = "developer.html";
                } else {
                  window.location = "userPage.html";
                }

            } else {
                console.log('not logged in');
            }
        });
    });
}());
