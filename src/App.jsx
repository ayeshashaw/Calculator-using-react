import { useState } from 'react';
import styles from './App.module.css';
import Buttons from './components/Buttons';
import Display from './components/Display';


function App() {

  let [valCal,setValCal] = useState(" ");
  const onButtonsClick = (buttonText)=>{
    if(buttonText === 'C'){
       setValCal("")
    }else if(buttonText === '='){
      const result = eval(valCal);
      setValCal(result)

    }else{
      const newDisplayValue = valCal + buttonText;
      setValCal(newDisplayValue)
    }
  }


  return (
  
      <div className={styles.container}>
        <Display  displayValue={valCal} />
        <Buttons 
        onButtonsClick ={onButtonsClick}
        />
        
      </div>

    
  );
}

export default App;
