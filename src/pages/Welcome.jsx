import React, { useState } from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = ({onGoNextPage}) => {
  const [username, setUserName] = useState(null)
  const [usePhon, setUserPhon] = useState(null)

  const isNextButtonDisabled = ! username || ! usePhon

  
  return (

    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header type="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppInput
              id="username"
              isRequired={true}
              name="username"
              type="text"
              labelText="Ваше Имя"
              placeholderText="Ваш ответ"
              errorText="Введите номер в правельном формате например"
              onChange= {(e) => setUserName(e.target.value)}
            />
            <AppInput
              id="phone"
              isRequired={true}
              name="phone"
              type="tel"
              labelText="Ваш номер"
              placeholderText="+998 9- --- -- --"
              pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              errorText="Введите номер в правельном формате"
              onChange= {(e) => setUserPhon(e.target.value)}
            />
            <AppButton
              isDisabled={isNextButtonDisabled}
              type="submit"
              id="next-btn"
              buttonText="Далее"
              onClick={()=> onGoNextPage()}
            />
          </form>
        </div>
      </div>
    </div>

  )
}

export default Welcome;
