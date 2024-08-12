const router = require("express").Router()
const publicController = require("./../controllers/public.controller")
router
    .get("/fetch-customer-package", publicController.getAllCustomerPackage)
    .get("/fetch-customer-package-details/:packageId", publicController.getCustomerPackageDetails)
    .get("/fetch-cities", publicController.getCities)

module.exports = router