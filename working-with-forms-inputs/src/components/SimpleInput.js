import useInput from '../hooks/use-input';
const SimpleInput = (props) => {



  const {
    value: enteredName, 
    hasError: nameInputHasError,
    isValid: enteredNameIsValid, 
    valueInputChangeHandler: nameChangedHandler, 
    reset: resetNameInput,
    InputBlurHandler: nameBlurHandler} = useInput(value => value.trim() !== '');

    const {
      value: enteredEmail, 
      hasError: emailInputHasError,
      isValid: enteredEmailIsValid, 
      valueInputChangeHandler: emailChangedHandler, 
      reset: resetEmailInput,
      InputBlurHandler: emailBlurHandler} = useInput(value => value.includes("@"));
  
    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid ){
      formIsValid = true;
    }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError? 'form-control invalid': 'form-control'
  const emailInputClasses = emailInputHasError? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} />
  {nameInputHasError && <p className= 'error-text'>Name must not be empty</p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input value={enteredEmail} type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} />
  {emailInputHasError && <p className= 'error-text'>Email format invalid</p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
