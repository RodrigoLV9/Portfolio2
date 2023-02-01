/* Animation for inputs */
const inputs=document.querySelectorAll(".form__input");
for(let i=0;i<inputs.length; i++){
    let input=inputs[i] as HTMLInputElement
    input.addEventListener("keyup",()=>{
        if(input.value.length>=1){
            input.nextElementSibling?.classList.add("fijar")
        }else{
            input.nextElementSibling?.classList.remove("fijar")
        }
    })
}
/* BOT */
const input_chat=document.getElementById("input_chat") as HTMLInputElement;
const button_chat=document.getElementById("button_chat");
const chat_text=document.getElementById("chat_text");

function bot_msg(msg_text:any){
    const div2=document.createElement("div");
    div2.classList.add("bot_chat");
    div2.textContent=msg_text;
    chat_text?.appendChild(div2)
    
}
function bot(msg:string){
    let msg_text:string=msg.toLowerCase().trim()
    if(msg_text.includes("ola")){
        return "Hola! En que puedo ayudarte?"
    }
    else if(msg_text.includes("chau") || msg_text.includes("adios") || msg_text.includes("chao")){
        return "Adios, espero que volvamos hablar :D"
    }
    else if(msg_text.includes("quien eres") || msg_text.includes("que sos") || msg_text.includes("quien sos")){
        return "Yo soy el bot-2 creado por RodrigoLV"
    }
    else if(msg_text.includes("donde estoy") || msg_text.includes("que es esto")){
        return "Esta es la pagina de prueba hecho por RodrigoLV, su objetivo era diseñar una pagina web con TS y Sass principalmente"
    }
    else if(msg_text.includes("como estas") || msg_text.includes("todo bien")){
        return "Estoy bien y tu?"
    }
    else if(msg_text.includes("cual es objetivo") || msg_text.includes("cual tu mision")){
        return "Yo estoy aca para ayudarte por si tienes alguna pregunta sobre esta pagina web aunque cuento con respuestas muy limitadas :("
    }
    else if(msg_text.includes("tecnologias fueron usadas") || msg_text.includes("lenguajes fueron usados")){
        return "Esta pagina web se hizo con html, css, js. Ademas se uso scss, ts y git"
    }
    else if(msg_text.includes("conocimientos tenia rodrigo") || msg_text.includes("lenguajes sabia rodrigo")){
        return "RodrigoLV en el momento que hizo esta pagina web tenia conocimientos en html, css, pug, sass, js, ts, react, git, github, nodeJS, express, mongoDB, ESLint y Prettier"
    }
    else{
        return "No estoy capacitado para responderle esa pregunta"
    }
}
button_chat?.addEventListener("click",(e)=>{
    if(input_chat.value!==""){
        const message:string=input_chat.value;
        const div:Element=document.createElement("div");
        div.classList.add("me_chat");
        div.textContent=message;
        chat_text?.appendChild(div);
        input_chat.value="";
        setTimeout(bot_msg,1000,bot(message))
    }
})

const bot_delete=document.getElementById("bot__delete");
const chat=document.getElementById("chat") as HTMLDivElement;
const bot_icon=document.getElementById("bot-icon");
bot_delete?.addEventListener("click",()=>{
    chat.classList.remove("chat__delete")
})
bot_icon?.addEventListener("click",()=>{
    chat.classList.add("chat__delete")
})
/* Menu Responsive */
const logo_menu=document.getElementById("logo-menu");
const menu=document.getElementById("menu");
logo_menu?.addEventListener("click",()=>{
    menu?.classList.toggle("menu__responsive")
})
/* Form completed */
const button=document.getElementById("button");
const form_validate=document.getElementById("form-validate");
button?.addEventListener("click",(e)=>{
    e.preventDefault()
    form_validate?.classList.add("form-activated")
    setTimeout(()=>{form_validate?.classList.remove("form-activated")},2500)
})
