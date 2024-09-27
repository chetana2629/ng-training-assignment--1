import React from 'react'

export default function Footer() {
  return (
    <>
      <div class="pagination">
  <select class="page-size">
    <option value="10">10</option>
    <option value="20" selected>20</option>
    <option value="50">50</option>
  </select>
  <div style={{marginLeft:'595px'}}>
  <button type="button" class="first-page">First</button>
  <button type="button" class="prev-page">Prev</button>
  <input type="number" class="page-number" value="1" min="1"/>
  <button type="button" class="next-page">Next</button>
  <button type="button" class="last-page">Last</button>
</div>  
</div>
 </>
  )
}
