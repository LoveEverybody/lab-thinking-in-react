function ProductRow(props){
    const itemList = props.product
    
return(
    <div>
        <tbody>
          {itemList.map(item => (
            // asking
            <tr key={item.id}>               
              <td>{item.name}</td>
              <td>{item.price} </td>                            
            </tr>
          ))}
        </tbody>
    </div>
)
}

export default ProductRow