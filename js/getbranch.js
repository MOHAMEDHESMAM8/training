const  div = document.querySelector('.branches .alex')
const  div2 = document.querySelector('.branches .maddi')
const  div3 = document.querySelector('.branches .newcairo')
const  div4 = document.querySelector('.branches .naser')
const  div5 = document.querySelector('.branches .october')
const  div6 = document.querySelector('.branches .fesal  ')
const  div7 = document.querySelector('.branches .eng')
const  div8 = document.querySelector('.branches .helwan')








function getPerson(com){
    str = ""
    com.forEach(post => {
        str += '<span>' + post +' </span>'
    });
    return str
}

function getCommitt (com){
    str  = " "
    com.forEach(post => {
        str += `
                <div class="com-comtainer">
                    <div class="name" onclick="toggleCommitee()">  ${post.name} </div>
                    <div class="persons" dir="rtl">
                       ${getPerson(post.persons)}
                    </div>
                </div>
             ` 
    });
    return str
}


function getalex(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/alex.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}


function getnewcairo(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/newcairo.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}

function getmaddi(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/maddi.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}
function getnaser(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/naser.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}
function getoctober(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/october.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}
function getfesal(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/fasel.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}

function geteng(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/eng.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}



function gethelwan(){
    const  content = document.querySelector('.branch-data ')
    fetch('js/jsons/helwan.json')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(post => {
            if(post.submanager!=""){

                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.sphoto}">
                         <h5> نائب مدير الفرع </h5> 
                         <h7>${post.submanager} </h7>
                    </div>
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
                </div>`
            }else{
                content.innerHTML =`  <div class="branch-data">
                <div class="managers" >
                    <div>
                        <img src="${post.mphoto}">
                         <h5>   مدير الفرع </h5> 
                         <h7>${post.manager} </h7>
                    </div>
                </div>
                <div class="committees">
                    ${getCommitt(post.committees)}
                </div>
            </div>`
            }

        });  
    });
}


div.addEventListener("click", getalex)
div2.addEventListener("click", getmaddi)
div3.addEventListener("click", getnewcairo)
div4.addEventListener("click", getnaser)
div5.addEventListener("click", getoctober)
div6.addEventListener("click", getfesal)
div7.addEventListener("click", geteng)
div8.addEventListener("click", gethelwan)
















