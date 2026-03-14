"use client";

import ManageContentPreview from "@/components/admin/ManageContent/ManageContentPreview";

export default function PaisSchoolProfileOnePage() {
  return (
    <ManageContentPreview
      pageTitle="PAIS School Profile"
      contentTypes={["PAIS_SCHOOL_PROFILE_ONE", "PAIS_SCHOOL_PROFILE_TWO"]}
    />
  );
}
