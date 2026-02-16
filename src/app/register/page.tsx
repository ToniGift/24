"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created! (Demo)");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-primary text-white font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
            24
          </div>
          <h1 className="text-2xl font-black">Create Your Account</h1>
          <p className="text-muted-foreground mt-1">Join the Twenty Four community</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium block mb-1.5">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="John"
                  className="w-full pl-10 pr-3 py-3 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-3 py-3 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-3 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 8 characters"
                className="w-full pl-10 pr-10 py-3 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4 mt-0.5 rounded border-border" required />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:text-primary-dark">Terms of Service</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-primary hover:text-primary-dark">Privacy Policy</Link>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="newsletter" className="w-4 h-4 rounded border-border" defaultChecked />
            <label htmlFor="newsletter" className="text-sm text-muted-foreground">
              Subscribe to newsletter for exclusive deals
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors disabled:opacity-70"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-muted-foreground">or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Apple
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary-dark font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
