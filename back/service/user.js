import Repository from '../repository/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'batata123'
const SALT = 12

class ServiceProdutos{
   async Buscar(){
return Repository.Buscar()
    }

   async  Buscarum(id){
if(!id){
    throw new Error("Favor informar o ID")
}
return Repository.Buscarum(id)
    }

   async  Criar(name, email, password){
if(!name || !email || !password){
    throw new Error("Favor informar todos os parâmetros!!")
}

const cryptPass = await bcrypt.hash(password, SALT)

await Repository.Criar(name, email, cryptPass)
    }

   async  Alterar(id, name, email, password){
if(!id || !name || !email || !password){
throw new Error("Favor informar todos os parâmetros")
}

    const cryptPass = !password
    ?undefined
    : await bcrypt.hash(password, SALT)

    await  Repository.Alterar(id, name, email, password)
}

    async Deletar(id){
        if(!id){
            throw new Error("Favor informar o ID")
        }
await Repository.Deletar(id)
    }


   async  Login(email, password){
        if(!email || !password){
            throw new Error("Email ou senha inválidos")
        }
        const user = await Repository.Login(email)

        if(
            !user 
            || !(await bcrypt.compare(String(password), user.password))
        ){
            throw new Error("Email ou senha inválidos")
        }

        return jwt.sign(
            {
                id: user.id,
                email: user. email
            },
            SECRET,
            {
                expiresIn:60
            }
        )
    }

}

export default new ServiceProdutos()