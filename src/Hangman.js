import React, { Component } from 'react';
import './Hangman.css'
import img0 from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'


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
            answer : 'apple'
        }
        this.handleGuess = this.handleGuess.bind(this)
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
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
                >
                    {ltr}
            </button>
        ))
    }

    render(){
        return(
            <div className='Hangman'>
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.nWrong]}/>
                <p className="Hangman-word">{this.guessedWord()}</p>
                <p className="Hangman-btns">{this.generateBUttons()}</p>

            </div>
        )
    }
}

export default Hangman;