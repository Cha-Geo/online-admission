import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Endpoints } from "@/app/api/enpoints";
import { PostRequest } from "@/app/api/route";
import { Button } from "@/components/Buttons";
import ToastMessage from "@/components/notifications/Toast";

interface State {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  confirmPassword: string;
  gender: string;
  msg: string | null;
  ntf: string | null;
  loading: boolean;
  isValid: boolean;
  errors: Record<string, any>;
}

export default function RegisterSection() {
  const router = useRouter();
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    confirmPassword: "",
    gender: "",
    msg: null,
    ntf: null,
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
      fullName: `${state.firstname} ${state.lastname}`,
      email: state.email,
      password: state.password,
      phoneNumber: state.phone,
    };
    const Request = PostRequest(Endpoints?.Register, payload); // Update this to the correct endpoint.

    setState((prevState) => ({
      ...prevState,
      loading: true,
      msg: null,
      ntf: null,
    }));

    try {
      const res = await Request;
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      SuccessNotification(res?.data?.message);
      router.replace("/");
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      const errMsg = err as Error;
      ErrorNotification(errMsg?.message);
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
    }));
    // await Validation();
    isValid = Object.keys(errors).length === 0;
    if (state.confirmPassword !== state.password) isValid = false;
    if (!isValid) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      ErrorNotification("Password does not match");
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

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h3 className="text-xl pt-4">Sign Up</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Japhet"
                      name="firstname"
                      value={state.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Kuntu Blankson"
                      name="lastname"
                      value={state.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="0242000000"
                      name="phone"
                      value={state.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                      placeholder="hello@gmail.com"
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
                      placeholder="Password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                      placeholder="Password"
                      name="confirmPassword"
                      value={state.confirmPassword}
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
                        required
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <Link
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Button
                      className={`bg-blueGray-800 ${
                        state.loading ? "opacity-50" : ""
                      } text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                      type="submit"
                      disabled={state.loading}
                      label="Create Account"
                      loading={state.loading}
                    />
                  </div>
                  <div className="flex flex-wrap mt-6 relative">
                    <div className="w-2/2 text-left">
                      <Link href="/" className="text-black-200 font-bold">
                        <small>Already have an account? Login</small>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
