import { z } from "zod";
import { futureOrTodayDateSchema } from "./common.schemas";

export const promotionSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title cannot exceed 100 characters"),
    sale_price: z
      .number({
        required_error: "Sale price is required",
        invalid_type_error: "Sale price must be a valid number",
      })
      .positive("Sale price must be greater than 0"),
    original_price: z
      .number({
        required_error: "Original price is required",
        invalid_type_error: "Original price must be a valid number",
      })
      .positive("Original price must be greater than 0"),
    category: z.enum(["flash", "weekend", "international", "promo"], {
      required_error: "Category is required",
    }),
    valid_until: futureOrTodayDateSchema,
    image_url: z
      .string()
      .trim()
      .url("Must be a valid URL")
      .or(z.literal(""))
      .optional(),
    destination_code: z
      .string()
      .trim()
      .regex(/^[A-Za-z]{3}$/, "Destination code must be exactly 3 letters")
      .toUpperCase(),
    destination_city: z
      .string()
      .trim()
      .min(2, "Destination city must be at least 2 characters")
      .max(50, "Destination city cannot exceed 50 characters")
      .regex(/^[A-Za-z\s]+$/, "Destination city can only contain letters and spaces"),
  })
  .refine((data) => data.original_price >= data.sale_price, {
    message: "Original price must be greater than or equal to sale price",
    path: ["original_price"],
  });

export type PromotionFormValues = z.infer<typeof promotionSchema>;
