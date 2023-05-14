"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Cookies from "js-cookie";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const requestBody = {
      user: {
        email: email,
        password: password,
      },
    };
    const requestBodyLength = JSON.stringify(requestBody).length;

    fetch("http://127.0.0.1:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": requestBodyLength,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        //sets the response jwt token as a cookie
        const authorizationHeader = response.headers.get("Authorization");
        const jwtToken = authorizationHeader.split(" ")[1];
        Cookies.set("jwt_token", jwtToken, { expires: 1, path: "/" });
        return response.json();
      })
      .then((data) => {
        //sets the data as a cookie and returns a variable as currentUser
        Cookies.set("current_user", JSON.stringify(data.data), {
          expires: 7,
          path: "/",
        });
        if (data.status.code === 200) {
          router.push("/");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div class="-z-0 relative flex h-screen w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-1">
      <Image src="/images/bg-log-page.jpeg" fill class="-z-50 object-cover " />
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-medium  text-white">
            Login to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="mb-4">
              <label class="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label class="sr-only">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-white">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-orange hover:text-indigo-500 cursor-pointer"
            >
              Sign up
            </a>
          </p>
          <div class="flex items-center justify-center mt-6">
            <button
              type="submit"
              class="w-30 h-10 bg-orange flex items-center justify-center rounded-lg font-bold font-lato text-white text-16 tracking-wider transition-colors duration-300 ease-in-out focus:outline-none hover:bg-orangeShadow"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
