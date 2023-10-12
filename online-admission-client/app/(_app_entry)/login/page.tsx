"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signUserIn } from "@/services/dataFetching";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [githubHovered, setGithubHovered] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ username: "", password: "" });

      const loginData = {
        username: formValues.username,
        password: formValues.password,
      };
      console.log(loginData);

      const res = await signUserIn(loginData);

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
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
            src="/assets/images/logo.svg"
            alt="Google Proceed"
            width={40}
            height={40}
            // style={{ height: "2rem" }}
          />
        </Link>
        <form
          onSubmit={onSubmit}
          className="mt-5 max-w-[24rem] w-[24rem] flex flex-col glassmorphism "
        >
          {error && (
            <p className="text-center font-normal bg-red-300 py-2 mb-4 mt-2 rounded-md">
              {error}
            </p>
          )}
          <div className={`mb-2 ${error ? "mt-0" : "mt-6"}`}>
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
              backgroundColor: `${loading ? "#ccc" : ""}`,
            }}
            className="px-7 py-4 mb-3 blue_btn"
            disabled={loading}
          >
            {loading ? "loading..." : "Sign In"}
          </button>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <div
            className="px-7 py-2 mb-3 outline_btn"
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
            <span className="ml-6">Continue with Google</span>
          </div>
          <div
            className="px-7 py-2 outline_btn"
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
            <span className="ml-6">Continue with GitHub</span>
          </div>
        </form>
      </div>
      <div className="glassmorphism mx-auto py-12 px-8 flex flex-col justify-center items-center max-w-[24rem] -my-6">
        <span className="w-full flex justify-center items-center gap-2">
          New to PromptVerse?{" "}
          <Link href="/signup" className="text-blue-600">
            Create an account.
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
