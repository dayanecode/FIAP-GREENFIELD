import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NotFound } from './screens/NotFound'
import { Ranking } from './screens/Ranking';



function App() {
  return (
    <>   
      <BrowserRouter>
        <Routes>
          <Route path='/ranking' element={<Ranking/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
