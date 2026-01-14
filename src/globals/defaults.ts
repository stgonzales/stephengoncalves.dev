import { GlobalConfig } from "payload";

export const defaults: GlobalConfig = {
    slug: 'defaults',
    label: 'Defaults',
    access: {
      read: () => true,
      readDrafts: () => true,
    },
    fields: [
      {
        name: 'personalDetails',
        label: 'Personal Details',
        type: 'group',
        fields: [
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
          },
          {
            name: 'role',
            label: 'Role',
            type: 'text',
            required: true,
          },
          {
            name: 'location',
            label: 'Location',
            type: 'text',
            required: true,
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
          },
          {
            name: 'phone',
            label: 'Phone',
            type: 'number',
            required: true,
          },
        ]
      },
      {
        name: 'socilaLinks',
        label: 'Socal Links',
        type: 'group',
        fields: [
          {
            name: 'handlers',
            label: 'Handlers',
            type: 'array',
            fields: [
              {
                name: 'name',
                label: 'Name',
                type: 'text',
                required: true,
              },
              {
                name: 'handler',
                label: 'Handler',
                type: 'text',
                required: true,
              },
              {
                name: 'icon',
                label: 'Icon',
                type: 'select',
                required: true,
                options: [
                  { label: 'GitHub', value: 'github' },
                  { label: 'LinkedIn', value: 'linkedin' },
                  { label: 'X', value: 'x' },
                ],
              }
            ]
          }
        ]
      }
    ]
  }