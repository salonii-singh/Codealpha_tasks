const result = document.getElementById("result");
const history = document.getElementById("history");

const buttons = document.querySelectorAll(".buttons button");
const theme = document.getElementById("theme");

let expression = "";


theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = button.textContent.trim();

        
        if (button.classList.contains("delete")) {
            expression = expression.slice(0, -1);
            result.value = expression || "0";
            return;
        }

        
        if (value === "AC") {
            expression = "";
            result.value = "";
            history.textContent = "";
            return;
        }

        
        if (value === "=") {

            if (expression === "") return;

            try {

                history.textContent = expression;

                expression = eval(
                    expression.replace(/%/g, "/100")
                ).toString();

                result.value = expression;

            } catch {

                result.value = "Error";
                expression = "";

            }

            return;
        }

        expression += value;
        result.value = expression;

    });

});


document.addEventListener("keydown", (e) => {

    const key = e.key;

    if ("0123456789+-*/.%".includes(key)) {
        expression += key;
        result.value = expression;
    }

    if (key === "Backspace") {
        expression = expression.slice(0, -1);
        result.value = expression;
    }

    if (key === "Escape") {
        expression = "";
        result.value = "";
        history.textContent = "";
    }

    if (key === "Enter") {

        e.preventDefault();

        if (expression === "") return;

        try {

            history.textContent = expression;

            expression = eval(
                expression.replace(/%/g, "/100")
            ).toString();

            result.value = expression;

        } catch {

            result.value = "Error";
            expression = "";

        }

    }

});


window.addEventListener("load", () => {

    result.placeholder = "Ready...";

    setTimeout(() => {

        result.placeholder = "0";

    }, 1000);

});

console.log("%c🚀 Premium Calculator Loaded Successfully!",
"color:#00e676;font-size:18px;font-weight:bold;");
