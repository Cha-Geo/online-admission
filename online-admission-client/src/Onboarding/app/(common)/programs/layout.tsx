import { Boundary } from "@/components/ui/boundary";
import React from "react";

export const metadata = {
  title: "Streaming (Node Runtime)",
};

export default function Layout({ children }: IChildren) {

  return (
    <>
      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <ul>
          <li>
            Primary product information is loaded first as part of the initial
            response.
          </li>
          <li>
            Secondary, more personalized details (that might be slower) like
            ship date, other recommended products, and customer reviews are
            progressively streamed in.
          </li>
          <li>Try refreshing or navigating to other recommended products.</li>
        </ul>
      </div>
      <Boundary animateRerendering={false} labels={["Demo"]} size="small">
          <div className="space-y-10">
            {children}
          </div>
      </Boundary>
    </>
  );
}
