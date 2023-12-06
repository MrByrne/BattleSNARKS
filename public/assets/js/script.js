// --------- Connect to User Wallet ------------
let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("connect-wallet").innerHTML = `Wallet: ${account}`;
    }
}

// --------- Connect to Donate Smart Contract ------------
const connectDonateContract = async () => {
    const ABI = [
        {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const Address = "0x55a6e2Dca5212918A53A0E6c41c85a7852203272";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("connect-address").innerHTML = "Connected to Contract";
}

// --------- Donate Function ------------
const donate = async () => {
    const amountWei = document.getElementById("depositInput").value;
    if (amountWei != 0) {
        const amountETH = amountWei * 1e18;
        await window.contract.methods.deposit().send({ from: account, value: amountETH });
    }
};

// --------- Connect to ZK SNARK Smart Contract ------------
const ABI = [{ "inputs": [{ "components": [{ "components": [{ "internalType": "uint256", "name": "X", "type": "uint256" }, { "internalType": "uint256", "name": "Y", "type": "uint256" }], "internalType": "struct Pairing.G1Point", "name": "a", "type": "tuple" }, { "components": [{ "internalType": "uint256[2]", "name": "X", "type": "uint256[2]" }, { "internalType": "uint256[2]", "name": "Y", "type": "uint256[2]" }], "internalType": "struct Pairing.G2Point", "name": "b", "type": "tuple" }, { "components": [{ "internalType": "uint256", "name": "X", "type": "uint256" }, { "internalType": "uint256", "name": "Y", "type": "uint256" }], "internalType": "struct Pairing.G1Point", "name": "c", "type": "tuple" }], "internalType": "struct Verifier.Proof", "name": "proof", "type": "tuple" }, { "internalType": "uint256[2]", "name": "input", "type": "uint256[2]" }], "name": "verifyTx", "outputs": [{ "internalType": "bool", "name": "r", "type": "bool" }], "stateMutability": "view", "type": "function" }];

const Address = "0x3763bB049AA2CdfAc8B57eF5AeFd2bAa16d3F8F0";

const connectContract = async () => {
    document.getElementById("zkContract").style.backgroundColor = "rgba(135, 206, 250, 0.9)";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").innerHTML = Address;
    document.getElementById("zkContract").innerHTML = "Let's Play! Find the BattleSNARK";

}

// --------- Check ZK-SNARK Smart Contract ------------
let data;
let inputValue;
let gridBox;

// Call verifyTX function to check if data-value matches ZK-SNARK expected input
const callVerifyTx = async () => {

    const proof = [
        [
            "0x0955c79850a038215a309ebafa82436c912c3e0e51259bd8149aa12da07f7176",
            "0x01ab0665eafde4efb0ad15050019c33477249ad242ac220a66ce69c3bbf2ec5b"
        ],
        [
            [
                "0x1d7e56e9b2a8457906c329bab5cedd019354e5c4a54d4092d0ab0bafce857db8",
                "0x1bed573a70bd2c80e8b6773d69fb8e4c7468b73f500ba6605b3044bdda4e46fb"
            ],
            [
                "0x2a60b1ae4d1e54f17b4ec95983af559da9a34bcf36634a881a881c0085d52533",
                "0x242e98265c978166ed461b012d76f02072d340218ae6619528066ee117c2c1a6"
            ]
        ],
        [
            "0x154876e2edcf4486065debe25e60c1e167c59991ffba7bacc2b46ff8282dfaeb",
            "0x303fe01eeca2d0141bc03f3c4036d589d618cfe3ec48afb3f4c4a39e432d51d4"
        ]
    ];

    const input = [inputValue, 1];
    data = await window.contract.methods.verifyTx(proof, input).call();
    if (data == true) {
        gridBox.innerHTML = "HIT";
        const sinkingShip = document.createElement("img");
        sinkingShip.src = "/assets/img/yamato-sinking-ship.gif";
        sinkingShip.width = 70;
        sinkingShip.width = 70;
        gridBox.innerHTML = "";
        gridBox.appendChild(sinkingShip);
        gridBox.style.backgroundColor = "rgba(0, 255, 65, 0.5)";
        gridBox.style.color = "black";

        document.getElementById("zkContract").innerHTML = "YOU SUNK MY BATTLESNARK! YOU WIN!";
        document.getElementById("zkContract").style.backgroundColor = "rgba(255, 215, 0)";
        document.getElementById("zkContract").style.border = "white";

        const gifPlayDuration = 1100;
        setTimeout(function () {
            gridBox.innerHTML = "HIT";
        }, gifPlayDuration);

    }
    else {
        gridBox.style.backgroundColor = "rgba(192, 192, 192, 0.5)";
        gridBox.style.color = "white";
        gridBox.innerHTML = "MISS";
    }
}

// Button click actions

function buttonClick() {
    gridBox = document.getElementById('tile-1');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick2 = async () => {
    gridBox = document.getElementById('tile-2');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick3 = async () => {
    gridBox = document.getElementById('tile-3');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick4 = async () => {
    gridBox = document.getElementById('tile-4');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick5 = async () => {
    gridBox = document.getElementById('tile-5');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick6 = async () => {
    gridBox = document.getElementById('tile-6');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick7 = async () => {
    gridBox = document.getElementById('tile-7');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

const buttonClick8 = async () => {
    gridBox = document.getElementById('tile-8');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

function buttonClick9() {
    gridBox = document.getElementById('tile-9');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}

// --------- Reset Tiles ------------
function resetBoard() {
    document.getElementById("zkContract").innerHTML = "Let's Play! Find the BattleSNARK";
    document.getElementById("zkContract").style.backgroundColor = "rgba(135, 206, 250, 0.9)";

    const tile_1 = document.getElementById('tile-1');
    tile_1.innerText = 'A1';
    tile_1.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_1.style.color = "white";

    const tile_2 = document.getElementById('tile-2');
    tile_2.innerText = 'A2';
    tile_2.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_2.style.color = "white";

    const tile_3 = document.getElementById('tile-3');
    tile_3.innerText = 'A3';
    tile_3.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_3.style.color = "white";

    const tile_4 = document.getElementById('tile-4');
    tile_4.innerText = 'B1';
    tile_4.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_4.style.color = "white";

    const tile_5 = document.getElementById('tile-5');
    tile_5.innerText = 'B2';
    tile_5.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_5.style.color = "white";

    const tile_6 = document.getElementById('tile-6');
    tile_6.innerText = 'B3';
    tile_6.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_6.style.color = "white";

    const tile_7 = document.getElementById('tile-7');
    tile_7.innerText = 'C1';
    tile_7.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_7.style.color = "white";

    const tile_8 = document.getElementById('tile-8');
    tile_8.innerText = 'C2';
    tile_8.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_8.style.color = "white";

    const tile_9 = document.getElementById('tile-9');
    tile_9.innerText = 'C3';
    tile_9.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    tile_9.style.color = "white";
}