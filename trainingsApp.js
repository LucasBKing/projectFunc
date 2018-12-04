/* Pull data from database with that layout:
    //  - users
            - userUID
                - dataKey
                    -data from dataKey
    */
    /*btnPrintData.addEventListener('click', e => {
        dbRef.orderByKey().on('child_added', snap => {
            snap.forEach(function(childSnap) {
                console.log(childSnap.val().string);
            });
        });
    });
    */
function insertEntry(table, date, training, repetition) {
    const tableId = document.getElementById(table);
    const tbody = tableId.getElementsByTagName("tbody")[0]; 
    const tr = document.createElement("tr");
    const newDateEntry = document.createElement("td");
    const newTrainingEntry = document.createElement("td");
    const newTimesEntry = document.createElement("td");

    newDateEntry.innerHTML = date;
    newTrainingEntry.innerHTML = training;
    newTimesEntry.innerHTML = repetition;

    tr.appendChild(newDateEntry);
    tr.appendChild(newTrainingEntry);
    tr.appendChild(newTimesEntry);

    tbody.appendChild(tr);

}

btnTrainings.addEventListener('click', e => {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            const dbRef = firebase.database().ref().child("users/" + user.uid);
            
            dbRef.orderByKey().on('child_added', snap => {
                console.log(snap.key);

                insertEntry("tableID", snap.val().Dia, snap.val().Treino, snap.val().Repetições);                
            });

            
        } else {
            console.log("error");
        }
    });
});