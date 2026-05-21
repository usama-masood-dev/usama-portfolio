"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { CarouselArrows } from "@/components/ui/carousel-arrows";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

type GalleryImage = { src: string; alt: string };

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  return (
    <div>
      <div className="relative px-6 sm:px-12">
        <CarouselArrows onPrev={scrollPrev} onNext={scrollNext} size="sm" />
        <div className="overflow-hidden rounded-2xl border border-border" ref={emblaRef}>
          <div className="flex">
            {images.map((img) => (
              <div key={img.src} className="min-w-0 flex-[0_0_100%]">
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={700}
                  wrapperClassName="aspect-[16/9]"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        {images[index]?.alt} · {index + 1}/{images.length}
      </p>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition",
              i === index ? "border-primary" : "border-transparent opacity-60",
            )}
          >
            <OptimizedImage
              src={img.src}
              alt=""
              width={80}
              height={56}
              className="h-full w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
