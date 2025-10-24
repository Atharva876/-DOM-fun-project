let result = document.querySelector('h1');
let btn = document.querySelector('button');


let arr = [
    {
        party_name : "JDU",
        party_color: "linear-gradient(45deg,green 50%,white 50%)",
        party_symbol:"black"
    },
    {
        party_name:"BJP",
        party_color:"linear-gradient(45deg,orange 50% , green 50%)",
        party_symbol:"black"

    },
    { 
        party_name:"AAP",
        party_color:"lightblue",
        party_symbol:"white"

    },
    {
        party_name:"Communist party",
        party_color:"Red",
        party_symbol:"white"

    },
    {
        party_name:"INC ",
        party_color:"linear-gradient(to bottom,orange , white ,green )",
        party_symbol:"black"

    },
    {
        party_name:"RJD",
        party_color:"Green",
        party_symbol:"white"

    }
]


btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    result.innerHTML = winner.party_name;
    result.style.background=winner.party_color;
    result.style.color=winner.party_symbol;
    console.log("all is well");
    
    
})