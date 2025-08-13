"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Navbar() {
 
  return (
    <div className="p-8 flex gap-20 justify-center text-xl text-gray-600">
      {/* Navbar logo */}
      <Link href="/">
        <Image src="/logo01.svg" width={120} height={120} alt="logo" />
      </Link>

      <div>
        {/* top navigation bar */}
        <div className="flex items-center gap-16">
          {/* list of pages */}
          <ul className="flex gap-16">
            <li>About Us</li>
            <li>Our News</li>
            <li>Our Services</li>
            <li>Contacts</li>
            <li>Login</li>
          </ul>
          {/* contact list */}
          <ul className="flex items-center gap-6">
            <li className="flex items-center text-2xl text-black font-bold">
              <Smartphone className="text-red-600 0" />
              <h1>+7 495 628-0111</h1>
            </li>
            <li>
              <Image
                src="/1_whatsapp.svg"
                width={30}
                height={30}
                alt="whatsapp"
              />
            </li>
            <li>
              <Image
                src="/1_telegram.svg"
                width={30}
                height={30}
                alt="telegram"
              />
            </li>
          </ul>
        </div>
        <div className="border border-dashed my-6"></div>
        {/* bottom navigation bar */}
        <div className="bg-white/10 backdrop-blur-sm">
          <div>
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center space-x-8">
                {/* Work Permit Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-black text-xl font-semibold  "
                    >
                      WORK PERMIT
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96 p-0 mt-2 " align="start">
                    <div className=" bg-gray-50 ">
                      <DropdownMenuItem className=" text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Samples of documents
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        For foreign nationals
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        For Highly Qualified Specialists
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        For Foreign citizens exempt from Work Permit regulations
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        For foreign students
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer">
                        Medical test and fingerprinting
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Citizenship Dropdown - Active */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-black text-xl font-semibold "
                    >
                      CITIZENSHIP OF RUSSIA
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96 p-0 mt-2 " align="start">
                    <div className=" bg-gray-50 ">
                      <DropdownMenuItem className=" text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Samples of documents
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Temporary residence permit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Permanent residence permit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Temporary residence permit for educational purposes
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Visa to Russia Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-black text-xl font-semibold "
                    >
                      VISA TO RUSSIA
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96 p-0 mt-2 " align="start">
                    <div className=" bg-gray-50 ">
                      <DropdownMenuItem className=" text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Russian visas
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Tourist visa
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Business visa
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Registration in the RF
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Outbound visa
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        Work visa to Russia
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-lg font-bold px-4 py-3 text-blue-600 hover:bg-blue-50 cursor-pointer border-b border-gray-100">
                        AIM Tourism
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Residence Permit */}
                <Button
                  variant="ghost"
                  className="text-black text-xl font-semibold "
                >
                  RESIDENCE PERMIT
                </Button>
              </div>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-black text-xl font-semibold flex items-center space-x-2"
                  >
                   <Image src='/flag1.png' width={35} height={30} alt="flag1" />
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Image src='/flag1.png' width={35} height={30} alt="flag1" /></DropdownMenuItem>
                  <DropdownMenuItem><Image src='/flag2.png' width={35} height={30} alt="flag1" /></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
