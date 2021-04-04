import logo from './logo.svg';
import './App.css';
import  HeaderComponent  from './components/HeaderComponent';
import QuestionsComponent from './components/QuestionsComponent';
import { QUESTIONS } from './shared/questions';
import { useState } from 'react';

const App = () => {

  const [questions, setQuestions] = useState(QUESTIONS);

  return (
    <div className="container">
      <HeaderComponent title={'Q&A'} description={'Once you start asking questions, innocence is gone'}/>
      <QuestionsComponent questions={questions}/>
    </div>
    
  );
}

export default App;
