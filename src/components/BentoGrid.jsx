// src/components/BentoGrid.jsx

//==============================
//  MAIN BENTO GRID
//==============================
// This component controls the overall grid system.
// Mobile: 1 column
// Desktop: 4 columns

const BentoGrid = ({ children, className = "" }) => {
  return (
    <div
      className={`
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        gap-4
        px-4
        py-6
        md:grid-cols-4
        md:gap-5
        md:px-6
        md:py-10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BentoGrid;