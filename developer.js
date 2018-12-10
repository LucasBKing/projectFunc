// Get the path to requests into db
const dbRefRequests = firebase.database().ref().child("development/requests");

// Get the path to working stage
const dbRefWorkingDone = firebase.database().ref().child("development/working/done");
const dbRefWorkingNow = firebase.database().ref().child("development/working/now");
const dbRefWorkingFurther = firebase.database().ref().child("development/working/further")

// Get the path to updates stage
const dbRefUpdates = firebase.database().ref().child("development/updates");
const dbRefUpdatesNext = firebase.database().ref().child("development/updates/next");
const dbRefUpdatesLasts = firebase.database().ref().child("development/updates/lasts");

// Getting the requests div
const requestsDiv = document.getElementById('requestsDiv');

//Close the requests accordion
$('.collapse').collapse();

class Button {
  constructor(param, db) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btn btn-primary outline');
    this.newButton.setAttribute('type', 'button');

    this.newButton.innerHTML= param;

    this.newButton.addEventListener('click', e => {
      this.newButton.remove();
      db.orderByKey().on('child_added', snap => {
        if(snap.val().Item === param) {
          db.child(snap.key).remove();
        }
      });

      dbRefWorkingDone.push().set({
        Item: param
      });

    });

    return this.newButton;
  }
}

class DoneButton {
  constructor(param) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btn btn-primary outline');
    this.newButton.setAttribute('type', 'button');
    this.newButton.setAttribute('data-toggle', 'tooltip');
    this.newButton.setAttribute('title', 'Add to current update lists.');
    this.newButton.setAttribute('id', 'addItemListUpdate');

    this.newButton.innerHTML= param;

    this.newButton.addEventListener('click', e => {
      this.newButton.remove();
      dbRefWorkingDone.orderByKey().on('child_added', snap => {
        if(snap.val().Item === param) {
          dbRefWorkingDone.child(snap.key).remove();
        }
      });

      dbRefUpdatesNext.push().set({
        Item: param
      });

    });

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

class AccordionButtonFinished {
  constructor(btn, div, p) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btn btn-success');
    this.newButton.setAttribute('type', 'button');

    this.newButton.innerHTML= 'Done';

    this.newButton.addEventListener('click', e => {
      dbRefRequests.orderByKey().on('child_added', snap => {
        if(snap.val().Request === p){
          dbRefRequests.child(snap.key).remove();
          this.newButton.remove();
          div.remove();
          btn.remove();

        }
      });
    });

    return this.newButton;
  }
}

class Li {
  constructor(data) {
    this.data = data;
    // Creating li
    this.newLi = document.createElement('li');
    // Li content
    this.liContent = document.createTextNode(this.data);

    // Setting att to li element
    this.newLi.setAttribute('class', 'list-group-item');
    this.newLi.setAttribute('data-toggle', 'tooltip');
    this.newLi.setAttribute('title', 'Add to current udpate section');


    // Setting the content into li element
    this.newLi.appendChild(this.liContent);

    return this.newLi;
  }
}

class Div {
  constructor(param) {
    // Creating the hidden div
    this.newDiv = document.createElement('div');
    this.newP = document.createElement('p');

    // Setting the div class
    this.newDiv.setAttribute('class', 'panel');
    this.newDiv.setAttribute('style', 'display: none');

    this.newP.innerHTML= param;

    this.newDiv.appendChild(this.newP);

    return this.newDiv;
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

let addItemNow = document.getElementById('addItemNow');
let addItemFurther = document.getElementById('addItemFurther');

addItemNow.addEventListener('click', e => {
  let inputData = document.getElementById('inputNowData');
  if(!inputData.value){
    console.log("Nothing to add");
  } else {
    // Pushing what i'm working at the moment
    dbRefWorkingNow.push().set({
        Item: inputData.value
    });
  }
});
addItemFurther.addEventListener('click', e => {
  let inputData = document.getElementById('inputFurtherData');
  if(!inputData.value){
    console.log("Nothing to add");
  } else {
    dbRefWorkingFurther.push().set({
      Item: inputData.value
    });
  }
});

// Sending a list of updates
let sendNewUpdates = document.getElementById('sendNewUpdates');
sendNewUpdates.addEventListener('click', e => {
  let newUpdate = dbRefUpdatesLasts.push();
  /* Take item by item from development/update/next and set into ../lasts
  /  dev/
  /    updates/
  /           lasts/
  /                 newUpdate.key/
  /                               item.key/
  /                                        Item
  /                               item.key/
  /                                        Item
  */
  dbRefUpdatesNext.on('child_added', snap => {
    dbRefUpdatesLasts.child(newUpdate.key).push().set({
      Item: snap.val().Item
    });
    dbRefUpdatesNext.child(snap.key).remove();
  });

  window.alert("Update realizado com sucesso!");
  location.reload();
  window.location.href="#";
});
// Showing all "requests" items
dbRefRequests.orderByKey().on('child_added', snap => {
  let div = new Div(snap.val().Request);
  let btn = new AccordionButton(snap.val().Date + ' - Pedido', div);
  let btnRmv = new AccordionButtonFinished(btn, div, snap.val().Request);

  div.appendChild(btnRmv);
  requestsDiv.appendChild(btn);
  requestsDiv.appendChild(div);
});
// Showing all "now" items
dbRefWorkingNow.orderByKey().on('child_added', snap => {
  let div = document.getElementById('itemsNow');
  let btn = new Button(snap.val().Item, dbRefWorkingNow);

  div.appendChild(btn);
});
// Showing all "further" items
dbRefWorkingFurther.orderByKey().on('child_added', snap => {
  let div = document.getElementById('itemsFurther');
  let btn = new Button(snap.val().Item, dbRefWorkingFurther);

  div.appendChild(btn);
});
// Showing all "done" items
dbRefWorkingDone.orderByKey().on('child_added', snap => {
  let btn = new DoneButton(snap.val().Item);
  let ul = document.getElementById('itemsDone');

  ul.appendChild(btn);
});
// Showin all "next" items
dbRefUpdatesNext.orderByKey().on('child_added', snap => {
  let li = new Li(snap.val().Item);
  let ul = document.getElementById('listToUpdate');

  ul.appendChild(li)
});
// Getting updates list tag id name
let updatesSession = document.getElementById('lastToUpdates');
// Settigng the counter of updates made
let counter = 1;
// Showing a list of all updates made
dbRefUpdatesLasts.orderByKey().on('child_added', snap => {
  let div = new DivListUpdates();
  let btn = new AccordionButton('Update #' + counter, div);
  let p = new P('Items adicionados:');

  div.appendChild(p);
  
  snap.forEach(childSnap => {
    let p = new P(childSnap.val().Item);

    div.appendChild(p);
  });
  counter++;
  updatesSession.appendChild(btn);
  updatesSession.appendChild(div);
});
