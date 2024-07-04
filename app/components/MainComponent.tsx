"use client";

function MainComponent({ children }: any) {
  return (
    <main
      className={`container mx-auto max-w-7xl pt-4 md:px-6 px-2 flex-grow fade-in`}
    >
      {children}
    </main>
  );
}

export default MainComponent;
