import { Form } from "@/app/components/form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Label } from "@radix-ui/react-label";
import prisma from "../lib/db";
import Image from "next/image";
import { Suspense } from "react";
import {
  GuestBookFormLoading,
  LoadingMessages,
} from "../components/LoadingState";

async function GuestBookEntry() {
  const data = await prisma.guestbookEntry.findMany({
    select: {
      user: {
        select: {
          firstname: true,
          lastname: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });
  return data;
}

export default function GuestBookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook </h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Sign my Guestbook !
      </p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <Suspense fallback={<GuestBookFormLoading />}>
            <GuestBookForm />
          </Suspense>

          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={<LoadingMessages />}>
              <GuestBookEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}
async function GuestBookEntries() {
  const data = await GuestBookEntry();

  if (data.length === 0) {
    return <p>No entries yet</p>;
  }

  return data.map((entry) => (
    <li key={entry.id}>
      <div className="flex items-center gap-4">
        <Image
          src={entry.user?.profileImage || "/path/to/default/image.jpg"}
          width={40}
          height={40}
          alt={entry.user.firstname}
          className="w-10 h-10 rounded-full"
        />

        <p className="text-muted-foreground pl-3 break-words">
          {entry.user?.firstname}:
          <span className="text-foreground">{entry.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GuestBookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return <Form />;
  }
  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />
      <RegisterLink>
        <Button>Sign for free</Button>
      </RegisterLink>
    </div>
  );
}
