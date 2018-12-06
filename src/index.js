window.onload = () => {

document.getElementById("codificar").addEventListener("click", () => {
    let encryptText = (document.getElementById("textoEncriptar").value).toUpperCase();
    let offset = document.getElementById("botonDesplazamiento").value;
    offset=parseInt(offset);      
    document.getElementById("resultado").innerHTML=(cipher.encode(encryptText, offset));    })
    
    document.getElementById("decodificar").addEventListener("click", () => {
        let encryptText = (document.getElementById("textoEncriptar").value).toUpperCase();
      let offset = document.getElementById("botonDesplazamiento").value;
      offset=parseInt(offset);
      document.getElementById("resultado").innerHTML=cipher.decode(encryptText, offset);    })

    }   