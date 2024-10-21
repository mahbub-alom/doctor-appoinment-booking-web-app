"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Headers = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contactUs",
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    // console.log(user);
  }, [user]);

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="hover:text-primary hover:scale-105 transition-all ease-in-out cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user?.picture}
              alt="profile-picture"
              width={50}
              height={50}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                Profile
              </li>
              <Link
                href={"/my-booking"}
                className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"
              >
                My Booking
              </Link>
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                <LogoutLink>Log Out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        // <LogoutLink><Button variant="outline">Log Out</Button></LogoutLink>
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Headers;
