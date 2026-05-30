"use client";

import dynamic from "next/dynamic";

const GithubCalendarClient = dynamic(
  () => import("./GithubCalendarClient"),
  {
    ssr: false,
  }
);

export default function GithubActivityClient() {
  return <GithubCalendarClient />;
}