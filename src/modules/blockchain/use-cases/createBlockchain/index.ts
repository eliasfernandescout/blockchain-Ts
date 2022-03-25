import { Blockchain } from "./CreateBlockchain.service"


const dificulty = Number(process.argv[2]) || 4
const blockchain = new Blockchain()

const numBlocs = Number(process.argv[3]) || 10
let chain = blockchain.chain

for (let i = 1; i < numBlocs; i++ ) {
    const block = blockchain.createBloc(`Block ${i}`)
    const mineInfo = blockchain.mineBloc(block)
    chain = blockchain.sendBloc(mineInfo.minedBlock)

}

console.log('---BLOCKCHAIN---');