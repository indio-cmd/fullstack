import RepositoryProdutos from '../repository/produtos.js'

class ServiceProdutos{

     async Buscar(){
   return RepositoryProdutos.Buscar()
       }
   
      async  Buscarum(id){
   if(!id){
       throw new Error("Favor informar o ID")
   }
   return RepositoryProdutos.Buscarum(id)
       }
   
      async  Criar(nome, categoria, marca){
   if(!nome || !categoria || !marca){
       throw new Error("Favor informar todos os parâmetros!!")
   }
   
   const produtocriar = await RepositoryProdutos.Criar(nome, categoria, marca)
return produtocriar
}
   
      async  Alterar(id, nome, categoria, marca){
   if(!id || !nome || !categoria || !marca){
   throw new Error("Favor informar todos os parâmetros")
   }
   
      const produtoalterar =  await  RepositoryProdutos.Alterar(id, nome, categoria, marca)
      return produtoalterar
   }
   
       async Deletar(id){
           if(!id){
               throw new Error("Favor informar o ID")
           }
 const produtodeletar =   await RepositoryProdutos.Deletar(id)
 
  return produtodeletar
       }


}

export default new ServiceProdutos()