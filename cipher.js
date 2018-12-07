window.cipher = {
  encode: (textoEncriptar, botonDesplazamiento) => {
      let text = "";
      for (let i = 0; i < textoEncriptar.length; i++) {
          let secText = textoEncriptar.charCodeAt(i);
          if (secText >= 65 && secText <= 90) {
              let code = (secText - 65 + botonDesplazamiento) % 26 + 65;
              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secText);
          }
      }
      return text;
  },

  decode: (textoEncriptar, botonDesplazamiento) => {
      let text = "";
      for (let i = 0; i < textoEncriptar.length; i++) {
          let secText = textoEncriptar.charCodeAt(i);
          if (secText >= 65 && secText <= 90) {
              let code = (secText - 65 - botonDesplazamiento) % 26 + 65;
              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secText);
          }
      }
      return text;
  }
};