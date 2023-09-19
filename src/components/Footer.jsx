import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/myteam-logo.svg';

const Footer = () => {
  return (
    <footer className='bg-secondary-dark_green py-12 max-730:py-56px max-440:py-16'>
      <div className="flex container max-730:flex-col max-730:gap-8 max-440:gap-10">

        <div className="flex mr-auto max-730:justify-between max-730:mr-0 max-440:flex-col max-440:items-center">
          <div className='mr-125 max-940:mr-100 max-800:mr-16 max-730:mr-0 max-440:mb-6'>
            {/* logo  */}
            <Link to='/'>
              <img className='mb-6 max-730:w-24 max-730:h-6 max-440:mx-auto' width={160} height={40} src={Logo} alt="my team logo, header logo" />
            </Link>
            {/* navbar menu  */}
            <nav className='flex items-center justify-between w-full leading-7'>
              <ul className='flex items-center space-x-10'>
                <li>
                  <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='about'>About</NavLink>
                </li>
              </ul>
            </nav>
            <ul className="hidden items-center space-x-4 mb-auto">
              <li>
                <a href="https://www.facebook.com" target='_blank'>
                  <svg width="24" height="24" className='text-white hover:text-primary-light_coral transition-colors' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://wwww.pintereset.com" target='_blank'>
                  <svg width="24" height="24" className='text-white hover:text-primary-light_coral transition-colors' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-white hover:text-primary-light_coral transition-colors' width="24" height="24" viewBox="0 0 24 20" fill="none">
                    <path d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <p className="small-p opacity-6 max-730:text-right max-440:text-center">987  Hillcrest Lane <br />Irvine, CA <br />California 92714 <br />Call Us : 949-833-7432</p>
        </div>

        {/* bottom  */}
        <div className="flex flex-col items-end max-730:flex-row max-730:justify-between max-440:flex-col max-440:items-center">
          <ul className="flex items-center space-x-4 mb-auto max-440:mb-4">
            <li>
              <a href="https://www.facebook.com" target='_blank'>
                <svg width="24" height="24" className='text-white hover:text-primary-light_coral transition-colors' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://wwww.pintereset.com" target='_blank'>
                <svg width="24" height="24" className='text-white hover:text-primary-light_coral transition-colors' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-white hover:text-primary-light_coral transition-colors' width="24" height="24" viewBox="0 0 24 20" fill="none">
                  <path d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z" fill="currentColor" />
                </svg>
              </a>
            </li>
          </ul>
          <p className="small-p opacity-6">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer