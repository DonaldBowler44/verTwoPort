import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import HomeContainer from './homecontainer';
import ServiceContainer from './components/containers/servicecontainer';
import ProjectContainer from './components/containers/projectCon/projectcontainer';
import ContactContainer from './components/containers/ContactCon/contactContainer';
import Player from './components/audioPlayer/audioPlayer';
import TVisionBox from './TVisonBox';

function App() {
  return (
    <div className="WApp">
      <Player />
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactContainer/>} />
        <Route path="/project" element={<ProjectContainer />} />
          <Route path="/service" element={<ServiceContainer />} />
          <Route path='/home' element={<HomeContainer />} />
          <Route path='*' element={<TVisionBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
