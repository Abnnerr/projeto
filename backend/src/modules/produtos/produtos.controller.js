export class ProdutosController {
    constructor(service) {
        this.service = service

        this.findManyPordutos = this.findManyPordutos.bind(this)
    }

    async findManyPordutos(req, res) {
        try {
            const result = await this.service.indManyProdutos()
            
            return res.status(200).json({
                type: "Success",
                message: "deu certo",
                data: result
            })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({
                    type: "Warning",
                    message: "teste"
                })

            }
            return res.status(500).json({
                type: "Warning",
                message: "teste"
            })
        }
    }
}
