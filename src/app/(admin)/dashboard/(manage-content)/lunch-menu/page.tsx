"use client";

import LunchMenuPreview from "@/components/admin/ManageContent/LunchMenuPreview";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LunchMenuPage() {
  const router = useRouter();

  return (
    <div className="p-5 lg:p-8 space-y-4">
      <div className="px-5 lg:px-8">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashboard")}
          className="w-fit"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <LunchMenuPreview />
    </div>
  );
}
