// import {navigate, Router } from "@reach/router";
// import logo from './logo.svg';
import './App.css';
import ShortPolling from "./components/ShortPolling";
import LongPolling from "./components/LongPolling";
// import SoocketsComp from "./components/SoocketsComp";
// import WebSockets from './components/WebSockets';
// import WebSocketsRooms from "./components/WebSocketsRooms";
function App() {
  return (
    <div>
      {/* <ShortPolling></ShortPolling> */}
      <LongPolling></LongPolling>
      {/* <SoocketsComp></SoocketsComp> */}
      {/* <WebSockets></WebSockets> */}
      {/* <WebSocketsRooms></WebSocketsRooms> */}
    </div>
  );
}

export default App;
