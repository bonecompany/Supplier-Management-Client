import { z } from "zod";


const formSchema = z.object({
    name: z.string().min(3, "Name must be at least three characters long."),
    boneId: z.string().min(1, "Bone ID is required."),
    address: z.string().min(5, "Address must be at least five characters long"),
    mobile: z
        .string()
        .regex(/^\d{10}$/, "Mobile number must be 10 digits."),
    location: z.string().min(3, "Location must be at least three characters long."),
    gst: z
        .string()
        // .regex(/^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1})$/, "Invalid GST number format.")
        .optional(),
    accountNumber: z
        .string()
        .regex(/^\d{9,18}$/, "Account number must be between 9 and 18 digits."),
    state: z.string().min(1, "State is required."),
    remarks: z.string().optional(),
    rdb: z.string().min(1, "RDB is required."),
    ifcs: z
        .string()
        .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format."),
    type: z.enum([
        "Daily Collection",
        "Alternative Day Collection",
        "Barrel Collection",
        "Lease Plantation",
        "Slaughter Plantation",
    ], {
        errorMap: () => ({ message: "Supplier type is required." }),
    }),
});

export { formSchema };
