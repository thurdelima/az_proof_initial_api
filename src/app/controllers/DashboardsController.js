import Order from "../models/Order";

class DashboardsController {

    async get(req, res) {

        let orderTotal = 0;
        let orderCount = 0;
        let salesTotal = 0;
        let salesCount = 0;
        let averageTicket = 0;
        let parseAverageTicket = 0;

        const orders = await Order.find();

        for (let i = 0; i < orders.length; i++) {

            orderTotal = orderTotal + orders[i]['payment']['amount'];

            orderCount++;
        }


        salesTotal = orderTotal;
        salesCount = orderCount;
        averageTicket = orderTotal / orderCount;
        parseAverageTicket = averageTicket.toFixed(2);


        return res.json({
            orders_total: orderTotal,
            order_count: orderCount,
            sales_total: salesTotal,
            sales_count: salesCount,
            average_ticket: parseAverageTicket,
            orders: orders,
            has_more: false,
            limit: 100,
            total_pages: 1,
            page: 1,
            total: orderCount
        });
    }

}
export default new DashboardsController();