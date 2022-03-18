const pizzaInfo = ()=>{
    const mainTabsBtn = document.querySelectorAll('.main__tabs-btn'),
    mainTabsSize = document.querySelectorAll('.main__tabs-size')
    
    function removeActive(array) {
        array.forEach(link => {
            link.classList.remove('active')
        });
    }
    function addActive(btn) {
        btn.classList.add('active')
    }
    
    mainTabsBtn.forEach(item =>{
        item.addEventListener('click' , (e)=>{
            e.preventDefault()
            removeActive(mainTabsBtn)
            addActive(item)
        })
    })
    mainTabsSize.forEach(item =>{
        item.addEventListener('click' , (e)=>{
            e.preventDefault()
            removeActive(mainTabsSize)
            addActive(item)
        })
    })
    
}

export default pizzaInfo