'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import Router from "next/router";
import { Endpoints } from "@/app/api/enpoints";
import { PostRequest } from "@/app/api/route";
import ToastMessage from "@/components/notifications/Toast";
import ButtonLoader from "@/components/loader/ButtonLoader";

interface ChangePasswordProps {}

interface ChangePasswordState {
  password: string;
  newpassword: string;
  confirmPassword: string;
  loading: boolean;
}

export default function ChangePassword(props: ChangePasswordProps) {
  const [state, setState] = useState<ChangePasswordState>({
    password: "",
    newpassword: "",
    confirmPassword: "",
    loading: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    if (state.newpassword !== state.confirmPassword) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      return ErrorNotification("Passwords do not match");
    }

    const payload = {
      newPassword: state.newpassword,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };

    try {
      const response = await PostRequest(Endpoints.ChangePassword, payload);
      SuccessNotification(response?.data?.message);
      Router.reload();
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      ErrorNotification(errorMessage);
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  const SuccessNotification = (message: string) => {
    ToastMessage({ type: "success", message });
  };

  const ErrorNotification = (message: string) => {
    ToastMessage({ type: "error", message });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Change Password
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="****************"
                    value={state.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="****************"
                    value={state.newpassword}
                    name="newpassword"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="****************"
                    value={state.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {state.loading && <ButtonLoader />}
            <button
              className="bg-blueGray-700  active:bg-blueGray-600 text-white font-bold uppercase text-lg px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              disabled={state.loading}
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
