const express =  require('express'); 
const crypto =  require('crypto');
const OngController =  require('./controllers/OngController');
const IncidentController =  require('./controllers/IncidentController');
const SessionController =  require('./controllers/SessionController');
const ProfileController =  require('./controllers/ProfileController');

const routes = express.Router();



routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)



module.exports = routes;