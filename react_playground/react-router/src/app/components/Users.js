import React from "react";
import { useRoutes, A } from "hookrouter";

export const Users = (props) => {
  console.log('foofoo')
  return(
    <main>
      <h1>Users1</h1>
      <select>
        <option value="zack"> Users 1 </option>
        <option value="zack"> Users 2 </option>
        <option value="zack"> Users 3 </option>
      </select>
      <p>
      <A href="/users/1/1">User 1</A><br />
      <A href="/users/2/2">User 2</A><br />
      <A href="/users/3/3">User 3</A>
      </p>
    </main>
  )
}
