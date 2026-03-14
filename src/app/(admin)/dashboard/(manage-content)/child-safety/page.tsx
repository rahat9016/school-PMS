"use client";

import ManageContentPreview from "@/components/admin/ManageContent/ManageContentPreview";

export default function ChildSafetyPage() {
  return (
    <ManageContentPreview
      pageTitle="Child Safety"
      contentTypes={["CHILD_SAFETY", "CHILD_PROTECTION"]}
    />
  );
}
