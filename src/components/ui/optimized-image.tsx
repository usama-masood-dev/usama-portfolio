import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  wrapperClassName?: string;
  /** Hint for srcset — use full display width for heroes/galleries */
  sizes?: string;
};

/** Responsive images via Next.js (WebP/AVIF + sized srcset). */
export function OptimizedImage({
  className,
  wrapperClassName,
  alt,
  sizes = "(max-width: 1280px) 100vw, 1280px",
  quality = 80,
  src,
  fill,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const useFill = fill ?? Boolean(wrapperClassName && !width);

  if (useFill) {
    return (
      <div className={cn("relative w-full overflow-hidden", wrapperClassName)}>
        <Image
          alt={alt}
          src={src}
          fill
          sizes={sizes}
          quality={quality}
          className={cn("object-cover", className)}
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
