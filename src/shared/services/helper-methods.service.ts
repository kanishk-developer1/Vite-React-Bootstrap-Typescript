import { CHAR_STRING } from "shared/utils/constants/App.const";

export const isString = (x: any) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };
  
  export const isJsonString = (str: any) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  
  export const getRandomString = (length = 5) => {
    let result = " ";
    const charactersLength = CHAR_STRING.length;
    for (let i = 0; i < length; i++) {
      result += CHAR_STRING.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  export const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  