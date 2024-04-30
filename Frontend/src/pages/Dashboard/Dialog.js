import React from 'react'

function Dialog() {
  return (
      <>
          <dialog open>
              <h2>hello world</h2>
              <p>my lucky number is {Math.floor((Math.random() * 100))}</p>

              <form method='dialog'>
                  <button>close</button>

              </form>
          
          </dialog>
    </>

)
}

export default Dialog