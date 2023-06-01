import React, { useCallback, useEffect } from 'react';

export default function ColaBtnList(props) {
    
        const fetchData = useCallback(async () => {
        try {
            const response = await fetch('./Item/items.json');
            if (response.ok) {
            const data = await response.json();
            props.setItemList(data);
            } else {
            throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        }
        }, [props.setItemList]);

        useEffect(() => {
            fetchData();
        }, [fetchData]);

    return (
        <ul className="cola-list">
        {props.itemList.map((item) => (
            <li key={item.name}>
            <button
                className="btn-cola"
                type="button"
                data-item={item.name}
                data-count={item.count}
                data-price={item.cost}
                data-img={item.img}
                // onClick={}
            >
                <img className="cola-img" src={`./images/${item.img}`} alt="" />
                <span className="cola-name">{item.name}</span>
                <strong className="cola-price">{item.cost}원</strong>
            </button>
            </li>
        ))}
        </ul>
    );
};
