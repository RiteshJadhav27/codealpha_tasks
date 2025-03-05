function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch {
        document.getElementById("result").value = "Error";
    }
}
