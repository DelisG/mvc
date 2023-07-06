import apis from '../models/apis.js';

class ApiController {

    static getAllApis = (req,res) => {
        apis.find((err,apis) => {
            res.status(200).json(apis)
        })
    }

    static createApis = (req, res) => {
        let api = new apis(req.body);

        api.save((err) => {
            if (err) {
            res.status(500).send ({message: `${err.message} - falha ao cadastrar Api`});
            } else {
                res.status(201).send(api.toJSON());
            }
        })
    }
}

export default ApiController;