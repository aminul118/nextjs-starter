"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IGlobalError } from "@/types";

const Error = ({ error, reset }: IGlobalError) => {
  return (
    <section className="grid place-items-center h-screen">
      <Card className="w-full max-w-2xl py-24">
        <CardContent className="text-center space-y-6">
          <h2 className="mb-4 text-4xl font-bold">Oops!</h2>
          <p className=" text-lg">
            {error.message ||
              "An unexpected error occurred. We’re working on it!"}
          </p>
          <Button onClick={() => reset()}>Try Again</Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Error;
