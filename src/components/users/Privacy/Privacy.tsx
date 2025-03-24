import React from "react";
import herobg from "../../../../public/privacyBg.jpg";
import HeroSection from "@/components/shared/HeroSection";
export default function Privacy() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title={`Privacy Policy`}
        className="bg-cover h-[280px]"
      />
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className="py-20"
      >
        <div className="container">
          <h1 className="text-black-dark font-semibold text-[30px] font-poppins text-center">
            What personal data we collect and why we collect it
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row mt-10 gap-5">
              <div className="w-full lg:w-2/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                  Comments
                </h3>
              </div>
              <div className="w-full lg:w-10/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                  When visitors leave comments on the site we collect the data
                  shown in the comments form, and also the visitor’s IP address
                  and browser user agent string to help spam detection.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  An anonymized string created from your email address (also
                  called a hash) may be provided to the Gravatar service to see
                  if you are using it. The Gravatar service privacy policy is
                  available here: https://automattic.com/privacy/. After
                  approval of your comment, your profile picture is visible to
                  the public in the context of your comment.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-2/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                  Media
                </h3>
              </div>
              <div className="w-10/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS)
                  included. Visitors to the website can download and extract any
                  location data from images on the website.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-2/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                  Cookies
                </h3>
              </div>
              <div className="w-full lg:w-10/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                  If you leave a comment on our site you may opt-in to saving
                  your name, email address and website in cookies. These are for
                  your convenience so that you do not have to fill in your
                  details again when you leave another comment. These cookies
                  will last for one year.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  If you visit our login page, we will set a temporary cookie to
                  determine if your browser accepts cookies. This cookie
                  contains no personal data and is discarded when you close your
                  browser.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices. Login
                  cookies last for two days, and screen options cookies last for
                  a year. If you select “Remember Me”, your login will persist
                  for two weeks. If you log out of your account, the login
                  cookies will be removed.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  If you edit or publish an article, an additional cookie will
                  be saved in your browser. This cookie includes no personal
                  data and simply indicates the post ID of the article you just
                  edited. It expires after 1 day.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-3/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                  Embedded content from other websites
                </h3>
              </div>
              <div className="w-full lg:w-9/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                  If you leave a comment on our site you may opt-in to saving
                  your name, email address and website in cookies. These are for
                  your convenience so that you do not have to fill in your
                  details again when you leave another comment. These cookies
                  will last for one year.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  If you visit our login page, we will set a temporary cookie to
                  determine if your browser accepts cookies. This cookie
                  contains no personal data and is discarded when you close your
                  browser.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices. Login
                  cookies last for two days, and screen options cookies last for
                  a year. If you select “Remember Me”, your login will persist
                  for two weeks. If you log out of your account, the login
                  cookies will be removed.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  If you edit or publish an article, an additional cookie will
                  be saved in your browser. This cookie includes no personal
                  data and simply indicates the post ID of the article you just
                  edited. It expires after 1 day.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-3/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                  How long we retain your data
                </h3>
              </div>
              <div className="w-full lg:w-9/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                  If you leave a comment, the comment and its metadata are
                  retained indefinitely. This is so we can recognize and approve
                  any follow-up comments automatically instead of holding them
                  in a moderation queue.
                </p>
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins mt-3 lg:mt-7">
                  For users that register on our website (if any), we also store
                  the personal information they provide in their user profile.
                  All users can see, edit, or delete their personal information
                  at any time (except they cannot change their username).
                  Website administrators can also see and edit that information.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-3/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                What rights you have
                over your data
                </h3>
              </div>
              <div className="w-full lg:w-9/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-28 gap-5">
              <div className="w-full lg:w-3/12 ">
                <h3 className="text-black-dark font-normal text-base lg:text-2xl font-poppins">
                Where we send your data
                </h3>
              </div>
              <div className="w-9/12 border-l-[4px] border-main-secondary pl-6 ">
                <p className="text-black-dark font-normal text-sm lg:text-base font-poppins">
                Visitor comments may be checked through an automated spam detection service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
