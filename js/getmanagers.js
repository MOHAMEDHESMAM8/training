const  div = document.querySelector('.in2-part1 .content')
const  div2 = document.querySelector('.in2-part2 .content')

fetch('js/jsons/managers.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            div2.insertAdjacentHTML('beforeend' ,`<div><img src="${post.img}"> <h5>${post.name}</h5> <h7>${post.position}</h7><p> ${post.content}</p> </div>`);
        });  
    });

fetch('js/jsons/managers1.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            div.insertAdjacentHTML('beforeend' ,`<div><img src="${post.img}"> <h5>${post.name}</h5> <h7>${post.position}</h7><p> ${post.content}</p> </div>`);
        });  
    });