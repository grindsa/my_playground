import React, {useState, useEffect} from 'react';

export const Watch = (props) => {
  const [dateTime, setDateTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const intervalId = setInterval(() =>{
      console.log('set interval')
      setDateTime( new Date().toUTCString());
    }, 1000)
    return () => clearInterval(intervalId)
  }, []);


  return (
    <React.Fragment>
      <h1>{ dateTime }</h1>
    </React.Fragment>
  );
}
