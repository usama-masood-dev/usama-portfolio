"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CarouselArrows } from "@/components/ui/carousel-arrows";
import { portfolioAspectClass } from "@/lib/media";
import { cn } from "@/lib/utils";

type GalleryImage = { src: string; alt: string };

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative">
        <CarouselArrows onPrev={scrollPrev} onNext={scrollNext} size="sm" />
        <div
          className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]"
          ref={emblaRef}
        >
          <div className="flex">
            {images.map((img) => (
              <div
                key={img.src}
                className={cn("relative min-w-0 flex-[0_0_100%]", portfolioAspectClass)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  quality={80}
                  className="object-contain p-1 sm:p-2"
                  priority={img.src === images[0]?.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted sm:text-left">
        {images[index]?.alt} · {index + 1}/{images.length}
      </p>

      {/* Thumbnails — grid (no horizontal scroll) */}
      <div
        className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        role="tablist"
        aria-label="Gallery thumbnails"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}: ${img.alt}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "relative w-full overflow-hidden rounded-lg border-2 bg-surface-elevated transition",
              portfolioAspectClass,
              i === index
                ? "border-primary ring-2 ring-primary/30"
                : "border-border opacity-75 hover:border-primary/40 hover:opacity-100",
            )}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(max-width: 640px) 30vw, 160px"
              quality={60}
              className="object-contain p-0.5"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
