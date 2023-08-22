import React from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { Paragraf } from "../components/Paragraf";

const Thanks = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header type="h1" headerText="Спасибо за прохождение опроса!" />
          <Paragraf paragrafText="Получи свою скидку по ссылке ниже или другое блаблабла" />

          <AppButton 
          id="get-link" 
          type="submit" 
          buttonText="Получить ссылку" 
          />
        </div>
      </div>
    </div>
  )
}

export default Thanks
