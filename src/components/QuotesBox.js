import React, { useState } from 'react';
import quotes from '../quotes.json';
import Button from './Button';

const QuotesBox = () => {

    const getRandom = ()=> Math.floor(Math.random()* quotes.length);
    const [ quote, setQuote] = useState(quotes[getRandom()]);
    const colors = ["#C93E3E","#A9549F", "#EA648C", "#007FC5", "#2F4858", "#00B286"];

    const changePhases = () => {
        setQuote(quotes[getRandom()]);
    }

    const color = colors[Math.floor(Math.random() * 6)];

    document.body.style = `background: ${color}`;

    return (
        <div className='card'  style={{color: color}}>
            <dic className="content">
                <div className="phases">
                    <i className="fa-solid fa-quote-left"></i>
                    <p className='text'>{quote.quote}</p>
                </div>
                <div className='right'>
                    <p className="author">{quote.author}</p>
                    <Button changePhases={changePhases} color={color}/>
                </div>
            </dic>
        </div>
    );
};

export default QuotesBox;