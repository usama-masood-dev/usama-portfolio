import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  wrapperClassName?: string;
};

export function OptimizedImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        alt={alt}
        className={cn("object-cover", className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
}
