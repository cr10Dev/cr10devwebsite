document.addEventListener("DOMContentLoaded", convert, false);

const convert = () => {
    const texts = document.getElementsByClassName("sindarinText");
    for (let i = 0; i < texts.length; i++) {
        text = texts[i].textContent;
        //parse
        texts[i].innerHTML = text;
    }

}