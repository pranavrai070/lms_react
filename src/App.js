





import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from "react-router-dom";
import SignIn from "./components/auth/sign-in";
import Analytics from "./pages/Analytics";
import Auth from "./pages/Auth";
import Content from "./pages/Content";
import Lesson from "./pages/CourseContent/Lesson";
import Assessment from "./pages/CourseContent/Assessment";
import Courses from "./pages/Courses";
import Discussion from "./pages/Discussion";
import Home from "./pages/Home";
import Activities from "./pages/CourseContent/Activities";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";

function App() {

  const initialLoggedInState = localStorage.getItem('authToken') ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

  const handleLogout = () => {
    console.log('logout handler got clicked');
    // Clear local storage or perform any other necessary logout actions
    localStorage.clear();
    // Redirect to the /auth route
    return;
  };
  return (
    <Router>
      <>
        {isLoggedIn ? (
          <>
            <nav className="bg-gray-800 p-4">
          <ul className="flex justify-end space-x-4 text-white">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/discussion" className="hover:text-gray-300">Discussion</Link></li>
            <li><Link onClick={handleLogout} to="/auth" className="hover:text-gray-300">Logout</Link></li>
          </ul>
        </nav>



        <Routes>
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/auth" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/content" element={<Content/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/activities/:courseId" element={<Activities/>} />
          <Route path="/lessons/:courseId" element={<Lesson />} />
          <Route
          exact
          path="/messages/:reciever_id/:sender_id"
          element={<Messages />}
        />
          <Route path="/assessments/:courseId" element={<Assessment />} />
          <Route path="/discussion" element={<Discussion/>} />
          <Route path="/" element={<Courses/>} />
          <Route path="*" element={<NotFound/>} />
          {/* Add additional routes for other pages as needed */}
        </Routes>
          </>
        ) : (
          // <SignIn />
          <Routes>
          <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          {/* Add additional routes for the SignIn component as needed */}
        </Routes>
        )}
      </>
    </Router>
  );
}

export default App;





