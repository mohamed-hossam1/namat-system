"use client";

import { useFormik } from "formik";
import validation from "./validation";
import { useState } from "react";
import ErrorAlert from "../alerts/ErrorAlert";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

export default function AuthForm({ formType }: { formType: string }) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const validationSchema = validation();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit,
  });
  return (
    <div>
      <h2 className="mb-7 text-center text-2xl font-bold text-text-color">
        {formType == "login" ? "Login to your account" : "Create a new account"}
      </h2>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-text-color"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Address"
              className="block w-full rounded-md bg-input px-3 py-1.5 text-base text-text-color outline-1 -outline-offset-1 outline-border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs mt-3">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-text-color"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="password"
              className="block w-full rounded-md bg-input px-3 py-1.5 text-base text-text-color outline-1 -outline-offset-1 outline-border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs mt-3">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex cursor-pointer w-full h-10 items-center justify-center gap-2 rounded-md bg-primary-gradient  px-3 py-1.5 text-sm/6 font-semibold text-text-color shadow-xs hover:bg-primary disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {formik.isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-input border-t-transparent" />
                <span className="text-sm">Loading...</span>
              </>
            ) : formType == "login" ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>

      {isErrorVisible && (
        <ErrorAlert
          isOpen={isErrorVisible}
          message="Try Agin"
          onClose={() => setIsErrorVisible(false)}
        />
      )}
      <p className="mt-6  text-sm/6 text-text-secondary">
        {formType == "login" ? (
          <>
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-text-color/90 hover:text-text-color transition-all duration-300 ml-1"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-text-color/90 hover:text-text-color transition-all duration-300 ml-1"
            >
              Login
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
