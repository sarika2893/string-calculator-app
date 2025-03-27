import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StringCalculator from './components/StringCalculator';

function App() {
  return (
    <BrowserRouter>
      <div className={`app`}>
        <Routes>
          <Route path="/" exact Component={StringCalculator} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
