import mongoose from 'mongoose';

const apiScheema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true }
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;
