"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Endpoints } from "@/app/api/enpoints";
import { PostRequest } from "@/app/api/route";
import { Button } from "@/components/Buttons";
import { ErrorM, Success } from "@/components/notifications/Notifications";
import ToastMessage from "@/components/notifications/Toast";
import { AxiosError } from "axios";
import { NetworkError } from "@/lib/exceptions";

interface State {
  email: string;
  password: string;
  msg: string | null;
  ntf: string | null;
  errcode: string | null;
  loading: boolean;
  isValid: boolean;
  errors: Record<string, any>;
}

export default function LoginSection() {
  const router = useRouter();
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    msg: null,
    ntf: null,
    errcode: null,
    loading: false,
    isValid: false,
    errors: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target?.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Submit = async () => {
    const payload = {
      email: state?.email,
      password: state?.password,
    };
    const Request = PostRequest(Endpoints?.Login, payload);

    setState((prevState) => ({
      ...prevState,
      loading: true,
      msg: null,
      ntf: null,
      errcode: null,
    }));

    try {
      const res = await Request;
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      SuccessNotification(res?.data?.message);
      router.replace("/admin/dashboard");
    } catch (err) {
      const error = err as AxiosError;
      setState((prevState) => ({
        ...prevState,
        loading: false,
        errcode: error.code!,
      }));
      
      if (error.code !== "ERR_NETWORK") ErrorNotification(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = {};
    let isValid;
    setState((prevState) => ({
      ...prevState,
      loading: true,
      msg: null,
      ntf: null,
      errcode: null,
    }));
    // await Validation();
    isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    } else {
      Submit();
    }
  };

  const SuccessNotification = useCallback((message: string) => {
    ToastMessage({ type: "success", message });
  }, []);

  const ErrorNotification = useCallback((message: string) => {
    ToastMessage({ type: "error", message });
  }, []);

  console.log(state.errcode);
   if (state.errcode === "ERR_NETWORK") throw new NetworkError();

  return (
      <div className="container mx-auto px-4 h-full ">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-2/5 lg:w-4/12 px-4 ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                {state?.msg ? (
                  <ErrorM message={state.msg} />
                ) : state?.ntf ? (
                  <Success message={state.ntf} />
                ) : (
                  ""
                )}

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 pb-4 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="*****************"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Button
                      variant="default"
                      className={`${
                        state.loading ? "opacity-50" : ""
                      } text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                      type="submit"
                      disabled={state.loading}
                      loading={state.loading}
                      color="primary"
                      label="Sign In"
                    />
                  </div>
                </form>
              </div>
              <div className="text-center px-6">
                <hr className="mt-1 border-b-1 border-4 border-blueGray-300" />
              </div>
            </div>
            <div className="relative flex items-center sm:flex-col">
              <div className="w-full xxs:w-1/2">
                <Link href="/auth/resetPassword" className="text-blueGray-200">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-full xxs:w-1/2 xxs:text-right">
                <Link href="/auth/register" className="text-blueGray-200">
                  <small>Create a new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
