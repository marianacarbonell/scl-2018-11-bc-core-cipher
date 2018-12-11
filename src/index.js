window.onload = () => {


    document.getElementById("siguiente").addEventListener("click",() =>{
        document.getElementById("ocultar").style.display="none";
        document.getElementById("mostrar").style.display="block";
    }),

  document.getElementById("codificar").addEventListener("click", () => {
      let encryptText = (document.getElementById("textoencriptar").value).toUpperCase();
      let offset = document.getElementById("botondesplazamiento").value;
      offset = parseInt(offset);
      document.getElementById("resultado").innerHTML = (cipher.encode(encryptText, offset));
  })

  document.getElementById("decodificar").addEventListener("click", () => {
      let encryptText = (document.getElementById("textoencriptar").value).toUpperCase();
      let offset = document.getElementById("botondesplazamiento").value;
      offset = parseInt(offset);
      document.getElementById("resultado").innerHTML = cipher.decode(encryptText, offset);
  })

}