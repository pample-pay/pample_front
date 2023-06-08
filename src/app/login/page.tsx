"use client";
import { Input } from "@material-tailwind/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col	justify-center items-center w-30">
      <Input color="blue"  />
      <Input color="purple" label="Input Purple" />
      <Input color="indigo" label="Input Indigo" />
      <Input color="teal" label="Input Teal" />
    </div>
  );
}
