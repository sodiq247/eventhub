import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Code, Mail, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your Eventit account to start organizing or attending events.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-primary/10" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="w-full max-w-xl relative z-10">
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
            Create an account
          </h2>
          <p className="mt-2 text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:text-primary-light transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        <div className="bg-card border border-border py-8 px-6 sm:px-10 rounded-3xl shadow-2xl backdrop-blur-sm">
          {/* Account Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-primary bg-primary/5 transition-all text-primary">
              <User className="h-6 w-6 mb-2" />
              <span className="text-sm font-semibold">Attendee</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-border bg-background hover:border-primary/50 transition-all text-muted hover:text-foreground">
              <Building className="h-6 w-6 mb-2" />
              <span className="text-sm font-semibold">Organizer</span>
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

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
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              <p className="text-xs text-muted mt-1">Must be at least 8 characters.</p>
            </div>

            <Button variant="gradient" size="lg" className="w-full">
              Create account
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted">Or sign up with</span>
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
            
            <p className="text-center text-xs text-muted mt-8">
              By registering, you agree to our{" "}
              <a href="#" className="underline hover:text-foreground">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
