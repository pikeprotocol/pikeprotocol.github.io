(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b24be"],{2406:function(a){a.exports=JSON.parse('{"contractName":"Receipt","address":"0x1cDdB4735C994336AdecE7361746f7808e0Ab648","abi":[{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BaseBank","name":"_address","type":"address"}],"name":"setBankContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BaseFunds","name":"_address","type":"address"}],"name":"setFundsContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BaseNet","name":"_address","type":"address"}],"name":"setNetContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BasePause","name":"_address","type":"address"}],"name":"setPauseContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BaseReceipt","name":"_address","type":"address"}],"name":"setReceiptContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract BaseUsers","name":"_address","type":"address"}],"name":"setUserContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"upgrade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"buyMiner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"},{"internalType":"bool","name":"_isErc20","type":"bool"}],"name":"transferTokens","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052600080546001600160a01b031916331790556107ac806100256000396000f3fe6080604052600436106100d25760003560e01c80638da5cb5b1161007f578063aeb5d2c111610059578063aeb5d2c11461024d578063d351b5fd14610280578063f2fde38b146102b3578063f3fef3a3146102e6576100d2565b80638da5cb5b1461019e5780639b19826d146101cf578063a1206d4e1461021a576100d2565b806362de3bd1116100b057806362de3bd11461013a5780636dc2d7871461016b5780638033d5811461013a576100d2565b80630161ca79146100d457806319bcef6d1461010757806345977d031461013a575b005b3480156100e057600080fd5b506100d2600480360360208110156100f757600080fd5b50356001600160a01b031661031f565b34801561011357600080fd5b506100d26004803603602081101561012a57600080fd5b50356001600160a01b0316610358565b6101576004803603602081101561015057600080fd5b5035610391565b604080519115158252519081900360200190f35b34801561017757600080fd5b506100d26004803603602081101561018e57600080fd5b50356001600160a01b0316610497565b3480156101aa57600080fd5b506101b36104d0565b604080516001600160a01b039092168252519081900360200190f35b3480156101db57600080fd5b50610157600480360360808110156101f257600080fd5b506001600160a01b0381358116916020810135909116906040810135906060013515156104df565b34801561022657600080fd5b506100d26004803603602081101561023d57600080fd5b50356001600160a01b0316610625565b34801561025957600080fd5b506100d26004803603602081101561027057600080fd5b50356001600160a01b031661065e565b34801561028c57600080fd5b506100d2600480360360208110156102a357600080fd5b50356001600160a01b0316610697565b3480156102bf57600080fd5b506100d2600480360360208110156102d657600080fd5b50356001600160a01b03166106d0565b3480156102f257600080fd5b506100d26004803603604081101561030957600080fd5b506001600160a01b038135169060200135610715565b6000546001600160a01b0316331461033657600080fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461036f57600080fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b600080821161039f57600080fd5b60015467016345785d8a00006001600160a01b03909116311015610417576001546001600160a01b03166108fc670de0b6b3a76400003031116103e35730316103ed565b670de0b6b3a76400005b6040518115909202916000818181858888f19350505050158015610415573d6000803e3d6000fd5b505b60005467016345785d8a00006001600160a01b0390911631101561048f576000546001600160a01b03166108fc670de0b6b3a764000030311161045b573031610465565b670de0b6b3a76400005b6040518115909202916000818181858888f1935050505015801561048d573d6000803e3d6000fd5b505b506001919050565b6000546001600160a01b031633146104ae57600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b600080546001600160a01b031633146104f757600080fd5b6000831161050457600080fd5b600182151514156105a157846001600160a01b031663a9059cbb85856040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561056f57600080fd5b505af1158015610583573d6000803e3d6000fd5b505050506040513d602081101561059957600080fd5b5061061a9050565b846001600160a01b031663a9059cbb85856040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561060157600080fd5b505af1158015610615573d6000803e3d6000fd5b505050505b506001949350505050565b6000546001600160a01b0316331461063c57600080fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461067557600080fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106ae57600080fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106e757600080fd5b6001600160a01b0381161561071257600080546001600160a01b0319166001600160a01b0383161790555b50565b6000546001600160a01b0316331461072c57600080fd5b816001600160a01b03166108fc6000831161074857303161074a565b825b6040518115909202916000818181858888f19350505050158015610772573d6000803e3d6000fd5b50505056fea265627a7a72315820535c916e972895b8fb994f6470267e105b353c791edf58098eeebe3fc2d36e0d64736f6c634300050c0032"}')}}]);