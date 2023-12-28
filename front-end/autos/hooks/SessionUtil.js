export const save = (key, data) => {
  sessionStorage.setItem(key, data);
};

export const get = (key) => {
  sessionStorage.getItem(key);
};

export const getId = () => {
  return sessionStorage.getItem("id");
};

export const getRol = () => {
  return sessionStorage.getItem("rol ");
};

export const getExternalId = () => {
  return sessionStorage.getItem("external_id");
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const getUser = () => {
  let user = sessionStorage.getItem("userData");

  user = user ? JSON.parse(user) : null;

  return user;
};

export const saveToken = (key) => {
  sessionStorage.setItem("token", key);
};

export const borrarSesion = () => {
  sessionStorage.clear();
};

export const estaSesion = () => {
  var token = sessionStorage.getItem("token");
  return token && (token != "undefined" || token != null || token != "null");
};
