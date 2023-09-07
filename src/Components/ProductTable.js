import React from 'react';

function ProductTable() {
    const divStyle = {
        textAlign: 'center' 
    };

    return (
        <div style={divStyle}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ProductTable;