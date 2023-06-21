import { API_KEY, HOST_KEY } from "@/actions/actionTypes";
import axios from "axios";

const api_key = API_KEY;
const host_key = HOST_KEY;

export const GET = async (request: Request) => {
  try {
    // const response = await fetch(`https://burgers-hub.p.rapidapi.com/burgers`, {
    //   method: "GET",
    //   headers: {
    //     api_key: process.env.RAPID_API_KEY ? process.env.RAPID_API_KEY : "",
    //     host_key: process.env.RAPID_HOST_KEY ? process.env.RAPID_HOST_KEY : "",
    //   },
    // });

    const options = {
      method: 'GET',
      url: 'https://burgers-hub.p.rapidapi.com/burgers',
      headers: {
        'X-RapidAPI-Key': 'f11a11cc24mshc5079762c058378p1ab15cjsn181bd21f89e3',
        'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
      }
    };
    
    const response = await axios.request(options)

    return new Response(response.data, { status: 200})
  } catch (error) {
    console.error(error);
    return new Response("Failed to get products", { status: 500 });
  }
};
