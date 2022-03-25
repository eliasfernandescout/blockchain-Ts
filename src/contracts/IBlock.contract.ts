export interface IBlock {
    header: {
        nonce: number
        blockHash: string
    }
    payload: {
        sequence: number
        timestamp: number
        data: any
        previousHash: string
    }
}