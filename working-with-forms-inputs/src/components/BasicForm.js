import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  let formIsValid = false;
  const {
    value:entereedFirstNameValue, 
    isValid: valueFirstNameIsValid,
    hasError: firstNameHasError,
    valueInputChangeHandler: firstNameValueInputChaneHandler, 
    InputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
    } = useInput(value => value.trim() !== '');
  
    const {
      value:entereedLastNameValue, 
      isValid: valueLastNameIsValid,
      hasError: lastNameHasError,
      valueInputChangeHandler: lastNameValueInputChaneHandler, 
      InputBlurHandler: lastNameBlurHandler,
      reset: lastNameReset
      } = useInput(value => value.trim() !== '');
  
      const {
        value:entereedEmailValue, 
        isValid: valueEmailIsValid,
        hasError: emailHasError,
        valueInputChangeHandler: emailValueInputChaneHandler, 
        InputBlurHandler: emailBlurHandler,
        reset: emailReset
        } = useInput(value => value.includes("@"));


        formIsValid = valueEmailIsValid && valueFirstNameIsValid && valueLastNameIsValid;

        const firstNameClass = firstNameHasError? 'form-control invalid': 'form-control';
        const lastNameClass = lastNameHasError? 'form-control invalid': 'form-control';
        const emailClass = emailHasError? 'form-control invalid': 'form-control';
  
        const formValidation = event => {
          event.preventDefault();
          if(valueFirstNameIsValid && valueLastNameIsValid && valueEmailIsValid){
            console.log(entereedFirstNameValue);
            console.log(entereedLastNameValue);
            console.log(entereedEmailValue);
            firstNameReset();
            lastNameReset();
            emailReset();
          }
          return;
        };

  return (
    <form onSubmit={formValidation}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameValueInputChaneHandler} onBlur={firstNameBlurHandler} value={entereedFirstNameValue}/>
          {firstNameHasError && <p className='error-text'>First name Cannot be empty</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameValueInputChaneHandler} onBlur={lastNameBlurHandler} value = {entereedLastNameValue}/>
          {lastNameHasError && <p className='error-text'>First name Cannot be empty</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' onChange={emailValueInputChaneHandler} onBlur={emailBlurHandler} value = {entereedEmailValue}/>
        {emailHasError && <p className='error-text'>Email invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
        
      </div>
    </form>
  );
};

export default BasicForm;
