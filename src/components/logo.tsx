import type { SVGProps } from 'react';

/**
 * Axion Ventures logo mark.
 * Brand spec: square border (ink) + italic serif "A" + blue corner bracket (bottom-right).
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Axion Ventures logo mark"
      {...props}
    >
      {/* Outer square border — 1.5px ink stroke */}
      <rect
        x="1.75"
        y="1.75"
        width="20.5"
        height="20.5"
        stroke="#1C1917"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Italic serif "A" — centered, ~56% of square height (~13.4px) */}
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontStyle="italic"
        fontSize="13"
        fill="#1C1917"
      >
        A
      </text>

      {/* Blue corner bracket — bottom-right, ~25% of edge length (~5px) */}
      <path
        d="M22.25 17.25 L22.25 22.25 L17.25 22.25"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}
