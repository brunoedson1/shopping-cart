import React, { useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import './CartPage.css'
import Item from "./Item";

function ItemPage({items, onAddOne, onRemoveOne}){
    return(
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id} className="ItemPage-items">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>-</button>

                            <span className="CartItem-count">{item.count}</span>

                            <button className="CartItem-addOne" onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );
}

ItemPage.propTypes = {
    item: PropTypes.array.isRequired,
    omAddOn: PropTypes.func.isRequired,
    onRemoveOn: PropTypes.func.isRequired
}

export default ItemPage;