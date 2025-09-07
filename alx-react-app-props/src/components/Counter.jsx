import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        maxWidth: '300px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '18px',
          color: '#34495e',
          margin: '0 0 15px 0',
        }}
      >
        Current Count: <span style={{ fontWeight: 'bold', color: 'blue' }}>{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          margin: '5px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          margin: '5px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          backgroundColor: '#7f8c8d',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          margin: '5px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;