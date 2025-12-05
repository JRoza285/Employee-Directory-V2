export default Router;

import { Router } from "express";
import { getEmplyees, addEmployee } from "./employees.js";

Router.route("/")
.get((req, res) => {
    const employees = getEmplyees();
    res.send(employees);
})