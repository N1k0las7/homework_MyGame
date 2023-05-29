let but1 = document.getElementById(`but1`)
let but2 = document.getElementById(`but2`)
let but3 = document.getElementById(`but3`)
let out = document.getElementById(`out`)

but1.onclick = function(){
    human = `b`
    humturn(`Бабушка`)
}
but2.onclick = function(){
    human = `a`
    humturn(`Айтишник`)
}
but3.onclick = function(){
    human = `g`
    humturn(`Госуслуги`)
}

const variants = [`b`,`a`,`g`] 
const win = [`ba`,`ag`,`gb`]
const lose = [`bg`,`ab`,`ga`]
let human =``
let comp =``
let pobeda = ``

function humturn(turn){
    console.log(`вы выбрали`,turn)
    compturn()
}

function compturn(){
    let r = Math.floor(Math.random()*3)
    console.log(`Комп выбрал`, variants[r])
    comp = variants[r]
    result()
}

function result(){
    console.log(human,comp)
    let res = human+comp
    if(win.includes(res)){
        console.log(`Победа!!!`)
        pobeda = '<p><img src="images/pob.gif" alt="" height="150px" width="200px">' +'<p>'+  'Победа Товарищ!!!'+'</p>'
    }
    else if(lose.includes(res)){
        console.log(`Потрачено`)
        pobeda = '<p><img src="images/lose.gif" alt="" height="150px" width="200px">' +'<p>'+  'Сегодня не твой день,проигрыш'+'</p>'
    }
    else {
        console.log(`Расходимся`)
        pobeda = '<p><img src="images/nichia.gif" alt="" height="150px" width="200px">' +'<p>'+  'Расходимся,ничья'+'</p>'
    }
    out.innerHTML = 
    '<ul>'+
    '<li>'+
        'Ход человека - '+ human +
    '</li>'+
    '<li>'+
        'Ход компа - ' + comp +
    '</li>'+
    '<li>'+
        pobeda +
    '</li>'+
    '</ul>'
}