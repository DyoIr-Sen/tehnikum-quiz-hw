import React, {useState} from "react";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { AppIndicatorText } from "../components/AppIndicatorText";
import { AppIndicatorUnit } from "../components/AppIndicatorUnit";

const StepOne = ({onGoNextPage}) => {
  const [userAnswer, setUserAnswer] = useState(null)

  const isNextButtonDisabled = ! userAnswer

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <AppIndicatorText indicatorText="Скидка за прохождение опроса:" />
              <AppIndicatorText indicatorText="15%" />
            </div>
            <AppIndicatorUnit/>
          </div>
          <div className="question">
          <Header headerText1="1. Занимательный вопрос"/>
          <AppInput
                id="answer"
                isRequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            <AppButton
                isDisabled={isNextButtonDisabled}
                type="submit"
                id="next-btn"
                buttonText="Далее"
                onClick={()=> onGoNextPage()}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
