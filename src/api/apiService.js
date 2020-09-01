//  const baseURL = "http://localhost:19080/";
const baseURL = "http://192.168.0.28:8080/apiman-gateway/ezshare/";
const APIKEY = "?apikey=0429b102-d063-4094-bcf7-5bf0149d5974 ";
const version = "1.0";

export const movies = async () => {
  const data = await fetch(`${baseURL}movies`);
  return data.json();
};

export const getShowDetail = async (id) => {
  const data = await fetch(`${baseURL}shows/${id}`);
  return data.json();
};
export const searchMovie = async (rt) => {
  const data = await fetch(`${baseURL}search/${rt}`);
  return data.json();
};

export const registerUser = async (dict) => {
  const data = await fetch(`${baseURL}createUser/${version}${APIKEY}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "",
    },
    body: JSON.stringify({
      dict,
    }),
  });
  return data.json();
};

export const getToken = async () => {
  var details = {
    client_id: "test-application",
    password: "test",
    grant_type: "password",
    username: "test",
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  console.log(formBody);
  const data = await fetch(
    "http://192.168.0.28:8080/auth/realms/test-oidc/protocol/openid-connect/token",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    }
  );

  return data.json();
};
