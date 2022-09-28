window.addEventListener('load',()=>{

    fetch('https://www.universal-tutorial.com/api/getaccesstoken')
        .then((response)=>{
            return response.json()})
        .then((json=>{
            console.log(json)
        }) )

   ;




    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const ciudad = document.getElementById('ciudad');
    const calle = document.getElementById('calle');
    const numero = document.getElementById('numero');
    const boton = document.getElementById('boton');


    ciudad.addEventListener('blur',()=>{

        

        ciudad.style.backgroundColor = "white";
        ciudad.style.color ='blue'
        
    })
    





}



)

