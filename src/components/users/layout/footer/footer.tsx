"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../../../../../public/logo.png";
import facebook from "../../../../../public/facebook.png";
import youtube from "../../../../../public/youtube.png";
import instagram from "../../../../../public/instagram.png";
import location from "../../../../../public/location.png";
import smartphone from "../../../../../public/smartphone.png";
import paperPlan from "../../../../../public/paper-plane.png";
import clock from "../../../../../public/clock.png";
import ACCREDITATIONS1 from "../../../../../public/ACCREDITATIONS1.png";
import ACCREDITATIONS2 from "../../../../../public/ACCREDITATIONS2.png";
import ACCREDITATIONS3 from "../../../../../public/ACCREDITATIONS3.png";
import ACCREDITATIONS4 from "../../../../../public/ACCREDITATIONS4.png";
import ACCREDITATIONS5 from "../../../../../public/ACCREDITATIONS5.png";
import ACCREDITATIONS6 from "../../../../../public/ACCREDITATIONS6.png";
import Link from "next/link";
const navLinks = [
  {
    label: "Kindergarten & Primary",
    href: "/",
  },
  {
    label: "Secondary & IB Programs",
    href: "/",
  },
  {
    label: "Admissions",
    href: "/",
  },
  {
    label: "Open House 2022",
    href: "/",
  },
  {
    label: "PAIS Online Learning Approach (OLA)",
    href: "/",
  },
];
const ACCREDITATIONS = [
  ACCREDITATIONS1,
  ACCREDITATIONS2,
  ACCREDITATIONS3,
  ACCREDITATIONS4,
  ACCREDITATIONS5,
  ACCREDITATIONS6,
];
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer>
      {!pathname.startsWith("/admin") && (
        <div className="bg-pureWhite py-10">
          <div className="container flex flex-col md:flex-row">
            <div className="w-full md:w-[45%]">
              <Image
                src={Logo}
                alt="LOGO"
                width={200}
                height={70}
                className="mb-4"
              />
              <p className="font-poppins font-medium text-sm text-charcoalGray">
                Pan-Asia International School (PAIS): World-class education
                fostering excellence, safety, and global citizenship.
              </p>
              <div className="flex flex-col mt-10 lg:mt-[70px]">
                <h3 className="uppercase text-base font-medium font-poppins text-main-secondary">
                  FOLLOW US
                </h3>
                <div className="flex gap-3 mt-1">
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                  <Image src={youtube} alt="youtube" width={24} height={24} />
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col lg:flex-row w-full md:w-[55%] gap-5 md:gap-10 mt-7 md:mt-0">
              <div>
                <h3 className="text-base font-medium mb-4 text-main-secondary font-poppins uppercase">
                  RESOURCES
                </h3>
                <ul className="space-y-2">
                  {navLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-main-primary hover:text-main-secondary font-bold font-poppins text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-base font-medium mb-4 text-main-secondary font-poppins uppercase">
                  CONTACT US
                </h3>
                <p className="flex items-center gap-2 text-charcoalGray text-sm font-poppins font-normal mb-2">
                  <Image src={location} alt="location" width={24} height={24} />{" "}
                  1B Chalerm Phrakiat Ratchakan Thi 9 Road Sai 67, Dok Mai,
                  Prawet, Bangkok 10250, Thailand
                </p>
                <p className="flex items-center gap-2 text-charcoalGray hover:text-main-secondary text-sm font-poppins font-normal mb-2">
                  <Image
                    src={smartphone}
                    alt="smartphone"
                    width={16}
                    height={16}
                  />{" "}
                  023472280
                </p>
                <p className="flex items-center gap-2 text-charcoalGray hover:text-main-secondary text-sm font-poppins font-normal mb-2">
                  <Image
                    src={smartphone}
                    alt="smartphone"
                    width={16}
                    height={16}
                  />{" "}
                  027726341
                </p>
                <p className="flex items-center gap-2 text-charcoalGray hover:text-main-secondary text-sm font-poppins font-normal mb-2">
                  <Image
                    src={paperPlan}
                    alt="paperPlan"
                    width={16}
                    height={16}
                  />{" "}
                  info@pais.ac.th
                </p>
                <p className="flex items-center gap-2 text-charcoalGray text-sm font-poppins font-normal mb-2">
                  <Image src={clock} alt="clock" width={16} height={16} />{" "}
                  Monday - Friday 8AM - 4PM
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="border-t border-lightGray mt-8  text-center">
              <h4 className="text-base my-3 md:my-6 font-poppins font-normal text-pureBlack uppercase">
                ACCREDITATIONS
              </h4>
              <div className="w-full md:w-7/12 mx-auto grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-5 md:gap-10 ">
                {ACCREDITATIONS.map((acc, inx) => (
                  <Image
                    key={inx}
                    src={acc}
                    alt="Brand"
                    width={50}
                    height={60}
                    className="w-auto h-auto"
                  />
                ))}
              </div>
              <p className="text-sm my-4 md:mt-8 text-darkGray font-poppins">
                Copyright © Pan-Asia International School •{" "}
                <Link
                  href="#"
                  className="text-main-primary hover:text-orange-500 font-medium font-poppins text-sm"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
