import React from 'react';

/** 16x16 pixel-grid icons for the Settings layout and cover-style pickers. */
type IconProps = { className?: string };

const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({ className = 'w-4 h-4', children }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true"
    style={{ shapeRendering: 'crispEdges' }}>
    {children}
  </svg>
);

// Wide window with title bar and candy buttons
export const ClassicIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M1 3h14v1H1zM1 12h14v1H1zM1 4h1v8H1zM14 4h1v8h-1zM2 6h12v1H2z" />
    <path d="M3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7z" />
    <path d="M3 8h4v3H3zM8 8h5v1H8zM8 10h3v1H8z" opacity=".6" />
  </Icon>
);

// Polaroid card: thick bottom border
export const CardIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M3 1h10v1H3zM3 15h10v-1H3zM3 2h1v12H3zM12 2h1v12h-1z" />
    <path d="M5 3h6v1H5zM5 9h6v1H5zM5 4h1v5H5zM10 4h1v5h-1z" />
    <path d="M6 7h1v2H6zM7 6h1v3H7zM8 7h2v2H8z" opacity=".6" />
    <path d="M5 11h4v1H5z" opacity=".6" />
  </Icon>
);

// iPod mini: screen + click wheel
export const IpodIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M4 0h8v1H4zM4 15h8v1H4zM3 1h1v14H3zM12 1h1v14h-1z" />
    <path d="M5 2h6v1H5zM5 6h6v1H5zM5 3h1v3H5zM10 3h1v3h-1z" />
    <path d="M7 8h2v1H7zM7 13h2v1H7zM5 10h1v2H5zM10 10h1v2h-1zM6 9h1v1H6zM9 9h1v1H9zM6 12h1v1H6zM9 12h1v1H9z" />
    <path d="M7 10h2v2H7z" opacity=".6" />
  </Icon>
);

// Pill capsule
export const CapsuleIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M4 4h8v1H4zM4 11h8v1H4zM2 5h2v1H2zM12 5h2v1h-2zM2 10h2v1H2zM12 10h2v1h-2zM1 6h1v4H1zM14 6h1v4h-1z" />
    <path d="M8 5h1v6H8z" />
    <path d="M2 6h6v4H2zM4 5h4v1H4zM4 10h4v1H4z" opacity=".55" />
  </Icon>
);

// Four-point pixel sparkle
export const SparkleIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M7 1h2v4H7zM7 11h2v4H7zM1 7h4v2H1zM11 7h4v2h-4zM6 5h4v6H6zM5 6h6v4H5z" />
    <path d="M12 1h1v3h-1zM11 2h3v1h-3z" opacity=".6" />
  </Icon>
);

// Album sleeve with a record peeking out
export const AlbumIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M1 2h9v1H1zM1 13h9v1H1zM1 3h1v10H1zM9 3h1v10H9z" />
    <path d="M3 5h5v6H3z" opacity=".55" />
    <path d="M11 3h2v1h-2zM13 4h1v1h-1zM14 5h1v6h-1zM13 11h1v1h-1zM11 12h2v1h-2zM10 7h2v2h-2z" />
  </Icon>
);

// Cassette tape
export const CassetteIcon: React.FC<IconProps> = (p) => (
  <Icon {...p}>
    <path d="M1 3h14v1H1zM1 13h14v-1H1zM1 4h1v8H1zM14 4h1v8h-1z" />
    <path d="M3 5h10v4H3z" opacity=".55" />
    <path d="M4 6h2v2H4zM10 6h2v2h-2zM6 7h4v1H6z" />
    <path d="M5 10h6v1H5zM4 11h1v1H4zM11 11h1v1h-1z" />
  </Icon>
);
