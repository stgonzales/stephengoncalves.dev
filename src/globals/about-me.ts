import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const aboutMe: GlobalConfig = {
    slug: 'about-me',
    label: 'About Me',
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'content',
        label: 'Content',
        type: 'textarea',
        required: true,
        localized: true,
      },
    ],
    hooks: {
      afterChange: [
        async () => {
          revalidatePath('/');
        }
      ]
    }
  }