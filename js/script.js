function validLogin() {
    const validUsername = 'juan@gmail.com';
    const validPassword = '123456';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso");
        window.location.href = "register.html";
    } else {
        alert("Usuario o contraseña incorrecto")
    }
}

function validateForm() {
    // Obtener los valores de los campos
    const name = document.getElementById('name_').value;
    const lastname = document.getElementById('lastname_').value;
    const phone = document.getElementById('phone_').value;
    const cc = document.getElementById('cc').value;

    // Validar que todos los campos estén llenos
    if (!name || !lastname || !phone || !cc) {
        alert("Por favor, completa todos los campos.");
        return false; // Detener el envío del formulario
    }else{
        window.location.href = "ok.html";
    }

    // Si todos los campos están completos
    alert("Formulario enviado correctamente.");
}