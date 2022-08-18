import './App.css';
import {
  toastManager,
  ToastsContainer,
  ToastStatus,
  TOAST_ANIMATIONS,
  TOAST_POSITIONS,
} from '@aivan3d66/toasterlib';

const {Success, Error, Info, Warning} = ToastStatus
const {horizontal, vertical} = TOAST_ANIMATIONS
const {top_right, top_left, bottom_right, bottom_left} = TOAST_POSITIONS

function App() {
  const successClickHandle = () => {
    toastManager.addToast({
      title: 'Success',
      animationType: vertical,
      toastType: Success,
      color: '',
      margins: '10px',
      backgroundColor: '',
    }, 1000)
  }

  const warnClickHandle = () => {
    toastManager.addToast({
      title: 'Warn',
      animationType: vertical,
      toastType: Warning,
      color: '',
      margins: '10px',
      backgroundColor: '',
    }, 1000)
  }

  const errClickHandle = () => {
    toastManager.addToast({
      title: 'Info',
      animationType: vertical,
      toastType: Error,
      color: '',
      margins: '10px',
      backgroundColor: '',
    }, 1000)
  }

  const infoClickHandle = () => {
    toastManager.addToast({
      title: 'Info',
      animationType: vertical,
      toastType: Info,
      color: '',
      margins: '10px',
      backgroundColor: '',
    }, 1000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={successClickHandle}>Success</button>
        <button onClick={warnClickHandle}>Warning</button>
        <button onClick={errClickHandle}>Error</button>
        <button onClick={infoClickHandle}>Info</button>
        <ToastsContainer position={bottom_left}/>
      </header>
    </div>
  );
}

export default App;
