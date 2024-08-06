import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState();
  const playerRef = useRef();

  function HandleClick() {
    setPlayerName(playerRef.current.value);
  }


  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'} </h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
