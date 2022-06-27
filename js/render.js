async function getDb() {
    const db = await fetch('./js/fakeApi/db.json')
            .then(res=>res.json())
            .then(data => render(data))
            .catch(err=> renderError(err))
}

const renderError = (err) => {
    console.log(err);
    //здесь нужно открывать блок со страницей 404
}

const render = (data) => {
    let cards = document.querySelector('.cards')
    data.forEach(data => {
        cards.innerHTML += `
            <a href="show.html" target="_blank" class="card">
                     
                <img src="img/girl.png" alt="girl">
                <h4 class="title text__card">${data.name}</h4>
                <p class="text__card">${data.phone}</p>
                <p class="text__card">${data.district}</p>
                <p class="text__card">${data.pricemin} - ${data.pricemax} рублей</p>
            
            
            </a>
            `
    });
    //render карточек и вообще любых данных на основании БД
}
getDb()