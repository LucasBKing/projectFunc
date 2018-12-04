const dbForms = firebase.database().ref().child("usersForm/");
const dbTrainings = firebase.database().ref().child("users/");

// Get main div id
const divName = document.getElementById('listOfCustomers');

class Div {
  constructor(param) {
    // Creating the div
    this.newDiv = document.createElement('div');

    // Setting the div style
    this.newDiv.setAttribute('style', 'display: none');
    this.newDiv.setAttribute('id', param);

    return this.newDiv;
  }
}

class Button {
  constructor(data, div, btnClass) {
    // Customer name
    this.data = data;

    // Creating the new button
    this.newButton = document.createElement('button');

    // Setting the button atts
    this.newButton.setAttribute('class', 'list-group-item list-group-item-action'+ btnClass);
    this.newButton.setAttribute('type', 'button');

    // Customer Name
    this.btnContent = document.createTextNode(this.data);

    // Setting the name into the button
    this.newButton.appendChild(this.btnContent);

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

class Li {
  constructor(data) {
    this.data = data;
    // Creating li
    this.newLi = document.createElement('li');
    // Li content
    this.liContent = document.createTextNode(this.data);

    // Setting att to li element
    this.newLi.setAttribute('class', 'list-group-item');

    // Setting the content into li element
    this.newLi.appendChild(this.liContent);

    return this.newLi;
  }
}

dbForms.orderByKey().on('child_added', snap => {
      snap.forEach(function(childSnap) {
        let name = childSnap.val().NomeCompleto;

        let li = [];

        li[0] = new Li('Email: ' + childSnap.val().Email);
        li[1] = new Li('Data Nascimento: ' + childSnap.val().DataNascimento);
        li[2] = new Li('Telefone: ' + childSnap.val().Telefone);
        li[3] = new Li('Endereço: ' + childSnap.val().Endereço);
        li[4] = new Li('Nome para emergência: ' + childSnap.val().NomePEmergencia);
        li[5] = new Li('Fone para emergência: ' + childSnap.val().TelefonePEmergencia);

        li[6] = new Li('Fumante: ' + childSnap.val().Fumante);
        let smokeQuantity;
        if(childSnap.val().Fumante === "Não") {
          smokeQuantity = '-';
        } else {
          smokeQuantity = childSnap.val().QuantidadeCigarro;
        }
        li[7] = new Li('Quantidade de cigarro: ' + smokeQuantity);

        li[8] = new Li('PA: ' + childSnap.val().altaPA);

        li[9] = new Li('Pratica atividade: ' + childSnap.val().praticaAtividade);
        let activityEx;
        if(childSnap.val().praticaAtividade === "Não") {
          activityEx = '-';
        } else {
          activityEx = childSnap.val().atividadesPraticadas;
        }
        li[10] = new Li('Atividades praticadas: ' + activityEx);

        li[11] = new Li('Colesterol alto: ' + childSnap.val().colesterolAlto);

        li[12] = new Li('Possui problema cardíaco: ' + childSnap.val().coraçãoFamilia);
        let heartIssue;
        if(childSnap.val().coraçãoFamilia === "Não") {
          heartIssue = '-';
        } else {
          heartIssue = childSnap.val().coraçãoProblema;
        }
        li[13] = new Li('Qual problema cardíaco: ' + heartIssue);

        li[14] = new Li('Diabéticos na família: ' + childSnap.val().diabetesFamilia);

        li[15] = new Li('Possui lesões: ' + childSnap.val().lesões);
        let hurtIssue;
        if(childSnap.val().lesões === "Não") {
          hurtIssue = '-';
        } else {
          hurtIssue = childSnap.val().lesõesExistentes;
        }
        li[16] = new Li('Quais lesões: ' + hurtIssue);

        li[17] = new Li('Toma medicamento: ' + childSnap.val().tomaMedicamento);
        let medicineEx;
        if(childSnap.val().tomaMedicamento === "Não") {
          medicineEx = '-';
        } else {
          medicineEx = childSnap.val().medicamentos;
        }
        li[18] = new Li('Qual medicamento: ' + medicineEx);

        li[19] = new Li('Sobrepeso: ' + childSnap.val().sobrepeso);
        let heightEx;
        if(childSnap.val().sobrepeso === "Não") {
          heightEx = '-';
        } else {
          heightEx = childSnap.val().sobrepesoKg;
        }
        li[20] = new Li('Quantidade de sobrepeso: ' + heightEx);

        let hiddenMainDiv = new Div(snap.key);
        let hiddenDivForms = new Div('formsDiv');

        let btnForms = new Button('Formulario', hiddenDivForms, ' btn btn-secondary btn-margin');
        let btnCostumer = new Button(name, hiddenMainDiv, ' btn btn-lg btn-secondary');

        // Setting the forms on the hidden div
        for(let i = 0; i < 21; i++) {
          hiddenDivForms.appendChild(li[i]);
        }

        hiddenMainDiv.appendChild(btnForms);
        hiddenMainDiv.appendChild(hiddenDivForms);

        let hiddenDivTrainings = new Div('trainsDiv');
        let btnTrainings = new Button('Treinos', hiddenDivTrainings, ' btn btn-secondary btn-margin');

        hiddenMainDiv.appendChild(btnTrainings);

        dbTrainings.orderByKey().on('child_added', e => {
            if(e.key === snap.key) {
              e.forEach(function(childE) {
                let li = new Li('Treino: '+ childE.val().Treino + '--' + 'Repetições: ' + childE.val().Repetições + '--' + 'Dia: ' + childE.val().Dia);

                hiddenDivTrainings.appendChild(li);
                hiddenMainDiv.appendChild(hiddenDivTrainings);
              });
            }

        });

        //Setting the hidden div on the main div
        divName.appendChild(btnCostumer);
        divName.appendChild(hiddenMainDiv);

      });
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
