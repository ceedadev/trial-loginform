"use client";

import * as React from "react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function LanguageDropdown() {
  return (
    <Popover>
      <Popover.Button className="flex items-center space-x-2">
        <div className="object-">
          <Image
            src={"/globe.svg"}
            height={24}
            width={24}
            alt="globe icon"
            className=""
          />
        </div>
        <p>English</p>
        <FaChevronDown className="text-[rgb(25,25,25)] h-3 w-3" />
      </Popover.Button>
      <Popover.Panel className="absolute z-50 bg-white rounded-lg shadow-md overflow-clip">
        <div className="hover:bg-gray-100 px-6 py-4">English</div>
        <div className="hover:bg-gray-100 px-6 py-4">Español</div>
      </Popover.Panel>
    </Popover>
  );
}
