(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af502"],{"0e90":function(e){e.exports=JSON.parse('{"contractName":"LINK","address":"0x53b94F9474c01678040BA7da4bc54DCD8c0Ed0BA","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"who","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Airdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_blackListedUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"airdropTest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newBasisPoints","type":"uint256"},{"internalType":"uint256","name":"newMaxFee","type":"uint256"}],"name":"setFeeRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000805460ff60a01b1916815560038190556004556000196006553480156200002c57600080fd5b50600080546001600160a01b03191633179055600b805460ff60a01b191690556012600a5560408051808201909152600f8082527f436861696e4c696e6b20546f6b656e0000000000000000000000000000000000602090920191825262000097916008916200014d565b506040805180820190915260048082527f4c494e4b000000000000000000000000000000000000000000000000000000006020909201918252620000de916009916200014d565b50600a8054633b9aca00910a026001819055600080546001600160a01b0390811682526002602090815260408084208590558354815195865290519216937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3620001f2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019057805160ff1916838001178555620001c0565b82800160010185558215620001c0579182015b82811115620001c0578251825591602001919060010190620001a3565b50620001ce929150620001d2565b5090565b620001ef91905b80821115620001ce5760008155600101620001d9565b90565b6118e880620002026000396000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80638456cb591161012a578063db006a75116100bd578063e4997dc51161008c578063f2d2a75111610071578063f2d2a751146105be578063f2fde38b146105e1578063f3bdc2281461060757610226565b8063e4997dc514610590578063e5b5019a146105b657610226565b8063db006a7514610517578063dd62ed3e14610534578063dd644f7214610562578063e47d60601461056a57610226565b806390238b7d116100f957806390238b7d146104be57806395d89b41146104c6578063a9059cbb146104ce578063cc872b66146104fa57610226565b80638456cb591461047a578063893d20e8146104825780638ba4cc3c1461048a5780638da5cb5b146104b657610226565b806327e235e3116101bd5780633f4ba83a1161018c5780635c658165116101715780635c6581651461041e5780635c975abb1461044c57806370a082311461045457610226565b80633f4ba83a146103f057806359bf1abe146103f857610226565b806327e235e3146103b2578063313ce567146103d857806335390714146103e05780633eaaf86b146103e857610226565b80630ecb93c0116101f95780630ecb93c01461031857806318160ddd1461033e57806323b872dd1461035857806326976e3f1461038e57610226565b806306fdde031461022b5780630753c30c146102a8578063095ea7b3146102d05780630e136b1914610310575b600080fd5b61023361062d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026d578181015183820152602001610255565b50505050905090810190601f16801561029a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ce600480360360208110156102be57600080fd5b50356001600160a01b03166106bb565b005b6102fc600480360360408110156102e657600080fd5b506001600160a01b038135169060200135610742565b604080519115158252519081900360200190f35b6102fc610822565b6102ce6004803603602081101561032e57600080fd5b50356001600160a01b0316610832565b6103466108a4565b60408051918252519081900360200190f35b6102fc6004803603606081101561036e57600080fd5b506001600160a01b0381358116916020810135909116906040013561097d565b610396610a92565b604080516001600160a01b039092168252519081900360200190f35b610346600480360360208110156103c857600080fd5b50356001600160a01b0316610aa1565b610346610ab3565b610346610ab9565b610346610abf565b6102ce610ac5565b6102fc6004803603602081101561040e57600080fd5b50356001600160a01b0316610b28565b6103466004803603604081101561043457600080fd5b506001600160a01b0381358116916020013516610b4a565b6102fc610b67565b6103466004803603602081101561046a57600080fd5b50356001600160a01b0316610b77565b6102ce610c35565b610396610c9f565b6102ce600480360360408110156104a057600080fd5b506001600160a01b038135169060200135610cae565b610396610d8f565b6102ce610d9e565b610233610e6b565b6102fc600480360360408110156104e457600080fd5b506001600160a01b038135169060200135610ec6565b6102ce6004803603602081101561051057600080fd5b5035610fc8565b6102ce6004803603602081101561052d57600080fd5b5035611073565b6103466004803603604081101561054a57600080fd5b506001600160a01b038135811691602001351661111e565b6103466111bf565b6102fc6004803603602081101561058057600080fd5b50356001600160a01b03166111c5565b6102ce600480360360208110156105a657600080fd5b50356001600160a01b03166111da565b610346611249565b6102ce600480360360408110156105d457600080fd5b508035906020013561124f565b6102ce600480360360208110156105f757600080fd5b50356001600160a01b03166112e4565b6102ce6004803603602081101561061d57600080fd5b50356001600160a01b0316611336565b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106b35780601f10610688576101008083540402835291602001916106b3565b820191906000526020600020905b81548152906001019060200180831161069657829003601f168201915b505050505081565b6000546001600160a01b031633146106d257600080fd5b600b8054600160a01b60ff60a01b199091161773ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03831690811790915560408051918252517fcc358699805e9a8b7f77b522628c7cb9abd07d9efb86b6fb616af1609036a99e916020908290030190a150565b60006040604436101561075457600080fd5b600b54600160a01b900460ff161561080e57600b54604080517faee92d330000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b038781166024830152604482018790529151919092169163aee92d339160648083019260209291908290030181600087803b1580156107db57600080fd5b505af11580156107ef573d6000803e3d6000fd5b505050506040513d602081101561080557600080fd5b5051915061081b565b61081884846113e1565b91505b5092915050565b600b54600160a01b900460ff1681565b6000546001600160a01b0316331461084957600080fd5b6001600160a01b038116600081815260076020908152604091829020805460ff19166001179055815192835290517f42e160154868087d6bfdc0ca23d96a1c1cfa32f1b72ba9ba27b69b98a0d819dc9281900390910190a150565b600b54600090600160a01b900460ff161561093a57600b60009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561090757600080fd5b505afa15801561091b573d6000803e3d6000fd5b505050506040513d602081101561093157600080fd5b5051905061097a565b6000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b546001546109779163ffffffff61145b16565b90505b90565b60008054600160a01b900460ff161561099557600080fd5b6001600160a01b03841660009081526007602052604090205460ff16156109bb57600080fd5b600b54600160a01b900460ff1615610a7d57600b54604080517f8b477adb0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03878116602483015286811660448301526064820186905291519190921691638b477adb9160848083019260209291908290030181600087803b158015610a4a57600080fd5b505af1158015610a5e573d6000803e3d6000fd5b505050506040513d6020811015610a7457600080fd5b50519050610a8b565b610a8884848461146d565b90505b9392505050565b600b546001600160a01b031681565b60026020526000908152604090205481565b600a5481565b60045481565b60015481565b6000546001600160a01b03163314610adc57600080fd5b600054600160a01b900460ff16610af257600080fd5b6000805460ff60a01b191681556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b339190a1565b6001600160a01b03811660009081526007602052604090205460ff165b919050565b600560209081526000928352604080842090915290825290205481565b600054600160a01b900460ff1681565b600b54600090600160a01b900460ff1615610c2557600b54604080517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d6020811015610c1c57600080fd5b50519050610b45565b610c2e82611680565b9050610b45565b6000546001600160a01b03163314610c4c57600080fd5b600054600160a01b900460ff1615610c6357600080fd5b6000805460ff60a01b1916600160a01b1781556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff6259190a1565b6000546001600160a01b031690565b6000546001600160a01b03163314610cc557600080fd5b60015481810111610cd557600080fd5b600080546001600160a01b0316815260026020526040902054610cfe908263ffffffff61145b16565b600080546001600160a01b0390811682526002602052604080832093909355841681522054610d33908263ffffffff61169b16565b6001600160a01b03831660008181526002602090815260409182902093909355805191825291810183905281517f8c32c568416fcf97be35ce5b27844cfddcd63a67a1a602c3595ba5dac38f303a929181900390910190a15050565b6000546001600160a01b031681565b6000600a54600a0a612710029050600154816001540111610dbe57600080fd5b600080546001600160a01b0316815260026020526040902054610de7908263ffffffff61145b16565b600080546001600160a01b0316815260026020526040808220929092553381522054610e19908263ffffffff61169b16565b3360008181526002602090815260409182902093909355805191825291810183905281517f8c32c568416fcf97be35ce5b27844cfddcd63a67a1a602c3595ba5dac38f303a929181900390910190a150565b6009805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106b35780601f10610688576101008083540402835291602001916106b3565b60008054600160a01b900460ff1615610ede57600080fd5b3360009081526007602052604090205460ff1615610efb57600080fd5b600b54600160a01b900460ff1615610fb557600b54604080517f6e18980a0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b0386811660248301526044820186905291519190921691636e18980a9160648083019260209291908290030181600087803b158015610f8257600080fd5b505af1158015610f96573d6000803e3d6000fd5b505050506040513d6020811015610fac57600080fd5b50519050610fc2565b610fbf83836116aa565b90505b92915050565b6000546001600160a01b03163314610fdf57600080fd5b60015481810111610fef57600080fd5b600080546001600160a01b03168152600260205260409020548181011161101557600080fd5b600080546001600160a01b03168152600260209081526040918290208054840190556001805484019055815183815291517fcb8241adb0c3fdb35b70c24ce35c5eb0c17af7431c99f827d44a445ca624176a9281900390910190a150565b6000546001600160a01b0316331461108a57600080fd5b80600154101561109957600080fd5b600080546001600160a01b03168152600260205260409020548111156110be57600080fd5b600180548290039055600080546001600160a01b031681526002602090815260409182902080548490039055815183815291517f702d5967f45f6513a38ffc42d6ba9bf230bd40e8f53b16363c7eb4fd2deb9a449281900390910190a150565b600b54600090600160a01b900460ff16156111b557600b54604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015285811660248301529151919092169163dd62ed3e916044808301926020929190829003018186803b1580156111a157600080fd5b505afa158015610f96573d6000803e3d6000fd5b610fbf838361183a565b60035481565b60076020526000908152604090205460ff1681565b6000546001600160a01b031633146111f157600080fd5b6001600160a01b038116600081815260076020908152604091829020805460ff19169055815192835290517fd7e9ec6e6ecd65492dce6bf513cd6867560d49544421d0783ddf06e76c24470c9281900390910190a150565b60065481565b6000546001600160a01b0316331461126657600080fd5b6014821061127357600080fd5b6032811061128057600080fd5b6003829055600a805461129c918391900a63ffffffff61186516565b600481905560035460408051918252602082019290925281517fb044a1e409eac5c48e5af22d4af52670dd1a99059537a78b31b48c6500a6354e929181900390910190a15050565b6000546001600160a01b031633146112fb57600080fd5b6001600160a01b03811615611333576000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790555b50565b6000546001600160a01b0316331461134d57600080fd5b6001600160a01b03811660009081526007602052604090205460ff1661137257600080fd5b600061137d82610b77565b6001600160a01b0383166000818152600260209081526040808320929092556001805485900390558151928352820183905280519293507f61e6e66b0d6339b2980aecc6ccc0039736791f0ccde9ed512e789a7fbdd698c692918290030190a15050565b6000604060443610156113f357600080fd5b3360008181526005602090815260408083206001600160a01b03891680855290835292819020879055805187815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b60008282111561146757fe5b50900390565b60006060606436101561147f57600080fd5b6001600160a01b03851660009081526005602090815260408083203384529091528120546003549091906114ce90612710906114c290889063ffffffff61186516565b9063ffffffff61189416565b90506004548111156114df57506004545b60065482101561151e576114f9828663ffffffff61145b16565b6001600160a01b03881660009081526005602090815260408083203384529091529020555b6000611530868363ffffffff61145b16565b6001600160a01b03891660009081526002602052604090205490915061155c908763ffffffff61145b16565b6001600160a01b03808a166000908152600260205260408082209390935590891681522054611591908263ffffffff61169b16565b6001600160a01b0380891660008181526002602090815260409182902094909455805185815290519193928c16927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3811561167257600080546001600160a01b0316815260026020526040902054611617908363ffffffff61169b16565b600080546001600160a01b0390811682526002602090815260408084209490945591548351868152935190821693918c16927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a35b506001979650505050505050565b6001600160a01b031660009081526002602052604090205490565b600082820183811015610fbf57fe5b6000604060443610156116bc57600080fd5b60006116d96127106114c26003548761186590919063ffffffff16565b90506004548111156116ea57506004545b60006116fc858363ffffffff61145b16565b3360009081526002602052604090205490915061171f908663ffffffff61145b16565b33600090815260026020526040808220929092556001600160a01b03881681522054611751908263ffffffff61169b16565b6001600160a01b0387166000818152600260209081526040918290209390935580518481529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3811561182e57600080546001600160a01b03168152600260205260409020546117d5908363ffffffff61169b16565b600080546001600160a01b0390811682526002602090815260408084209490945591548351868152935191169233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35b50600195945050505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b6000821580611872575081155b1561187f57506000610fc2565b8282028284828161188c57fe5b0414610fbf57fe5b600080821161189f57fe5b60008284816118aa57fe5b0494935050505056fea265627a7a72315820f047988e68a7e09e99674c42fd4927538f3fb051108c5b58d15b29f94f774dad64736f6c634300050c0032"}')}}]);