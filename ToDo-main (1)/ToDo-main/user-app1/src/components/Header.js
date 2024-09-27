import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
      
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Tasks
    </a>
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">New Task</button>
  <button type="button" class="btn btn-primary">Refresh</button>
 
</div>
      
  </div>
</nav>        
            
    </>
  );
}
