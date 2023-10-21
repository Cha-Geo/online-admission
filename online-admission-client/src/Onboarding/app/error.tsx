'use client'

import { Button, buttonVariants } from '@/components/button';
import Link from 'next/link';
import React from 'react'

interface IError {
    error: Error;
    reset: () => void;
}

const error = ({
    error,
    reset,
}: IError) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 m-auto">
      <div className="text-center">
        <p className="text-bold font-semibold text-emerald-700">
          There was a problem
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
          {error.message || "Something went wrong"}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600">
          Please try again or contact support if the problem persist
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2 xxs:gap-x6">
            <Button onClick={reset} className='bg-emerald-50 text-emerald-700 border-emerald-100 focus:ring focus:ring-emerald-400'>
                Try Again
            </Button>
            <Link href='/' className={buttonVariants({ variant: 'ghost'})}>
                Go back Home
            </Link>
        </div>
      </div>
    </main>
  );
}

export default error