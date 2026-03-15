"use client";

import { useState } from "react";
import { sendEmail } from "./action";

export default function ContactoPage() {
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.error) {
      setStatus({ error: result.error });
    } else {
      setStatus({ success: result.success });
      (e.target as HTMLFormElement).reset();
    }
    setIsPending(false);
  };

  return (
    <div className="bg-legal-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs block mb-4">Contacto Directo</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">Estamos a su <br /> disposición</h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-lg">
              Si necesita asesoramiento legal urgente o desea concertar una cita previa, no dude en contactarnos a través de los siguientes canales.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-legal-navy flex items-center justify-center border border-white/5">
                  <span className="text-legal-gold text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-legal-gold font-bold mb-2">Teléfono</h4>
                  <p className="text-white text-xl font-medium">629 390 858</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-legal-navy flex items-center justify-center border border-white/5">
                  <span className="text-legal-gold text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-legal-gold font-bold mb-2">Email</h4>
                  <p className="text-white text-xl font-medium">abogados@parsafathi.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-legal-navy flex items-center justify-center border border-white/5">
                  <span className="text-legal-gold text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-legal-gold font-bold mb-2">Despacho</h4>
                  <p className="text-white text-sm">Calle Moratin, bajo, nº 23<br />03008, Alicante</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-legal-charcoal p-10 lg:p-16 border border-white/5 relative">
             <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-legal-gold opacity-20"></div>
             
             <h3 className="text-2xl font-serif font-bold text-white mb-8 italic">Formulario de Contacto</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Nombre Completo</label>
                 <input 
                   id="name"
                   name="name"
                   required
                   className="w-full bg-legal-black/50 border border-white/10 p-4 text-white focus:ring-1 focus:ring-legal-gold outline-none transition-all"
                   placeholder="Introduzca su nombre"
                   type="text" 
                 />
               </div>

               <div className="space-y-2">
                 <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Correo Electrónico</label>
                 <input 
                   id="email"
                   name="email"
                   required
                   className="w-full bg-legal-black/50 border border-white/10 p-4 text-white focus:ring-1 focus:ring-legal-gold outline-none transition-all"
                   placeholder="ejemplo@correo.com"
                   type="email" 
                 />
               </div>

               <div className="space-y-2">
                 <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Consulta</label>
                 <textarea 
                   id="message"
                   name="message"
                   required
                   rows={4}
                   className="w-full bg-legal-black/50 border border-white/10 p-4 text-white focus:ring-1 focus:ring-legal-gold outline-none transition-all"
                   placeholder="Describa brevemente su caso..."
                 ></textarea>
               </div>

               <div className="flex items-start space-x-3 group cursor-pointer">
                 <input 
                   id="consent" 
                   name="consent" 
                   type="checkbox" 
                   required
                   className="mt-1 accent-legal-gold w-4 h-4 cursor-pointer"
                 />
                 <label htmlFor="consent" className="text-[10px] text-gray-500 leading-tight cursor-pointer">
                   Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. 
                   Soy consciente de que puedo revocar mi consentimiento en cualquier momento.
                 </label>
               </div>

               {status?.error && (
                 <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-500 text-xs">
                   {status.error}
                 </div>
               )}

               {status?.success && (
                 <div className="p-4 bg-green-900/20 border border-green-500/50 text-green-500 text-xs">
                   {status.success}
                 </div>
               )}

               <button 
                 type="submit" 
                 disabled={isPending}
                 className="w-full bg-legal-gold text-legal-black font-bold uppercase tracking-widest p-5 hover:bg-legal-gold-hover transition-all disabled:opacity-50"
               >
                 {isPending ? "Enviando..." : "Enviar Mensaje"}
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
