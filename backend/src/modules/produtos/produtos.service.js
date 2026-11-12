export class PordutosService {
    constructor(repo) {
        this.repo = repo
    }


    async findManyProdutos() {
        try {
            const produtos = await this.repo.findMany()
            
            return produtos
        } catch (error) {
            if (error instanceof Error) {
                throw error
            }
            throw new Error("erro ao buscar produtos")
        }
    }
}