import { CookieInterface } from "shared/utils/typings/app.interface";

const setToLocalStorage = <T>(storageKey: string, data: T) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

const getFromLocalStorage = (storageKey: string) => {
  const localItem: string | null = localStorage.getItem(storageKey);
  return localItem ? JSON.parse(localItem) : localItem;
}

const deleteFromLocalStorage = (storageKey: string) => {
  localStorage.removeItem(storageKey);
}

const setToSessionStorage = <T>(storageKey: string, data: T) => {
  sessionStorage.setItem(storageKey, JSON.stringify(data));
}

const getFromSessionStorage = (storageKey: string) => {
  const sessionItem: string | null = sessionStorage.getItem(storageKey);
  return sessionItem ? JSON.parse(sessionItem) : sessionItem;
}

const deleteFromSessionStorage = (storageKey: string) => {
  sessionStorage.removeItem(storageKey);
}

const setBrowserCookie = (cookieName: string, cookieValue: any, options: CookieInterface) => {
  const date = new Date();
  const { expiryDays, path, samesite, domain } = options;
  date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
  const expiringOn = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expiringOn};path=${path};samesite=${samesite};domain=${domain}`;
}

const getBrowserCookie = (cookieName: string) => {
  const name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const deleteBrowserCookie = (cookieName: string) => {
  document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const SessionStorageService = {
  setToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage,
  setToSessionStorage,
  getFromSessionStorage,
  deleteFromSessionStorage,
  setBrowserCookie,
  getBrowserCookie,
  deleteBrowserCookie
}

export default SessionStorageService;
