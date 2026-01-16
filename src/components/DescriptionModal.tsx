import {
  X,
  User,
  MapPin,
  Calendar,
  ChevronLeft,
  Clock,
  Share2,
  Maximize2
} from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
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
  image,
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
    const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1:$2:$3");
    const date = new Date(fixedDate);
    return date.toLocaleDateString("id-ID", {
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

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
        {/* Left/Top: Hero Image Section */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto bg-slate-100 shrink-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-300">
               <Maximize2 className="w-12 h-12" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white md:hidden z-10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Right/Bottom: Content Section */}
        <div className="flex-1 flex flex-col min-w-0 bg-white h-full max-h-[90vh] md:max-h-[85vh]">
           {/* Sticky Header */}
           <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div>
                 <h2 className="text-xl font-bold text-slate-900 line-clamp-1">{title}</h2>
                 {projectData?.location && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                       <MapPin className="w-3.5 h-3.5 text-[#B61F2B]" />
                       {projectData.location}
                    </div>
                 )}
              </div>
              <button
                 onClick={onClose}
                 className="p-2 hover:bg-slate-100 rounded-full transition-colors hidden md:block"
              >
                 <X className="w-6 h-6 text-slate-400" />
              </button>
           </div>

           {/* Scrollable Content */}
           <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Timeline</span>
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                       <Calendar className="w-4 h-4 text-[#B61F2B]" />
                       <span>{projectData?.startDate ? formatHariTanggal(projectData.startDate) : "TBD"}</span>
                    </div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Durasi</span>
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                       <Clock className="w-4 h-4 text-[#C9A74A]" />
                       <span>
                          {projectData?.startDate && projectData?.endDate 
                             ? calculateDuration(projectData.startDate, projectData.endDate) 
                             : "-"}
                       </span>
                    </div>
                 </div>
              </div>

              {/* Main Description */}
              <div className="prose prose-slate prose-lg max-w-none">
                 <h3 className="text-lg font-bold text-slate-900 mb-3">Tentang Proyek</h3>
                 <div className="text-slate-600 leading-relaxed text-base space-y-4 text-justify">
                    {description.split('\n\n').map((paragraph, index) => (
                       <p key={index}>{paragraph}</p>
                    ))}
                 </div>
              </div>

              {/* Tag/Author */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                       <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                       <div className="text-xs text-slate-400 font-medium">Project Manager</div>
                       <div className="text-sm font-bold text-slate-900">Alex</div>
                    </div>
                 </div>
                 <div className="text-xs text-slate-400">
                    Updated: {projectData?.updatedAt ? formatHariTanggal(projectData.updatedAt) : "-"}
                 </div>
              </div>
           </div>

           {/* Footer Action */}
           <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
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
                  className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm"
               >
                  <Share2 className="w-4 h-4" />
                  <span>Bagikan</span>
               </button>
           </div>
        </div>
      </div>
    </div>
  );
}
