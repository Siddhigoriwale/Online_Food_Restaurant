import React, { useEffect, useReducer, useState } from 'react'
import { MdDelete } from "react-icons/md";
import Form from 'react-bootstrap/Form';
function Cart() {
  const [cart, setCart] = useState([])
  const [qty, dispatch] = useReducer(reducer, 0)
  function reducer(qty, action) {
    switch (action.type) {
      case 'changecartqty':
        return (cart.filter((c) => {
          return (
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          )
        }))
      default:
        return qty
    }
  }
  function gettotal() {
    let total = 0
    cart.map((ct) => {
      total = total + (ct.qty * ct.price)
    })
    return total
  }
  useEffect(() => {
    fetch("http://localhost:3000/cart").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2)
        setCart(resp2)

      })
    })
    gettotal()

  }, [])




  function removecartitem(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "delete"
    }).then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2)
      })
    })
    window.location.reload()
  }

  return (
    <div>
      <table className='table mt-4'>
        <thead><tr><th>ID</th><th>PRODUCT</th><th>QUANTITY</th><th>PRICE</th><th>DELETE</th></tr></thead>
        <tbody>
          {
            cart.map((c, i) => {
              return (
                <tr key={i}>
                  <td>{c.id}</td>
                  <td><img src={c.image} height={80} width={80} alt='' /></td>
                  <td>

                    <Form.Select aria-label="Default select example" value={c.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "changecartqty",
                          payload: {
                            id: c.id,
                            qty: e.target.value
                          }
                        })
                      }} as="select">
                      {
                        [...Array(c.stock).keys()].map((q) => {
                          return (
                            <option key={q + 1}>{q + 1}</option>
                          )
                        })
                      }
                    </Form.Select>
                  </td>
                  <td>${c.qty * c.price}</td>
                  <td><MdDelete className='fs-2 text-danger' onClick={() => removecartitem(c.id)} /></td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr><td colSpan={2}>{cart.length} items: </td><td colSpan={2}>Total cost: ${gettotal()}</td></tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart