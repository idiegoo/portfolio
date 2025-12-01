import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, contactSchemaEs, VALIDATION_RULES, type ContactFormData } from '../lib/validation';
import { toast } from 'sonner';
import { useState } from 'react';

interface ContactFormProps {
  lang?: 'en' | 'es';
  translations: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
}

export default function ContactForm({ lang = 'en', translations }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = lang === 'es' ? contactSchemaEs : contactSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema as any), // bug between pnpm, zod and RHF types
    mode: 'onBlur', // Validate on blur for better UX
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(translations.successMessage);
        reset();
      } else {
        toast.error(result.message || translations.errorMessage);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(translations.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          {translations.name}
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-400 ${errors.name ? 'border-red-500 focus:ring-red-400' : ''}`}
          placeholder={translations.name}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          {translations.email}
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-400 ${errors.email ? 'border-red-500 focus:ring-red-400' : ''}`}
          placeholder={translations.email}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          {translations.message}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-400 resize-none ${errors.message ? 'border-red-500 focus:ring-red-400' : ''}`}
          placeholder={translations.message}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
        {!errors.message && (
          <p className="text-xs text-gray-400 mt-1">
            Min. {VALIDATION_RULES.message.min} {lang === 'es' ? 'caracteres' : 'characters'}, max. {VALIDATION_RULES.message.max}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isSubmitting ? translations.sending : translations.send}
      </button>
    </form>
  );
}
