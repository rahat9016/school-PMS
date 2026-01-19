"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clock from "../../../../../public/clock.svg";
import facebook from "../../../../../public/facebook.png";
import instagram from "../../../../../public/instagram.png";
import location from "../../../../../public/location.svg";
import Logo from "../../../../../public/logo.png";
import paperPlan from "../../../../../public/paper-plane.svg";
import smartphone from "../../../../../public/smartphone.svg";
import youtube from "../../../../../public/youtube.png";
const navLinks = [
  {
    label: "Kindergarten & Primary",
    href: "/kindergarten-primary",
  },
  {
    label: "Secondary & IB Programs",
    href: "/secondary-ib-programs",
  },
  {
    label: "Admissions",
    href: "/admission-overview",
  },
  {
    label: "PAIS Online Learning Approach (OLA)",
    href: "/pais-online-learning-approach",
  },
];

const Footer = () => {
  const pathname = usePathname();
  const excludedPaths = ["/dashboard", "/signin"];

  const shouldHideHeader = excludedPaths.some((path) =>
    pathname.startsWith(path)
  );
  return (
    <footer>
      {!shouldHideHeader && (
        <div className="bg-pureWhite py-10 border-t border-main-secondary">
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
                World-class education
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
                  <Image src={location} alt="location" width={16} height={16} className="w-auto h-auto" />{" "}
                  18 Chaloem Phrakiat Ratchakan Thi 9 Road Soi 67, Dok Mai, Prawet, Bangkok 10250 Thailand
                </p>
                <p className="flex items-center gap-2 text-charcoalGray hover:text-main-secondary text-sm font-poppins font-normal mb-2">
                  <Image
                    src={smartphone}
                    alt="smartphone"
                    width={16}
                    height={16}
                  />{" "}
                  +6623472280 / +66830962291
                </p>
                <p className="flex items-center gap-2 text-charcoalGray hover:text-main-secondary text-sm font-poppins font-normal mb-2">
                  <Image
                    src={paperPlan}
                    alt="paperPlan"
                    width={16}
                    height={16}
                  />{" "}
                  info@pais.ac.th, marketing@pais.ac.th
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
              <div className="w-full mx-auto ">
                <Image
                  src={"/Accreditation.png"}
                  alt="Brand"
                  width={50}
                  height={60}
                  className="w-auto h-auto lg:h-[220px] mx-auto"
                />
              </div>
              <p className="text-sm my-4 md:mt-0 text-darkGray font-poppins">
                Copyright © Pan-Asia International School •{" "}
                <Link
                  href="/privacy"
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
