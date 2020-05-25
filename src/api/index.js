import axios from "axios";

export const getRandomBeer = async () => {
  const {
    data: { data },
  } = await axios("/beers", { params: { order: "random" } });
  return data[0];
};

export const getBeer = async (filters) => {
  const { name } = filters;
  return await axios("/beers", { params: { name } });
};
