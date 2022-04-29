
        function sumar(){
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var suma = Number(num1) + Number(num2);
           
            document.getElementById("resultado").value = suma;
            document.getElementById("resultado").style.backgroundColor="green"
            document.getElementById("resultado").style.color="white"
        }


        function pareceunascensor(sumaresta){
            var valor = document.getElementById("contador").innerHTML   
            valor = Number(valor) + Number(sumaresta)
            document.getElementById("contador").innerHTML = valor
        }

        
        function subir(){
            var valor = document.getElementById("contador").innerHTML   
            valor++
            document.getElementById("contador").innerHTML = valor
        }
        function bajar(){
            var valor = document.getElementById("contador").innerHTML   
            valor--
            document.getElementById("contador").innerHTML = valor
        }
   
        function cambiarNombre(){
            console.log('Entro en cambiar nombre')
            document.getElementById("texto1").innerHTML = "hola pepe"
            console.log('salgo de cambiar nombre')
        }

        function abrirVentana(){
            for(var i = 0; i < 9; i++){
                window.open("https://www.google.es", "Diseño Web", "width=300, height=200");
                window.open("https://www.google.es", "Diseño Web", "width=300, height=200");
            
            }
        }
           
        