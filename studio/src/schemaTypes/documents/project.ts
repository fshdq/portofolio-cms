import {DocumentIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary / Excerpt',
      type: 'text',
      description: 'Short summary emphasizing Product Thinking and impact (1–2 sentences).',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            }),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'role',
      title: 'Your role',
      type: 'string',
      description: 'e.g. Product Designer — lead UX, research, prototyping',
    }),
    defineField({
      name: 'team',
      title: 'Team / collaborators',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    // The challange: headline, narrative
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      description: 'Describe the problem you were trying to solve, user needs, and project goals.',
    }),
    // Product Thinking section: headline, narrative, gallery
    defineField({
      name: 'productThinking',
      title: 'Product Thinking',
      type: 'object',
      description: 'Narrative: hypothesis, user needs, success criteria, constraints. Use headings for structure.',
      fields: [
        {name: 'headline', title: 'Headline', type: 'string'},
        {name: 'content', title: 'Content', type: 'blockContent'},
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {name: 'caption', type: 'string', title: 'Caption'},
                {name: 'alt', type: 'string', title: 'Alternative text'},
              ],
            },
          ],
        },
      ],
    }),

    // Process: headline, narrative, gallery
    defineField({
      name: 'process',
      title: 'Process',
      type: 'object',
      description: 'Step-by-step writeup of process: research, synthesis, ideation, prototyping, testing.',
      fields: [
        {name: 'headline', title: 'Headline', type: 'string'},
        {name: 'content', title: 'Content', type: 'blockContent'},
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {name: 'caption', type: 'string', title: 'Caption'},
                {name: 'alt', type: 'string', title: 'Alternative text'},
              ],
            },
          ],
        },
      ],
    }),
    // Impact: outcomes and metrics
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Impact summary', type: 'text'},
        {
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', title: 'Label', type: 'string'},
                {name: 'value', title: 'Value', type: 'string', description: 'e.g. +25% conversion'},
                {name: 'source', title: 'Source / note', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'caption', type: 'string', title: 'Caption'},
            {name: 'alt', type: 'string', title: 'Alternative text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'prototypeUrl',
      title: 'Prototype URL',
      type: 'url',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External / live URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      role: 'role',
      date: 'date',
      media: 'coverImage',
    },
    prepare({title, role, date, media}) {
      const subtitle = [role, date && `on ${format(parseISO(date), 'LLL d, yyyy')}`]
        .filter(Boolean)
        .join(' — ')
      return {title, subtitle, media}
    },
  },
})

export default project
