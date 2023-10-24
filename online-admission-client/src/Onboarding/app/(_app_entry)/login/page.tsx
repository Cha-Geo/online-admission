"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { UseSuccessToast } from "@/public/lib/hooks/use-toast";

type Props = {
  username: string;
  password: string;
  loading: boolean;
  errmsg: string | null;
  ntf: string | null;
};

const Login = (props: Props) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState<Props>({
    username: "",
    password: "",
    loading: false,
    errmsg: null,
    ntf: null,
  });
  const [githubHovered, setGithubHovered] = useState(false);

  const callbackUrl = "/dashboard";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const name = formValues.username;
      // Reset form state
      setFormValues((prevState) => ({
        ...prevState,
        loading: true,
        errmsg: null,
        ntf: null,
      }));

      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      console.log("response", res);

      if (!res?.error) {
        setFormValues((prevState) => ({
          ...prevState,
          username: "",
          password: "",
          loading: false,
          ntf: `You have successfully logged in as ${name}`,
        }));
        console.log(formValues);
        UseSuccessToast(`You have successfully logged in as ${name}`);

        router.push(callbackUrl); // Move this line here
      } else {
        //   // Handle login error
        setFormValues((prevState) => ({
          ...prevState,
          loading: false,
          errmsg: res?.error || "An error occurred during login.",
        }));
      }
    } catch (error: any) {
      // Handle other exceptions or errors
      setFormValues((prevState) => ({
        ...prevState,
        loading: false,
        errmsg: error || "An error occurred.",
      }));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="w-full max-w-full flext-start flex-col ">
      <div className=" mx-auto px-8 py-12 flex flex-col justify-center items-center ">
        <Link href="/" className="">
          <Image
            className=""
            src="/assets/images/AUC-web.png"
            alt="Google Proceed"
            width={200}
            height={350}
            // style={{ height: "2rem" }}
          />
        </Link>
        <form
          onSubmit={onSubmit}
          className="mt-5 max-w-[24rem] w-[17rem] xxs:w-[21rem] sx:w-[22rem] xs:w-[24rem] flex flex-col glassmorphism"
        >
          {formValues.errmsg && (
            <p className="text-center font-normal bg-red-300 py-2 mb-4 mt-2 rounded-md">
              {formValues.errmsg}
            </p>
          )}
          <div className={`mb-2 ${formValues.errmsg ? "mt-0" : "mt-6"}`}>
            <input
              required
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              placeholder="User name"
              className={`form_input`}
            />
          </div>
          <div className="mb-6">
            <input
              required
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              className={`form_input`}
            />
          </div>
          <button
            type="submit"
            style={{
              fontSize: "20px",
              height: "2.8rem",
              backgroundColor: `${formValues.loading ? "#ccc" : ""}`,
            }}
            className="px-2 xxs:px-3 xss:px-7 py-4 mb-3 blue_btn w-full"
            disabled={formValues.loading}
          >
            {formValues.loading ? "loading..." : "Sign In"}
          </button>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <div
            className="px-2 xxs:px-3 xss:px-7 py-2 outline_btn mb-3"
            style={{ fontSize: "18px" }}
            // onClick={() =>
            //   signIn("google", { callbackUrl, signIn: "redirect" })
            // }
            role="button"
          >
            <Image
              className="pr-2"
              src="/assets/images/google-svgrepo-com.svg"
              alt="Google Proceed"
              width={30}
              height={30}
              style={{ height: "2rem" }}
            />
            <span className="ml-2 xss:ml-6">Continue with Google</span>
          </div>
          <div
            className="px-2 xxs:px-3 xss:px-7 py-2 outline_btn"
            style={{ fontSize: "18px" }}
            // onClick={() => signIn("github", { callbackUrl })}
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
            role="button"
          >
            <Image
              className="pr-2"
              src="/assets/images/social-github-svgrepo-com.svg"
              alt="github-icon"
              width={30}
              height={30}
              style={{
                height: "2.2rem",
                filter: githubHovered ? "brightness(0) invert(1)" : "none",
              }}
            />
            <span className="ml-2 xss:ml-6">Continue with GitHub</span>
          </div>
        </form>
      </div>
      <div className="mx-auto">
        <div className="glassmorphism mx-auto py-12 px-8 xxs:px-1 xss:px-2 sx:px-4 flex flex-col justify-center items-center max-w-[24rem] w-[17rem] xxs:w-[21rem] sx:w-[22rem] xs:w-[24rem] -my-6">
          <span className="w-full text-center xxs:flex xxs:justify-center xxs:items-center xxs:gap-1 xss:gap-2">
            <p className="a">New to Alpha University?</p>
            <Link href="/signup" className="text-blue-600">
              Create an account.
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
