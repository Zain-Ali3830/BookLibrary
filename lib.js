
let array = [];
let obj;


let localData = localStorage.getItem("MainData");
if (localData) {
    let ParseData = JSON.parse(localData);
    displayBooks(ParseData);
} else {
fetch('https://678774a0c4a42c916106c8b8.mockapi.io/mybookapi/Book2')
.then(response => response.json())
     .then(data => {
     data.forEach(item => {
    obj = {
      id:item.book_id,
      title:item.title,
      author:item.author,
      ratings:item.ratings,
      created_at:item.created_at,
     }
        array.push(obj);
     })
            localStorage.setItem('MainData', JSON.stringify(array));
            displayBooks(array);
        })
}
function displayBooks(ParseData) {
    ParseData.forEach(par => {
    let container = document.getElementById('container');
    let res = document.createElement('div');
    res.style.border = "1px solid";
    res.style.padding = "10px";
    res.style.margin = "10px";
    res.style.borderRadius = "10px";
    res.style.marginTop = "10px";
    res.innerHTML = `<h1><b>Book ID:</b> ${par.id}</h1><h1><b>Title:</b> ${par.title}</h1>
    <h1><b>Author:</b> ${par.author}</h1>`;

        let btn = document.createElement('button');
        btn.innerHTML = `<h1><b>Ratings:</b> ${par.ratings.toFixed(1)}</h1>`;
        btn.style.border = "1px solid";
        btn.style.borderRadius = "7px";
        btn.style.width = "125px";
        res.append(btn);

        container.append(res);
        btn.addEventListener('click', () => {
            par.ratings += 0.1; 
            par.created_at = new Date().toDateString(); 
            btn.innerHTML = `<b>Ratings:</b> ${par.ratings.toFixed(1)}`;
            btn.style.border = "1px solid";
            btn.style.borderRadius = "7px";
            btn.style.width = "125px";
            let updatedData = JSON.parse(localStorage.getItem('MainData'));
            updatedData.forEach(item => {
                if (item.id === par.id) {
                    item.ratings = par.ratings;
                    item.created_at = par.created_at;
                }
            })
            localStorage.setItem('MainData', JSON.stringify(updatedData));
        })
    })


    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input");
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }
}


                    // Latest 
 latest = () => {
    container.innerHTML = "";
    let date = new Date().toDateString();
    let updatedData = JSON.parse(localStorage.getItem('MainData'));
    let newArray = updatedData.filter(item => item.created_at === date);

    newArray.forEach(item => {
        let res = document.createElement("div");
        res.style.border = "1px solid";
        res.style.padding = "10px";
        res.style.margin = "10px";
        res.style.borderRadius = "10px";
        res.style.marginTop = "10px";
        res.innerHTML = `<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
        <h1><b>Author:</b>${item.author}</h1>`;

        let btn = document.createElement('button');

        btn.innerHTML = `<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`;
        btn.style.border = "1px solid";
        btn.style.borderRadius = "7px";
        btn.style.width = "125px";
        res.append(btn);

        container.append(res);
    });

    console.log("Books rated today:", newArray);

    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input");
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }
 };


// Popular Last Month :
popularLastMonth=()=>{
    let container=document.getElementById('container');
    container.innerHTML="";
    let data=localStorage.getItem('MainData')
    let data1=JSON.parse(data)
    let data2=data1.slice(30,36);
    console.log(data1)
    data2.forEach(item=>{
        let div=document.createElement('div');
        div.style.border="1px solid"
        div.style.padding="10px"
        div.style.margin="10px"
        div.style.borderRadius="10px"
        div.style.marginTop="10px"
        div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
         <h1><b>Author:</b>${item.author}</h1>`
         let btn=document.createElement('button');
         btn.innerHTML = `<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
         btn.style.border="1px solid";
         btn.style.borderRadius="7px";
          btn.style.width="125px"
         div.append(btn);

         container.append(div)
    })



    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input");
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }




}




//Popular Last 6 Months


popularLast6Months=()=>{
    let container=document.getElementById('container');
    container.innerHTML="";
    let data=localStorage.getItem('MainData')
    let data1=JSON.parse(data)
    let data2=data1.slice(25,36);
    console.log(data1)
    data2.forEach(item=>{
        let div=document.createElement('div');
        div.style.border="1px solid"
        div.style.padding="10px"
        div.style.margin="10px"
        div.style.borderRadius="10px"
        div.style.marginTop="10px"
        div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
         <h1><b>Author:</b>${item.author}</h1>`
         let btn=document.createElement('button');
         btn.innerHTML = `<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
         btn.style.border="1px solid";
         btn.style.borderRadius="7px";
          btn.style.width="125px"
         div.append(btn);

         container.append(div)
    })



    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input");
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }
    



}



// Highest Rated Last Month;

highestRatedLastMonth=()=>{
    let container=document.getElementById('container');
    container.innerHTML="";
    let data=localStorage.getItem('MainData')
    let data1=JSON.parse(data)
    let data2=data1.slice(20,26);
    console.log(data1)
    data2.forEach(item=>{
        let div=document.createElement('div');
        div.style.border="1px solid"
        div.style.padding="10px"
        div.style.margin="10px"
        div.style.borderRadius="10px"
        div.style.marginTop="10px"
        div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
         <h1><b>Author:</b>${item.author}</h1>`
         let btn=document.createElement('button');
         btn.innerHTML = `<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
         btn.style.border="1px solid";
         btn.style.borderRadius="7px";
          btn.style.width="125px"
         div.append(btn);

         container.append(div)
    })



    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input");
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }




}



// Highest Rated Last 6 Months;

highestRatedLast6Months=()=>{
    let container=document.getElementById('container');
    container.innerHTML="";
    let data=localStorage.getItem('MainData')
    let data1=JSON.parse(data)
    let data2=data1.slice(20,31 );
    console.log(data1)
    data2.forEach(item=>{
        let div=document.createElement('div');
        div.style.border="1px solid"
        div.style.padding="10px"
        div.style.margin="10px"
        div.style.borderRadius="10px"
        div.style.marginTop="10px"
        div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
         <h1><b>Author:</b>${item.author}</h1>`
         let btn=document.createElement('button');
         btn.innerHTML = `<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
         btn.style.border="1px solid";
         btn.style.borderRadius="7px";
          btn.style.width="125px"
         div.append(btn);

         container.append(div)
    })




    
    search=()=>{
        let local=localStorage.getItem('MainData');
        let data1=JSON.parse(local);
        console.log("data1:", data1);
        let container=document.getElementById("container");
        console.log("Searching...")
        let div=document.createElement("div");
        let input=document.getElementById("search");
        if(input.innerHTML==""){
            alert("Please enter a valid input")
            return
        }
        data1.forEach(item=>{
            if(item.title.toLowerCase()===input.value.toLowerCase()){
                container.innerHTML="";
                div.style.border = "1px solid";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.borderRadius = "10px";
                div.style.marginTop = "10px";
                div.innerHTML=`<h1><b>Book ID:</b>${item.id}</h1><h1><b>Title:</b>${item.title}</h1>
                <h1><b>Author:</b>${item.author}</h1>`
                let btn=document.createElement('button');
                btn.innerHTML=`<h1><b>Ratings:</b> ${item.ratings.toFixed(1)}</h1>`
                btn.style.border="1px solid"    
                btn.style.borderRadius="7px"
                btn.style.width="125px"
                div.append(btn);

                container.append(div);
            }
        })

    }
}




let clear=document.getElementById("clear");
clear.addEventListener("click",()=>{
    let input=document.getElementById("search");
    console.log("Clearing...")              
    input.value=""
})