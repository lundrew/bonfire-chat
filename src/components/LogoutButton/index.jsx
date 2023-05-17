import React from "react";
import Cookies from "js-cookie";

function LogoutButton() {
  const userToken = Cookies.get("jwt_token");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://bonfire-api-production.up.railway.app/logout", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Successful Logout");
          Cookies.remove("jwt_token");
          Cookies.remove("current_user");
          window.location.reload(true);
        } else {
          console.log("Failed to Logout");
        }
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div class="relative pt-2 pb-2 ">
      <button onClick={handleSubmit}>
        <div class="w-43 h-15 bg-orange flex items-center justify-center rounded-lg font-normal font-lato text-white text-24 tracking-wider transition-colors duration-300 ease-in-out focus:outline-none hover:bg-orangeShadow cursor-pointer">
          Log out
        </div>
      </button>
    </div>
  );
}

export default LogoutButton;
