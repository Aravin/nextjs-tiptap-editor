'use client';

import Tiptap from "@/components/TipTap";
import Image from "next/image";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function Home() {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data })

  console.log({ exampleRequired: watch("exampleRequired") });

  return (
    <main className="flex min-h-screen flex-col p-24">

      <form onSubmit={handleSubmit(onSubmit)}>


        <Tiptap content="Start editing" setValue={setValue} />
        <br></br>

        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Publish post
        </button>
      </form>

    </main>
  );
}
