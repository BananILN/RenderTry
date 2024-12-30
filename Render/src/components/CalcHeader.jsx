import { useState } from "react";





export default function Calc(){
    const [inputVal, SetInputVal] = useState("");
    const [firstNum, SetFirstNum] = useState(null);
    const [operator, SetOperator] = useState(null)
 
    const handleNumber = (num) =>{
        SetInputVal((prevVal) => prevVal + num );
    }
 
    const handleOpetator = (op) =>{
        if(inputVal !== ""){
            SetFirstNum(parseFloat(inputVal));
            SetOperator(op);
            SetInputVal("")
        }
    }

    const handleCalculate = () =>{
        if(firstNum !== null && operator !== null && inputVal !== ""){
            const secondNum = parseFloat(inputVal);
            let res = 0;

            switch(operator){
                case "+":
                    res = firstNum + secondNum;
                    break;
                case "-":
                     res = firstNum - secondNum;
                    break;
                case "*":
                     res = firstNum * secondNum;
                     break;
                case "/":
                    res = firstNum / secondNum;
                     break;
                 default:
                  break;

            }
            SetInputVal(res.toString());
            SetFirstNum(null);
            SetOperator(null);
        }
    }
    
    const handleClear = () =>{
        SetInputVal("");
        SetFirstNum(null);
        SetOperator(null);
    }
    return (
        <div className="Calc">
            <div className="calc-header">
            <svg width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                    </defs>
                    <g data-name="4. Calculator" id="_4._Calculator">

                    <path className="cls-1" d="M27,22a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9A1,1,0,0,0,4,9V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V23A1,1,0,0,0,27,22Z"/>

                    <path className="cls-1" d="M25,0H7A3,3,0,0,0,4,3V5A1,1,0,0,0,6,5V3A1,1,0,0,1,7,2H25a1,1,0,0,1,1,1V19a1,1,0,0,0,2,0V3A3,3,0,0,0,25,0Z"/>

                    <path className="cls-1" d="M24,5a1,1,0,0,0-1-1H9A1,1,0,0,0,8,5v6a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1Zm-2,5H10V6H22Z"/>

                    <path className="cls-1" d="M9,16h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/>

                    <path className="cls-1" d="M17,14H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <path className="cls-1" d="M23,14H21a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <path className="cls-1" d="M9,20h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/>

                    <path className="cls-1" d="M17,18H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <path className="cls-1" d="M23,18H21a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <path className="cls-1" d="M9,24h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/>

                    <path className="cls-1" d="M17,22H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <path className="cls-1" d="M9,28h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/>

                    <path className="cls-1" d="M17,26H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>

                    <rect className="cls-2" height="6" rx="1" width="4" x="20" y="22"/>

                    </g>

                    </svg>
            <p className="calc-title">Calculator</p>
            </div>
           <div className="calc-input">
                <input type="text" name="" value={inputVal} readOnly/>
           </div>
           

            <div className="button-block">
                    <div className="logic-symbol">
                        <p onClick={handleClear}>C</p>
                        <p onClick={() => handleOpetator("/")}>/</p>
                        <p onClick={() => handleOpetator("*")}>*</p>
                        <p >cl</p>
                        <p onClick={() => handleOpetator("-")}>-</p>
                        <p onClick={() => handleOpetator("+")}>+</p>
                        <p onClick={handleCalculate}>=</p>
                    </div>
                    <div className="number-symbol">
                        <p onClick={()=> handleNumber('7')}>7</p>
                        <p onClick={()=> handleNumber('8')}>8</p>
                        <p onClick={()=> handleNumber('9')}>9</p>
                        <p onClick={()=> handleNumber('4')}>4</p>
                        <p onClick={()=> handleNumber('5')}>5</p>
                        <p onClick={()=> handleNumber('6')}>6</p>
                        <p onClick={()=> handleNumber('1')}>1</p>
                        <p onClick={()=> handleNumber('2')}>2</p>
                        <p onClick={()=> handleNumber('3')}>3</p>
                        <p onClick={()=> handleNumber('%')}>%</p>
                        <p onClick={()=> handleNumber('0')}>0</p>
                        <p onClick={()=> handleNumber('.')}>.</p>


                    </div>
            </div>
        </div>
    )
}