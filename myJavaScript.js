window.onload=myMain;

function SchimbaTema()
{
    var x=parseInt(localStorage.getItem("ok"));
                
    if(x==1)
     {
        document.getElementsByClassName('chenar')[0].style.backgroundColor="rgb(255, 214, 153, 0.7)";
        document.getElementById('nav_bar').style.backgroundColor="orange";
        document.getElementById('reflink').style.backgroundColor="orange";
        document.getElementById('reflink').style.color="black";

        var da=document.getElementsByClassName('dada');
        for(i=0;i<da.length;i++) 
        {
            da[i].style.backgroundColor="orange";
            da[i].style.color="black";

        }
        var c=document.getElementsByClassName('container');
        for(i=0;i<c.length;i++) 
        {
            c[i].style.backgroundColor="rgb(255, 185, 78,0.5)";
            c[i].style.border="rgb(255, 185, 78)";
        }

        var drop=document.getElementsByClassName("dropdown-content");
        for(i=0;i<drop.length;i++) 
        {
            drop[i].style.backgroundColor="orange";
        }
        
        var drop1=document.getElementsByClassName("dr");
        for(i=0;i<drop1.length;i++) 
        {
            drop1[i].style.backgroundColor="orange";
            drop1[i].style.color="black";
        }    
    }
    else
    
    if(x==0)
    {
        document.getElementsByClassName('chenar')[0].style.backgroundColor="rgba(255, 255, 255,0.6)";
        document.getElementById('nav_bar').style.backgroundColor="black";
        document.getElementById('reflink').style.backgroundColor="black";
        document.getElementById('reflink').style.color="white";

        var da=document.getElementsByClassName('dada');
        for(i=0;i<da.length;i++) 
        {
            da[i].style.backgroundColor="black";
            da[i].style.color="white";

        }

        var c=document.getElementsByClassName('container');
        for(i=0;i<c.length;i++) 
        {
            c[i].style.backgroundColor="#eee";
            c[i].style.border="#ccc";
        }
            
        var drop=document.getElementsByClassName("dropdown-content");
        for(i=0;i<drop.length;i++) 
        {
            drop[i].style.backgroundColor="black";
        }
        
        var drop1=document.getElementsByClassName("dr");
        for(i=0;i<drop1.length;i++) 
        {
            drop1[i].style.backgroundColor="black";
            drop1[i].style.color="white";
        }    
    
    }
   
}
function getComments(){
    fetch("http://localhost:3000/blog")
    .then((data) => { return data.json() })
    .then((json) => displayComments(json))
}

function displayComments(data){
    let responseArea = document.getElementById('responseArea');
    for (let i = 0; i<data.length; i++){
        let authorName = document.createElement('P');
        authorName.innerText = data[i]["author"];
        let commentContent = document.createElement('P');
        commentContent.innerText = data[i]["comment"];
        let someRespone = document.createElement('DIV');
        someRespone.appendChild(authorName);
        someRespone.appendChild(document.createElement('BR'));
        someRespone.appendChild(commentContent);
        someRespone.style.border = "1px solid black";
        responseArea.appendChild(someRespone);
    }
    
}

function sendInformation(){
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    fetch("http://localhost:3000/blog", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({name: name, comment: comment})
    }).then((data) => {
        return data.json()
    }).then((json)=>{
        if(json.Status === 'OK'){
            document.getElementById('responseArea').innerText='Information receieved';
        } else {
            document.getElementById('responseArea').innerText='Information was not received';
        }
        //console.log(json);
    })
}


function myMain()
{
    var myVar = setInterval(myTimer, 1000);
    var x=parseInt(localStorage.getItem("ok"));
    
    if(x==NaN)
        localStorage.setItem("ok","0");

    SchimbaTema();

    if(x==1)
        localStorage.setItem("ok","1");
     else
         localStorage.setItem("ok","0");
    
    fct();
    var a=document.getElementsByTagName("table")[0];
    if(a)
    a.onclick=modif_atribut_html;
    var b=document.getElementById("buton_send");
    if(b)
    b.onclick=afis_nume;
    getComments();
    
}

function ButonTema()
{
    var x=parseInt(localStorage.getItem("ok"));
   
    if(x==1)
        localStorage.setItem("ok","0");
    else
        localStorage.setItem("ok","1");
    
        SchimbaTema();
}
function fct()
{
    let test = document.querySelector("#titluu");
   
    if(test)
    {
    test.addEventListener("mouseover", function( event ) {   
      event.target.style.color = "orangered";
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
}
}

function modif_atribut_html()
{
    var list=document.getElementsByTagName("td");
    
    for(i=0;i<list.length;i++)
        list[i].setAttribute("class", "atribut_nou"); 
}

function afis_nume()
{
        var txt = document.getElementById("name").value; 
        alert("Multumim, "+txt+", că ai vizitat acest site!");
        
}

function myTimer() 
  {
    var d = new Date();
    var x=document.getElementById("ceas");
    if(x)
    x.innerHTML = d.toLocaleTimeString();
  }

  
  function submitData()
  {
      let name = document.getElementById("name").value;
      let comment = document.getElementById("comment").value;
      
      if(name!=undefined && comment!=undefined)
      {
        fetch("http://localhost:3000/blog", {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({name: name, comment: comment})
        }).then((data) => {
            return data.json()
        }).then((json)=>{
            if(json.Status === "OK"){
            console.log(json);
            let div = document.getElementById("responseArea");

            }
            else
            {
                console.log("nu merge");
            }
        })
      }
      else
      {
            let div = document.getElementById("responseArea");
            
      }
  }
  function getComments(){
    fetch("http://localhost:3000/blog")
    .then((data) => { return data.json() })
    .then((json) => displayComments(json))
}

function displayComments(data){
    let responseArea = document.getElementById('responseArea');
    if(responseArea)
    {
    for (let i = 0; i<data.length; i++){
        let authorName = document.createElement('P');
        authorName.innerText = data[i]["name"];
        let commentContent = document.createElement('P');
        commentContent.innerText = data[i]["comment"];
        let someResponse = document.createElement('DIV')
        someResponse.classList.add("container");
        let varr=document.createElement('IMG');
        varr.setAttribute("src", "no_photo.png");
        someResponse.appendChild(varr);
        someResponse.appendChild(authorName)
        someResponse.appendChild(document.createElement('BR'))
        someResponse.appendChild(commentContent);
        if(someResponse)
        responseArea.appendChild(someResponse);
    }
}
    
}
