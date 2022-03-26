const db = require('../../database/models');
const sequelize = db.sequelize;

const usersControllers = {
    'lista': (req, res) => {
        db.User.findAll()
        .then(allUsers => {

            let usuarios = [];
            
            allUsers.forEach(data => {
                let usuario = {
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    detail: `/users/profile/${data.id}`
                };
                users.push(usuario);
            })
            res.status(200).json( {
                data: {
                    count: users.length,
                    status:200
                },
                usuarios
            })
        })
    },
    "detail": (req, res)=>{
        db.User.findByPk(req.params.id)
        .then(data => {
            let usuarios= {
                id: data.id,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                avatar: `/imges/avatars/${data.avatar}`
            };
            res.status(200).json( {
                meta: {
                    status:200,
                    url: "api/users/:id"
                },
                usuarios
            });
        });
    }
}
module.exports = usersControllers