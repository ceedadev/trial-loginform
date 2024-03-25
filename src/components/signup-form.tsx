"use client";
import * as React from "react";
import {
  FaRegEye,
  FaRegEyeSlash,
  FaChevronDown,
  FaChevronUp,
  FaExclamationCircle,
} from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

export default function SignupForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Use 8 or more characters with a mix of letters, numbers and symbols"
      );
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="flex flex-col space-y-4 max-w-[238px] w-full">
      <div className="w-full border border-1 border-gray-200 hover:border-[rgb(25,25,25)] rounded overflow-clip">
        <input
          placeholder="Email"
          type="email"
          className="w-full px-2 py-1.5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative w-full border border-1 border-gray-200 hover:border-[rgb(25,25,25)] rounded overflow-clip">
        <input
          onChange={handlePasswordChange}
          placeholder="Password"
          type={passwordVisible ? "text" : "password"}
          className="w-full px-2 py-1.5"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? (
            <FaRegEyeSlash className="text-gray-400 h-4 w-4" />
          ) : (
            <FaRegEye className="text-gray-400 h-4 w-4" />
          )}
        </button>
      </div>
      {passwordError && (
        <div className="flex flex-row ">
          <FaExclamationCircle className=" h-6 w-6 mr-2 text-red-500" />
          <p className="text-sm text-red-500">{passwordError}</p>
        </div>
      )}
      {/* INPUT CHECKBOX */}
      <div className="flex flex-row space-x-4 items-start">
        <input type="checkbox" className="accent-black mt-1 h-4 w-4" />
        <p className="text-[14px] ml-2">
          I agree to Typeform&apos;s{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Data Processing Agreement.
          </a>
        </p>
      </div>
      {/* OPTIONS DROPDOWN */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left ">
              <span>See options</span>
              {open ? (
                <FaChevronUp className="w-4 h-4" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm font-medium mx-4">
              <div className="space-y-2 mb-2">
                <p>
                  Get useful tips, inspiration, and offers via e-communication.
                </p>
                <div className="flex space-x-6 mb-2">
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option1"
                      value="yes"
                    />
                    Yes
                  </label>
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option1"
                      value="no"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="space-y-2 mb-2">
                <p>
                  Tailor Typeform to my needs based on my activity.{" "}
                  <a href="#" className="hover:underline">
                    See Privacy Policy
                  </a>
                </p>
                <div className="flex space-x-6 mb-2">
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option2"
                      value="yes"
                    />
                    Yes
                  </label>
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option2"
                      value="no"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="space-y-2 mb-2">
                <p>
                  Enrich my data with select third parties for more relevant
                  content.{" "}
                  <a href="#" className="hover:underline">
                    See Privacy Policy
                  </a>
                </p>
                <div className="flex space-x-6 mb-2">
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option3"
                      value="yes"
                    />
                    Yes
                  </label>
                  <label className="flex flex-row items-center">
                    <input
                      type="radio"
                      className="mr-2 border-3 checked:border-black checked:border-4 appearance-none rounded-full h-4 w-4 border"
                      name="option3"
                      value="no"
                    />
                    No
                  </label>
                </div>
              </div>

              <p>You can update your preferences in your Profile at any time</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <button
        type="submit"
        className="rounded text-white bg-[rgb(25,25,25)] mx-2 py-2 px-2"
      >
        Create my free account
      </button>
    </form>
  );
}
