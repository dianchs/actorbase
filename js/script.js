const name = document.querySelector('.name')
const image = document.querySelector('.image')
const day = document.querySelector('.day')
const height = document.querySelector('.height')
const dorams = document.querySelector('.dorams')
const submit = document.querySelector('.submit')
const container = document.querySelector('.card-result')

const database = [
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    },
    {
        name: 'Li Min Ho',
        image: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRN7Rb9STDeui_bEf7iAwGuQ',
        day: '22.06.1987',
        height: '187',
        dorams: 'Наследники, Цветочки после ягодок, Легенда синего моря, Король вечный монарх...'
    }
]

window.addEventListener('load' , () =>{
    if(!localStorage.getItem('heroes')){
        localStorage.setItem('heroes' , JSON.stringify(database))
    }else{
        const base = JSON.parse(localStorage.getItem('heroes'))

        const newBaseWithID = base.map((item , index) =>{
            return{...item, id:index}
        })

        localStorage.setItem('heroes', JSON.stringify([...newBaseWithID]))

        const newBase = JSON.parse(localStorage.getItem('heroes'))
        console.log(newBase);

        RenderCard(newBase)

        const temp = newBase.reduce((total , {name, image, id}) =>{
            return total + CardTemplate(name , image, id)
        }, '')

        container.innerHTML = temp
    }
})


function RenderCard(base){
    const Card = base.map(({name, image, id}) =>{
        return `
        <div class="card-person">
        <div class="card-center">
            <img src="${image}">

            <div class="tools">
                <i>${name}</i>
                <div>
                    <i class="fa fa-user-edit" data-id="${id}" onclick="Edit(${id})"></i>
                    <i class="fa fa-trash" data-id="${id}" onclick="Delete(${id})"></i>
                    <i class="fa fa-caret-square-down" data-id=${id} onclick='More(${id})'></i>
                </div>
            </div>
        </div>
    </div>
        `
    }).join('')

    container.innerHTML = Card
}

submit.addEventListener('click' , e =>{
    e.preventDefault
    if(name.value !== '' && image.value !== ''){

        localStorage.setItem('heroes' , JSON.stringify(
            [
                    ...database,
                {
                    name:name.value,
                    image:image.value,
                    day:day.value,
                    height:height.value,
                    dorams:dorams.value
                }
            ]
        ))
    }

    name.value = ''
    image.value = ''
    day.value = ''
    height.value = ''
    dorams.value = ''
    window.location.reload()
})



function CardTemplate(name , image , id){
    return `
    <div class="card-person">
        <div class="card-center">
            <img src="${image}">

            <div class="tools">
                <i>${name}</i>
                <div>
                    <i class="fa fa-user-edit" data-id="${id}" onclick="Edit(${id})"></i>
                    <i class="fa fa-trash" data-id="${id}" onclick="Delete(${id})"></i>
                    <i class="fa fa-caret-square-down" data-id=${id} onclick='More(${id})'></i>
                </div>
            </div>
        </div>
    </div>
    `
}

const searchName = document.querySelector('.searchName')
const searchDorams = document.querySelector('.searchDorams')

searchName.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase()

    const filtered = databse.filter(({name}) => name.toUpperCase().includes(value))

    RenderCard(filtered)
})

searchDorams.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase()

    const filtered = database.filter(({dorams}) => sphere.toUpperCase().includes(value))

    RenderCard(filtered)
})

function More(id){
    const base = JSON.parse(localStorage.getItem('workers'))
    localStorage.setItem('singleUser' , JSON.stringify([database[id]]))
    window.open('single.html', '_self')
}

function Delete(id){
    const data = JSON.parse(localStorage.getItem('heroes'))
    const deletedUser = data.filter(item => item.id !== id)
    localStorage.setItem('heroes' , JSON.stringify(deletedUser))
    window.location.reload()
}


function Edit(id){
    const data = JSON.parse(localStorage.getItem('heroes'))
    const filtered = data.map(item => {
        if(item.id === id){
            return {
                ...item,
                name:prompt('New name?')
            }
        }
    })

    localStorage.setItem('heroes', JSON.stringify(filtered))
    window.location.reload()
}