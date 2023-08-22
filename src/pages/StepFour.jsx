import React, {  useState } from "react";
import { AppButton } from "../components/AppButton";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/header";
import { NumericAnswerItem } from "../components/NumericAnswerItem";




const StepFour = ({ onGoNextPage }) => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerOptions = [
    {
      id: 'numeric-answer-1',
      answerText: '1'
    },
    {
      id: 'numeric-answer-2',
      answerText: '2'
    },
    {
      id: 'numeric-answer-3',
      answerText: '3'
    },
    {
      id: 'numeric-answer-4',
      answerText: '4'
    },
    {
      id: 'numeric-answer-5',
      answerText: '5'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator />
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос" />
            <ul className="level-variants">
              {
                answerOptions.map(answerItem => (
                  <NumericAnswerItem
                    key={answerItem.id}
                    id={answerItem.id}
                    answerText={answerItem.answerText}
                    isChecked={checkedItem === answerItem.id}
                    onChange={(e) => setCheckedItem(e.target.value)}
                  />
                ))
              }
            </ul>
            <AppButton
              isDisabled={! checkedItem}
              type="submit"
              id="next-btn"
              buttonText="Завершить"
              onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;
