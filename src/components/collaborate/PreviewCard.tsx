import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PreviewCardProps {
  url: string;
  title?: string;
  preview: string;
  excerpt?: string;
  className?: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({
  url,
  title,
  preview,
  excerpt,
  className,
}) => {
  return (
    <Link
      target='_blank'
      rel='noopener noreferrer' // Security improvement for external links
      href={url}
      className={`flex flex-col gap-4 rounded-lg cursor-pointer relative group transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {/* Image Container */}
      <div className='relative overflow-hidden rounded-md'>
        <Image
          alt={`preview ${title}`}
          src={preview}
          width={1920}
          height={1080}
          priority
          className='w-full object-fill h-60 rounded-md'
        />
        {/* Optional overlay */}
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-2'>
        {/* Title */}
        <h2 className='font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors'>
          {title}
        </h2>

        {/* Excerpt */}
        <p className='line-clamp-3 text-justify'>{excerpt}</p>
      </div>
    </Link>
  );
};

export default PreviewCard;
