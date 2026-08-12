import { useState } from "react";

import { Link } from "react-router";

import { useAuthStore } from "../store/useAuthStore.js";

import AuthImagePattern from "../components/AuthImagePattern.jsx";

import {
  Eye,
  EyeOff,
  Loader,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleValidateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const succeedValidation = handleValidateForm();

    if (!succeedValidation) {
      return;
    }

    await signup(formData);
  };

  return (
    <div className="min-h-dvh grid lg:grid-cols-2">
      {/*  left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2 capitalize">
                create account
              </h1>
              <p className="first-letter:uppercase text-base-content/60">
                get started with your free account
              </p>
            </div>
          </div>

          {/*  Form */}
          <form onSubmit={handleSubmitForm} className="space-y-6">
            <div className="fieldset">
              <label htmlFor="fullName" className="label">
                <span className="font-medium capitalize">full name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <User className="size-5 text-base-content/60" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  className="input w-full pl-10"
                  placeholder="Enter Your FullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="fieldset">
              <label htmlFor="email" className="label">
                <span className="font-medium capitalize">email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Mail className="size-5 text-base-content/60" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="input w-full pl-10"
                  placeholder="you@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="fieldset">
              <label htmlFor="password" className="label">
                <span className="font-medium capitalize">password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Lock className="size-5 text-base-content/60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input w-full pl-10"
                  placeholder="enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword((old) => !old)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40 cursor-pointer" />
                  ) : (
                    <Eye className="size-5 text-base-content/40 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full capitalize mt-4"
            >
              {isSigningUp ? (
                <>
                  <Loader className="size-5 animate-spin" />
                  loading...
                </>
              ) : (
                "create account"
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60 first-letter:uppercase">
              already have an account? &nbsp;
              <Link
                to="/login"
                className="link link-primary inline-block first-letter:uppercase"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/*  right side */}
      <AuthImagePattern
        title="join our community"
        subtitle="connect with friends, share moments, and stay in touch with your loved ones"
      />
    </div>
  );
}
