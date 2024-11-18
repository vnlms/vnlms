import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MnHome from '../components/MnComponent/MnHome/Mnhome';
import MnNavbar from '../components/MnComponent/MnNavbar';
// import MnMain from '../components/MnComponent/MnCourse/MnMainCourse';
import MnParticularCourse from '../components/MnComponent/MnCourse/MnParticularCourse';
import MnMainCourse from '../components/MnComponent/MnCourse/MnMainCourse';
import MnChallengeParticipation from '../components/MnComponent/MnChallenge/MnChallengeParticipation';
import MnMainChallenges from '../components/MnComponent/MnChallenge/MnMainChallenge';
import MnCommunity from '../components/MnComponent/MnChat/MnCommunity';

const MnPage = () => {
  return (
    <div>
      <MnNavbar /> {/* Place the MnNavbar here so it's always visible when you're on the "/mn/*" route */}
      <Routes>
        <Route path="/home" element={<MnHome />} /> {/* This will render MnHome at /mn/home */}
        <Route path="/course" element={<MnMainCourse />} /> {/* This will render MnHome at /mn/home */}
        <Route path="/challenge" element={<MnMainChallenges />} /> {/* This will render MnHome at /mn/home */}
        <Route path="/community" element={<MnCommunity />} /> {/* This will render MnHome at /mn/home */}
        <Route path="/course/:id" element={<MnParticularCourse/>} /> {/* This will render MnHome at /mn/home */}
        <Route path="/challenge/:id" element={<MnChallengeParticipation/>} /> {/* This will render MnHome at /mn/home */}
      </Routes>
    </div>
  );
};

export default MnPage;
