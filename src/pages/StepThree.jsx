import React, {useState} from "react";
import { AppButton } from "../components/AppButton";
import { EmojiAnswerItem } from "../components/EmojiAnswerItem";
import { Header } from "../components/header";
import { Indicator } from "../components/Indicator";


const StepThree = ({ onGoNextPage }) => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerTypes = [
    {
      id: 'variant=1',
      text: 'Ваш ответ 1'
    },
    {
      id: 'variant=2',
      text: 'Ваш ответ 2'
    },
    {
      id: 'variant=3',
      text: 'Ваш ответ 3'
    },
    {
      id: 'variant=4',
      text: 'Ваш ответ 4'
    }
  ]


  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator />

          <div className="question">
            <Header headerText1="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {
                answerTypes.map(answerItem => (
                  <EmojiAnswerItem
                    key={answerItem.id}
                    id={answerItem.id}
                    answerText={answerItem.text}
                    onChange={(e) => setCheckedItem(e.target.value)}
                     />
                ))
              }
            </ul>
            <AppButton
              isDisabled={!checkedItem}
              type="submit"
              id="next-btn"
              buttonText="Далее"
              onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;
