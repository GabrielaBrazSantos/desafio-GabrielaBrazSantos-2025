class AbrigoAnimais {
  
  animais = [];
  lista = [];
  erro = [];
  
  constructor() {
    this.animais = [
      { nome: 'Rex', tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
      { nome: 'Mimi', tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      { nome: 'Fofo', tipo: 'gato', brinquedos: ['BOLA', 'RATO','LASER'] },
      { nome: 'Zero', tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
      { nome: 'Bola', tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
      { nome: 'Bebe', tipo: 'cão', brinquedos: ['LASER', 'RATO','BOLA'] },
      { nome: 'Loco', tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] },
    ];
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    const animaisInformados = ordemAnimais.split(',');    

    for(let i = 0; i < animaisInformados.length; i++){
      const animalEncontrado = this.encontraAnimalPorNome(animaisInformados[i]);
      if (!animalEncontrado) {
        this.erro.push('Animal inválido');
      } else {
        this.validaBrinquedos(animalEncontrado, brinquedosPessoa1.split(','), brinquedosPessoa2.split(','));
      }
    }

    if(this.erro.length > 0){
        console.log('erro = ', this.erro);
    } else {  
      this.lista.sort(); // ordena alfabeticamente
      console.log('lista = ', this.lista);
    }

  }

  encontraAnimalPorNome(nome) {
    return this.animais.find(animal => animal.nome === nome);
  }

  validaBrinquedos(animalEncontrado, brinquedosPessoa1, brinquedosPessoa2) {
    
     const pessoa1 = this.comparaBrinquedoComPessoa(animalEncontrado, brinquedosPessoa1);
     const pessoa2 = this.comparaBrinquedoComPessoa(animalEncontrado, brinquedosPessoa2);
      
     if (pessoa1 && pessoa2) {
        this.lista.push(`${animalEncontrado.nome} - abrigo`);
      } else if (pessoa1) {
        this.lista.push(`${animalEncontrado.nome} - pessoa 1`);
      } else if (pessoa2) {
        this.lista.push(`${animalEncontrado.nome} - pessoa 2`);
      } else {
        this.lista.push(`${animalEncontrado.nome} - abrigo`);
      }
  }


  comparaBrinquedoComPessoa(animalEncontrado, brinquedosPessoa) {
    const brinquedosAnimal = animalEncontrado.brinquedos;
    let iguais = false;
    if(brinquedosAnimal.length === brinquedosPessoa.length ){      
      
      if(animalEncontrado.nome === 'Loco'){
        //Validar se Brinquedos existem
        for(let i = 0; i < brinquedosAnimal.length; i++){          
          if(brinquedosPessoa.includes(brinquedosAnimal[i])){
            iguais = true;
          }else {
            iguais = false;
          }
        }
      }
      else {
        //Validar se Brinquedos existem em Ordem
        let qtdeEncontrados = 0;        
        for(let i = 0; i < brinquedosPessoa.length; i++){
          if(brinquedosAnimal[i] === undefined){                   
            break;
          }
          if(brinquedosAnimal[i] === brinquedosPessoa[i]){            
            qtdeEncontrados++;
          }
        }
        if(qtdeEncontrados === brinquedosAnimal.length){
          iguais = true;
        }
      }
    }
    return iguais;
  }


}

export { AbrigoAnimais as AbrigoAnimais };
