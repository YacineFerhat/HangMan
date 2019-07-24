import React, { Component } from 'react';
import './Hangman.css'
import img0 from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import {randomWord} from './words'

class Hangman extends Component{

    static defaultProps ={
        maxWrong : 6,
        images : [img0, img1, img2, img3, img4, img5 , img6]
    }

    constructor(props){
        super(props) 
        this.state=
        {
            nWrong : 0,
            guessed : new Set(),
            answer : randomWord()
        }
        this.handleGuess = this.handleGuess.bind(this)
        this.reset = this.reset.bind(this)
    }

    reset(){
        this.setState ({
            nWrong :0,
            guessed : new Set(),
            answer : randomWord()
        })
    }

    guessedWord(){
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"))
    }

    handleGuess(evt){
        let ltr = evt.target.value
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong : st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }))   
    }

    generateBUttons(){
        return "abcdefghijklmnopqrstuvwxyz".split('').map(ltr=>(
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
                >
                    {ltr}
            </button>
        ))
    }

    render(){
        const gameOver = this.state.nWrong >= this.props.maxWrong
        const altText = `${this.state.nWrong}/${this.props.maxWrong}`
        const isWinner = this.guessedWord().join('') === this.state.answer
        let gameState= this.generateBUttons()
        if(isWinner) 
            gameState = 'You win'
        if(gameOver)
            gameState = 'You lose'
        
        return(
            <div className='Hangman'>
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.nWrong]} alt={altText}/>
                <p>Guessed Wrong : {this.state.nWrong}</p>
                <p className="Hangman-word">
                    {!gameOver
                        ? this.guessedWord()
                        : this.state.answer}
                </p>
                <p className="Hangman-btns">
                    {gameState}
                </p>
                <button id="reset" onClick={this.reset}>Restart?</button>
            </div>
        )
    }
}

export default Hangman;