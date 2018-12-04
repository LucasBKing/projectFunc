const dbRef = firebase.database().ref().child("users");

function sendData() {
    const data = document.getElementById('skill_type').value;
    const data2 = document.getElementById('skill_quantity').value;
    const user = firebase.auth().currentUser;
    let currentTime = new Date();

    if(data == 0 || data2 == 0){
        window.alert("Selecione uma opção válida");
        return;
    }
    const d = currentTime.getDate();
    const m = currentTime.getMonth()+1;
    const y = currentTime.getFullYear();

    currentTime = d + '/' + m + '/' + y;

    dbRef.child(user.uid).push().set({
        Treino: data,
        Repetições: data2,
        Dia: currentTime
    });
    window.alert("Treino do dia " + d + "/" + m + " registrado com sucesso.");
    location.reload();
    window.location.href="#";
}

function logoutLink(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('Signed out');
        }).catch(function(error) {
        // An error happened.
        console.log('Signed out error');
    });
};

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
        window.location = "index.html";
    }
});
