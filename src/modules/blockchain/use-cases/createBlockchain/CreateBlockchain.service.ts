import { IBlock } from "../../../../contracts/IBlock.contract"
import { hash } from "../../helpers.ts/helper"


export class Blockchain {
    #chain: IBlock[] = []
    private prefixPow = '0'

    constructor(private readonly dificulty: number = 4) {
        this.#chain.push(this.createBlockGenesis())

    }

    private criarBlocoGenesis(): IBlock {
        const payload: IBlock['payload'] = {
            sequence: 0,
            timestamp: +new Date(),
            data: 'Initial Block',
            previousHash: ''
        }

        return {
            header: {
                nonce: 0,
                blockHash: hash(JSON.stringify(payload))

            },
            payload
        }
    }

    private get lastBlock(): IBlock {
        return this.#chain.at(-1) as IBlock

    }

    private lastBlockHash(): string {
        return this.lastBlock.header.blockHash
    }

    createBlock(data: any): IBlock['payload'] {
        const newBlock: IBlock['payload'] = {
            sequence: this.lastBlock.payload.sequence + 1,
            timestamp: +new Date(),
            data,
            previousHash: this.lastBlockHash()
        }

        console.log(`Block #${newBlock.sequence} criado: ${JSON.stringify(newBlock)}`);
        return newBlock

    }

    blockMiner(block: IBlock['payload']): void {
        let nonce: number = 0
        let init: number = +new Date()

        const hashBlock: any = hash(JSON.stringify(block))
        const hashPow: string = hash(hashBlock + nonce)

        if (hashPow.startsWith(this.prefixPow.repeat(this.dificulty)))
    }
}