"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const withIntersectionObserver = (WrappedComponent) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withIntersectionObserver;
