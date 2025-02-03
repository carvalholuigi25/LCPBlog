/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import astyles from "@/app/adminstyles.module.scss";

export default function AdminNavbarDashboard({logInfo, sidebarToggle, toggleSidebar}: {logInfo: string, sidebarToggle: boolean, toggleSidebar: any}) {
    const getUserId = () => {
        return logInfo ? JSON.parse(logInfo)[0].id : "";
    }

    const getAvatar = () => {
        return logInfo ? JSON.parse(logInfo)[0].avatar : "";
    }

    const getDisplayName = () => {
        return logInfo ? JSON.parse(logInfo)[0].displayName : "";
    }

    return (
        <nav className={"navbar navbar-expand-lg bg-body-tertiary " + astyles.navbartopadmdb}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">LCPBlog</Link>

                <div className="navbar-nav me-auto">
                    <div className={!sidebarToggle ? "hidden" : "d-flex justify-content-center"}>
                        <button type="button" className={"nav-link " + astyles.btnshsidebynav} onClick={toggleSidebar}>
                            {!!sidebarToggle ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}
                        </button>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarAdmDashboard" aria-controls="navbarAdmDashboard" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi-list"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarAdmDashboard">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" href={"/pages/users/" + getUserId()}>
                            <Image src={'/images/' + getAvatar()} width={40} height={40} className={astyles.imgavatar + " me-3"} alt={getDisplayName() + "'s Avatar"} />
                            <span>{getDisplayName()}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}