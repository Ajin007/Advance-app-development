import { useState } from "react";
import HeroText from "../HeroText";
import useInput from "../hooks/use-input";
import '../../../assets/css/css.css';
import CtaLBanner from "../CtaLBanner";
import InputErrorMsg from "./InputErrorMsg";
import { Navigate } from "react-router-dom";
import Modal from "../Modal";
import loginpage from '../../../assets/images/signup.jpg';

const LOGIN = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameError,
    onChangeHandler: usernameInputChangeHandler,
    onBlurHandler: usernameInputBlurHandler,
    reset: usernameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordError,
    onChangeHandler: passwordInputChangeHandler,
    onBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (usernameIsValid && passwordIsValid) formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log(`${usernameValue}\n${passwordValue}`);
      setIsSubmitting(false);
      setFormIsSubmitted(true);
    }, "2000");

    usernameReset();
    passwordReset();
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  if (isSubmitting) {
    return (
      <div className="form__container">
        <img src={loginpage} alt="Login Image" className="login-image" />
        <p className="form-submiting-text cv">Login Successfull</p>
        <div className="lds-hourglass"></div>
      </div>
    );
  }
  if (formIsSubmitted) {
    return (
      <div className="form__container">
        <Navigate to="/home" />;
      </div>
    );
  }

  return (
    <div className="bag">
      <img src={loginpage} alt="Login Image" className="login-image" />
  <div className="a">
    <HeroText/>
    <div className="form__container">
      <CtaLBanner />
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form__input-box">
          <input
            className={usernameError ? "error-border" : ""}
            type="text"
            placeholder={usernameError || "Username"}
            value={usernameValue}
            onChange={usernameInputChangeHandler}
            onBlur={usernameInputBlurHandler}
          />
          {usernameError && (
            <InputErrorMsg errorText="Username cannot be empty" />
          )}
        </div>
        <div className="form__input-box">
          <input
            className={passwordError ? "error-border" : ""}
            type="password"
            placeholder={passwordError || "Password"}
            value={passwordValue}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          />
          {passwordError && (
            <InputErrorMsg errorText="Password cannot be empty" />
          )}
        </div>
        <button disabled={!formIsValid}>Login</button>
      </form>
      {modalIsOpen && <Modal onToggle={toggleModal} />}
    </div>
    </div>
    </div>
  );
};

export default LOGIN;
