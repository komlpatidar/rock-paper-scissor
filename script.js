let win = document.querySelector("#win")
let lose = document.querySelector("#lose")
let draw = document.querySelector("#draw")


// console.log(win)
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor= document.querySelector("#scissor");



function handleclick (userInput ,e){
    console.log(e)

    if(userInput === "R"){
   rock.classList.add("clicked")
   

    }
    else if (userInput === "P"){
   paper.classList.add("clicked")

    }
    else if (userInput === "S"){
   scissor.classList.add("clicked")

    }

    setTimeout(() => {
      rock.classList.remove("clicked")
      paper.classList.remove("clicked")
      scissor.classList.remove("clicked")
    }, 500);
    const arr = ["R","P","S"];
    const computerInput = arr[Math.floor(Math.random()*3)];
   //   console.log(userInput,computerInput);



     if (userInput === computerInput){
        console.log("draw")
        draw.innerText++

     } 
     else if( userInput === "R" && computerInput === "S"){
        console.log("win") 
        win.innerText++
     } 
      else if( userInput === "P" && computerInput === "R"){
        console.log("win")
        win.innerText++
     }
      else if( userInput === "S" && computerInput === "P"){
        console.log("win")
        win.innerText++
     }
      else if( userInput === "S" && computerInput === "R"){
        console.log("lose")
        lose.innerText++
     }
      else if( userInput === "R" && computerInput === "P"){
        console.log("lose")
        lose.innerText++
     }
      else if( userInput === "P" && computerInput === "S"){
        console.log("lose")
        lose.innerText++
     } 


   }

   
   



rock.addEventListener("click", (e) =>handleclick("R",e));
paper.addEventListener("click", (e) =>handleclick("P"));
scissor.addEventListener("click", (e) =>handleclick("S"));



