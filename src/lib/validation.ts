import { z } from 'zod';

/** Shared schema and rules for contact form used in both client-side and server-side validation*/

// Validation constraints (shared with frontend)
export const VALIDATION_RULES = {
  name: { min: 2, max: 100 },
  message: { min: 10, max: 1000 },
} as const;

// Validation messages in both languages
export const VALIDATION_MESSAGES = {
  en: {
    nameMin: `Name must be at least ${VALIDATION_RULES.name.min} characters`,
    nameMax: `Name must be less than ${VALIDATION_RULES.name.max} characters`,
    emailInvalid: 'Invalid email format',
    messageMin: `Message must be at least ${VALIDATION_RULES.message.min} characters`,
    messageMax: `Message must be less than ${VALIDATION_RULES.message.max} characters`,
    allFieldsRequired: 'Please fill in all fields',
  },
  es: {
    nameMin: `El nombre debe tener al menos ${VALIDATION_RULES.name.min} caracteres`,
    nameMax: `El nombre debe tener menos de ${VALIDATION_RULES.name.max} caracteres`,
    emailInvalid: 'Formato de correo inválido',
    messageMin: `El mensaje debe tener al menos ${VALIDATION_RULES.message.min} caracteres`,
    messageMax: `El mensaje debe tener menos de ${VALIDATION_RULES.message.max} caracteres`,
    allFieldsRequired: 'Por favor completa todos los campos',
  },
} as const;

// Zod schema for contact form validation
export const contactSchema = z.object({
  name: z.string()
    .min(VALIDATION_RULES.name.min, { message: VALIDATION_MESSAGES.en.nameMin })
    .max(VALIDATION_RULES.name.max, { message: VALIDATION_MESSAGES.en.nameMax }),
  email: z.email({ message: VALIDATION_MESSAGES.en.emailInvalid }),
  message: z.string()
    .min(VALIDATION_RULES.message.min, { message: VALIDATION_MESSAGES.en.messageMin })
    .max(VALIDATION_RULES.message.max, { message: VALIDATION_MESSAGES.en.messageMax }),
});

// Schema with Spanish messages
export const contactSchemaEs = z.object({
  name: z.string()
    .min(VALIDATION_RULES.name.min, { message: VALIDATION_MESSAGES.es.nameMin })
    .max(VALIDATION_RULES.name.max, { message: VALIDATION_MESSAGES.es.nameMax }),
  email: z.email({ message: VALIDATION_MESSAGES.es.emailInvalid }),
  message: z.string()
    .min(VALIDATION_RULES.message.min, { message: VALIDATION_MESSAGES.es.messageMin })
    .max(VALIDATION_RULES.message.max, { message: VALIDATION_MESSAGES.es.messageMax }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
