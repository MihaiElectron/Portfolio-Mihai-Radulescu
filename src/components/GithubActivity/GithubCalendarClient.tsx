"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendarClient() {
  return (
    <GitHubCalendar
      username="MihaiElectron"
      colorScheme="dark"
      blockSize={12}
      blockMargin={4}
      fontSize={12}
      theme={{
        dark: ["#1b2028", "#143820", "#2d8f59", "#6fcf97", "#f9aa0a"],
      }}
    />
  );
}