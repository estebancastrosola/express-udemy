import express, { Router } from 'express';
const router = express.Router();

// Importar el model nota
import Nota from '../models/nota';


// Agregar una nota
router.post('/nueva-nota', async(req, res) => {
    const body = req.body;

    try {
        const notaDB = await Nota.create(body);

        res.status(200).json({
            notaDB
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error',
            error
        })
    }
});

// Get con parámetros
router.get('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const notaDB = await Nota.findOne({_id});
      res.json(notaDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

  // Get con todos los documentos
router.get('/nota', async(req, res) => {
    try {
      const notaDb = await Nota.find();
      res.json(notaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

// Delete eliminar una nota
router.delete('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const notaDb = await Nota.findByIdAndDelete({_id});
      if(!notaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(notaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error.',
        error
      })
    }
});

//Exportación de router
module.exports = router;