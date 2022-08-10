import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const onBtnClick = evt => {
    const { name } = evt.currentTarget;
    switch (name) {
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'good':
        setGood(good + 1);
        break;
      default:
        return;
    }
  };
  const countPositiveFeedbackPercentage = (total, positive) => {
    if (total !== 0) {
      const percentag = ((positive * 100) / total).toFixed(0);
      return ` ${percentag}%`;
    }
  };
  const total = countTotalFeedback(good, neutral, bad);
  const positiveFeedback = countPositiveFeedbackPercentage(total, good);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ bad, neutral, good })}
          onLeaveFeedback={onBtnClick}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
