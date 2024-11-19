import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MnHome from '../components/MnComponent/MnHome/MnHome';
import MnNavbar from '../components/MnComponent/MnNavbar';
import MnMainCourse from '../components/MnComponent/MnCourse/MnMainCourse';
import MnParticularCourse from '../components/MnComponent/MnCourse/MnParticularCourse';
import MnMainChallenges from '../components/MnComponent/MnChallenge/MnMainChallenge';
import MnChallengeParticipation from '../components/MnComponent/MnChallenge/MnChallengeParticipation';
import MnCommunity from '../components/MnComponent/MnChat/MnCommunity';

const MnPage = () => {
  return (
    
      <div>
        <MnNavbar /> {/* Always visible Navbar */}
        <Routes>
          <Route path="/home" element={<MnHome />} />
          <Route path="/course" element={<MnMainCourse />} />
          <Route path="/course/:id" element={<MnParticularCourse />} />
          <Route path="/challenge" element={<MnMainChallenges />} />
          <Route path="/challenge/:id" element={<MnChallengeParticipation />} />
          <Route path="/community" element={<MnCommunity />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    
  );
};

export default MnPage;
