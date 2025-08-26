"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IGlobalError } from "@/types";
import { AlertTriangle } from "lucide-react";

const GlobalError = ({ error, reset }: IGlobalError) => {
  return (
    <section className="grid place-items-center h-screen ">
      <Card
        className="w-full max-w-lg rounded-2xl shadow-xl "
        data-aos="fade-up"
      >
        <CardContent className="p-10 text-center space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">
            Oops! Something Went Wrong
          </h2>

          {/* Message */}
          <p className="text-gray-600">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          {/* Action */}
          <Button onClick={() => reset()} className="mt-4">
            Try Again
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default GlobalError;
