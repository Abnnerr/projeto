import { ProdutosController } from "../modules/produtos/produtos.controller.js";
import { ProdutosRepository } from "../modules/produtos/produtos.repository.js";
import { PordutosService } from "../modules/produtos/produtos.service.js";

const repo = new ProdutosRepository()
const service = new PordutosService(repo)
const controller = new ProdutosController(service)

export default controller