import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: `Oops! The page you're looking for doesn't exist.`,
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
        <h2 className="text-2xl font-semibold  mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>

      <div className="animate-fade-in">
        <Link href="/" passHref>
          <Button>Go back to homepage</Button>
        </Link>
      </div>
    </div>
  );
}
