const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1643372818290,
      "transactions": [],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1643372838869,
      "transactions": [],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1643372842358,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "962e9520803511ec9293410a2917e2ad",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        }
      ],
      "nonce": 124620,
      "hash": "00000d0a2bb631ece6c86c55f15c3ec33b09ebaa129af91a382e2dd6514a2358",
      "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      "index": 4,
      "timestamp": 1643372843708,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "962e9520803511ec9293410a2917e2ad",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        }
      ],
      "nonce": 13274,
      "hash": "0000ccd30bd7d979e8c0fe8382dece47f76d9619f7be00da6429e5e72d370ed6",
      "previousBlockHash": "00000d0a2bb631ece6c86c55f15c3ec33b09ebaa129af91a382e2dd6514a2358"
    },
    {
      "index": 5,
      "timestamp": 1643372958980,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "962e9520803511ec9293410a2917e2ad",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        },
        {
          "amount": 500,
          "sender": "ABjkjklj81230EDF",
          "recipient": "CB82klmllk130EDF",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        },
        {
          "amount": 500,
          "sender": "0aajkjklj81230EDF",
          "recipient": "CB82klmllk130EDF",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        },
        {
          "amount": 500,
          "sender": "0aajkjklj81230EDF",
          "recipient": "CB82kasdlmllk130EDF",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        },
        {
          "amount": 5001,
          "sender": "0aajkjklj81230EDF",
          "recipient": "CB82kasdlmllk130EDF",
          "transactionID": "962434e0803511ec9293410a2917e2ad"
        }
      ],
      "nonce": 43149,
      "hash": "00000b33730276c852c4598ba7ebbd65a62f1597242cfe75432f9d2fc2c75c5d",
      "previousBlockHash": "0000ccd30bd7d979e8c0fe8382dece47f76d9619f7be00da6429e5e72d370ed6"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "962e9520803511ec9293410a2917e2ad",
      "transactionID": "962434e0803511ec9293410a2917e2ad"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": []
};
console.log(bitcoin.chainIsValid(bc1.chain));
//console.log(bitcoin.proofOfWork(pre, cur))
//console.log(bitcoin);