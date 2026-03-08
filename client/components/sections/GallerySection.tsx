import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type GalleryImage = {
  src: string;
  alt: string;
  captionEn: string;
  captionTe: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&auto=format&fit=crop",
    alt: "Crop field survey",
    captionEn: "Field survey and crop health observation",
    captionTe: "క్షేత్ర సర్వే మరియు పంట ఆరోగ్య పరిశీలన",
  },
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop",
    alt: "Laboratory sample processing",
    captionEn: "Laboratory sample preparation and analysis",
    captionTe: "ప్రయోగశాలలో నమూనా తయారీ మరియు విశ్లేషణ",
  },
  {
    src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&auto=format&fit=crop",
    alt: "Sustainable agriculture landscape",
    captionEn: "Sustainable farming systems in practice",
    captionTe: "ఆచరణలో స్థిరమైన వ్యవసాయ వ్యవస్థలు",
  },
];

export function GallerySection() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const title = language === "en" ? "Gallery" : "గ్యాలరీ";
  const subtitle =
    language === "en"
      ? "A glimpse into field research and laboratory work"
      : "క్షేత్ర పరిశోధన మరియు ప్రయోగశాల పనుల చూపులు";

  const closeImage = () => setSelectedImage(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              className="group text-left overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground text-center">
                  {language === "en" ? image.captionEn : image.captionTe}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={closeImage}
              >
                <X className="h-4 w-4" />
              </Button>

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

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                  {language === "en"
                    ? galleryImages[selectedImage].captionEn
                    : galleryImages[selectedImage].captionTe}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
