import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/20/solid";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

function MultiLang() {
  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-white pt-2">
            <GlobeAltIcon
              className="-mr-1 h-10 w-8 text-gray-400 "
              aria-hidden="true"
            />
            <ChevronDownIcon
              className="-mr-1 h-10 w-8 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition as={Fragment}>
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("en")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    English
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("es")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Spanish
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("de")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    German
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("fa")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Persian
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("fr")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    French
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("it")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Italian
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("ja")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Japanese
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("pt")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Portuguese
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("ru")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Russian
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("tr")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Turkish
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("vi")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Vietnamese
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handleClick("zh")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Chinese
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default MultiLang;
