'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CoverImage from './CoverImage';

// ==== TYPES ====
export interface ServiceItem {
  id: number;
  title: string;
  tools: string[];
  description: string;
  buttonBg: string;
  buttonIconColor: string;
  rightBg: string;
  border?: string;
  coverImage?: any;
}

interface CardStackProps {
  items: ServiceItem[];
  offset?: number;
}

// ==== COMPONENT ====
const CardStack: React.FC<CardStackProps> = ({ items, offset = 45 }) => {
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const innerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      containerRefs.current.forEach((container, index) => {
        const innerCard = innerRefs.current[index];
        const nextContainer = containerRefs.current[index + 1];

        if (!container || !innerCard || !nextContainer) return;

        const nextRect = nextContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let coverage = 0;

        if (nextRect.top <= windowHeight && nextRect.top >= 0) {
          const distance = windowHeight - nextRect.top;
          coverage = distance / windowHeight;
        } else if (nextRect.top < 0) {
          coverage = 1;
        }

        const triggerPoint = 0.65;
        let progress = 0;

        if (coverage > triggerPoint) {
          progress = (coverage - triggerPoint) / (1 - triggerPoint);
        }

        const scale = 1 - progress * 0.05;
        const brightness = 1 - progress * 0.4;
        const blur = progress * 4;

        innerCard.style.transform = `scale(${scale})`;
        innerCard.style.filter = `blur(${blur}px) brightness(${brightness})`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <div className="relative w-full pb-32">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) containerRefs.current[index] = el;
          }}
          style={{ top: index * offset }}
          className="sticky h-screen flex items-start justify-center pt-10 pb-10"
        >
          <div
            ref={(el) => {
              if (el) innerRefs.current[index] = el;
            }}
            className="group relative w-full max-w-7xl rounded-2xl overflow-hidden min-h-[500px] md:h-[600px] border border-gray-100 origin-top will-change-transform transition-all duration-75 ease-in-out"
          >
            <div className='bg-black/20 group-hover:transition-colors group-hover:bg-black/0 absolute h-full w-full z-10 duration-500'></div>
            <CoverImage
              className="w-full object-cover h-full group-hover:transition-transform duration-500 group-hover:scale-105"
              image={item.coverImage}
              priority
            />
            <div className="absolute bottom-5 inset-x-0 mx-5 group-hover:transition-transform duration-500 group-hover:translate-y-2 transform translate-y-0 z-20">
              <div className="mt-4 bg-white rounded-xl p-4 shadow-lg flex items-start gap-4 ">
                {/* Text */}
                <div className="flex-1 gap-y-2 flex flex-col">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-snug">
                    An all-in-one, easy-to-edit solution for creatives.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {item.tools.map((tools, i) => (
                      <span
                        key={i}
                        className="border border-gray-200 rounded-full px-2 py-1 text-xs bg-gray-100 text-gray-800"
                      >
                        {tools}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Arrow Button */}
                <button className="w-9 h-9 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 7l-10 10m0-10h10v10"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Left Content */}
            {/* <div className="p-8 md:p-14 flex flex-col justify-between h-full order-2 lg:order-1 relative">
              <div className="lg:hidden absolute top-8 right-8 bg-black/5 p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6" />
              </div>

              <div>
                <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-8">
                  {item.title}
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex flex-wrap gap-3">
                  {item.tools.map((tools, i) => (
                    <span
                      key={i}
                      className={`border ${
                        item.text === 'text-white'
                          ? 'border-white/20'
                          : 'border-gray-800/20'
                      } rounded-full px-5 py-2 text-sm font-medium`}
                    >
                      {tools}
                    </span>
                  ))}
                </div>

                <p className="text-lg leading-relaxed max-w-lg opacity-80">
                  {item.description}
                </p>
              </div>
            </div> */}

            {/* Right Content */}
            {/* <div
              className={`${item.rightBg} relative h-64 lg:h-full order-1 lg:order-2 group overflow-hidden`}
            >
              <div
                className={`hidden lg:flex absolute top-10 right-10 ${item.buttonBg} w-16 h-16 rounded-full items-center justify-center ${item.buttonIconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 cursor-pointer z-20`}
              >
                <ArrowUpRight className="w-8 h-8" />
              </div>

              {item.coverImage && (
                <div className="absolute inset-0 w-full h-full">
                  <CoverImage
                    className="object-cover w-full h-full"
                    image={item.coverImage}
                    priority
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-black/10"></div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
