import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [me,  setMe]=useState(0)

  return (
    <>
      <div
        className="card"
      >
        <p className='current'>Current value:</p>
        <a style={{ fontSize: 70, color: "#4517CF", fontWeight: "700" }} className='numChange'>
          {count}
        </a>
        <div className='btn' >
        <button onClick={() => setCount((me) => me + 1)}>
          <img width="30" height="30" src="https://img.icons8.com/ios/30/collapse-arrow--v2.png" alt="collapse-arrow--v2"/>{" "}
          </button>
          <button onClick={() => setCount((me) => me + 10)}>
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/double-up--v1.png" alt="double-up--v1"/>{" "}
          </button>
          <button onClick={() => setCount((me) => (me = 0))}>
          <img width="30" height="30" src="https://img.icons8.com/ios/30/recurring-appointment.png" alt="recurring-appointment"/>
          </button>
          <button
            onClick={() =>
              setCount((count) => (count = Math.floor(Math.random() * 100)))
            }
          >
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/hashtag.png" alt="hashtag"/>{" "}
          </button>
          <button onClick={() => setCount((me) => me - 10)}>
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/double-down--v1.png" alt="double-down--v1"/>
          </button>
          <button onClick={() => setCount((me) => me - 1)}>
          <img width="30" height="30" src="https://img.icons8.com/sf-regular-filled/30/expand-arrow.png" alt="expand-arrow"/>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App
