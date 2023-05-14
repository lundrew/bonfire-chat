"use client";

import React from "react";
import { useTranslation, Trans } from "react-i18next";
import MultiLang from "../MultiLang";

import { GetCurrentUser } from "@/data/CurrentUser";

import LogoutButton from "@/components/LogoutButton";

function HeroSection() {
  const user = GetCurrentUser();
  const { t } = useTranslation();
  console.log(user);

  return (
    <Trans i18nKey="description1">
      <div class="flex flex-col pl-14 pr-14 pt-18">
        <div class="inline-flex justify-between">
          <p class=" text-white font-bold text-5xl pl-0 pb-6 tracking-normal">
            bonfire
            <span class="font-light">.io</span>
          </p>
          <MultiLang />
        </div>
        <p class="text-white text-8xl font-lato font-normal pb-6 tracking-tight">
          {t("Start a Chat")}
        </p>
        <p class="text-white text-8xl font-lato font-normal pb-6 tracking-tight ml-n8">
          {t("Keep the Fire Burning")}
        </p>
        {user ? (
          <div>
            <div class="relative pt-2 pb-2 ">
              <LogoutButton />
            </div>
            <div class="w-72 p-4 mt-1.5 bg-orange inline-block rounded-lg font-semibold font-lato text-white uppercase text-xs tracking-wider transition-colors duration-300 ease-in-out focus:outline-none  text-gray-800 ">
              Welcome 👋
              <p class="pt-2">{user.email}</p>
            </div>
          </div>
        ) : (
          <div>
            <div class="relative pt-2 pb-2 ">
              <a href="/login">
                <div class="w-43 h-15 bg-orange flex items-center justify-center rounded-lg font-bold font-lato text-white text-24 tracking-wider transition-colors duration-300 ease-in-out focus:outline-none hover:bg-orangeShadow">
                  {t("Login")}
                </div>
              </a>
            </div>
            <div class="relative pt-2 pb-2 ">
              <a href="/signup">
                <div class="w-43 h-15 bg-orange flex items-center justify-center rounded-lg font-bold font-lato text-white text-24 tracking-wider transition-colors duration-300 ease-in-out focus:outline-none hover:bg-orangeShadow">
                  {t("Sign up")}
                </div>
              </a>
            </div>{" "}
          </div>
        )}
      </div>
    </Trans>
  );
}

export default HeroSection;
