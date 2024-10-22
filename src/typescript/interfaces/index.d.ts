import { FormSchema } from "@/lib/schema";

export interface FormSTProps {
  type: "create" | "update";
  data?: FormSchema;
}