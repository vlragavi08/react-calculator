import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";

const Calculator = () => {
    const [screenValue, setScreenValue] = useState('');

    const handleButtonClick = (buttonText) => {
        if (buttonText === 'X') {
            buttonText = '*';
            setScreenValue(screenValue + buttonText);
        } else if (buttonText === 'C') {
            setScreenValue('');
        } else if (buttonText === '=') {
            try {
                const result = eval(screenValue);
                setScreenValue(result.toString());
            } catch (error) {
                setScreenValue('Error');
            }
        } else if (buttonText === 'Backspace') {
            setScreenValue(screenValue.slice(0, -1));
        } else {
            setScreenValue(screenValue + buttonText);
        }
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Calculator</h1>

            <div className="calculator">
                <input type="text" name="screen" id="screen" value={screenValue} readOnly />
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={() => handleButtonClick('(')}>(</button></td>
                            <td><button onClick={() => handleButtonClick(')')}>)</button></td>
                            <td><button onClick={() => handleButtonClick('C')}>C</button></td>
                            <td><button onClick={() => handleButtonClick('Backspace')}><FaAngleLeft /></button></td> {/* Backspace button */}
                        </tr>
                        <tr>
                            <td><button onClick={() => handleButtonClick('7')}>7</button></td>
                            <td><button onClick={() => handleButtonClick('8')}>8</button></td>
                            <td><button onClick={() => handleButtonClick('9')}>9</button></td>
                            <td><button onClick={() => handleButtonClick('+')}>+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleButtonClick('4')}>4</button></td>
                            <td><button onClick={() => handleButtonClick('5')}>5</button></td>
                            <td><button onClick={() => handleButtonClick('6')}>6</button></td>
                            <td><button onClick={() => handleButtonClick('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleButtonClick('1')}>1</button></td>
                            <td><button onClick={() => handleButtonClick('2')}>2</button></td>
                            <td><button onClick={() => handleButtonClick('3')}>3</button></td>
                            <td><button onClick={() => handleButtonClick('*')}>*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleButtonClick('0')}>0</button></td>
                            <td><button onClick={() => handleButtonClick('.')}>.</button></td>
                            <td><button onClick={() => handleButtonClick('/')}>/</button></td>

                            <td><button onClick={() => handleButtonClick('=')}>=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calculator;
