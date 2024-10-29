import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export async function LoadingMessages() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="space-y-2 flex flex-col">
          <Skeleton className="w-[250px] h-4" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
    </div>
  );
}

export function GuestBookFormLoading() {
  return (
    <div className="w-full">
      <Skeleton className="w-full h-10 rounded-lg" />
    </div>
  );
}
