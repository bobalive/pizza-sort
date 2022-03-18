import renderItem from "../renderitems/render.js"

const tabs = ()=>{
    let btn = document.querySelectorAll('.main__content-link')
    
    btn.forEach(button =>{
        
        button.addEventListener('click' ,(e)=>{
            e.preventDefault()
            
                removeActiveClass(btn)
                addActiveClass(button)
                
            const linkInfo = button.innerHTML     
            if(linkInfo == 'Все'){
                getData()
            }else{
                getData(linkInfo)
            }
        })
    })
    
    
    function removeActiveClass(arr) {
        arr.forEach(link =>{
            link.classList.remove('active')
        })
    }
    function addActiveClass(btn){
        btn.classList.add('active')
    }
    
    const getData = async (info)=>{
        await fetch('https://pizza-a4c70-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => {
            const array  = info ? data.filter(item => item.category === info):data;
            renderItem(array)
        })
    }
    
    getData()
}


export default tabs