const router = require("express").Router()
const customerController = require("./../controllers/customer.controller")

router
    .post("/place-order", customerController.placeOrder)
    .get("/fetch-adress", customerController.fetchCustomerAddress)
    .get("/fetch-orders", customerController.fetchOrders)
    .put("/reschedule-order/:orderId", customerController.rescheduleOrder)
    .put("/cancle-order/:orderId", customerController.cancleOrder)

    // medical
    .post("/placeMedicalOrder", customerController.placeMedicalOrder)
    .get("/getMedical-Order-Details/:medicalId", customerController.getMedicalOrderDetails)
    .get("/get-Medical-Order", customerController.getAllMedicalOrders)
    .put("/cancel-Medical-Order/:medicalId", customerController.cancelMedicalOrder)
    .post("/add-Medical-Order", customerController.addMedicalOder)


module.exports = router