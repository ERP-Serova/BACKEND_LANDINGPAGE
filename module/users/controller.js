const { sq } = require("../../config/connection");
const { v4: uuid_v4 } = require("uuid");
const users = require('./model')
class Controller {
    static register(req, res) {
        const { first_name, last_name, company_name, job_title, phone_number, email } = req.body;
        users.create({ id: uuid_v4(), first_name, last_name, company_name, job_title, phone_number, email }, { returning: true })
            .then((respon) => {
                res.status(200).json({ status: 200, message: "sukses", data: respon });
            })
            .catch((err) => {
                res.status(500).json({ status: 500, message: "gagal", data: err });
            })
    }
}

module.exports = Controller