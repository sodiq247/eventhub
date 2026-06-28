import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Eventit account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/10" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight text-foreground">
              Event<span className="text-primary">it</span>
            </span>
          </Link>
          <h2 className="text-3xl font-bold font-heading tracking-tight text-foreground">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-muted">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:text-primary-light transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>

        <div className="bg-card border border-border py-8 px-6 sm:px-10 rounded-3xl shadow-2xl backdrop-blur-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-primary-light transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <Button variant="gradient" size="lg" className="w-full">
              Sign in
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full text-foreground border-border hover:bg-background">
                <Code className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full text-foreground border-border hover:bg-background">
                <Mail className="h-5 w-5 mr-2" />
                Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
