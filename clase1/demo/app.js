/* variables */
let nombre = "brian";

const apellido = "gomez";

nombre = "axcel";

/* tipos de datos */
let edad = 43;

let frutas = ["frutilla", "pera", "manzana"];

let usuario = {
    mail: "bg@gmail.com",
    seguidores: 45,
    login: function(email, contrasennia) {
        return "Logueado con el mail: " + email;
    }
};

console.log(usuario.login("bg@gmail.com", "*********"));
