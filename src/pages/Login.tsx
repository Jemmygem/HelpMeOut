/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import HookForm from "../components/form/form";
import SimpleLabel from "../components/form/SimpleLabel";
import Input from "../components/form/Input";
import { EmailIcon, PasswordIcon } from "../assets/SvgIcons";
import Button from "../components/form/Button";
import { loginSchema } from "../components/form/schema/loginSchema";
import faceBookLogo from "../assets/facebook.svg";
import googlelogo from "../assets/Google.svg";
import Logo from "../assets/full-logo-sm.svg";

const Login = () => {
  const onSubmit = (data: any) => {
    alert(
      JSON.stringify({
        ...data,
      })
    );
  };

  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="w-full py-6">
        <div className="my-6 pl-4 md:pl-10 lg:pl-16 xl:pl-32">
          <Link to="/">
            <img src={Logo} width={180} height={32} alt="helpmeout Logo" />
          </Link>
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
          <div className="sm:mx-auto sm:w-2/3 md:w-1/2 lg:w-2/5">
            <div className="relative overflow-hidden  p-px ">
              <div className="relative flex h-full flex-col gap-6 py-8 lg:p-8 ">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-3xl font-semibold text-gray-900 ">
                    Log in or Sign up
                  </h1>
                  <p className="text-sm font-light text-gray-500 text-center max-w-[320px] ">
                    Join millions of others in sharing successful moves on{" "}
                    <span className="font-normal">HelpMeOut.</span>
                  </p>
                </div>

                <div className="mt-4 grid space-y-4">
                  <button className="group relative flex h-11 items-center p-6  before:absolute before:inset-0 before:rounded-lg before:bg-white before:border before:border-borderColor before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                    <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-borderColor ">
                      <img
                        src={googlelogo}
                        className=" w-5"
                        alt="google logo"
                      />
                      <span>Continue with Google</span>
                    </span>
                  </button>
                  <button className="group relative flex h-11 items-center p-6 before:absolute before:inset-0 before:rounded-lg before:bg-white before:border before:border-borderColor before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                    <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-borderColor ">
                      <img
                        src={faceBookLogo}
                        className=" w-5"
                        alt="google logo"
                      />
                      <span>Continue with Facebook</span>
                    </span>
                  </button>
                </div>

                <div className="inline-flex items-center text-gray-300 justify-center gap-2 w-full">
                  <hr className="w-64 h-px  bg-gray-300 border-0 rounded " />
                  <p>or</p>
                  <hr className="w-64 h-px  bg-gray-300 border-0 rounded " />
                </div>

                <HookForm onSubmit={onSubmit} schema={loginSchema}>
                  <div className="space-y-6">
                    <div className="space-y-6">
                      <div>
                        <SimpleLabel title="Email address" htmlFor="name" />
                        <Input
                          label="Enter your email address"
                          name="email"
                          leadingIcon={<EmailIcon />}
                          placeholder="Alexander@example.com"
                          floatLabel
                        />
                      </div>
                      <div>
                        <SimpleLabel title="Password" htmlFor="name" />
                        <Input
                          label="Enter your password"
                          name="password"
                          leadingIcon={<PasswordIcon />}
                          type="password"
                          placeholder="****************"
                          floatLabel
                        />
                      </div>
                    </div>
                    <Button className="w-full">Sign Up</Button>
                  </div>
                </HookForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
