import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state={
    time: 60,
    palavras: 0,
    word: '',
    cont : 0,
    gameState: 'stopped',
    words:[// definindo as palavras
      {word: 'AMAR', id:1, discovered:  false},
      {word: 'CARRO', id:2,discovered: false},
      {word: 'CACHORRO',id:3, discovered: false},
      {word: 'AR', id:4,discovered: false},
      {word: 'FUTEBOL',id:5, discovered: false},
      {word: 'ARMA', id:6,discovered: false},
      {word: 'HUMANO', id:7,discovered: false},
      {word: 'PREFEITO',id:8, discovered: false},
      {word: 'LOBISOMEM', id:9,discovered: false},
      {word: 'PRESIDENTE',id:10, discovered: false},
      {word: 'CIENTISTA', id:11,discovered: false},
      {word: 'CURANDEIRO', id:12,discovered: false},  
      {word: 'MACUMBEIRO', id:13,discovered: false},
      {word: 'SINTAXE', id:14,discovered: false},
      {word: 'COMPLETAR', id:15,discovered: false},
      {word: 'GOL', id:16,discovered: false},
      {word: 'AVIAO', id:17,discovered: false},
      {word: 'MOTO', id:18,discovered: false},
      {word: 'AERONAUTICA',id:19, discovered: false},
      {word: 'GAS', id:20,discovered: false},
      {word: 'CLUBE', id:21,discovered: false},
      {word: 'ESPANHA', id:23,discovered: false},
      {word: 'GAME', id:24,discovered: false},
      {word: 'JOGO', id:25,discovered: false},
      {word: 'CAMPEAO', id:26,discovered: false},
      {word: 'PERDEDOR', id:27,discovered: false},
      {word: 'SIMPLES', id:28,discovered: false},
      {word: 'DIFICIL',id:29, discovered: false},
      {word: 'COMPLICADO', id:30,discovered: false},
      {word: 'BARCO',id:31, discovered: false},
      {word: 'NAVIO', id:32,discovered: false},
      {word: 'GANSO', id:33,discovered: false},
      {word: 'PATO', id:34,discovered: false},
      {word: 'GATO', id:35,discovered: false},
      {word: 'COPA', id:36,discovered: false},
      {word: 'MUNDO', id:37,discovered: false},
      {word: 'TERRA', id:38,discovered: false},
      {word: 'AGUA', id:39,discovered: false},
      {word: 'FOGO', id:40,discovered: false},
      {word: 'TEMPESTADE',id:41, discovered: false},
      {word: 'CORRER', id:42,discovered: false},
      {word: 'CORRIDA', id:43,discovered: false},
      {word: 'COMER', id:44,discovered: false},
      {word: 'COMIDA', id:45,discovered: false},
      {word: 'VOAR', id:46,discovered: false},
      {word: 'SOBREVOAR', id:47,discovered: false},
      {word: 'FUMAR', id:48,discovered: false},
      {word: 'BEBER', id:49,discovered: false},
      {word: 'CASACO', id:50,discovered: false},
      {word: 'BERMUDA', id:51,discovered: false},
      {word: 'CACHECOL', id:52,discovered: false},
      {word: 'GRAVATA', id:53,discovered: false},
      {word: 'NEVE', id:54,discovered: false},
      {word: 'FRIO', id:55,discovered: false},
      {word: 'CHIMARRAO',id:56, discovered: false},
      {word: 'BOLA', id:57,discovered: false},
      {word: 'TRAVE', id:58,discovered: false},
      {word: 'DEPUTADO',id:59, discovered: false},
      {word: 'AMPUTADO', id:60,discovered: false},
      {word: 'PRECOCE', id:61,discovered: false},
      {word: 'COELHO', id:62,discovered: false},
      {word: 'BICICLETA', id:63,discovered: false},
      {word: 'ANDARILHO', id:64,discovered: false},
      {word: 'MONTE', id:65,discovered: false},
      {word: 'MONTANHA', id:66,discovered: false},
      {word: 'PAREDE', id:67,discovered: false},
      {word: 'TINTA',id:68, discovered: false},
      {word: 'PENHASCO',id:69, discovered: false},
      {word: 'MORTE',id:70, discovered: false},
      {word: 'SUICIDIO',id:71, discovered: false},
      {word: 'CRIME',id:72, discovered: false},
      {word: 'INTENCIONAL',id:73, discovered: false},
      {word: 'DISTRAIDO', discovered: false},
      {word: 'FUTIL',id:75, discovered: false},
      {word: 'PISCINA', discovered: false},
      {word: 'LABORATORIO', discovered: false},
      {word: 'ESCOLA', discovered: false},
      {word: 'PROFESSOR', discovered: false},
      {word: 'DIRETOR', discovered: false},
      {word: 'FILME', discovered: false},
      {word: 'COMPUTADOR', discovered: false},
      {word: 'CANO', discovered: false},
      {word: 'GARRAFA', discovered: false},
      {word: 'MONITOR', discovered: false},
      {word: 'CADEIRA', discovered: false},
      {word: 'LUZ', discovered: false},
      {word: 'MOUSE', discovered: false},
      {word: 'TECLADO', discovered: false},
      {word: 'PISO', discovered: false},
      {word: 'LAMPADA', discovered: false},
      {word: 'PELADO', discovered: false},
      {word: 'MEDO', discovered: false},
      {word: 'QUIMICA', discovered: false},
      {word: 'GAY', discovered: false},
      {word: 'BOLACHEIRA', discovered: false},
      {word: 'ESTRADA', discovered: false},
      {word: 'CEM', discovered: false},
      {word: 'BLOCO', discovered: false},
      {word: 'PUTA', discovered: false},
      {word: 'SANDALIO', discovered: false},
      {word: 'VIADO', discovered: false},
      {word: 'PARALELEPIPEDO', discovered: false},
      {word: 'ASSASSINATO', discovered: false},
      {word: 'POWERPOINT', discovered: false},
      {word: 'EXCEL', discovered: false},
      {word: 'WORD', discovered: false},
      {word: 'CELULAR', discovered: false},
      {word: 'OPERADORA', discovered: false},
      {word: 'TORRE', discovered: false},
      {word: 'CADEIRANTE', discovered: false},
      {word: 'RODAS', discovered: false},
      {word: 'CABO', discovered: false},
      {word: 'CONDICIONADOR', discovered: false},
      {word: 'SHAMPOO', discovered: false},
      {word: 'OVO', discovered: false},
      {word: 'ARROZ', discovered: false},
      {word: 'FEIJAO', discovered: false},
      {word: 'CARNE', discovered: false},
      {word: 'SALADA', discovered: false},
      {word: 'SAL', discovered: false},
      {word: 'BATATA', discovered: false},
      {word: 'CUSCUZ', discovered: false},
      {word: 'DEPOSITO', discovered: false},
      {word: 'ATMOSFERA', discovered: false},
      {word: 'ENGRENAGEM', discovered: false},
      {word: 'JANELA', discovered: false},
      {word: 'MAR', discovered: false},
      {word: 'HORIZONTE', discovered: false},
      {word: 'DISTANTE', discovered: false},
      {word: 'ESQUECIMENTO', discovered: false},
      {word: 'PAIS', discovered: false},
      {word: 'FILHOS', discovered: false},
      {word: 'ATLETA', discovered: false},
      {word: 'HORARIO', discovered: false},
      {word: 'JANTAR', discovered: false}

      
    ],
    acessível:[
      {letra: 'A', used: false},
      {letra: 'A', used: false},
      {letra: 'A', used: false},
      {letra: 'B', used: false},
      {letra: 'B', used: false},
      {letra: 'B', used: false},
      {letra: 'C', used: false},
      {letra: 'C', used: false},
      {letra: 'C', used: false},
      {letra: 'D', used: false},
      {letra: 'D', used: false},
      {letra: 'E', used: false},
      {letra: 'E', used: false},
      {letra: 'E', used: false},
      {letra: 'F', used: false},
      {letra: 'F', used: false},
      {letra: 'G', used: false},
      {letra: 'G', used: false},
      {letra: 'H', used: false},
      {letra: 'H', used: false},
      {letra: 'I', used: false},
      {letra: 'I', used: false},
      {letra: 'I', used: false},
      {letra: 'N', used: false},
      {letra: 'P', used: false},
      {letra: 'S', used: false},
      {letra: 'S', used: false},
      {letra: 'J', used: false},
      {letra: 'J', used: false},
      {letra: 'K', used: false},
      {letra: 'K', used: false},
      {letra: 'L', used: false},
      {letra: 'L', used: false},
      {letra: 'M', used: false},
      {letra: 'M', used: false},
      {letra: 'N', used: false},
      {letra: 'N', used: false},
      {letra: 'O', used: false},
      {letra: 'O', used: false},
      {letra: 'O', used: false},
      {letra: 'P', used: false},
      {letra: 'P', used: false},
      {letra: 'Q', used: false},
      {letra: 'Q', used: false},
      {letra: 'R', used: false},
      {letra: 'R', used: false},
      {letra: 'R', used: false},
      {letra: 'S', used: false},
      {letra: 'S', used: false},
      {letra: 'T', used: false},
      {letra: 'T', used: false},
      {letra: 'U', used: false},
      {letra: 'U', used: false},
      {letra: 'U', used: false},
      {letra: 'V', used: false},
      {letra: 'V', used: false},
      {letra: 'W', used: false},
      {letra: 'W', used: false},
      {letra: 'X', used: false},
      {letra: 'X', used: false},
      {letra: 'Y', used: false},
      {letra: 'Y', used: false},
      {letra: 'Z', used: false},
      {letra: 'Z', used: false}
      
    ]
  } 

  renderWord(word, key){//mostrando as palavras na tela
    if(word.discovered){
      return <p key={key}>{word.word}</p>
    }
    const len = word.word.lenght
    const letras = ''.padStart(len, '').split('')
    return   <p key={key}>{letras.map(l =><span className="letras-empty">_</span>)}</p>
  }
  renderLetra(letra, key){
    if(letra.used){
    return <span key={key}>{letra.letra}</span>
    }
    return;
  }
  renderAcessível(letra, key){
    if(!letra.used){
    return <span key={key} className="letra-acessível">{letra.letra}</span>
    }
    return;
  }
  componentDidMount(){// pegar o que for digitado no teclado
    setInterval(()=>{
      if(this.state.gameState==='playing'){
        this.setState({
          time: this.state.time - 1
  
        })    
      }
    },1000)
    window.addEventListener('keydown', evt =>{
      const letra = evt.key.toUpperCase()// adiciona a evt a letra e transforma em maiuscula
      console.log(letra)
      if (letra === 'ENTER'){
        
        const word = this.state.word
        var aleatorio = Math.floor(Math.random() * this.state.words.length);
          
        const wordIndex = this.state.words.findIndex(w =>{
          return w.word === word && w.discovered 
        }) 
        if(wordIndex>=0){
          const words = [...this.state.words]
          words[wordIndex].discovered=false
          this.state.words[aleatorio].discovered = true;
          const palavras = this.state.palavras++
          console.log(palavras)

          const acessível = this.state.acessível.map(w =>{
            return{
              ...w, used: false
            }
          })
          this.setState({
            words,
            acessível,
            word: ''
            
          })
        }
        
      }else if(letra === 'BACKSPACE'){
        const len = this.state.word.length
        if (len>0){
          const CurrentLetra = this.state.word.substr(len-1, len)
          const word = this.state.word.substr(0, len-1)
          let index = -1

          this.state.acessível.forEach((l, key) => {
            if(l.used && l.letra===CurrentLetra){
              index=key
            }
            
          })
          const acessível=[...this.state.acessível]
          acessível[index].used=false
          this.setState({
            acessível,
            word

          })
          

        }

      }else{
        const index = this.state.acessível.findIndex(l=>{// verifica se a letra digitada está no estado letra
          return l.letra === letra && !l.used
        })
        if(index>=0){
          const acessível=[...this.state.acessível]
          acessível[index].used=true
          const word = this.state.word+letra
          this.setState({acessível, word})
          
        }
      }
    })
  }
  componentWillMount(){// parar de pegar o que está sendo digitado
    window.removeEventListener('keydown', evento =>{

    })
  }
  




  render(){
    if(this.state.gameState=== 'stopped'){
      return(
        <div className="container-button">
          <button className='button' onClick={()=>{
            var aleatorio = Math.floor(Math.random() * this.state.words.length);
            this.state.words[aleatorio].discovered = true;
            this.setState({
              gameState: 'playing',
              time: 60
            })
          }}>Iniciar Jogo</button>
        </div>
      )
    }
    if(this.state.time<0){
      const pontuação = this.state.palavras*10
      return<div className='game-over'>TEMPO ESGOTADO! SUA PONTUAÇÃO FOI {pontuação} PONTOS</div>
        
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>DIGITE AS PALAVRAS ABAIXO:</h1>
          <p>Tempo restante: {this.state.time}</p> 
        </header>
        <div>
          
          {this.state.words.map((word, key )=> this.renderWord(word ))}</div>
        <p className="letras-empty"> 
          {this.state.word}
        </p>
      </div>
    );
  }
}

export default App;