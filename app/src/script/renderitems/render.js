import pizzaInfo from "../pizzaInfo/pizzainfo.js"

const renderItem = (array)=>{
    const mainTabsContent = document.querySelector('.main__tabs-content')
    mainTabsContent.innerHTML =''
    
    array.forEach(({img , title, price, sizeBig,sizeMedium ,sizeMini,typeThin,typeTraditional,addBtn})=>{
        const tabsItem = document.createElement('div')
        
        tabsItem.classList.add('main__tabs-items')
        
        
        tabsItem.innerHTML = `
            <div class="main__tabs-item">
                <img class="main__tabs-img" src= "${img}">
                <h4 class="main__tabs-title">${title}</h4>
                <div class ="main__tabs-info">
                    <a href = ""class = 'main__tabs-btn'>${typeThin}</a>
                    <a href = ""class = 'main__tabs-btn'>${typeTraditional}</a>
                    <a href = ""class = 'main__tabs-size'>${sizeMini}</a>
                    <a href = ""class = 'main__tabs-size'>${sizeMedium}</a>
                    <a href = ""class = 'main__tabs-size'>${sizeBig}</a>
                </div>
                <div class="main__tabs-add">
                    <span class= "main__tabs-price">от ${price} ₽</span>
                    <a href = ""class = 'main__tabs-addCart'>${addBtn}</a>
                </div>
            </div>
        `
        mainTabsContent.appendChild(tabsItem)
        pizzaInfo()
    })
}
export default renderItem
    