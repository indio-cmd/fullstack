import express from 'express'
import ControllerProdutos from '../controller/produtos.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.get('/buscar', ControllerProdutos.Buscar )
router.get('/buscarum/:id', ControllerProdutos.Buscarum )
router.post('/criar', authMiddleware, ControllerProdutos.Criar )
router.put('/alterar/:id',  ControllerProdutos.Alterar )
router.delete('/deletar/:id', ControllerProdutos.Deletar )

export default router