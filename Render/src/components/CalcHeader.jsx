import { useEffect, useState } from "react";





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

    const handleBackspace = () => {
        SetInputVal((prevVal) => prevVal.slice(0, -1));
      };

    const handleKeyDown= (event) =>{
        const key =event.key;

        if(/[0-9]/.test(key)){
            handleNumber(key);
        }

        if (["+", "-", "*", "/"].includes(key)) {
            handleOpetator(key);
          }

         if (key === ".") {
          handleNumber(".");
         }

        if (key === "Enter") {
            handleCalculate();
        }
   
        if (key === "Backspace") {
            handleBackspace();
        }
    };

    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown);
        return () =>{
            window.removeEventListener("keydown",handleKeyDown);
        }
    },[inputVal,firstNum,operator])

    

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
            <div className="calc-disp">
                {firstNum !== null && (
                    <span>
                        {firstNum} {operator}
                    </span>
                )}
            </div>
           <div className="calc-input">
                <input type="text" name="" value={inputVal} readOnly/>
           </div>
           

            <div className="button-block">
                    <div className="logic-symbol">
                        <p onClick={handleBackspace}>C</p>
                        <p onClick={() => handleOpetator("/")}>/</p>
                        <p onClick={() => handleOpetator("*")}>*</p>
                        <p onClick={handleClear}>
    
                        <svg width="30px" height="29px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.67004 11.6064L8.20037 12.1367L7.67004 11.6064ZM6 13.9682H5.25H6ZM10.0318 18V18.75V18ZM11.6064 7.67004L11.076 7.13971L11.6064 7.67004ZM12.6506 16.073C12.9435 16.3659 13.4183 16.3659 13.7112 16.073C14.0041 15.7801 14.0041 15.3053 13.7112 15.0124L12.6506 16.073ZM8.98764 10.2888C8.69474 9.99588 8.21987 9.99588 7.92698 10.2888C7.63408 10.5817 7.63408 11.0565 7.92698 11.3494L8.98764 10.2888ZM15.7996 11.8633L11.8633 15.7996L12.924 16.8603L16.8603 12.924L15.7996 11.8633ZM8.20037 12.1367L12.1367 8.20037L11.076 7.13971L7.13971 11.076L8.20037 12.1367ZM8.20037 15.7996C7.6287 15.228 7.25442 14.8514 7.01378 14.536C6.78634 14.2379 6.75 14.0841 6.75 13.9682H5.25C5.25 14.544 5.492 15.0144 5.82124 15.4459C6.13728 15.8601 6.59802 16.3186 7.13971 16.8603L8.20037 15.7996ZM7.13971 11.076C6.59802 11.6177 6.13728 12.0762 5.82124 12.4904C5.492 12.922 5.25 13.3924 5.25 13.9682H6.75C6.75 13.8522 6.78634 13.6984 7.01378 13.4003C7.25442 13.0849 7.6287 12.7084 8.20037 12.1367L7.13971 11.076ZM11.8633 15.7996C11.2916 16.3713 10.9151 16.7456 10.5997 16.9862C10.3016 17.2137 10.1478 17.25 10.0318 17.25V18.75C10.6076 18.75 11.078 18.508 11.5096 18.1788C11.9238 17.8627 12.3823 17.402 12.924 16.8603L11.8633 15.7996ZM7.13971 16.8603C7.6814 17.402 8.13989 17.8627 8.55411 18.1788C8.98563 18.508 9.45604 18.75 10.0318 18.75V17.25C9.91588 17.25 9.76207 17.2137 9.46398 16.9862C9.14858 16.7456 8.77204 16.3713 8.20037 15.7996L7.13971 16.8603ZM15.7996 8.20037C16.3713 8.77204 16.7456 9.14858 16.9862 9.46398C17.2137 9.76207 17.25 9.91588 17.25 10.0318H18.75C18.75 9.45604 18.508 8.98563 18.1788 8.55411C17.8627 8.13989 17.402 7.6814 16.8603 7.13971L15.7996 8.20037ZM16.8603 12.924C17.402 12.3823 17.8627 11.9238 18.1788 11.5096C18.508 11.078 18.75 10.6076 18.75 10.0318H17.25C17.25 10.1478 17.2137 10.3016 16.9862 10.5997C16.7456 10.9151 16.3713 11.2916 15.7996 11.8633L16.8603 12.924ZM16.8603 7.13971C16.3186 6.59802 15.8601 6.13728 15.4459 5.82124C15.0144 5.492 14.544 5.25 13.9682 5.25V6.75C14.0841 6.75 14.2379 6.78634 14.536 7.01378C14.8514 7.25442 15.228 7.6287 15.7996 8.20037L16.8603 7.13971ZM12.1367 8.20037C12.7084 7.6287 13.0849 7.25442 13.4003 7.01378C13.6984 6.78634 13.8522 6.75 13.9682 6.75V5.25C13.3924 5.25 12.922 5.492 12.4904 5.82124C12.0762 6.13728 11.6177 6.59802 11.076 7.13971L12.1367 8.20037ZM13.7112 15.0124L8.98764 10.2888L7.92698 11.3494L12.6506 16.073L13.7112 15.0124Z" fill="#1C274C"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        </p>
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