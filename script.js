const kurir = document.querySelectorAll('.kurir')[0];
const ime = document.querySelectorAll('.ime')[0];
const prezime = document.querySelectorAll('.prezime')[0];
const telefon = document.querySelectorAll('#phone-input')[0];
const email = document.querySelectorAll('#email-input')[0];
const adresa = document.querySelectorAll('#address-input')[0];
const postanskiBroj = document.querySelectorAll('#postal-number')[0];
const mjesto = document.querySelectorAll('#place')[0];
const napomena = document.querySelectorAll('#napomene')[0];
const dugme = document.querySelectorAll('.dugme')[0];
const greskaIme = document.querySelector('.ime-greska');
const greskaTelefon = document.querySelectorAll('.telefon-greska')[0];
const greskaEmail = document.getElementsByClassName('email-greska').item(0);
let username = '';
let surename = '';
let phone = '';
let eAdresa = '';

const numberCheckIme = function(){
    const karakteriImena = ime.value.split('');
    greskaIme.innerHTML = '';
    const html = `
    <li>*Nepravilno uneseno ime. Pokusajte ponovo.</li>
    `;

        for(k of karakteriImena){
            if(!isNaN(k)){
                greskaIme.insertAdjacentHTML('afterbegin',html);
                ime.value = '';
                break;
            }else{
                username = ime.value;
            }
        }
};

const numberCheckPrezime = function(){
    const karakteriImena = prezime.value.split('');
    greskaIme.innerHTML = '';
    const html = `
    <li>*Nepravilno uneseno prezime. Pokusajte ponovo.</li>
    `;

        for(k of karakteriImena){
            if(!isNaN(k)){
                greskaIme.insertAdjacentHTML('afterbegin',html);
                prezime.value = '';
                break;
            }else{
                surename = prezime.value;
            }
        }
};

const telephoneValidation = function(){
    greskaTelefon.innerHTML = '';
    const html =  `
    <li>*Nepravilno unesen broj. Pokusajte format ### ### ###.</li>
    `;

    if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/.test(telefon.value))
    {
        phone = telefon.value;
        greskaTelefon.innerHTML = '';
    }else{
        greskaTelefon.innerHTML = '';
        greskaTelefon.insertAdjacentHTML('afterbegin', html);

    }
    
}

const emailValidation = function(){
    greskaEmail.innerHTML = '';
    const html = `
    <li>*Nepravilno unesen email. Pokusajte ponovo.</li>
    `;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        eAdresa = email.value;
        greskaEmail.innerHTML = '';
    }else {
        greskaEmail.insertAdjacentHTML('afterbegin', html);
        greskaEmail.innerHTML = '';
    }
};

const addressValidation = function(){
    if(mjesto.length != 0 && adresa.length != 0 && postanskiBroj.length != 0){
        let place = mjesto.value;
        let address = adresa.value;
        let postNumber = postanskiBroj.value;
        return {place, address, postNumber};
    }
}

const consoleLog = function(e){
    e.preventDefault();

    let {place, address, postNumber} = addressValidation();
    
    let proposals = napomena.value;

    console.log(`   Ime i Prezime: ${username} ${surename},
    Email: ${eAdresa},
    Broj telefona: ${phone}
    Adresa: ul. ${address}, ${place} ${postNumber},
    Napomena: ${proposals}`);
}
   

// Validacija imena i prezimena
ime.addEventListener('keyup',numberCheckIme);
prezime.addEventListener('keyup',numberCheckPrezime);
// Validacija unosa telefonskog broja
telefon.addEventListener('keyup',telephoneValidation);
// Validacija email adrese
email.addEventListener('keyup',emailValidation);
// Ispis u konzolu
dugme.addEventListener('click', consoleLog);