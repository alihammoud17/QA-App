import logo from './logo.svg';
import './App.css';
import  HeaderComponent  from './components/HeaderComponent';
import QuestionsComponent from './components/QuestionsComponent';

const App = () => {
  return (
    <div class='container'>
      <HeaderComponent title={'Q&A'}/>
      <QuestionsComponent />
    </div>
    
  );
}

export default App;
