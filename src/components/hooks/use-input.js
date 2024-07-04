import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid =  validateValue(enteredValue);
  const valueIsInvalid = !enteredValue && valueIsTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    valueValid: valueIsValid,
    valueInvalid: valueIsInvalid,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;