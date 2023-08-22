import React, { useState } from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/header";
import { ListedAnswerItem } from "../components/ListedAnswerItem";
import { AppButton } from "../components/AppButton";

const StepTwo = ({onGoNextPage}) => {
const [checkedItem, setCheckedItem] = useState(null)


  const answerTypes = [
    {
      id: 'variant=1',
      text: 'ваш ответ'
    },
    {
      id: 'variant=2',
      text: 'ваш ответ 2'
    },
    {
      id: 'variant=3',
      text: 'ваш ответ 3'
    },
    {
      id: 'variant=4',
      text: 'ваш ответ 4'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <Indicator />
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос" />
            <ul className="variants">
              {
                answerTypes.map(answerItem => (
                  <ListedAnswerItem
                    key={answerItem.id}
                    id={answerItem.id}
                    answerText={answerItem.text}
                    isChecked={checkedItem === answerItem.id}
                    onChange={() => setCheckedItem(answerItem.id)}
                  />
                ))
              }
            </ul>
            <AppButton
              isDisabled={! checkedItem}
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

export default StepTwo;
