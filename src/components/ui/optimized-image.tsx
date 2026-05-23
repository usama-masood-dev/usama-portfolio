import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  wrapperClassName?: string;
  /** Hint for srcset — use full display width for heroes/galleries */
  sizes?: string;
};

function isLocalPublicSrc(src: ImageProps["src"]): boolean {
  if (typeof src === "string") {
    return src.startsWith("/") && !src.startsWith("//");
  }
  return typeof src === "object" && "src" in src;
}

/** Local UI screenshots stay sharp; remote images use Next optimization + quality */
export function OptimizedImage({
  className,
  wrapperClassName,
  alt,
  sizes = "(max-width: 1280px) 100vw, 1280px",
  quality = 90,
  src,
  fill,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const local = isLocalPublicSrc(src);
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
          unoptimized={local}
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
        unoptimized={local}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
