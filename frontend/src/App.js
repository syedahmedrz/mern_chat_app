import {
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ChatPage } from './Pages/ChatPage';
import { HomePage } from './Pages/HomePage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/chats" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
