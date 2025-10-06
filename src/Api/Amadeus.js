import axios from "axios";

const authData = new URLSearchParams();
authData.append("grant_type", "client_credentials");
authData.append("client_id", process.env.REACT_APP_AMADEUS_API_KEY);
authData.append("client_secret", process.env.REACT_APP_AMADEUS_API_SECRET);

export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      authData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
};

