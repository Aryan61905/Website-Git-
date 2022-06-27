const app =
document.querySelector("#app");
const delay = ms => new Promise(res=>setTimeout(res, ms));

app.addEventListener("keypress", async function(event){
    if(event.key === "Enter"){
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
    }
});
app.addEventListener("click",function(event)
{
    const input =
    document.querySelector("input");
    input.focus();
})

async function open_terminal(){
    
    createText("Welcome to Terminal");
    await delay(500);
    createText("Starting Server....");
    await delay(800);
    createText("Connection Succesful at port:8080 => Enter Command");
    createCode("help","For help");
    createCode("about","To get details About Me");
    createCode("All", "To see all Commands");
    createCode("clr","To clear the terminal");

    await delay(500);
    new_line();

}

function new_line(){

    const p = document.createElement("p");
    const span1=
    document.createElement("span");
    const span2=
    document.createElement("spam");
    p.setAttribute("class","path")
    p.textContent="#user";
    span1.textContent = "sudo";
    span2.textContent = "~/guest";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class","type")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function removeInput()
{
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue()
{
    const value = document.querySelector("input").value;
    
    if(value === "all"){
        trueValue(value);
        createCode("help","For help");
        createCode("about","To get details about me");
        createCode("contact","To Contact me");
        createCode("call","To Call me");
        createCode("website","To redirect to my webpage");
        createCode("clr","To Clear the terminal");
    }
    else if(value === "about"){
        trueValue(value);
        createText("Name: Aryan Roy")
        createText("Major: Computer Science")
        createText("Minor: Mathematics, Engineering Leadership and Development")
        createText("Expected Graduation Date: 2024 Spring")
        createText("Areas of Interest: Web/App Developement, Software Development, Product Designing")
    }
    else if(value === "help"){
        trueValue(value);
        createText("Click to see all commands")
    }
    else if(value === "call"){
        trueValue(value);
        createText("Click to call <a href='callto8148762059' target='_blank'>8148762059</a>")
    }
    else if(value === "contact"){
        trueValue(value);
        createText("email:abr5813@psu.edu")
    }
    else if(value === "website"){
        trueValue(value);
        createText("website")
    }
    else if(value === "clr"){
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    }
    else{
        falseValue(value);
        createText(`Command not Found: ${value}`)
    }

}
function trueValue(value){
    const div = document.createElement("section");
    div.setAttribute("class","type2")
    const i = document.createElement("i")
    i.setAttribute("class","fas fa-angle-right icone")
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class","sucess")
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function falseValue(value){
    const div = document.createElement("section");
    div.setAttribute("class","type2")
    const i = document.createElement("i");
    i.setAttribute("class","fas fa-angle-right icone error")
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class","error")
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div); 
}

function createText(text,classname){
    const p = document.createElement("p");

    p.innerHTML = 
    text
    ;
    app.appendChild(p);

}
function createCode(code,text){
    const p = document.createElement("p");
    p.setAttribute("class","code");
    p.innerHTML = 
    `${code}<br/> <br/><span class = 'text'> ${text}</span>`;
    app.appendChild(p);
}

open_terminal();

























