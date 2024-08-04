// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'Salalah', visited : true },
    { name: 'Italy', visited : false },
    { name: 'Bahrain', visited : true },
  ];

  return (
    <>
      <h1>places to visit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.visited ? ' visited' : 'not-visited'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;