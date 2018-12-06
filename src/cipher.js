window.cipher = {
  encode: (textoEncriptar, botonDesplazamiento) => {
    let texto="";
    for (let i=0; i< textoEncriptar.length;i++){
      let textoDos=textoEncriptar.charCodeAt(i);
        if (textoDos >=65 && textoDos<=90){
        let code=(textoDos-65+botonDesplazamiento)%26+65;
        texto+=String.fromCharCode(code);
      }
          }
    return texto; },
  decode: (textoEncriptar, botonDesplazamiento) => {
    let texto="";
    for (let i=0; i< textoEncriptar.length;i++){
      let textoDos=textoEncriptar.charCodeAt(i);
        if (textoDos >=65 && textoDos<=90){
        let code=(textoDos-65-botonDesplazamiento)%26+65;
        if (code<65){
          code+=26;
        }
        texto+=String.fromCharCode(code);
      }
          }
    return texto;
  }};
