import {
  X,
  User,
  MapPin,
  Calendar,
  ChevronLeft,
  Clock,
  Navigation,
} from "lucide-react";
import { useEffect } from "react";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  projectData?: {
    category?: string;
    location?: string;
    author?: string;
    updatedAt?: string;
    startDate?: string;
    endDate?: string;
  };
}

export default function DescriptionModal({
  isOpen,
  onClose,
  title,
  description,
  projectData,
}: DescriptionModalProps) {
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) {
      return `${diffYears} tahun${diffYears > 1 ? "" : ""}`;
    } else if (diffMonths > 0) {
      return `${diffMonths} bulan`;
    } else {
      return `${diffDays} hari`;
    }
  };

  const formatHariTanggal = (rawDate: string) => {
    // Ubah "14.35.23" → "14:35:23" biar bisa dibaca Date()
    const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1:$2:$3");

    const date = new Date(fixedDate);

    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in border border-gray-100">
          <div className="sticky top-0 z-20 bg-white border-b border-gray-100 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Kembali"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Deskripsi Proyek
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="p-6 md:p-8">
              {/* Title Section */}
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>

                {/* Meta Info Bar */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                  {projectData?.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">Alex</span>
                    </div>
                  )}

                  {projectData?.updatedAt && (
                    <>
                      <div className="hidden sm:block text-gray-400">•</div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>
                          Diperbarui {formatHariTanggal(projectData.updatedAt)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {projectData?.location && (
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100/30 rounded-xl border border-blue-200 w-full sm:w-[200px] lg:w-[220px] xl:w-[240px] gap-2 flex-shrink-0">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 bg-white rounded-lg shadow-sm flex-shrink-0">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {" "}
                          <div className="text-xs font-medium text-blue-700 mb-1 truncate">
                            Lokasi Proyek
                          </div>
                          <div className="font-semibold text-gray-900 truncate">
                            {projectData.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Timeline Card - More prominent */}
                  {(projectData?.startDate || projectData?.endDate) && (
                    <div className="w-full sm:flex-1 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 py-3 bg-gradient-to-r from-[#B61F2B]/5 to-[#C9A74A]/5 rounded-lg border border-[#B61F2B]/20">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                          <Clock className="w-4 h-4 text-[#B61F2B]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-gray-500">
                            Timeline Proyek
                          </div>
                          <div className="font-semibold text-gray-900 truncate">
                            {projectData?.startDate
                              ? formatDate(projectData.startDate)
                              : "TBD"}
                            {projectData?.endDate &&
                              ` → ${formatDate(projectData.endDate)}`}
                          </div>
                        </div>
                      </div>

                      {/* Duration indicator */}
                      {projectData?.startDate && projectData?.endDate && (
                        <div className="w-full sm:w-auto sm:pl-4 sm:border-l border-gray-300 pt-2 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
                          <div className="text-xs text-gray-500">Durasi</div>
                          <div className="text-sm font-medium text-gray-900">
                            {calculateDuration(
                              projectData.startDate,
                              projectData.endDate
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                  {description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
            </div>
          </div>

          {/* Footer - Clean Action Buttons */}
          <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{description.length}</span>{" "}
                    karakter
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: title,
                        text: description.substring(0, 100) + "...",
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link berhasil disalin!");
                    }
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] text-white font-medium rounded-lg hover:shadow-md transition-shadow"
                >
                  Bagikan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
