import React from 'react';

export default function OrderItemList({ orderItems }) {
    return (
        <div>
            {orderItems.map((item, index) => (
                <div key={index} style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.cover} alt="cover" style={{ width: '60px', marginRight: '10px' }} />
                        <div>
                            <div>商品名称: {item.productName}</div>
                            <div>数量: {item.quantity}</div>
                            <div>单价: {item.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}