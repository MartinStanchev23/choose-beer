import axios from "axios";

//'3c81c5f0b81a24227ad1defc74bae8fb'
export const configureAxios = () => {
  axios.interceptors.request.use(
    (config) => {
      config.params = {
        ...config.params,
        key: "3c81c5f0b81a24227ad1defc74bae8fb", ///Having keys on the front-end part is not a good decision!
      };
      console.log(config);
      return config;
    },
    (error) => Promise.reject(error)
  );
};
