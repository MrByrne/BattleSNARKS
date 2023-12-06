// --------- Connect to ZK SNARK Smart Contract ------------

const connectContract = async () => {
    document.getElementById("zkContract").style.backgroundColor = "rgba(135, 206, 250, 0.9)";
    document.getElementById("zkContract").innerHTML = "Let's Play! Find the BattleSNARK";

}

// --------- Check ZK-SNARK Smart Contract ------------
let data;
let inputValue;
let gridBox;

// Call verifyTX function to check if data-value matches ZK-SNARK expected input
const callVerifyTx = async () => {
   
    data = await verifyWithAllProofs(inputValue);

    if (data == true) {
        gridBox.innerHTML = "HIT";
        const sinkingShip = document.createElement("img");
        sinkingShip.src = "/assets/img/yamato-sinking-ship.gif";
        sinkingShip.width = 40;
        sinkingShip.width = 40;
        gridBox.innerHTML = "";
        gridBox.appendChild(sinkingShip);
        gridBox.style.backgroundColor = "rgba(0, 255, 65, 0.5)";
        gridBox.style.color = "black";

        document.getElementById("zkContract").innerHTML = "YOU SUNK MY BATTLESNARK!";
        document.getElementById("zkContract").style.backgroundColor = "rgba(255, 215, 0)";
        document.getElementById("zkContract").style.border = "white";

        const gifPlayDuration = 400;
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
const buttonClick10 = async () => {
    gridBox = document.getElementById('tile-10');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick11 = async () => {
    gridBox = document.getElementById('tile-11');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick12 = async () => {
    gridBox = document.getElementById('tile-12');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick13 = async () => {
    gridBox = document.getElementById('tile-13');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick14 = async () => {
    gridBox = document.getElementById('tile-14');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick15 = async () => {
    gridBox = document.getElementById('tile-15');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick16 = async () => {
    gridBox = document.getElementById('tile-16');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick17 = async () => {
    gridBox = document.getElementById('tile-17');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick18 = async () => {
    gridBox = document.getElementById('tile-18');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick19 = async () => {
    gridBox = document.getElementById('tile-19');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick20 = async () => {
    gridBox = document.getElementById('tile-20');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick21 = async () => {
    gridBox = document.getElementById('tile-21');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick22 = async () => {
    gridBox = document.getElementById('tile-22');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick23 = async () => {
    gridBox = document.getElementById('tile-23');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick24 = async () => {
    gridBox = document.getElementById('tile-24');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick25 = async () => {
    gridBox = document.getElementById('tile-25');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick26 = async () => {
    gridBox = document.getElementById('tile-26');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick27 = async () => {
    gridBox = document.getElementById('tile-27');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick28 = async () => {
    gridBox = document.getElementById('tile-28');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick29 = async () => {
    gridBox = document.getElementById('tile-29');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick30 = async () => {
    gridBox = document.getElementById('tile-30');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick31 = async () => {
    gridBox = document.getElementById('tile-31');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick32 = async () => {
    gridBox = document.getElementById('tile-32');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick33 = async () => {
    gridBox = document.getElementById('tile-33');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick34 = async () => {
    gridBox = document.getElementById('tile-34');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick35 = async () => {
    gridBox = document.getElementById('tile-35');
    inputValue = gridBox.getAttribute('data-value');
    callVerifyTx();
}
const buttonClick36 = async () => {
    gridBox = document.getElementById('tile-36');
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

    const tile_10 = document.getElementById('tile-10');
    tile_10.innerText = 'B4';
    tile_10.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_10.style.color = 'white';

    const tile_11 = document.getElementById('tile-11');
    tile_11.innerText = 'B5';
    tile_11.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_11.style.color = 'white';

    const tile_12 = document.getElementById('tile-12');
    tile_12.innerText = 'B6';
    tile_12.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_12.style.color = 'white';

    const tile_13 = document.getElementById('tile-13');
    tile_13.innerText = 'C1';
    tile_13.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_13.style.color = 'white';

    const tile_14 = document.getElementById('tile-14');
    tile_14.innerText = 'C2';
    tile_14.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_14.style.color = 'white';

    const tile_15 = document.getElementById('tile-15');
    tile_15.innerText = 'C3';
    tile_15.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_15.style.color = 'white';

    const tile_16 = document.getElementById('tile-16');
    tile_16.innerText = 'C4';
    tile_16.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_16.style.color = 'white';

    const tile_17 = document.getElementById('tile-17');
    tile_17.innerText = 'C5';
    tile_17.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_17.style.color = 'white';

    const tile_18 = document.getElementById('tile-18');
    tile_18.innerText = 'C6';
    tile_18.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_18.style.color = 'white';

    const tile_19 = document.getElementById('tile-19');
    tile_19.innerText = 'D1';
    tile_19.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_19.style.color = 'white';

    const tile_20 = document.getElementById('tile-20');
    tile_20.innerText = 'D2';
    tile_20.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_20.style.color = 'white';

    const tile_21 = document.getElementById('tile-21');
    tile_21.innerText = 'D3';
    tile_21.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_21.style.color = 'white';

    const tile_22 = document.getElementById('tile-22');
    tile_22.innerText = 'D4';
    tile_22.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_22.style.color = 'white';

    const tile_23 = document.getElementById('tile-23');
    tile_23.innerText = 'D5';
    tile_23.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_23.style.color = 'white';

    const tile_24 = document.getElementById('tile-24');
    tile_24.innerText = 'D6';
    tile_24.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_24.style.color = 'white';

    const tile_25 = document.getElementById('tile-25');
    tile_25.innerText = 'E1';
    tile_25.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_25.style.color = 'white';

    const tile_26 = document.getElementById('tile-26');
    tile_26.innerText = 'E2';
    tile_26.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_26.style.color = 'white';

    const tile_27 = document.getElementById('tile-27');
    tile_27.innerText = 'E3';
    tile_27.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_27.style.color = 'white';

    const tile_28 = document.getElementById('tile-28');
    tile_28.innerText = 'E4';
    tile_28.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_28.style.color = 'white';

    const tile_29 = document.getElementById('tile-29');
    tile_29.innerText = 'E5';
    tile_29.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_29.style.color = 'white';

    const tile_30 = document.getElementById('tile-30');
    tile_30.innerText = 'E6';
    tile_30.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_30.style.color = 'white';

    const tile_31 = document.getElementById('tile-31');
    tile_31.innerText = 'F1';
    tile_31.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_31.style.color = 'white';

    const tile_32 = document.getElementById('tile-32');
    tile_32.innerText = 'F2';
    tile_32.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_32.style.color = 'white';

    const tile_33 = document.getElementById('tile-33');
    tile_33.innerText = 'F3';
    tile_33.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_33.style.color = 'white';

    const tile_34 = document.getElementById('tile-34');
    tile_34.innerText = 'F4';
    tile_34.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_34.style.color = 'white';

    const tile_35 = document.getElementById('tile-35');
    tile_35.innerText = 'F5';
    tile_35.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_35.style.color = 'white';

    const tile_36 = document.getElementById('tile-36');
    tile_36.innerText = 'F6';
    tile_36.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    tile_36.style.color = 'white';

}