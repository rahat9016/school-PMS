"use client";

import ManageContentPreview from "@/components/admin/ManageContent/ManageContentPreview";

export default function AcademicCalendarPage() {
  return (
    <div className="p-5 lg:p-8 space-y-4">
      <ManageContentPreview
        pageTitle="Academic Calendar"
        contentType="ACADEMIC_CALENDAR"
        hidePageLinks
        description="Upload and manage the academic & activity schedule."
      />
    </div>
  );
}
