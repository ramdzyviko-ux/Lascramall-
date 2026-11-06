import React, { useState, useEffect } from 'react';
import { NavSection, ContactFormData, FormValidationErrors, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_DETAILS, validateContactForm } from '../utils/corporateData';
import { PageTransition, FadeIn } from '../components/MotionWrappers';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
  preselectedTopic?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  lang,
  preselectedTopic,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    inquiryType: 'business',
    message: preselectedTopic
      ? `Permohonan informasi kemitraan terkait: ${preselectedTopic}`
      : '',
  });

  useEffect(() => {
    if (preselectedTopic) {
      setFormData((prev) => ({
        ...prev,
        message: `Permohonan informasi kemitraan terkait: ${preselectedTopic}`,
      }));
    }
  }, [preselectedTopic]);

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Scroll to the first error on mobile if needed
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `LSC-${Date.now().toString().slice(-6)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      inquiryType: 'business',
      message: '',
    });
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <PageTransition className="bg-white">
      {/* 1. Page Header */}
      <PageHeader
        currentSection="contact"
        title={lang === 'id' ? 'Hubungi Kantor Korporat' : 'Contact Corporate Desk'}
        subtitle={
          lang === 'id'
            ? 'Saluran komunikasi resmi untuk kemitraan strategis, kerja sama niaga digital, integrasi sistem, dan informasi perseroan PT Lascramall Commerce Network.'
            : 'Official corporate channel for commercial partnerships, digital trade integration, system alliances, and company inquiries.'
        }
        badge="CORPORATE DESK"
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* 2. Main Content (Mobile-First) */}
      <div className="py-10 sm:py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
            {/* Left Column: Official Corporate Inquiries & Headquarters Info */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {/* Headquarters Card */}
              <FadeIn delay={0.05} className="bg-white p-5 sm:p-8 rounded-2xl border border-[#E8E8E8] shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141]">
                  <Building2 className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Kantor Pusat Perseroan' : 'Corporate Headquarters'}</span>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#222222]">
                    {COMPANY_DETAILS.legalName}
                  </h2>
                  <p className="text-xs text-[#777777] mt-0.5">
                    Brand: {COMPANY_DETAILS.brandName}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-[#444444]">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
                    <MapPin className="w-4 h-4 text-[#E54141] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#222222] block mb-0.5 text-[11px]">Alamat Resmi:</span>
                      <span className="leading-relaxed text-[#555555]">
                        {COMPANY_DETAILS.headquarters.address}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Quick Call Button */}
                    <a
                      href={`tel:${COMPANY_DETAILS.headquarters.phone}`}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE] active:bg-[#ECECEC] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <Phone className="w-4 h-4 text-[#E54141] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#222222] block text-[10px] uppercase">Telepon:</span>
                        <span className="text-[#333333] font-medium text-xs">{COMPANY_DETAILS.headquarters.phone}</span>
                      </div>
                    </a>

                    {/* Quick WhatsApp Chat Button */}
                    <a
                      href="https://wa.me/628151852500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE] active:bg-[#ECECEC] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#222222] block text-[10px] uppercase">WhatsApp:</span>
                        <span className="text-[#333333] font-medium text-xs">+62 815 1852 500</span>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
                    <Clock className="w-4 h-4 text-[#E54141] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#222222] block mb-0.5 text-[11px]">Jam Operasional Layanan:</span>
                      <span className="text-[#555555] leading-relaxed">Senin – Minggu: 08.00 – 21.00 WIB (Kecuali Hari Libur Nasional)</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Department Emails Card */}
              <FadeIn delay={0.1} className="bg-white p-5 sm:p-8 rounded-2xl border border-[#E8E8E8] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#222222]">
                  <Mail className="w-4 h-4 text-[#E54141]" />
                  <span>{lang === 'id' ? 'Direktori Email Resmi' : 'Official Communications Directory'}</span>
                </div>

                <div className="space-y-2.5 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <div className="font-semibold text-[#222222]">Business & Commercial Inquiries</div>
                      <div className="text-[11px] text-[#777777]">Kemitraan bisnis & niaga digital</div>
                    </div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.headquarters.emailCorporate}`}
                      className="font-medium text-[#E54141] hover:underline self-start sm:self-auto py-1 min-h-[36px] flex items-center"
                    >
                      {COMPANY_DETAILS.headquarters.emailCorporate}
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <div className="font-semibold text-[#222222]">Partnership & Ecosystem Alliance</div>
                      <div className="text-[11px] text-[#777777]">Kerja sama aggregator & gaming assets</div>
                    </div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.headquarters.emailPartnership}`}
                      className="font-medium text-[#E54141] hover:underline self-start sm:self-auto py-1 min-h-[36px] flex items-center"
                    >
                      {COMPANY_DETAILS.headquarters.emailPartnership}
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <div className="font-semibold text-[#222222]">General Corporate Inquiries</div>
                      <div className="text-[11px] text-[#777777]">Sekretariat perseroan & relasi publik</div>
                    </div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.headquarters.emailInquiries}`}
                      className="font-medium text-[#E54141] hover:underline self-start sm:self-auto py-1 min-h-[36px] flex items-center"
                    >
                      {COMPANY_DETAILS.headquarters.emailInquiries}
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive Enterprise Inquiry Form (Android Mobile Optimized) */}
            <FadeIn delay={0.15} className="lg:col-span-7">
              <div className="bg-white p-5 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs">
                {submittedRef ? (
                  <div className="text-center py-8 sm:py-10 space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF1F1] text-[#E54141] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#222222]">
                      {lang === 'id' ? 'Inisiasi Kemitraan Berhasil Dikirim' : 'Inquiry Successfully Submitted'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                      {lang === 'id'
                        ? 'Terima kasih atas minat Anda terhadap PT Lascramall Commerce Network. Nomor referensi permohonan Anda:'
                        : 'Thank you for your interest in PT Lascramall Commerce Network. Your inquiry tracking reference:'}
                    </p>
                    <div className="inline-block px-4 py-2.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-xl font-mono text-base font-bold text-[#E54141] tracking-wider select-all">
                      {submittedRef}
                    </div>
                    <p className="text-xs text-[#777777] max-w-md mx-auto leading-relaxed">
                      {lang === 'id'
                        ? 'Perwakilan korporasi kami akan memverifikasi permohonan Anda dan menghubungi Anda melalui email korporat dalam 1–2 hari kerja.'
                        : 'Our corporate representative will review the submission and contact you via your business email within 1–2 business days.'}
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-[#222222] bg-[#F7F7F7] active:bg-[#EAEAEA] border border-[#E0E0E0] rounded-xl transition-colors cursor-pointer min-h-[44px]"
                      >
                        {lang === 'id' ? 'Kirim Pesan Lain' : 'Submit Another Inquiry'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                    <div className="border-b border-[#F0F0F0] pb-3 sm:pb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-[#222222]">
                        {lang === 'id' ? 'Formulir Komunikasi & Kemitraan' : 'Corporate Inquiries & Partnership Form'}
                      </h3>
                      <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                        {lang === 'id'
                          ? 'Harap isi data berikut untuk memfasilitasi penelaahan oleh tim pengembangan bisnis kami.'
                          : 'Please provide corporate details to facilitate assessment by our business development desk.'}
                      </p>
                    </div>

                    {/* Inquiry Type (Android Thumb-Friendly 2-Col Grid) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-2">
                        {lang === 'id' ? 'Jenis Kepentingan Inisiasi' : 'Inquiry Classification'} *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'business', label: 'Business Inquiry' },
                          { id: 'partnership', label: 'Partnership' },
                          { id: 'technology', label: 'Tech & API' },
                          { id: 'general', label: 'General / Legal' },
                        ].map((type) => {
                          const isSelected = formData.inquiryType === type.id;
                          return (
                            <button
                              type="button"
                              key={type.id}
                              onClick={() =>
                                setFormData({ ...formData, inquiryType: type.id as any })
                              }
                              className={`px-3 py-2.5 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer min-h-[44px] touch-manipulation flex items-center justify-center ${
                                isSelected
                                  ? 'bg-[#FFF1F1] border-[#E54141] text-[#E54141] shadow-2xs font-bold'
                                  : 'bg-[#F9F9F9] border-[#E5E5E5] text-[#555555] active:bg-[#EFEFEF]'
                              }`}
                            >
                              {type.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1">
                          {lang === 'id' ? 'Nama Lengkap Pemohon' : 'Full Name'} *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder={lang === 'id' ? 'Contoh: Ahmad Fauzi' : 'e.g. Johnathan Smith'}
                          className={`w-full px-3.5 py-3 text-base sm:text-xs text-[#222222] bg-white border rounded-xl focus:outline-hidden transition-colors min-h-[48px] ${
                            errors.fullName
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-[#D9D9D9] focus:border-[#E54141]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1">
                          {lang === 'id' ? 'Perusahaan / Institusi' : 'Company / Organization'} *
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          placeholder="PT / CV / Instansi..."
                          className={`w-full px-3.5 py-3 text-base sm:text-xs text-[#222222] bg-white border rounded-xl focus:outline-hidden transition-colors min-h-[48px] ${
                            errors.companyName
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-[#D9D9D9] focus:border-[#E54141]'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.companyName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Corporate Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1">
                          {lang === 'id' ? 'Email Korporat' : 'Business Email'} *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@company.co.id"
                          className={`w-full px-3.5 py-3 text-base sm:text-xs text-[#222222] bg-white border rounded-xl focus:outline-hidden transition-colors min-h-[48px] ${
                            errors.email
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-[#D9D9D9] focus:border-[#E54141]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#333333] mb-1">
                          {lang === 'id' ? 'Nomor Kontak / WhatsApp' : 'Phone / Contact'} *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+62 812..."
                          className={`w-full px-3.5 py-3 text-base sm:text-xs text-[#222222] bg-white border rounded-xl focus:outline-hidden transition-colors min-h-[48px] ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-[#D9D9D9] focus:border-[#E54141]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1">
                        {lang === 'id' ? 'Pesan & Rincian Rencana Kemitraan' : 'Message & Proposed Collaboration Scope'} *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={
                          lang === 'id'
                            ? 'Jelaskan tujuan penjajakan bisnis, cakupan kerja sama, atau produk yang ingin diintegrasikan...'
                            : 'Outline your commercial objectives, partnership scope, or integration intent...'
                        }
                        className={`w-full px-3.5 py-3 text-base sm:text-xs text-[#222222] bg-white border rounded-xl focus:outline-hidden transition-colors resize-none min-h-[110px] ${
                          errors.message
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-[#D9D9D9] focus:border-[#E54141]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button (48px Android Touch Target) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] disabled:bg-[#FFA5A5] rounded-xl shadow-xs transition-colors cursor-pointer min-h-[48px] touch-manipulation"
                      >
                        {isSubmitting ? (
                          <span>{lang === 'id' ? 'Memproses Permohonan...' : 'Transmitting Inquiry...'}</span>
                        ) : (
                          <>
                            <span>{lang === 'id' ? 'Kirim Permohonan Kemitraan' : 'Dispatch Corporate Inquiry'}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] sm:text-[11px] text-[#888888] text-center mt-2.5 leading-normal">
                        {lang === 'id'
                          ? 'Informasi yang Anda sampaikan dilindungi oleh kebijakan privasi korporasi PT Lascramall Commerce Network.'
                          : 'Information submitted is safeguarded under the corporate privacy charter of PT Lascramall Commerce Network.'}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
