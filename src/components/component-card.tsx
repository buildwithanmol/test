import CmpUrl from "@/utils/cmp-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  name: string;
  image: string;
  description: string;
  componentsNo: number;
};

const ComponentCard = ({
  name,
  image,
  description,
  componentsNo,
}: cardProps) => {
  return (
    <Link
      href={`/components/${CmpUrl(name)}`}
      className="w-full flex gap-5 pl-4 p-2 max-h-24 h-24 rounded-xl items-center hover:border-secondary border-2  border-transparent bg-secondary/30"
    >
      <Image src={`/assets/svg_icons/${image}`} alt="logo" width={60} height={60} />
      <span className="pl-3">
        <h2 className="text-white font-semibold text-xl">{name}</h2>
        <p className="text-sm text-accent/50">{componentsNo} components</p>
      </span>
    </Link>
  );
};

export default ComponentCard;
