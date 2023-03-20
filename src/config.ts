const basePath = process.cwd();
import MODE from "./helper/blendmode";
import Network from "./helper/NETWORK";
console.log(basePath);
const network = Network.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://crorare.com/",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "blades" },
      { name: "Base" },
      { name: "trxtboard" },
      { name: "traitsholder" },
      { name: "BlankImageholder" },
      { name: "HpHolder" },
      { name: "Frame" },
      { name: "border" },
      { name: "specialholder" },
      { name: "SpecialDamageHolder" },
      { name: "xpholder" },
      { name: "traitsholder" },
      { name: "stars" },
      { name: "nameholder" },
      { name: "leaves" },
      { name: "Badge" },
      { name: "specialdamage" },
      { name: "special" },
      { name: "xppoints" },
      { name: "traits2" },
      { name: "Attack2" },
      { name: "traits1" },
      { name: "Attack1" },
      { name: "level" },
      // { name: "name" },
      { name: "Hp" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1440,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: true,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
  fonts: ["poppins", "sans"],
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

// module.exports = {
//   format,
//   baseUri,
//   description,
//   background,
//   uniqueDnaTorrance,
//   layerConfigurations,
//   rarityDelimiter,
//   preview,
//   shuffleLayerConfigurations,
//   debugLogs,
//   extraMetadata,
//   pixelFormat,
//   text,
//   namePrefix,
//   network,
//   solanaMetadata,
//   gif,
//   preview_gif,
// };

export {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
