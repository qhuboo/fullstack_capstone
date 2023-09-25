import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Sign_In() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();
    const data = { email, password };
    if (event.target.value === "signin") {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/user/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const jsonResponse = await response.json();
        if (jsonResponse.accessToken) {
          setUser({
            email,
            accessToken: jsonResponse.accessToken,
            admin: jsonResponse.admin,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({
              email,
              accessToken: jsonResponse.accessToken,
              admin: jsonResponse.admin,
            })
          );
          navigate("/");
        } else {
          console.log(jsonResponse.message);
          setLoginError(true);
        }
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/user/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const jsonResponse = await response.json();
        if (jsonResponse.accessToken) {
          setUser({
            email,
            accessToken: jsonResponse.accessToken,
            admin: jsonResponse.admin,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({
              email,
              accessToken: jsonResponse.accessToken,
              admin: jsonResponse.admin,
            })
          );
          navigate("/");
        } else {
          console.log(jsonResponse.message);
          setLoginError(true);
        }
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-64 w-50"
              src="../src/assets/main_logo.png"
              alt="MateMine MarketPlace Logo"
            />
          </Link>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* button */}
            <div>
              <button
                onClick={submitForm}
                value="signin"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-500">or</span>
            </div>
            <div>
              <button
                onClick={submitForm}
                value="signup"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <div
          className={
            !loginError
              ? "invisible"
              : "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
          }
        >
          <strong className="font-bold ">Error! </strong>
          <span>Wrong email or password, please try again</span>
        </div>
      </div>
    </>
  );
}
