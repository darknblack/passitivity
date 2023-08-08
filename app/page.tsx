'use client';

import heroBg from '@/assets/hero-helping.png';
import handPng from '@/assets/handing.png';
// import generatingQrPng from '@/assets/envelope-table.png';
import womenWritingPng from '@/assets/women-writing.png';
import recordPng from '@/assets/record.png';
import generatingQrPng from '@/assets/generating-qr-2.png';
import Features from '@/components/LandingPage/Features';
import useDimensions from '@/helper/useDimensions';
import useScroll from '@/hooks/useScroll';
import { useDeferredValue, useMemo, useRef } from 'react';
import Navbar from '@/components/Navbar';
import FAQItem from '@/components/LandingPage/Faq';

export default function Home() {
  const scrollY = useScroll();
  const firstScreenRef = useRef<HTMLDivElement>(null);

  const isNegativeColor = useMemo(() => {
    // if (firstScreenRef.current) {
    // const rect = firstScreenRef.current.getBoundingClientRect();
    // return scrollY > rect.height - 60;
    // }
    // return false;
    return 40 < scrollY;
  }, [scrollY]);

  return (
    <div className="text-gray-200">
      <Navbar isNegativeColor={isNegativeColor}></Navbar>
      <section
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, .88), rgba(0, 0, 0, .88)), url(${heroBg.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
        ref={firstScreenRef}
      >
        <div className="backdrop-blur-[0] min-h-screen flex justify-around flex-col items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center pt-28">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white">
              Sharing positivity to the world
            </h1>
            <p className="text-gray-300 mb-8 text-lg font-[300] lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              You may not be able to change the world but you can brighten someone's day.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 border-b-4 border-b-amber-800"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 "
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="text-center flex justify-center items-center text-lg">
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">
                500<span className="text-4xl font-[400]">+</span>
              </h4>
              <span className="text-sm text-gray-300">influence</span>
            </div>
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">
                100<span className="text-4xl font-[400]">+</span>
              </h4>
              <span className="text-sm text-gray-300">challenges</span>
            </div>
            <div className="w-[242px]">
              <h4 className="text-4xl font-extrabold">
                89k<span className="text-4xl font-[400]">+</span>
              </h4>
              <span className="text-sm text-gray-300">messages</span>
            </div>
          </div>
        </div>
      </section>
      <Features
        header="Select a letter template and generate QR Code"
        body="Our user-friendly interface enables you to effortlessly customize the letter. Add your personal touch with
              heartwarming messages, motivational quotes, or even your favorite photos to create a truly memorable and
              unique letter. Don't forget to add QR Code to your letter for them to accept the hero challenge."
        img={generatingQrPng.src}
      />
      <Features
        header="Think and do something noble to strangers"
        body="When someone receives an encouraging letter or message, it shows that they are valued and appreciated.
        This can make them feel good about themselves and give them the motivation to keep going."
        img={womenWritingPng.src}
        isTextLeft={false}
      />
      <Features
        header="Give random stranger an encouraging letter"
        body="When someone receives an encouraging letter or message, it shows that they are valued and appreciated.
      This can make them feel good about themselves and give them the motivation to keep going."
        img={handPng.src}
      />
      <Features
        header="Track your progress and appreciation"
        body={`Count the number of "Thank you" messages you receive and the number of people who accepted the challenge. Everything will be displayed on the app.`}
        img={recordPng.src}
        isTextLeft={false}
      />

      <section className="py-20 bg-gray-100">
        <div className="lg:w-lg w-full mx-auto text-gray-800">
          <div className="text-4xl font-[800] mb-12 text">Testimonials</div>
          <div className="text-base text-gray-500 font-[400]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet aliquam nesciunt fugit iusto
            incidunt aperiam perferendis adipisci quibusdam tempore praesentium quis, distinctio sed fuga quae odit
            facilis! Cum, sunt.
          </div>
        </div>
      </section>

      <section className="w-full text-gray-800 py-20 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="lg:w-lg w-full mx-auto">
          <div className="text-4xl font-[800] mb-12">Frequently Asked Questions</div>
          <div className="grid grid-cols-2 gap-8">
            <FAQItem
              question="How does it work?"
              answer="After doing something noble for strangers, you hand them a Hero Challenge letter in the form of a calling card. The card includes a QR code that, when scanned, leads them to a hero challenge webpage, urging them to perform a heroic act to strangers or friends, just as you did for them.              "
            />
            <FAQItem
              question="What is the reward?"
              answer="Heroes are motivated by their innate desire to do good for others, not by the prospect of compensation. Their true reward stems from the profound sense of fulfillment and accomplishment they experience while striving to be a positive influence in the world. It is the satisfaction of achieving their goal of being a beacon of goodness and making a difference in people's lives that drives them forward."
            />
            <FAQItem
              question="What is the purpose of the QR Code?"
              answer="The QR Code serves to guide recipients to the hero challenge page. Whenever someone visits the page or accepts the challenge by scanning the QR code from the letter, you will be notified."
            />
            <FAQItem
              question="How to start?"
              answer="To begin, sign up on the app, generate your unique QR Code, print the Hero Challenge along with the QR Code, and then carry out acts of kindness for strangers or others."
            />
            <FAQItem
              question="What will happen if the stranger didn't scan the QR Code?"
              answer="Even if the stranger doesn't scan the QR Code, remember that your actions serve as an inspiring example. Every effort to be a positive influence is meaningful, and nothing is in vain."
            />
            <FAQItem
              question="Can I share it to my friends?"
              answer="Absolutely! Spread the Hero Challenge to your friends and inspire them to join the cause!"
            />
          </div>
        </div>
      </section>
      <footer className="border-t-2 border-t-gray-700 bg-gray-800 py-6">
        <div className="w-lg mx-auto">All rights reserved heroinspire.com</div>
      </footer>
    </div>
  );
}
