'use client';

import { forwardRef } from 'react';
import cx from 'classNames';
import Link from 'next/link';
interface NavbarProps {
  isNegativeColor: boolean;
}

const Navbar = forwardRef((props: NavbarProps, ref) => {
  const refElement = ref as React.MutableRefObject<HTMLDivElement>;

  return (
    <div
      ref={refElement}
      className={cx('fixed top-0 z-10 w-full border-b border-b-transparent h-[60px] transition-all', {
        'bg-gray-100 text-gray-900 border-b !border-b-gray-200': props.isNegativeColor,
      })}
    >
      <div className="col-md w-full sm-w mx-auto lg:w-lg flex justify-between items-center h-full">
        <div className="font-[800] text-2xl">heroinspire</div>
        <div
          className={cx('flex items-center gap-8 text-gray-300', {
            '!text-gray-700': props.isNegativeColor,
          })}
        >
          <a href="#" className="font-medium text-base">
            Contest
          </a>
          <a href="#" className="font-medium text-base">
            Messages
          </a>
          <a href="#" className="font-medium text-base">
            About
          </a>
          <Link href="/login" className="font-medium text-base">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
