const dbRef = firebase.database().ref().child("usersFeedback");

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
        window.location = "index.html";   
    }
});

function logoutLink(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('Signed out');
        }).catch(function(error) {
        // An error happened.
        console.log('Signed out error');
    });
};


btnFeed.addEventListener('click', e=> {
    const user = firebase.auth().currentUser;
    const feedContent = document.getElementById('feedContent').value;

    dbRef.child(user.uid).push().set({
        feedback: feedContent
    });

    
    window.alert("Feedback enviado com sucesso. Muito obrigado!");
    location.reload();
    window.location.href="#";
});