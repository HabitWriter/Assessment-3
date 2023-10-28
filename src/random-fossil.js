import axios from "axios";

document.querySelector('#get-random-fossil').addEventListener('click',(e) => {

axios.get('/random-fossil.json')
    .then(res => {
        const {img, name} = res.data
        document.querySelector('#random-fossil-image').innerHTML = `<img src=${img}></img>`
        document.querySelector('#random-fossil-name').innerHTML = `<p>${name}</p>`

    })
    

})