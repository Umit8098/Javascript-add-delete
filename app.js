console.log('**** app.js *******');

//! ***** Elementleri değişkenlere atayalım; ***** */
const dilInput = document.querySelector('.diller');
const silBtn = document.getElementById('sil');
const ekleBtn = document.getElementById('ekle');

const dilSection = document.querySelector('#dil-section');

const ul = document.createElement('ul'); //* ul oluştur,
dilSection.appendChild(ul); //* oluşturullan ul'i dilSection'ın child'ı yaparak bağla.



//!  SELECTORS -> Elementlere Erişim; .closest() en yakın parrent'ı arar;

//***** Elementlerin konumlarına erişme; ***** */

console.log(dilSection.children[0]); //* elem. cahildlarına ulaşma;
console.log(dilSection.parentNode.parentNode); //* elem. parentlarına ulaşma;


//***** Elementlerin konumlarına .closest() ile erişme; ***** */

// const h1 = ul.closest('.container').firstChild; //* ul elementine en yakın element'in text'ini (class'ı container olan) bulmayı sağlıyor.
const h1 = ul.closest('.container').firstElementChild; //* ul elementine en yakın element'in (class'ı container olan) , ilk element'ini bulmayı sağlıyor.
console.log(h1);
h1.style.color = 'red'; //* ul'den ulaşıp yakaladığımız h1'e color vermek;


//***** element -> parrent -> childElement konumlarına .closest() ile erişme; ***** */
//***** container class ı içerisindeki btn class'ına ait olan elementleri bul; ***** */

const buttons = ul.closest('.container').querySelectorAll('.btn');
console.log(buttons); //* ul'den yola çıkarak, kuzen bulma;

//************************************************* */

//! ***** ul'ye li'leri ekleme; ***** */

//! boş girişte uyarsın, girilen dili li ile yazdırsın, kutuyu boşaltsın, javascript gelirse kırmızı yazsın;
ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert('Lütfen bir dil giriniz');
  } else {
    ul.innerHTML += ` <li>${dilInput.value}</li>`;
    dilInput.value = '';
    javascriptKontrol();
  }
};

//! javascript gelirse kırmızı renk olsun;
const javascriptKontrol = () => {
  document.querySelectorAll('ul li').forEach((dil) => {
    const kucukHarf = dil.textContent.toLowerCase();
    if (kucukHarf === 'javascript') {
      // dil.className = 'red';  //* class ataması yapmak;
      //?Alternatif yöntem
      dil.setAttribute('class', 'red'); //* class ataması yapmak;
    }
  });
};

//! ul'nin içindeki child elem. li'leri kontrol et, eğer 0'dan büyükse => ul'nin en son child elem. sil, silinecek elem. kalmayınca uyarı versin ;
silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert('Silinecek dil kalmadi');
};

//! klavyeden enter (13) tuşuna basıldığında ekleBtn.onclick() fonksiyonunu çağır;
dilInput.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.keyCode === 13) {   //* win klavye
  // if (e.code === 'Enter') {
    ekleBtn.onclick();
  }

  if (e.keyCode == 46 ) {    //* macbook klavye
  // if (e.code == 'Delete') {
  // if (e.keyCode == 8) {
  // if (e.code === 'Backspace') { //* macbook klavye
    silBtn.onclick();
  }
});


//! sayfamız açılır açılmaz input'a focus olsun;
window.onload = () => {  //* window yüklendiğinde input'a focus fonk.;
  javascriptKontrol();   //* bu fonks. çalıştır;
  dilInput.focus();  //* input'a focuslan;
};