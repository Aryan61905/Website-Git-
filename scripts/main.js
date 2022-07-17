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
    createCode("all", "List All commands")
    createCode("about","Get to know me");
    createCode("fun","A List of Fun Facts");
    createCode("honors","My honours and Achievements");
    createCode("courses","The list of Courses I have taken");
    createCode("skills","Skills I have mastered over the years");
    createCode("clr","To Clear the terminal");

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
        createCode("all", "List All commands")
        createCode("about","Get to know me");
        createCode("fun","A List of Fun Facts");
        createCode("honors","My honours and Achievements");
        createCode("courses","The list of Courses I have taken");
        createCode("skills","Skills I have mastered over the years");
        createCode("clr","To Clear the terminal");
    }
    else if(value === "about"){
        trueValue(value);
        createText("Name: Aryan Roy")
        createText("School: Pennsylvania State University")
        createText("Major: Computer Science")
        createText("Minor: Mathematics, Engineering Leadership and Development")
        createText("Expected Graduation Date: 2024 Spring")
        createText("Areas of Interest:  Software Engineering, Machine Learning, Web/App Developement, Product Designing")
    }
    else if(value === "fun"){
        trueValue(value);
        createText("I made this whole website using HTML, CSS and Javascript. You should be able to hover over elements to see cool animations")
        createText("I am a huge fan of Fomrula 1 and love the technology they have incorporated into the sport.")
        createText("I love playing Basketball, Table-Tennis and Soccer in my free time.")
        createText("I have a Youtube Channel and I love Graphic Designing and Filmmaking")
    }
    else if(value === "honors"){
        trueValue(value);
        createText("Airport Cooperative Research Program: Most Innovative Solution")
        createText("Bro. Bergin Memorial Debate: Winners")
        createText("St. George's College Mussoorie: Editorial Board")
        createText("Eberly College of Science Learning Assistant Excellence Scholarship")
        createText("Leonhard Centre for the Enhancement of Engineering Education and Scholarship")

    }
    else if(value === "contact"){
        trueValue(value);
        createText("Click to call <a href='callto8148762059' target='_blank'>8148762059</a>")
        createText("email:abr5813@psu.edu")
        
    }
    else if(value === "courses"){
        trueValue(value);
        createText("CMPSC 131: Introduction to Computer Sciences")
        createText("CMPSC 132: Data Structures and Algorithms")
        createText("CMPSC 221: Object Oriented Programming")
        createText("CMPSC 360: Discrete Mathematics")
        createText("LDT 100: Learning Design and Technology")
        createText("IST 110: Information, People and Technology")
        createText("ENGR 408: Introduction to Engineering Leadership and Development")
        createText("GD 110: Introduction to Graphic Designing")
    }
    else if(value === "skills"){
        trueValue(value);
        createText("Programming Languages: C, Java, Python")
        createText("Web Designing: HTML, CSS, JavaScript")
        createText("Adobe Suits: Photoshop, Lightroom, After Effects, Indesign")
        createText("Graphic Designing: Figma, Unity, Spline")
    }
    else if(value === "clr"){
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("t_section").forEach(e => e.parentNode.removeChild(e));
        createCode("all", "List All commands")
    }
    else{
        falseValue(value);
        createText(`Command not Found: ${value}`)
    }

}
function trueValue(value){
    const div = document.createElement("t_section");
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
    const div = document.createElement("t_section");
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

























