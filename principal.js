
// window.onload = function(){
    function validarSenha(senha){
        senha = document.getElementById('senha').value;
        if (senha != "sim") {
            document.write(<p>Wrong code, try it again.</p>);
        alert("Wrong code, try it again."); 
        // var Turno = "<p>Wrong code, try it again.</p>";
        // document.getElementById("resultado").innerHTML = Turno;
        }else{
            console.log("isso");
        document.FormSenha.submit();
        }
    }

    
