const scroll = document.querySelector('.up'); 
    let counter = 0 
    
    window.addEventListener('scroll', () => { 
        if (window.pageYOffset < 200) { 
            scroll.style.display = "none" 
            counter++ 
        } if (window.pageYOffset > 500 && counter > 0) { 
            scroll.style.display = "block" 
        } }) 
        scroll.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: "smooth" }) }) 


const panelBtn = document.querySelectorAll('.panel__link')
const panelList = document.querySelector('.panel__list')


panelBtn.forEach(el =>{
    el.addEventListener('click', (i) =>{
        i.preventDefault();
        panelList.classList.toggle('open')
    })
})
