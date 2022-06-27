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
    data.forEach(item => {
        console.log(item);
    });
    //render карточек и вообще любых данных на основании БД
}
getDb()