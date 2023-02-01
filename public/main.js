"use strict";
/* Animation for inputs */
const inputs = document.querySelectorAll(".form__input");
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener("keyup", () => {
        var _a, _b;
        if (input.value.length >= 1) {
            (_a = input.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add("fijar");
        }
        else {
            (_b = input.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.remove("fijar");
        }
    });
}
/* BOT */
const input_chat = document.getElementById("input_chat");
const button_chat = document.getElementById("button_chat");
const chat_text = document.getElementById("chat_text");
function bot_msg(msg_text) {
    const div2 = document.createElement("div");
    div2.classList.add("bot_chat");
    div2.textContent = msg_text;
    chat_text === null || chat_text === void 0 ? void 0 : chat_text.appendChild(div2);
}
function bot(msg) {
    let msg_text = msg.toLowerCase().trim();
    if (msg_text.includes("ola")) {
        return "Hola! En que puedo ayudarte?";
    }
    else if (msg_text.includes("chau") || msg_text.includes("adios") || msg_text.includes("chao")) {
        return "Adios, espero que volvamos hablar :D";
    }
    else if (msg_text.includes("quien eres") || msg_text.includes("que sos") || msg_text.includes("quien sos")) {
        return "Yo soy el bot-2 creado por RodrigoLV";
    }
    else if (msg_text.includes("donde estoy") || msg_text.includes("que es esto")) {
        return "Esta es la pagina de prueba hecho por RodrigoLV, su objetivo era diseñar una pagina web con TS y Sass principalmente";
    }
    else if (msg_text.includes("como estas") || msg_text.includes("todo bien")) {
        return "Estoy bien y tu?";
    }
    else if (msg_text.includes("cual es objetivo") || msg_text.includes("cual tu mision")) {
        return "Yo estoy aca para ayudarte por si tienes alguna pregunta sobre esta pagina web aunque cuento con respuestas muy limitadas :(";
    }
    else if (msg_text.includes("tecnologias fueron usadas") || msg_text.includes("lenguajes fueron usados")) {
        return "Esta pagina web se hizo con html, css, js. Ademas se uso scss, ts y git";
    }
    else if (msg_text.includes("conocimientos tenia rodrigo") || msg_text.includes("lenguajes sabia rodrigo")) {
        return "RodrigoLV en el momento que hizo esta pagina web tenia conocimientos en html, css, pug, sass, js, ts, react, git, github, nodeJS, express, mongoDB, ESLint y Prettier";
    }
    else {
        return "No estoy capacitado para responderle esa pregunta";
    }
}
button_chat === null || button_chat === void 0 ? void 0 : button_chat.addEventListener("click", (e) => {
    if (input_chat.value !== "") {
        const message = input_chat.value;
        const div = document.createElement("div");
        div.classList.add("me_chat");
        div.textContent = message;
        chat_text === null || chat_text === void 0 ? void 0 : chat_text.appendChild(div);
        input_chat.value = "";
        setTimeout(bot_msg, 1000, bot(message));
    }
});
const bot_delete = document.getElementById("bot__delete");
const chat = document.getElementById("chat");
const bot_icon = document.getElementById("bot-icon");
bot_delete === null || bot_delete === void 0 ? void 0 : bot_delete.addEventListener("click", () => {
    chat.classList.remove("chat__delete");
});
bot_icon === null || bot_icon === void 0 ? void 0 : bot_icon.addEventListener("click", () => {
    chat.classList.add("chat__delete");
});
/* Menu Responsive */
const logo_menu = document.getElementById("logo-menu");
const menu = document.getElementById("menu");
logo_menu === null || logo_menu === void 0 ? void 0 : logo_menu.addEventListener("click", () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle("menu__responsive");
});
/* Form completed */
const button = document.getElementById("button");
const form_validate = document.getElementById("form-validate");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault();
    form_validate === null || form_validate === void 0 ? void 0 : form_validate.classList.add("form-activated");
    setTimeout(() => { form_validate === null || form_validate === void 0 ? void 0 : form_validate.classList.remove("form-activated"); }, 2500);
});
