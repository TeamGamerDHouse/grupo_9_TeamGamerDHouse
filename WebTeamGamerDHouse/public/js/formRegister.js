const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

 
const expresiones = {
    
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,12}$/, // 4 a 12 digitos.
    pais:   /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    calle: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero: /^\d{1,14}$/,//  a 7 numeros.

    }
const campos ={
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    pais: false,
    ciudad: false,
    numero:false
}


const validarFormulario =(e)=>{


    switch(e.target.name){
    
        case "nombre":{
            validarCampo(expresiones.nombre, e.target, 'nombre')
            
        }
    
        break;
        case "apellido":{
            validarCampo(expresiones.apellido, e.target, 'apellido')
            
        }
    
        break;
        case "email":{
            validarCampo(expresiones.email, e.target, 'email')

            
        }
    
        break;
        case "password":{
            validarCampo(expresiones.password, e.target, 'password')
            
        }
    
        break;
    
        case "pais":{
            validarCampo(expresiones.pais, e.target, 'pais')
            
        }
    
        break;
        case "ciudad":{
            validarCampo(expresiones.ciudad, e.target, 'ciudad')
            
        }
    
        break;
        case "calle":{
            validarCampo(expresiones.calle, e.target, 'calle')
            
        }
    
        break;
        case "numero":{
            validarCampo(expresiones.numero, e.target, 'numero')
            
        }
    
        break;
    
    
    }
}
    
    


const validarCampo =(expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-incorrecto');//indica error
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-correcto'); //agrega clase de correcto
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle'); // agreega icono de correcto
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');// remueve icono de error
        campos[campo] = true;

    }else{
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-incorrecto'); //indica error
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-correcto');//saca clase de correcto
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');// agrega icono de error
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');// remueve el icono de correcto
        campos[campo] = false

        
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario)
    

})

formulario.addEventListener('submit',(e)=>{
    

    if (campos.nombre && campos.apellido && campos.email && campos.password && campos.pais && campos.ciudad && campos.calle && campos.numero) {

        

        document.querySelectorAll('.formulario__grupo-correcto').forEach((i)=>{
            i.classList.remove('formulario__grupo-correcto');
        })
        
    }else{
        e.preventDefault();
        console.log("error")
    }

        
})






