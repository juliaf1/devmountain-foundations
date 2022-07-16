require('dotenv').config();
const { DATABASE_URI } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DATABASE_URI, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        },
    },
});

let nextEmp = 5

const getUpcomingAppointments = (req, res) => {
    sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
    from cc_appointments a
    join cc_emp_appts ea on a.appt_id = ea.appt_id
    join cc_employees e on e.emp_id = ea.emp_id
    join cc_users u on e.user_id = u.user_id
    where a.approved = true and a.completed = false
    order by a.date desc;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
};

const approveAppointment = (req, res) => {
    let {apptId} = req.body

    sequelize.query(`update cc_appointments set approved = true where appt_id = ${apptId};
    insert into cc_emp_appts (emp_id, appt_id)
    values (${nextEmp}, ${apptId}),
    (${nextEmp + 1}, ${apptId});
    `)
        .then(dbRes => {
            res.status(200).send(dbRes[0]);
            nextEmp += 2;
        })
        .catch(err => console.log(err));
};

const getAllClients = (req, res) => {
    sequelize.query(`select *
    from cc_clients c
    join cc_users u on u.user_id = c.user_id;`)
        .then(dbRes => {
            res.status(200).send(dbRes[0]);
        })
        .catch(err => console.log(err));
};

const getPendingAppointments = (req, res) => {
    sequelize.query(`select * from cc_appointments where approved = false;`)
        .then(dbRes => {
            res.status(200).send(dbRes[0]);
        })
        .catch(err => console.log(err));
};

const getPastAppointments = (req, res) => {
    sequelize.query(`select a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name 
    from cc_appointments a
    join cc_clients c on c.client_id = a.client_id
    join cc_users u on c.user_id = u.user_id
    where a.approved = true and a.completed = true
    order by a.date desc;`)
        .then(dbRes => {
            res.status(200).send(dbRes[0]);
        })
        .catch(err => console.log(err));
};

const completeAppointment = (req, res) => {
    sequelize.query(``)
        .then(dbRes => {
            res.status(200).send(dbRes[0]);
        })
        .catch(err => console.log(err));
};

module.exports = {
    getUpcomingAppointments,
    approveAppointment,
    getAllClients,
    getPendingAppointments,
    getPastAppointments,
    completeAppointment,
};
