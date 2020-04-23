import React, { useState} from 'react';

function Rank (props) {

  // return (
  //   <div>
  //     <div>Rank</div>
  //   </div>
  // )

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

}

export default React.memo (Rank);