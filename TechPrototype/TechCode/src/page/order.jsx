import { useEffect, useState } from "react";
import { Card, message } from "antd"; // 引入message用于显示错误信息
import OrderTable from "../components/order_table";
import { BasicLayout } from "../components/layout"; // 确保路径正确

export default function OrderPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // 这里的URL应该与后端定义的Endpoint匹配。
        // 确保后端已正确配置了CORS以允许前端域名的请求。
        fetch("http://localhost:8081/api/orders")
            .then((response) => {
                if (!response.ok) { // 如果响应状态码不是2xx，抛出错误
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setOrders(data); // 设置获取到的订单数据
            })
            .catch((error) => {
                console.error("Fetching Orders failed", error);
                message.error('Fetching Orders failed'); // 使用Ant Design的message组件显示错误信息
            });
    }, []); // 空依赖数组表示这个effect仅在组件挂载时执行一次

    return (
        <BasicLayout>
            <Card className="card-container">
                <OrderTable orders={orders} /> {/* 将订单数据传递给OrderTable组件 */}
            </Card>
        </BasicLayout>
    );
}