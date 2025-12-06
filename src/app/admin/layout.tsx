"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const userName = "HABS Group";
  const firstName = "HABS Group";

  const segments = pathname.split("/").filter((s) => s !== "");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Selamat Pagi";
    if (hour >= 12 && hour < 15) return "Selamat Siang";
    if (hour >= 15 && hour < 18) return "Selamat Sore";
    return "Selamat Malam";
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <AppSidebar />

        <div className="flex flex-col flex-1 overflow-auto">
          <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger />

              {pathname === "/admin" || pathname === "/admin/" ? (
                <h1 className="text-lg font-semibold">
                  {getGreeting()}, {firstName}!
                </h1>
              ) : (
                <Breadcrumb>
                  <BreadcrumbList>
                    {segments.map((segment, index) => {
                      const path = "/" + segments.slice(0, index + 1).join("/");

                      const isLast = index === segments.length - 1;
                      const label =
                        segment.charAt(0).toUpperCase() +
                        segment.slice(1).replace(/-/g, " ");

                      return (
                        <React.Fragment key={index}>
                          <BreadcrumbItem>
                            {isLast ? (
                              <BreadcrumbPage>{label}</BreadcrumbPage>
                            ) : (
                              <BreadcrumbLink asChild>
                                <Link href={path}>{label}</Link>
                              </BreadcrumbLink>
                            )}
                          </BreadcrumbItem>

                          {!isLast && <BreadcrumbSeparator />}
                        </React.Fragment>
                      );
                    })}
                  </BreadcrumbList>
                </Breadcrumb>
              )}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 rounded-full hover:bg-gray-100 px-2 py-1 transition">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/user.png" alt="User" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-700 pr-2">
                      {userName}
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" /> Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </DropdownMenuItem>

                  <DropdownMenuItem className="text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 w-full overflow-auto px-[20px]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
