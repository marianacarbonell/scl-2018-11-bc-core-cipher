window.cipher = {
  encode: (textoencriptar, botondesplazamiento) => {
      let text = "";
      for (let i = 0; i < textoencriptar.length; i++) {
          let secText = textoencriptar.charCodeAt(i);
          if (secText >= 65 && secText <= 90) {
              let code = (secText - 65 + botondesplazamiento) % 26 + 65;
              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secText);
          }
      }
      return text;
  },

  decode: (textoencriptar, botondesplazamiento) => {
      let text = "";
      for (let i = 0; i < textoencriptar.length; i++) {
          let secText = textoencriptar.charCodeAt(i);
          if (secText >= 65 && secText <= 90) {
              let code = (secText - 65 - botondesplazamiento) % 26 + 65;
              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secText);
          }
      }
      return text;
  }
};