import express from 'express'
import ControllerProdutos from '../controller/produtos.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.get('/buscar', ControllerProdutos.Buscar )
router.get('/buscarum', ControllerProdutos.Buscarum )
router.post('/criar', authMiddleware, ControllerProdutos.Criar )
router.put('/alterar', authMiddleware, ControllerProdutos.Alterar )
router.deletar('/deletar',authMiddleware, ControllerProdutos.Deletar )

export default router