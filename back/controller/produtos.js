import ServiceProdutos from '../service/produtos.js'

class ControllerProdutos{

   async  Buscar(req, res){
      try {
          const produtos = await ServiceProdutos.Buscar()
  
          res.status(200).send({ produtos })
      } catch (error) {
          res.status(500).send({message: error.message})
      }
      }
  
    async  Buscarum(req, res){
    try {
        const id = req.params.id
        const produto = await ServiceProdutos.Buscarum(id)
         
  
        res.status(200).send({ produto })
      } catch (error) {
          res.status(500).send({message: error.message})
      }
  
      }
  
   async   Criar(req, res){
  try {
      const  {nome, categoria, marca} = req.body
      
      await ServiceProdutos.Criar(nome, categoria, marca)
         
      res.status(200).send({message: "Produto criado com sucesso!"})
      } catch (error) {
          res.status(500).send({message: error.message})
      }
      }
  
   async   Alterar(req, res){
  try {
        const id = req.params.id
        const {nome, categoria, marca} = req.body
  
      await ServiceProdutos.Alterar(id, nome, categoria, marca)
  
      res.status(200).send({message: "Produto alterado com sucesso!"})
      } catch (error) {
          res.status(500).send({message: error.message})
      }
      }
  
   async   Deletar(req, res){
  try {
        const id = req.params.id
         
        await ServiceProdutos.Deletar(id)
   
        res.status(200).send({message: "Produto deletado com sucesso!"})
      } catch (error) {
          res.status(500).send({message: error.message})
      }
      }
}

export default new ControllerProdutos()