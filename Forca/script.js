const palavras = {
    facil: {
      "Frutas": ["kiwi", "figo", "uva", "açaí"],
      "Plantas": ["cacto", "rosa", "limo", "lúpulo"],
      "Planetas": ["lua", "sol", "terra", "marte"],
      "Conhecimento Geral": ["sol", "ferro", "água", "fogo"]
    },
    medio: {
      "Frutas": ["banana", "tomate", "melão", "ameixa"],
      "Plantas": ["palmeira", "lavanda", "alecrim", "hibisco"],
      "Planetas": ["jupiter", "saturno", "urano", "venus"],
      "Conhecimento Geral": ["escola", "caneta", "limpeza", "guerra"]
    },
    dificil: {
      "Frutas": ["framboesa", "carambola", "pitangueira", "physalis"],
      "Plantas": ["samambaia", "manjericão", "jacarandá", "eucalipto"],
      "Planetas": ["proxima b", "andromeda", "alfacentauri", "exoplaneta"],
      "Conhecimento Geral": ["microscópio", "fotossíntese", "eletricidade", "neurociência"]
    }
  };
  
  let palavraSelecionada = "";
  let temaSelecionado = "";
  let letrasCorretas = [];
  let letrasErradas = [];
  
  function escolherPalavra(nivel) {
    const temas = Object.keys(palavras[nivel]);
    const tema = temas[Math.floor(Math.random() * temas.length)];
    const lista = palavras[nivel][tema];
    const palavra = lista[Math.floor(Math.random() * lista.length)];
  
    return { palavra: palavra.toLowerCase(), tema };
  }
  
  function iniciarJogo() {
    const nivel = document.getElementById("level").value;
    const { palavra, tema } = escolherPalavra(nivel);
  
    palavraSelecionada = palavra;
    temaSelecionado = tema;
    letrasCorretas = [];
    letrasErradas = [];
  
    document.getElementById("tema").textContent = tema;
    document.getElementById("palavra").textContent = mostrarPalavra();
    document.getElementById("erradas").textContent = "";
    document.getElementById("mensagem").textContent = "";
    document.getElementById("game").classList.remove("hidden");
  }
  
  function mostrarPalavra() {
    return palavraSelecionada
      .split("")
      .map(letra => (letrasCorretas.includes(letra) ? letra : "_"))
      .join(" ");
  }
  
  function tentarLetra() {
    const input = document.getElementById("letra");
    const letra = input.value.toLowerCase();
  
    if (!letra || letra.length !== 1 || !/[a-zçáéíóúãõâêô]/.test(letra)) {
      alert("Digite uma letra válida.");
      return;
    }
  
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
      alert("Você já tentou essa letra.");
      return;
    }
  
    if (palavraSelecionada.includes(letra)) {
      letrasCorretas.push(letra);
    } else {
      letrasErradas.push(letra);
    }
  
    atualizarJogo();
    input.value = "";
  }
  
  function atualizarJogo() {
    document.getElementById("palavra").textContent = mostrarPalavra();
    document.getElementById("erradas").textContent = letrasErradas.join(", ");
  
    if (mostrarPalavra().split(" ").join("") === palavraSelecionada) {
      document.getElementById("mensagem").textContent = "Parabéns! Você venceu!";
    } else if (letrasErradas.length >= 6) {
      document.getElementById("mensagem").textContent = `Você perdeu! A palavra era: ${palavraSelecionada}`;
    }
  }
  