import Image from "next/image";
import Link from "next/link";

import SignupForm from "@/components/signup-form";
import LanguageDropdown from "@/components/language-dropdown";

export default function Home() {
  return (
    <main className="">
      <div className=" flex flex-row min-h-screen overflow-hidden">
        {/* LEFT SECTION, HIDDEN ON < LG SCREENS*/}
        <section
          className="hidden lg:flex flex-1 min-h-[90vh] flex-col bg-[rgb(25,25,25)] items-center place-items-center justify-center overflow-clip z-0
        "
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-center leading-tight text-[36px] text-white text-2xl mb-[35px]">
              Sign Up <br /> and come on in
            </h1>
            <Image
              src={"/images/product-sample@2x.webp"}
              height={258}
              width={315}
              alt=""
              className="object-cover mb-10"
            />
          </div>
          <p className="text-white text-[16px] mt-auto mb-10">© Typeform</p>
        </section>
        {/* RIGHT SECTION */}
        <section className="lg:ml-[-16px]  relative flex flex-1 bg-white rounded-tl-2xl rounded-bl-2xl z-50 overflow-clip text-[rgb(25,25,25)]">
          <div className="w-full h-full">
            {/* FORM HEADER */}
            <div className="flex flex-row px-6 py-2">
              <LanguageDropdown />
              <div className="w-full items-center justify-end flex flex-row space-x-2">
                <p className="text-[14px]">Already have an account ?</p>
                <div className="">
                  <Link
                    href={"#"}
                    className="border border-1 border-black rounded-[6px] px-3 py-1.5 text-[rgb(25,25,25)] text-[12px] cursor-pointer"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
            {/* FORM */}
            <div className="flex flex-col h-full self-center items-center justify-center font-light text-[rgb(94,94,94)] px-10 max-w-2xl mx-auto">
              <div className="flex flex-row mb-6 items-center">
                <Image
                  src="/typeform-logo.svg"
                  width={32}
                  height={22}
                  alt="logo"
                />
                <Image
                  src="/typeform-text.svg"
                  width={108}
                  height={24}
                  alt="text logo"
                  className="ml-2"
                />
              </div>
              <p className="text-center mb-6 leading-9 text-2xl">
                Get better data with conversational forms, surveys, quizzes &
                more.
              </p>
              <SignupForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
