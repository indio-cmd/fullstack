import Produtos from '../model/produtos.js'



class RepositoryProdutos{

async   Buscar(){
        return Produtos.findAll()
    }

  async   Buscarum(id){
return Produtos.findByPk(id)
    }
    
   async  Criar(nome, categoria, marca){
await Produtos.create({nome, categoria, marca})
    }

 async    Alterar(id, nome, categoria, marca){
const produto = await Produtos.findByPk(id)

if(!produto){
    throw new Error("Usuario não encontrado")
}
 
produto.nome = nome || Produtos.nome
produto.categoria = categoria || Produtos.categoria
produto.marca = marca || Produtos.marca

await produto.save()
    }

  async   Deletar(id){
const produto = await Produtos.findByPk(id)
    
if(!produto){
    throw new Error("Usuario não encontrado")
}

await produto.destroy()

    }


}

export default new RepositoryProdutos()