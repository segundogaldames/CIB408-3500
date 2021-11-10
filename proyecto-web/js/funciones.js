function validaForm()
{
    let form = document.form;

    if(form.email.value==""){
        alert('Ingrese un correo electronico');
        form.email.value="";
        form.email.focus();
        return false;
    }

    if(!validaEmail(form.email.value)){
        alert('Ingrese un correo electronico valido');
        form.email.value="";
        form.email.focus();
        return false;
    }

    if(form.asunto.value==""){
        alert('Seleccione un asunto');
        form.asunto.value="";
        form.asunto.focus();
        return false;
    }

    if(form.comentario.value==""){
        alert('Ingrese un comentario');
        form.comentario.value="";
        form.comentario.focus();
        return false;
    }

    form.submit();
}

function validaEmail($email) {
    //let form = document.form;

    let emailRegex = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    //alert(form.email.value)
    if (emailRegex.exec(form.email.value)) {
        return true
    }
}