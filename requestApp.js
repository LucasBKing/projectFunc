// path to add a request into the db
const dbRefRequests = firebase.database().ref().child("development/requests");
const dbRefUpdatesLasts = firebase.database().ref().child("development/updates/lasts");
const dbRefWorkingNow = firebase.database().ref().child("development/working/now");

class Button {
  constructor(param) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btn btnNow disabled');
    this.newButton.setAttribute('type', 'button');

    this.newButton.innerHTML= param;

    return this.newButton;
  }
}

class AccordionButton {
  constructor(param, div) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btnReq');
    this.newButton.setAttribute('type', 'button');

    this.newButton.innerHTML= param;

    this.newButton.addEventListener('click', e => {
      if(div.style.display === 'none') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });


    return this.newButton;
  }
}

class DivListUpdates {
  constructor() {
    // Creating the hidden div
    this.newDiv = document.createElement('div');

    // Setting the div class
    this.newDiv.setAttribute('class', 'panel');
    this.newDiv.setAttribute('style', 'display: none');

    return this.newDiv;
  }
}

class P {
  constructor(data){
    this.data = data;
    // Creating p
    this.newP = document.createElement('p');
    // P content
    this.pContent = document.createTextNode(this.data);

    // Setting the content into p element
    this.newP.appendChild(this.pContent);

    return this.newP;
  }
}
// request html button
let btnRequest = document.getElementById('btnRequest');

// Realtime listener to send requests
btnRequest.addEventListener('click', e => {
  let date = new Date();

  // Getting atual date
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  // Getting the request
  let request = document.getElementById('requestContent').value;

  if(request) {
    // Pushing the request to db
    dbRefRequests.push().set({
      Request: request,
      Date: day+'/'+month+'/'+year
    });
  }

  alert("Pedido enviado com sucesso!");
  location.reload();
  window.location.href="#";
});

// Settigng the counter of updates made
let counter = 1;
// Showing a list of all updates made
dbRefUpdatesLasts.orderByKey().on('child_added', snap => {
  let divMade = document.getElementById('updatesMade');

  let div = new DivListUpdates();
  let btn = new AccordionButton('Update #' + counter, div);
  let p = new P('Items adicionados:');

  div.appendChild(p);

  snap.forEach(childSnap => {
    let p = new P(childSnap.val().Item);

    div.appendChild(p);
  });
  counter++;
  divMade.appendChild(btn);
  divMade.appendChild(div);
});
// Showing all "now" items
dbRefWorkingNow.orderByKey().on('child_added', snap => {
  let divDoing = document.getElementById('doingNow');
  let btn = new Button(snap.val().Item);

  divDoing.appendChild(btn);
});
