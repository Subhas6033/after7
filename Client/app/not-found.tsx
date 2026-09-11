"use client";
import { NotFoundBrand } from "@/components/custom/404/NotFoundBrand";
import { NotFoundContent } from "@/components/custom/404/NotFoundContent";
import { NotFoundFooter } from "@/components/custom/404/NotFoundFooter";
import { NotFoundNetwork } from "@/components/custom/404/NotFoundNetwork";

export default function NotFound(): React.JSX.Element {
  return (
    <div
      className="
        fixed
        inset-0
        isolate
        z-9999
        min-h-screen
        overflow-hidden
        bg-background
        text-foreground
      "
    >
      <NotFoundNetwork />
      <NotFoundBrand />
      <NotFoundContent />
      <NotFoundFooter />
    </div>
  );
}
