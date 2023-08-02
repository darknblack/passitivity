'use client';

import bg from '@/assets/happy-jumping.png';
import handPng from '@/assets/handing.png';
import manPng from '@/assets/man.png';
import envelopTablePng from '@/assets/envelope-table.png';
import womenWritingPng from '@/assets/women-writing.png';

export default function Home() {
  return (
    <div className="text-white">
      <div className="fixed top-0 z-10 w-full border-b border-b-transparent h-[60px] ">
        <div className="col-md w-full sm-w mx-auto lg:w-lg flex justify-between items-center h-full">
          <div className="font-semibold text-2xl">payitforward</div>
          <div className="flex items-center gap-8">
            <div className="font-medium text-base">Contest</div>
            <div className="font-medium text-base">Messages</div>
            <div className="font-medium text-base">About</div>
            <div className="font-medium text-base">Login</div>
          </div>
        </div>
      </div>
      <section
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(${bg.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="backdrop-blur-[12px] h-screen flex justify-center flex-col items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white">
              Spreading positivity to the people
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              You may not be able to change the world but you can brighten someone's day.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 "
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative top-[18%] text-center flex justify-center items-center text-lg text-white">
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">500+</h4>
              <span className="text-sm">qr scanned</span>
            </div>
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">100+</h4>
              <span className="text-sm">accounts</span>
            </div>
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">89k+</h4>
              <span className="text-sm">messages</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full text-gray-900 pt-24 pb-16 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="lg:w-lg grid grid-cols-3 mx-auto">
          <div className="col-span-2 flex flex-col justify-center mr-10">
            <div className="text-5xl font-extrabold mb-8">1. Write a short encouraging message</div>
            <p className="text-xl">
              When someone receives an encouraging letter or message, it shows that they are valued and appreciated.
              This can make them feel good about themselves and give them the motivation to keep going.
            </p>
          </div>
          <div className="w-full">
            <img src={womenWritingPng.src} className="w-full" />
          </div>
        </div>
      </section>
      <section className="w-full text-gray-900 py-16 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="lg:w-lg grid grid-cols-3 mx-auto">
          <div>
            <img src={envelopTablePng.src} className="w-full" />
          </div>
          <div className="col-span-2 flex flex-col justify-center ml-10">
            <div className="text-5xl font-extrabold mb-8">2. Generate QR Code with a challenge</div>
            <p className="text-xl">
              Using the app, generate, print and stick the QR Code to the letter. Whenever someone scans the QR Code,
              they will be redirected to this{' '}
              <a href="#" className="underline">
                challenge.
              </a>{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full text-gray-900 py-16 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="lg:w-lg grid grid-cols-3 mx-auto">
          <div className="col-span-2 flex flex-col justify-center mr-10">
            <div className="text-5xl font-extrabold mb-8">3. Give random stranger an encouraging letter</div>
            <p className="text-xl">
              When someone receives an encouraging letter or message, it shows that they are valued and appreciated.
              This can make them feel good about themselves and give them the motivation to keep going.
            </p>
          </div>
          <div className="w-full">
            <img src={handPng.src} className="w-full" />
          </div>
        </div>
      </section>
      <section className="w-full text-gray-900 py-16 pb-24 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="lg:w-lg grid grid-cols-3 mx-auto">
          <div>
            <img src={envelopTablePng.src} className="w-full" />
          </div>
          <div className="col-span-2 flex flex-col justify-center ml-10">
            <div className="text-5xl font-extrabold mb-8">4. Track your progress and appreciation of others</div>
            <p className="text-xl">
              Count the number of "Thank you" messages you receive and the number of people who accepted the challenge.
              All will be displayed on the app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
