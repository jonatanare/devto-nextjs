import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LinkItem({ text, iconLink, imgIcon, imgIconAlt }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" href={iconLink}>
          <span>
            <Image src={`${imgIcon}`} alt={`${imgIconAlt}`} />
          </span>
          {text}
        </Link>
      </li>
    </>
  );
}
