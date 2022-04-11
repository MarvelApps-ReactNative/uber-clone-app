import { Icon } from "../config";

const getCarImage = (type: string) => {
    if (type === 'UberX') {
      return Icon.TOPUBERX;
    }
    if (type === 'Comfort') {
      return Icon.TOPCOMFORT;
    }
    return Icon.TOPUBERXL;
  };

export default getCarImage