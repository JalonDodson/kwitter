import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }

  async register({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async users() {
    try {
      const result = await this.axiosInstance.get("/users?limit=9999");
      console.log("Where am I coming from?", result);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async user(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      // const result = await this.axiosInstance.get(`/users/${username}`);

      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async addPhoto(username, photo) {
    try {
      await this.axiosInstance.put(
        `/users/${username}/picture`,
        photo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT",
            "Access-Control-Allow-Headers": "Authorization, Content-Type",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async createMessage(message) {
    try {
      await this.axiosInstance.post(
        `/messages`,
        {
          text: message,
        }
      );
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

async deleteMessage(messageId) {
  try {
    await this.axiosInstance.delete(`/messages/${messageId}`);
  } catch (err) {
    helpMeInstructor(err)
    return err;
  }
}

  async getMessages() {
    try {
      const result = await this.axiosInstance.get(
      `/messages?limit=100&offset=0`
      )
      return result;
    } catch (err) {
      helpMeInstructor(err)
      console.log("bruh why aint u workin");
      return err;
    }
  }

  async userMessages(username) {
    try {
      const result = await this.axiosInstance.get(
      `/messages?limit=100&offset=0&username=${username}`
      )
      return result;
    } catch (err) {
      helpMeInstructor(err)
      console.log("bruh why aint u workin");
      return err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
