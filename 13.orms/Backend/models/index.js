import users from './models_users.js'
import tasks from  './models_tasks.js'

users.hasMany(tasks,{foreignKey:"user_id",onDelete: "CASCADE"});
tasks.belongsTo(users,{foreignKey:"user_id"});

export {users,tasks};