import gamecube_data from "./gamecube_data";
import n64_data from "./n64_data";
import nes_data from "./nes_data";
import ps1_data from "./ps1_data";
import ps2_data from "./ps2_data";
import snes_data from "./snes_data";
import xbox_data from "./xbox_data";
import xbox360_data from "./xbox360_data";

const game_data = [
  ...gamecube_data,
  ...n64_data,
  ...nes_data,
  ...ps1_data,
  ...ps2_data,
  ...snes_data,
  ...xbox_data,
  ...xbox360_data,
];

export default game_data;
