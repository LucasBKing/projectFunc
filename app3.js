
    const dbRef = firebase.database().ref().child("usersForm");

    var flag, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10;
    flag = true;

    const email = document.getElementById('txtEmail');
    const pass = document.getElementById('txtPassword');
    const fullName = document.getElementById('txtName');
    const adress = document.getElementById('txtAdress');
    const phone = document.getElementById('txtPhone');
    const ageDay = document.getElementById('txtAgeDay');
    const ageMonth = document.getElementById('txtAgeMonth');
    const ageYear = document.getElementById('txtAgeYear');
    const fullNameEm = document.getElementById('txtNameEm');
    const phoneEm = document.getElementById('txtPhoneEm');

    const select1 = document.getElementById('select1');
    const select1Hide = document.getElementById('selectHide1');
    const paSelect = document.getElementById('paSelect');
    const diaSelect = document.getElementById('diaSelect');
    const select2 = document.getElementById('select2');
    const familyIssue = document.getElementById('familyIssue');
    const select3 = document.getElementById('select3');
    const heightIssue = document.getElementById('heightIssue');
    const select4 = document.getElementById('select4');
    const hurtIssue = document.getElementById('hurtIssue');
    const select5 = document.getElementById('select5');
    const medicineIssue = document.getElementById('medicineIssue');
    const select6 = document.getElementById('select6');
    const activityIssue = document.getElementById('activityIssue');
    const colSelect = document.getElementById('colSelect');

    btnSignUp.addEventListener('click', e => {

        //Checking email
        if(!email.checkValidity()){
            window.alert("Preencha o campo Email corretamente");
        //Checking password
        } else if(!pass.checkValidity()) {
            window.alert("Preencha o campo Senha corretamente");
        } else if(pass.value.length < 6) {
            window.alert("Sua senha deve conter pelo menos 6 caracteres");
        //Checking name
        } else if(!fullName.checkValidity()) {
            window.alert("Preencha o campo Nome Completo corretamente");
        //Checking adress
        } else if(!adress.checkValidity()) {
            window.alert("Preencha o campo Endereço corretamente");
        //Checking phone number
        } else if(!phone.checkValidity()) {
            window.alert("Preencha o campo Telefone corretamente");
        } else if (phone.value.length < 11){
            window.alert("Digite o DD e o número do telefone");
        //Checking age
        } else if(!ageDay.checkValidity()) {
            window.alert("Preencha o campo Dia de Nascimento corretamente");
        } else if(!ageMonth.checkValidity()) {
            window.alert("Preencha o campo Mês de Nascimento corretamente");
        } else if(!ageYear.checkValidity()) {
            window.alert("Preencha o campo Ano de Nascimento corretamente");
        //Checking name emergency
        } else if(!fullNameEm.checkValidity()) {
            window.alert("Preencha o campo Nome Emergência corretamente");
        //Checking phone emergency
        } else if(!phoneEm.checkValidity()) {
            window.alert("Preencha o campo Telefone Emergência corretamente");
        } else if(phoneEm.value.length < 11) {
            window.alert("Digite o DD e o número do telefone de emergência");
        } else {
            //Cheking for smoke
            if( select1.value === "choose"){
                window.alert("Selecione se você é fumante");
                flag = false;
            } else if (select1.value === "Sim") {
                if(select1Hide.value === "choose"){
                    window.alert("Selecione quantos maços por dia você fuma");
                    flag = false;
                } else {
                    flag = true;
                }
            } else {
                flag = true;
            }

            if(flag === true) {
                flag2 = true;
                //Checking for high PA
                if( paSelect.value === "choose"){
                    window.alert("Selecione uma opção válida em relação a sua PA");
                    flag2 = false;
                } else {
                    flag2 = true;
                }
            }

            if(flag2 === true) {
                flag3 = true;
                //Checking for diabetic
                if( diaSelect.value === "choose"){
                    window.alert("Selecione se existem diabéticos em sua família");
                    flag3= false;
                } else {
                    flag3 = true;
                }
            }

            if(flag3 === true) {
                flag4 = true;
                //Checking for cardiac issue
                if( select2.value === "choose"){
                    window.alert("Selecione se você possui algum problema cardíaco");
                    flag4 = false;
                } else if(select2.value === "Sim") {
                    if(!familyIssue.checkValidity()){
                        window.alert("Preencha qual problema cardíaco você possui");
                        flag4 = false;
                    } else {
                        flag4 = true;
                    }
                } else {
                    flag4 = true;
                }
            }

            if(flag4 === true) {
                flag5 = true;
                //Checking for height issue
                if( select3.value === "choose"){
                    window.alert("Selecione se está com sobrepeso");
                    flag5 = false;
                } else if(select3.value === "Sim") {
                    if(!heightIssue.checkValidity()){
                        window.alert("Preencha o seu peso");
                        flag5 = false;
                    } else {
                        flag5 = true;
                    }
                } else {
                    flag5 = true;
                }
            }

            if(flag5 === true) {
                flag6 = true;
                //Checking for hurt issue
                if( select4.value === "choose"){
                    window.alert("Selecione se você tem alguma lesão");
                    flag6 = false;
                } else if(select2.value === "Sim") {
                    if(!hurtIssue.checkValidity()){
                        window.alert("Preencha qual lesão");
                        flag6 = false;
                    } else {
                        flag6 = true;
                    }
                } else {
                    flag6 = true;
                }
            }

            if(flag6 === true) {
                flag7 = true;
                //Checking for medicine issue
                if( select5.value === "choose"){
                    window.alert("Selecione se você utiliza algum medicamento");
                    flag7 = false;
                } else if(select5.value === "Sim") {
                    if(!medicineIssue.checkValidity()){
                        window.alert("Preencha qual medicamento");
                        flag7 = false;
                    } else {
                        flag7 = true;
                    }
                } else {
                    flag7 = true;
                }
            }

            if(flag7 === true) {
                flag8 = true;
                //Checking for medicine issue
                if( select5.value === "choose"){
                    window.alert("Selecione se você utiliza algum medicamento");
                    flag8 = false;
                } else if(select5.value === "Sim") {
                    if(!medicineIssue.checkValidity()){
                        window.alert("Preencha qual medicamento");
                        flag8 = false;
                    } else {
                        flag8 = true;
                    }
                } else {
                    flag8 = true;
                }
            }

            if(flag8 === true) {
                flag9 = true;
                //Checking for activity issue
                if( select6.value === "choose"){
                    window.alert("Selecione se você pratica alguma atividade física");
                    flag9 = false;
                } else if(select6.value === "Sim") {
                    if(!activityIssue.checkValidity()){
                        window.alert("Preencha qual atividade física");
                        flag9 = false;
                    } else {
                        flag9 = true;
                    }
                } else {
                    flag9 = true;
                }
            }
            if(flag9 === true) {
                flag10 = true;
                //Checking for colesterol
                if( colSelect.value === "choose"){
                    window.alert("Selecione se você esteve com colesterol alto");
                    flag10 = false;
                } else {
                    flag10 = true;
                }
            }

            if(flag10 === true) {
                firebase.auth().signInWithEmailAndPassword(email.value, pass.value).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    if(errorCode === "auth/wrong-password"){
                        window.alert('Esse email já está cadastrado, utilize outro por favor!');
                    } else if(errorCode === "auth/user-not-found") {
                        firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // ...
                        })
                        .then(function(value) {
                            let newUser = firebase.auth().currentUser;

                            if(select1.value === "Não") {
                                select1Hide.value = "-";
                            }
                            if(select2.value === "Não") {
                                familyIssue.value = "-";
                            }
                            if(select3.value === "Não") {
                                heightIssue.value === "-";
                            }
                            if(select4.value === "Não") {
                                hurtIssue.value = "-";
                            }
                            if(select5.value === "Não") {
                                medicineIssue.value = "-";
                            }
                            if(select6.value === "Não") {
                                activityIssue.value = "-";
                            }

                            if(newUser) {
                                dbRef.child(newUser.uid).push().set({
                                    NomeCompleto: fullName.value,
                                    Email: email.value,
                                    Password: pass.value,
                                    Endereço: adress.value,
                                    Telefone: phone.value,
                                    NomePEmergencia: fullNameEm.value,
                                    TelefonePEmergencia: phoneEm.value,
                                    DataNascimento: ageDay.value + "/" + ageMonth.value + "/" + ageYear.value,
                                    Fumante: select1.value,
                                    QuanditadeCigarro: select1Hide.value,
                                    altaPA: paSelect.value,
                                    diabetesFamilia: diaSelect.value,
                                    coraçãoFamilia: select2.value,
                                    coraçãoProblema: familyIssue.value,
                                    sobrepeso: select3.value,
                                    sobrepesoKg: heightIssue.value,
                                    lesões: select4.value,
                                    lesõesExistentes: hurtIssue.value,
                                    tomaMedicamento: select5.value,
                                    medicamentos: medicineIssue.value,
                                    praticaAtividade: select6.value,
                                    atividadesPraticadas: activityIssue.value,
                                    colesterolAlto: colSelect.value    
                                });
                            }
                            window.alert("Registro efetuado com sucesso!");
                            firebase.auth().signOut();
                            window.location = "index.html";
                        });
                    }
                });
            }
        }
        
    });
