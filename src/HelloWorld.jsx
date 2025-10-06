import React, { useState, useEffect } from "react";

const isLoggedIn = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greeting = `hello, this is from template literal ${1 + 2}`;

export default function HelloWorld() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isLoggedIn) {
    return <h1>Welcome back, User!</h1>;
  }
  
  return (
    <>
      <h1>Hello, World!</h1>
      <div>
        <h2>hello, this is from h2</h2>
        <h3>hello, this is from h3</h3>
      </div>
      <h4>hello, this is from h4</h4>
      <p>{1 + 2}</p>
      <p>{1 - 2}</p>
      <p>{1 / 2}</p>
      <p>{0.12}</p>
      {/* <p>{['1', '2', '3', '4', '5']}</p> */}
      {/* <p>{{ key: 'value' }}</p> */}
      {/* <p>{"['1', '2', '3', '4', '5']"}</p> */}
      {/* <p>{"{ key: 'value' }"}</p> */}
      <p>{true}</p>
      <p>{false}</p>
      <p>{greeting}</p>
      {
        isLoggedIn ? <button>Logout</button> : <button>Login</button>
        // condition ?        true           :       false
      }
      {/* <button>
        {
          if (isLoggedIn) {
            return 'Logout'
          } else {
            return 'Login'
          }
        }
      </button> */}
      <ul>
        {numbers.filter((number) => number % 3 !== 0).map((number) => (
          <li key={number} className={`bg-white ${number % 2 === 0 ? "text-green-500" : "text-blue-500"}`} style={{ fontWeight: 'bold' }}>{number}</li>
          // <li key={num} className={num % 2 === 0 ? "text-green-500" : "text-blue-500"} style={{ fontWeight: 'bold' }}>{num}</li>
        ))}
      </ul>
    </>
  );
}
