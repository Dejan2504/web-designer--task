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

const numberCheckIme = function(){
    const karakteriImena = ime.value.split('');
    greskaIme.innerHTML = '';
    const html = `
    <li>*Nepravilno uneseno ime. Pokusajte ponovo.</li>
    `;
    
    console.log(karakteriImena);
        for(k of karakteriImena){
            if(!isNaN(k)){
                greskaIme.insertAdjacentHTML('afterbegin',html);
                ime.value = '';
                break;
            }
        }
};

const numberCheckPrezime = function(){
    const karakteriImena = prezime.value.split('');
    greskaIme.innerHTML = '';
    const html = `
    <li>*Nepravilno uneseno prezime. Pokusajte ponovo.</li>
    `;
    
    console.log(karakteriImena);
        for(k of karakteriImena){
            if(!isNaN(k)){
                greskaIme.insertAdjacentHTML('afterbegin',html);
                prezime.value = '';
                break;
            }
        }
};

const telephoneValidation = function(){
    // Telephone container
    telefon.oninvalid = function(e){
        e.target.setCustomValidity('Format treba da bude ### ### ###!');
    }
}

const emailValidation = function(){
    greskaEmail.innerHTML = '';
    const html = `
    <li>*Nepravilno unesen email. Pokusajte ponovo.</li>
    `;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        greskaEmail.value = '';
    }else {
        greskaEmail.insertAdjacentHTML('afterbegin', html);
    }
};
   
const validation = function(e){
    e.preventDefault();
    // Validacija imena i prezimena
    numberCheckIme();
    numberCheckPrezime();
    // Validacija unosa telefonskog broja
    telephoneValidation();
    // Validacija email adrese
    emailValidation();
    // Ispis u konzolu
}

// ime.addEventListener('keyup',numberCheckIme);
// prezime.addEventListener('keyup',numberCheckPrezime);
// telefon.addEventListener('keyup', telephoneValidation);

dugme.addEventListener('click', validation());