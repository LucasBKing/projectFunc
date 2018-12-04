(function() {
    var config = {
        apiKey: "AIzaSyDtyfJOMICXk8MUhtDWJYrkd8L_sy2TvfQ",
        authDomain: "t-20func.firebaseapp.com",
        databaseURL: "https://t-20func.firebaseio.com",
        projectId: "t-20func",
        storageBucket: "t-20func.appspot.com",
        messagingSenderId: "223439342301"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

}());