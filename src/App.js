import logo from './logo.svg';
import './App.css';
import  HeaderComponent  from './components/HeaderComponent';
import QuestionsComponent from './components/QuestionsComponent';

const App = () => {

  return (
    <div className="container">
      <HeaderComponent title={'Q&A'} description={'Once you start asking questions, innocence is gone'}/>
      <QuestionsComponent />
    </div>
    
  );
}

export default App;
