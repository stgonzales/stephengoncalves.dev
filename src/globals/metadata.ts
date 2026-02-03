import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const metadata: GlobalConfig = {
    slug: 'metadata',
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'seo',
        label: 'SEO',
        type: 'group',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
          }
        ],
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