"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);


    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-8xl px-5 mx-auto z-50", className)}
        >
            {/* Navbar */}

            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col gap-5 text-sm">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                    <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                    <HoveredLink href="/courses">Song writing</HoveredLink>
                    <HoveredLink href="/courses">Music Production</HoveredLink>
                </div>
                </MenuItem>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}

export default Navbar