import renderItem from "../renderitems/render.js"

const sort = ()=>{
    let sort = document.querySelector('.main__content-sort')
    let popup = document.querySelector('.main__content-sortPopup')
    let img = document.querySelector('.main__content-arrow')
    
    let info = document.querySelector('.main__content-sortInfo')
    let link = document.querySelectorAll('.main__content-li')
    
    link.forEach(item =>{
        item.addEventListener('click' , (e)=>{
            e.stopPropagation()
            info.innerHTML = item.textContent
            
           link.forEach(item =>{
               item.classList.remove('active')
           })
           item.classList.add('active')  
           if(item.innerHTML == 'популярности'){
            sortPopular(item.innerHTML)
        }else if( item.innerHTML == 'цене'){
            sortPrice()
        }else if (item.innerHTML == 'алфавиту'){
            sortAlfa()
        }
        })
        
       
    })
    
    sort.addEventListener('click' , ()=>{      
        if (popup.classList.contains('active')){
            popup.classList.remove('active')
            img.style = `
            transform:rotate(0)`
        }
        else{
            popup.classList.add('active')
            img.style = `
            transform:rotate(180deg)`
        }
        
    })
    
    const sortPopular = async (popular) => {
        await fetch('https://pizza-a4c70-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data =>{
            const arr = popular ? data.filter(item => item.popular === popular):data;
            renderItem(arr)
        })
    }
    
    const sortPrice = async ()=>{
        await fetch('https://pizza-a4c70-default-rtdb.firebaseio.com/db.json')
            .then(res => res.json())
            .then(data =>{
                const sort = data.sort((element1 , element2) => +element1.price - (+element2.price))
                renderItem(sort)
            })
    }
    const sortAlfa = async ()=>{
        await fetch('https://pizza-a4c70-default-rtdb.firebaseio.com/db.json')
            .then(res => res.json())
            .then(data =>{
                const sort = data.sort((element1 , element2)=>{
                    if(element1.title >element2.title) return 1
                    if(element1.title <element2.title) return -1
                     return 0
                })
                renderItem(sort)
            })
        }
        sortAlfa()
   
}


export default sort
