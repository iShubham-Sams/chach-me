

document.getElementById('box').onmouseenter=function (event){
    let add =[+350,+50,+150,+200,+250,+300,80,150,+100,+400]
    let soj =[+350,+50,+150,+200,+250,+300,+700,600,+100,+400]
    let rod =add[(Math.floor(Math.random()*10))]
    let moto=soj[(Math.floor(Math.random()*10))]

    let bor =document.getElementById('box');
    bor.style.marginLeft=moto+'px'
    bor.style.marginTop=rod+'px'

console.log(rod);
}
