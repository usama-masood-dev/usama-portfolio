"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { CarouselArrows } from "@/components/ui/carousel-arrows";
import { ProjectCard } from "@/components/work/project-card";
import { projects } from "@/lib/projects";

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative px-6 sm:px-14">
      <CarouselArrows
        onPrev={scrollPrev}
        onNext={scrollNext}
        canPrev={canPrev}
        canNext={canNext}
      />
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container -ml-4">
          {projects.map((project) => (
            <div key={project.slug} className="embla__slide pl-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
