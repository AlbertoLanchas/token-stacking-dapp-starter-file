const _NETWORK_ID = 80001;
let SELECT_CONTRACT = {};

SELECT_CONTRACT[_NETWORK_ID] = {
  network_name: "Polygon Mumbai",
  explorer_url: "https://mumbai.polygonscan.com/",
  STACKING: {
    //0x4cA2a661F6bA50c59Eb0854ff6F1B06e228f72b6
    sevenDays: {
      address: "0x51168d2D1B935932959Bd7617982a5C1DB7Fb0AA", // REVISAR
    },
    tenDays: {
      address: "0x51168d2D1B935932959Bd7617982a5C1DB7Fb0AA", // CAMBIAR
    },
    thirtyTwoDays: {
      address: "0x51168d2D1B935932959Bd7617982a5C1DB7Fb0AA", // CAMBIAR
    },
    ninetyDays: {
      address: "0x51168d2D1B935932959Bd7617982a5C1DB7Fb0AA", // CAMBIAR
    },
    abi: [],
  },
  //0x4cA2a661F6bA50c59Eb0854ff6F1B06e228f72b6
  TOKEN: {
    symbol: "TBC", // REVISAR
    address: "0x51168d2D1B935932959Bd7617982a5C1DB7Fb0AA", // CAMBIAR
    abi: [],
  },
};

/* COUNTDOWN GLOBAL */
let countDownGlobal;

/* wallet connection */
let web3;
let oContractToken;
let contractCall = "sevenDays";
let currentAddress;
let web3Main = new Web3("https://rpc.ankr.com/polygon_mumbai");

// Create an instance of Notyf

var notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "bottom" },
});
