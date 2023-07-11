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
   
    static getAllApis = (req, res) => {
        apis.find((err, apis) => {
            res.status(200).json(apis);
        })
    }

    static getByIdApis = (req, res) => {
        const id = req.params.id;

        apis.findById(id, (err, apis) => {
            if (err) {
                res.status(400).send({ mensage: `${err.message} - Id do Api não localizado` })
            } else {
                res.status(200).send(apis)
            }
        })
    }

    
    static updateApis = (req,res) => {
        const id = req.params.id;

        apis.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Api atualizado com sucesso'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    } 

    static deleteApis = (req, res) =>{
        const id = req.params.id;

        apis.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Api removido com sucesso'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    } 
}

export default ApiController;