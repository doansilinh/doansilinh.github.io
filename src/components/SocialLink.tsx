"use client";

import React from "react";

interface SocialLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ label, href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link group"
      style={{
        "--hover-bg": hoverColor,
      } as React.CSSProperties}
    >
      <div className="absolute left-6 group-hover:-translate-y-0.5 transition-transform duration-300">
        {icon}
      </div>
      <span className="w-full text-center">{label}</span>
    </a>
  );
};
