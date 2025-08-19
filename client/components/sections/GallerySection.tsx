import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images - you can replace these with real images
  // Empty gallery - ready for your photos
  const galleryImages: any[] = [];

  const title = language === "en" ? "Gallery" : "గ్యాలరీ";
  const subtitle =
    language === "en"
      ? "A glimpse into my field research and laboratory work"
      : "నా క్షేత్ర పరిశోధన మరియు ప్రయోగశాల పనుల చూపులు";

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1,
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              onClick={() => openImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground text-center">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border border-dashed">
            <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              More Photos Coming Soon
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm preparing more photos from my field research and laboratory
              work to share with you.
            </p>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={closeImage}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
