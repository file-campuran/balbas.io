import React from "react";
import type { IconProps } from "@/lib/types";

export default function Moon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
      {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <path d="M320 64L304 16 288 64 240 80l48 16 16 48 16-48 48-16L320 64zM440 200l-24-72-24 72-72 24 72 24 24 72 24-72 72-24-72-24zM128 288c0-72.5 48.2-133.7 114.2-153.4c-16-4.3-32.9-6.6-50.2-6.6C86 128 0 214 0 320S86 512 192 512c61.5 0 116.2-28.9 151.3-73.8c-17.2 6.4-35.9 9.8-55.3 9.8c-88.4 0-160-71.6-160-160z" />
    </svg>
  );
}
