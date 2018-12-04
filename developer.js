//Close the requests accordion
$('.collapse').collapse();

class Button {
  constructor(param) {
    // Creating the label
    this.newButton = document.createElement('Button');

    // Setting the div class
    this.newButton.setAttribute('class', 'btn btn-primary outline');
    this.newButton.setAttribute('type', 'button');

    this.newButton.innerHTML= param;

    this.newButton.addEventListener('click', e => {
      deleteAndDone(param);
      this.newButton.remove();
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

    this.newButton.innerHTML= param;

    this.newButton.addEventListener('click', e => {
      deleteAndListUpdate(param);
      this.newButton.remove();
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

let addItemNow = document.getElementById('addItemNow');
let addItemFurther = document.getElementById('addItemFurther');

addItemNow.addEventListener('click', e => {
  let inputData = document.getElementById('inputNowData');
  if(!inputData.value){
    console.log("null");
  } else {
    let nowDiv = document.getElementById('itemsNow');

    let button = new Button(inputData.value);

    nowDiv.appendChild(button);
  }
});
addItemFurther.addEventListener('click', e => {
  let inputData = document.getElementById('inputFurtherData');
  if(!inputData.value){
    console.log("null");
  } else {
    let nowDiv = document.getElementById('itemsFurther');

    let button = new Button(inputData.value);

    nowDiv.appendChild(button);
  }
});

function deleteAndListUpdate(string) {
  let li = new Li(string);

  let ul = document.getElementById('listToUpdate');

  ul.appendChild(li)

}
function deleteAndDone(string) {
  let btn = new DoneButton(string);

  let ul = document.getElementById('itemsDone');

  btn.setAttribute('data-toggle', 'tooltip');
  btn.setAttribute('title', 'Add to current update lists.');
  btn.setAttribute('id', 'addItemListUpdate');
  btn.setAttribute('value', string);

  ul.appendChild(btn);
}
