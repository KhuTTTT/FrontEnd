import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Chapter from "./pages/Chapter";
import Summary from "./pages/SummaryPage";
import Quiz from "./pages/quizPage";
import Daily from "./pages/daily_Page";
import Main from "./pages/mainPage";
import Ppt from "./pages/pptPage";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
				<Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/ppt" element={<Ppt/>}/>
          <Route path="/subject" element={<Subject/>}/>
          <Route path="/chapter" element={<Chapter/>}/>
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/daily" element={<Daily/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;