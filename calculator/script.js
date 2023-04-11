/selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach (key=>{
    key.addEventListener("click", calculate);
});

function calculate() {
    let buttonText = this.innerText;
    if (buttonText === "AC") {
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;    
    }

    if (buttonText === "DEL") {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if (buttonText === "=") {
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }

    else {
        output.textContent += buttonText;
        return;
    }
}*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background: linear-gradient(to right, #f19066, #f3a683);
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculator {
    width: 25%;
    border-radius: 10px;
    overflow: hidden;
    text-align: right;
    box-shadow: 7px 7px 7px rgba(0,0,0,0.5);
}

.display {
    width: 100%;
    height: 20vh;
    background: black;
    color: white;
}

.input {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

button {
    border: none;
    background-color: white;
    padding: 1.6rem;
    font-size: 22px;
    transition: all 0.3s ease-in-out;
}

button:hover {
    font-weight: bold;
}

.output {
    font-size: 28px;
    padding: 20px;
}

.result {
    font-size: 18px;
    padding: 20px;
}

@keyframes big {
    0% {
        font-size: 18px;
    }
    100% {
        font-size: 30px;
    }
}

@keyframes small {
    0% {
        font-size: 28px;
    }
    100% {
        font-size: 18px;
    }