import React from 'react';

export const Tab = ({headline, children}) => {
  return(
    <React.Fragment>
      <h1> {headline} </h1>
      <article>
        {children}
      </article>
    </React.Fragment>
  );
}
